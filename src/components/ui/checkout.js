import React, { Component, useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Row, Col, Form, Button, Card, Spinner, Modal } from 'react-bootstrap';
import axios from 'axios';
import config from '../../services/config.js';
// import Web3 from 'web3';
import { ethers } from "ethers";
import moment from 'moment';
import { Check, InfoCircleFill } from 'react-bootstrap-icons';

// const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
// web3.eth.getAccounts().then(console.log);

const abi = [
	// "setIntervalDetails(uint256 _intervalStartUnixSeconds, uint256 _intervalLengthSeconds)",
	"function ownerOf(uint256 tokenId) view returns (address)",
	"function owner() public view returns (address)",
	"function basePriceUSD() public view returns (uint64)",
	"function priceModifierHashCount() public view returns (int64)",
	"function priceModifierTotalMintedCount() public view returns (int64)",
	"function priceModifierIntervalCount() public view returns (int64)",
	"function intervalLengthSeconds() public view returns (uint64)",
	"function intervalStartUnixSeconds() public view returns (uint64)",
	"function takeOwnership() public",
	"function purchase(uint256 _order, uint256 gasMoney) external payable"
]

function Checkout(props) {
	let [ walletConnected, setIsWalletConnected ] = useState(false);
	let [ provider, setProvider ] = useState(null);
	let [ loadingCheckout, setLoadingCheckout ] = useState(false);
    let [ modalDetails, setModalDetails ] = useState({});


	useEffect(() => {
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			setProvider(provider);
		}
	}, []);

	useEffect(() => {
		let f = async () => {
			if (!provider) { return; }
			setIsWalletConnected(await provider.listAccounts() > 0);
		};
		f();
	}, [provider]);


    let handleClose = () => {
        if (modalDetails.onClose) {
            modalDetails.onClose();
        }
        setModalDetails({});
    }

	let handleConnectWallet = async (e) => {
		try {
			await window.ethereum.request({ method: 'eth_requestAccounts' });
			setIsWalletConnected(true);
		} catch (e) {
			console.log("Error requesting accounts", e);
		}
	};

	let handleCheckout = async (e) => {
		setLoadingCheckout(true);
		try {
			let expirationTime = moment(props.order.ExpiresAt);
			if (expirationTime.isBefore(moment())) {
				setModalDetails({
                    title: "That order has expired",
                    message: "That order has expired, try recreating the NFT you are trying to purchase",
                    onClose: () => {
                        props.clearOrder();
                    }
                });
                return;
			} 

			let signer = provider.getSigner();
			let contractClient = new ethers.Contract(config.contractAddr, abi, provider);
			let contractWithSigner = contractClient.connect(signer);
            const trxn = await contractWithSigner.purchase(ethers.BigNumber.from(`0x${props.order.OrderID.replaceAll("-", "")}`), ethers.BigNumber.from(props.order.PriceDetails.GasFee), {value: ethers.BigNumber.from(props.order.TotalPriceInWei+"")});
            
            // this is ugly but IDGAF
            try {
                // TODO: this is fine, but the real source of truth should come from watching the logs of the Purchase function
                await axios.post(`${config.apiHost}/api/v1/mint/${props.order.OrderID}`, {
                    "OrderID": props.order.OrderID,
                    "PaymentTransactionID": trxn.hash,
                    "DestinationAddress": trxn.from,
                    "NFTMeta": props.nftMeta
                });
            } catch (e) {
                console.log("Error finishing executing request to mint", e);
                setModalDetails({
                    title: "Uh oh!",
                    message: "Something went wrong, but we'll get your NFT minted either way. Please contact me for technical assistance."
                });
                props.clearOrder();
                return
            }

            setModalDetails({
                title: "Success!",
                message: "Thank you! You'll have a newly minted NFT available for your pleasure soon.",
                onClose: () => {
                    props.clearOrder();
                    props.handleDone();
                }
            });
		} catch (e) {
			console.log("Error executing transaction", e);
			setModalDetails({
                title: "Uh oh!",
                message: "Hmm, it looks like we ran into some trouble processing this request",
            onClose: () => {
                    props.clearOrder();
                }
            });
		}
		setLoadingCheckout(false);
	};

	return (
		<>
            <div>
                <hr style={{marginTop:"30px", marginBottom:"30px"}}></hr>
                <Row>
                    <Col className="col-md-6 col-12">
                        <Form>
                            <Form.Group controlId="totalPrice">
                                <ReactTooltip
                                    multiline={true}>
                                        {props.order.PriceDetails.LineItems.map((li, idx) => {
                                            return <div key={idx}>{li}</div>
                                        })}
                                </ReactTooltip>
                                    <Form.Label><h5>Total Price</h5></Form.Label><InfoCircleFill data-tip="price-details" style={{marginLeft:"10px"}}></InfoCircleFill>
                                    <Form.Control readOnly={true} type="text" value={`${props.order.etherValue} ETH - ($${props.order.usdValue} + gas)`} />
                            </Form.Group>
                            <Form.Group controlId="connectWallet">
                            <Button disabled={walletConnected} variant="primary" onClick={handleConnectWallet}>
                                1. Connect Wallet
                            </Button>
                            { props.isCounterfeit ? <Form.Text className="text-muted">
                                By submitting this transaction, you are acknowledging that you understand that are purchasing a "copy" of an NFT from a different contract.
                                The NFT you will receive does not pretend to be the original and service of contract metadata could potentially be hindered by the other party.
                                You are also acknowledging that this platform is someone's side project, and therefore support for any technical issues is likely to be slow but earnest.
                            </Form.Text>
                            : <Form.Text className="text-muted">
                                By submitting this transaction, you are acknowledging that this platform is someone's side project, and therefore support for any technical issues is likely to be slow but earnest.
                            </Form.Text> }
                            </Form.Group>
                            <Form.Group>
                            <Button disabled={!walletConnected || loadingCheckout} variant="primary" onClick={handleCheckout}>
                                { loadingCheckout ? <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                /> : "2. Finish Transaction to Mint NFT" }
                            </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

            </div>

			<Modal show={!!modalDetails.title} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{modalDetails.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{modalDetails.message}</Modal.Body>
				<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}


export default Checkout;


// {
// 	"OrderID": "50bc8957-216d-4974-9f62-e7646e412071",
// 	"NFTID": "293285d3-8467-40c8-a8cf-d0e3b614c676",
// 	"Hash": "ec4955ca-b045-4d8b-8da1-56787ea0a74b",
// 	"SubtotalInWei": 100000000000000000,
// 	"EstimatedGasCost": 300000000000000,
// 	"TotalPriceInWei": 100300000000000000
//   }