import React, { Component, useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import NFTMeta from '../ui/nftmeta.js';
import axios from 'axios';
import config from '../../services/config.js';
// import Web3 from 'web3';
import { ethers } from "ethers";
import moment from 'moment';
import { InfoCircleFill } from 'react-bootstrap-icons';

// const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
// web3.eth.getAccounts().then(console.log);

// const ethEnabled = () => {
// 	if (window.ethereum) {
// 	  window.web3 = new Web3(window.ethereum);
// 	  window.ethereum.enable();
// 	  return true;
// 	}
// 	return false;
// }

function Custom(props) {
	// https://testnets.opensea.io/assets/0x99bae45fb8abab73d8969fad837f5287ec294eea/1

	let zeroNFTMeta = () => ({
		image: "",
		external_url:"",
		youtube_url:"",
		animation_url:"",
		name: "",
		description: "",
		attributes:[]
	});

	let [ nftMeta, setNFTMeta ] = useState(zeroNFTMeta());
	let [ checkoutReady, setIsCheckoutReady ] = useState(false);
	let [ isCheckingOut, setIsCheckingOut ] = useState(false);
	let [ walletConnected, setIsWalletConnected ] = useState(false);
	let [ order, setOrder ] = useState(null);
	let [ provider, setProvider ] = useState(null);


	useEffect(() => {
		if (nftMeta.name) {
			setIsCheckoutReady(true);
            return;
		}
		setIsCheckoutReady(false);
	}, [nftMeta]);

	useEffect(() => {
		setIsCheckingOut(!!order);
	}, [order]);


	useEffect(() => {
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			setProvider(provider);
		}
	}, [order]);

	useEffect(() => {
		let f = async () => {
			if (!provider) { return; }
			setIsWalletConnected(await provider.listAccounts() > 0);
		};
		f();
	}, [provider]);

	let previewCustom = async (e) => {
		e.preventDefault();
		console.log(nftMeta);

		try {
			let resp = await axios.post(`${config.apiHost}/api/v1/preview`, {
				"Type": "custom",
                "NFTMeta": nftMeta,
			});

			let o = resp.data;

			if (o.NFTMeta) {
				setNFTMeta(o.NFTMeta);
			}

			const etherValue = ethers.utils.formatEther(o.TotalPriceInWei+"");
			console.log(etherValue);

			o.etherValue = etherValue;

			o.usdValue = o.PriceDetails.PriceUSCents / 100;

			setOrder(o);

		} catch (e) {
			console.log("Error occurred when attempting to go to checkout.", e);
			alert("It looks like that NFT isn't yet supported by OTC; we're working on it, but in the meantime try another one.")
		}
	};

	let handleClear = (e) => {
		e.preventDefault();
		setOrder(null);
	};

	let handleConnectWallet = async (e) => {
		try {
			await window.ethereum.request({ method: 'eth_requestAccounts' });
			setIsWalletConnected(true);
		} catch (e) {
			console.log("Error requesting accounts", e);
		}
	};

	let handleCheckout = async (e) => {
		try {
			let signer = provider.getSigner();
			const trxn = await signer.sendTransaction({
				to: order.OTCMarketContractAddr,
				value: ethers.BigNumber.from(order.TotalPriceInWei+"")
			});

			await axios.post(`${config.apiHost}/api/v1/mint/${order.OrderID}`, {
				"OrderID": order.OrderID,
				"PaymentTransactionID": trxn.hash,
				"DestinationAddress": trxn.from,
				"NFTMeta": nftMeta
			});

			alert("Success! You'll have a newly minted NFT shortly");
			setNFTMeta(zeroNFTMeta());
			setOrder(null);
		} catch (e) {
			console.log("Error finishing transaction", e);
			alert("Uhhh, something went wrong... contact me about getting this worked out.")
		}
	};

	return (
		<>

			<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginTop:"0px"}} />
				<h1 class="display-5">NFT the Web</h1> 
			<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px"}} />
			<Row>
				<Col className="col-md-4">
					<Card style={{minHeight: "100%", boxShadow: "1px 1px 4px #5f3be3", marginTop:"20px"}}>
                        <Card.Body>
                            <Card.Title>Step 1</Card.Title>
                            <Card.Text>
								<a href="https://bing.com" target="_blank" rel="noreferrer">Find some content</a> you love or want to sell or control.
                            </Card.Text>
                        </Card.Body>
					</Card>
				</Col>
				<Col className="col-md-4">
					<Card style={{minHeight: "100%", boxShadow: "1px 1px 4px #5f3be3", marginTop:"20px"}}>
                        <Card.Body>
                            <Card.Title>Step 2</Card.Title>
                            <Card.Text>
								Paste the details into the form below.
                            </Card.Text>
                        </Card.Body>
					</Card>
				</Col>
				<Col className="col-md-4">
					<Card style={{minHeight: "100%", boxShadow: "1px 1px 4px #5f3be3", marginTop:"20px"}}>
                        <Card.Body>
                            <Card.Title>Step 3</Card.Title>
                            <Card.Text>
								Inform the content creator you now own their workproduct. <span style={{opacity:"50%"}}>See our FAQs for a handy form letter</span>
                            </Card.Text>
                        </Card.Body>
					</Card>
				</Col>
			</Row>  

			<Row style={{marginTop:"20px"}}>
				<Col md={{ span: 10, offset: 1    }}>
					<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginBottom:"15px", marginTop:"35px"}}/>
					<Form>
						{ !order ? <NFTMeta meta={nftMeta} editable={!isCheckingOut} changes={(v) => setNFTMeta(v)}></NFTMeta> : <NFTMeta meta={order.NFTMeta} editable={false} changes={(v) => setNFTMeta(v)}></NFTMeta> }
						{
							!isCheckingOut ? 
							<Button variant="primary" onClick={previewCustom} disabled={!checkoutReady}>
								Go to Checkout
							</Button>
							: 				
							<Button variant="default" onClick={handleClear}>
								Edit
							</Button>
						}
					</Form>

					{ order ?
						<div>
							<hr style={{marginTop:"30px", marginBottom:"30px"}}></hr>
							<Row>
								<Col className="col-md-6 col-12">
									<Form>
										<Form.Group controlId="totalPrice">
											<ReactTooltip
												multiline={true}>
													{order.PriceDetails.LineItems.map((li, idx) => {
														return <div key={idx}>{li}</div>
													})}
											</ReactTooltip>
												<Form.Label><h5>Total Price</h5></Form.Label><InfoCircleFill data-tip="price-details" style={{marginLeft:"10px"}}></InfoCircleFill>
												<Form.Control readOnly={true} type="text" value={`${order.etherValue} ETH - ($${order.usdValue} + gas)`} />
										</Form.Group>
										<Form.Group controlId="connectWallet">
										<Button disabled={walletConnected} variant="primary" onClick={handleConnectWallet}>
											1. Connect Wallet
										</Button>
										<Form.Text className="text-muted">
											By submitting this transaction, you are acknowledging that you understand that are purchasing a "copy" of an NFT from a different contract. This NFT does not pretend to be the original and service of contract metadata could potentially be hindered by the other party. You are also acknowledging that this platform is someone's side project, and therefore support for any technical issues is likely to be slow but earnest.
										</Form.Text>
										</Form.Group>
										<Form.Group>
										<Button disabled={!walletConnected} variant="primary" onClick={handleCheckout}>
											2. Finish Transaction to Mint NFT
										</Button>
										</Form.Group>
									</Form>
								</Col>
							</Row>

						</div>
						: null
					}

				</Col>
			</Row>
		</>
	);
}


export default Custom;


// {
// 	"OrderID": "50bc8957-216d-4974-9f62-e7646e412071",
// 	"NFTID": "293285d3-8467-40c8-a8cf-d0e3b614c676",
// 	"Hash": "ec4955ca-b045-4d8b-8da1-56787ea0a74b",
// 	"SubtotalInWei": 100000000000000000,
// 	"EstimatedGasCost": 300000000000000,
// 	"TotalPriceInWei": 100300000000000000
//   }