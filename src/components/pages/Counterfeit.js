import React, { Component, useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Row, Col, Form, Button, Card, Spinner } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
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


function Counterfeit(props) {
	// https://testnets.opensea.io/assets/0x99bae45fb8abab73d8969fad837f5287ec294eea/1
	let { search } = useLocation();
	const history = useHistory()

	const query = new URLSearchParams(search);
	const contractParam = query.get('contract');
	const tokenParam = query.get('token');
	const includeRugPullParam = query.get('rugpull');

	let [ counterfeitContractAddr, setCounterfeitContractAddr ] = useState(contractParam);
	let [ counterfeitTokenId, setCounterfeitTokenId ] = useState(tokenParam);
	let [ includeRugPull, setIncludeRugPull ] = useState(!!includeRugPullParam);
	let [ rugPullDate, setRugPullDate ] = useState(moment().add(1, "month").format("YYYY-MM-DD"));
	let [ rugPullTime, setRugPullTime ] = useState("12:00");
	let [ checkoutReady, setIsCheckoutReady ] = useState(false);
	let [ isCheckingOut, setIsCheckingOut ] = useState(false);
	let [ walletConnected, setIsWalletConnected ] = useState(false);
	let [ order, setOrder ] = useState(null);
	let [ provider, setProvider ] = useState(null);
	let [ rugPullMeta, setRugPullMeta ] = useState(null);
	let [ quickloadPreview, setQuickloadPreview ] = useState(contractParam && tokenParam);
	let [ loadingPreview, setLoadingPreview ] = useState(false);
	let [ loadingCheckout, setLoadingCheckout ] = useState(false);

	useEffect(() => {
		if (!checkoutReady) {
			return;
		}

		if (quickloadPreview) {
			setQuickloadPreview(false);
			previewCounterfeit();
		}

	}, [checkoutReady])

	useEffect(() => {
		const params = new URLSearchParams()
		if (counterfeitContractAddr) {
			params.append("contract", counterfeitContractAddr)
		} 
		if (counterfeitTokenId) {
			params.append("token", counterfeitTokenId)
		}
		if (includeRugPull) {
			params.append("rugpull", true)
		}
		history.push({search: params.toString()})


		let hasTokenDetails = !!counterfeitContractAddr && !!counterfeitTokenId;
		if (includeRugPull) {
			setIsCheckoutReady(hasTokenDetails && !!rugPullDate && !!rugPullTime);
			return;
		}
		setIsCheckoutReady(hasTokenDetails);
	}, [counterfeitContractAddr, counterfeitTokenId, includeRugPull, rugPullDate, rugPullTime]);

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

	let parseAndSetCounterfeitAddr = (val) => {
		let parts = val.split("assets");
		if (!parts || parts.length !== 2) {
			setCounterfeitContractAddr(val);
			return
		}
		
		let details = parts[1].split("/");
		if (!details || details.length !== 3) {
			setCounterfeitContractAddr(val);
			return
		}

		setCounterfeitContractAddr(details[1]);
		setCounterfeitTokenId(details[2]);
	}

	let previewCounterfeit = async (e) => {
		!!e && e.preventDefault();
		setLoadingPreview(true);
		console.log(counterfeitTokenId, counterfeitContractAddr);

		try {
			let rugPullDateTime;
			if (includeRugPull) {
				rugPullDateTime = moment(rugPullDate + " " + rugPullTime).format();
			}

			let resp = await axios.post(`${config.apiHost}/api/v1/preview`, {
				"Type": "contract",
				"ContractAddr": counterfeitContractAddr,
				"CounterfeitTokenID": counterfeitTokenId,
				"RugPullTime": rugPullDateTime,
			});

			let o = resp.data;

			const etherValue = ethers.utils.formatEther(o.TotalPriceInWei+"");
			console.log(etherValue);

			o.etherValue = etherValue;

			o.usdValue = o.PriceDetails.PriceUSCents / 100;

			setOrder(o);

		} catch (e) {
			console.log("Error occurred when attempting to go to checkout.", e);
			alert("It looks like that NFT isn't yet supported by OTC; we're working on it, but in the meantime try another one.")
		}
		setLoadingPreview(false);
	};

	let handleClear = (e) => {
		e.preventDefault();
		setCounterfeitContractAddr("");
		setCounterfeitTokenId("");
		setIncludeRugPull(false);
		setOrder(null);
		setRugPullMeta(null);
	};

	let handleEdit = (e) => {
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
		setLoadingCheckout(true);
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
				"NFTMeta": rugPullMeta
			});

			alert("Success! You'll have a newly minted NFT shortly");
			setCounterfeitContractAddr("");
			setCounterfeitTokenId("");
			setIncludeRugPull(false);
			setRugPullMeta(null);
			setOrder(null);
		} catch (e) {
			console.log("Error finishing transaction", e);
			alert("Uhhh, something went wrong... contact me about getting this worked out.")
		}
		setLoadingCheckout(false);
	};

	return (
		<div>
			<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginTop:"0px"}} />
                <h1 class="display-5">Counterfeit</h1> <h6 style={{opacity:"50%"}}>This is a pun</h6>
            <hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px"}} />
			<Row>
				<Col className="col-md-4 col-12" style={{marginTop:"15px"}}>
					<Card style={{minHeight: "100%", boxShadow: "1px 1px 4px #5f3be3", marginTop:"15px"}}>
                        <Card.Body>
                            <Card.Title>Step 1</Card.Title>
                            <Card.Text>
							<a href="https://testnets.opensea.io/assets" target="_blank" rel="noreferrer">Find an NFT</a> you love or want to sell.
                            </Card.Text>
                        </Card.Body>
					</Card>
				</Col>
				<Col className="col-md-4 col-12" style={{marginTop:"15px"}}>
					<Card style={{minHeight: "100%", boxShadow: "1px 1px 4px #5f3be3", marginTop:"15px"}}>
                        <Card.Body>
                            <Card.Title>Step 2</Card.Title>
                            <Card.Text>
								Paste the URL or contract address into the text box below.
                            </Card.Text>
                        </Card.Body>
					</Card>
				</Col>
				<Col className="col-md-4 col-12" style={{marginTop:"15px"}}>
					<Card style={{minHeight: "100%", boxShadow: "1px 1px 4px #5f3be3", marginTop:"15px"}}>
                        <Card.Body>
                            <Card.Title>Step 3</Card.Title>
                            <Card.Text>
								Profit.
                            </Card.Text>
                        </Card.Body>
					</Card>
				</Col>
			</Row>  

			<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginTop:"45px"}}/>

			<Form>
				<Form.Group controlId="counterfeitContractAddr">
					<Form.Label>Contract Address</Form.Label>
					<Form.Control disabled={isCheckingOut} value={counterfeitContractAddr} onChange={(e) => parseAndSetCounterfeitAddr(e.target.value)} type="text" placeholder="Paste a link from OpenSea or any ERC721 contract's ethereum address" />
					<Form.Text className="text-muted">
						If this is wrong I don't want to be right.
					</Form.Text>
				</Form.Group>

				{ counterfeitContractAddr ? <>
					<Form.Group controlId="counterfeitTokenId">
						<Form.Label>Token ID</Form.Label>
						<Form.Control disabled={isCheckingOut} value={counterfeitTokenId} onChange={(e) => setCounterfeitTokenId(e.target.value)} type="text" placeholder="Input the Token ID you want" />
					</Form.Group> 

					<Row>
						<Col className="col-md-4 col-12">
							<Form.Group controlId="includeRugPull">
								<Form.Check disabled={isCheckingOut} checked={includeRugPull} onChange={(e) => setIncludeRugPull(e.target.checked)} type="checkbox" label="Include Rug Pull" />
								<Form.Text className="text-muted">
									A rugpull will change the metadata of the contract on a certain date; let's you do some pretty classic pranks on your friends. Be aware that this is associated with an increased cost.
								</Form.Text>
							</Form.Group>
						</Col>
						{ includeRugPull ? <>
								<Col className="col-md-4 col-12">
									<Form.Group controlId="rugPullTime">
										<Form.Control disabled={isCheckingOut} value={rugPullDate} onChange={(e) => setRugPullDate(e.target.value)} type="date" />
									</Form.Group>
								</Col>
								<Col className="col-md-4 col-12">
									<Form.Group controlId="rugPullTime">
										<Form.Control disabled={isCheckingOut} value={rugPullTime} onChange={(e) => setRugPullTime(e.target.value)} type="time" />
									</Form.Group>
								</Col>
							</>
						: null }
					</Row>
					</>
					: null
				}

				{
					!isCheckingOut ? 
					<Button variant="primary" onClick={previewCounterfeit} disabled={!checkoutReady || loadingPreview}>
						{ loadingPreview ? <Spinner
							as="span"
							animation="grow"
							size="sm"
							role="status"
							aria-hidden="true"
						/> : "Preview" }
					</Button>
					: 	
					<>
					<Button variant="primary" onClick={handleEdit}>
						Edit
					</Button>			
					<Button variant="default" onClick={handleClear}>
						Clear
					</Button>
					</>
				}
			</Form>

			<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px"}} />

			{ order ?
				<div>
					<hr style={{marginTop:"30px", marginBottom:"30px"}}></hr>
					<Row>
						<Col className="col-md-6">
							<h3>
								Contract Details
							</h3>
							<NFTMeta meta={order.NFTMeta}></NFTMeta>
						</Col>
						{ includeRugPull ? <Col className="col-md-6">
							<h3>
								Rug Pull Details
							</h3>
							<NFTMeta meta={order.NFTMeta} editable={true} changes={(v) => setRugPullMeta(v)}></NFTMeta>
						</Col> : null }
					</Row>


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
									By submitting this transaction, you are acknowledging that you understand that are purchasing a "copy" of an NFT from a different contract. This NFT does not pretend to be the original and service of contract metadata could potentially be hindered by the other party. You are also acknowledging that this platform is someone's interactive art side-project, and therefore support for any technical issues is likely to be slow but earnest.
								</Form.Text>
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
				: null
			}

		</div>
	);
}


export default Counterfeit;


// {
// 	"OrderID": "50bc8957-216d-4974-9f62-e7646e412071",
// 	"NFTID": "293285d3-8467-40c8-a8cf-d0e3b614c676",
// 	"Hash": "ec4955ca-b045-4d8b-8da1-56787ea0a74b",
// 	"SubtotalInWei": 100000000000000000,
// 	"EstimatedGasCost": 300000000000000,
// 	"TotalPriceInWei": 100300000000000000
//   }