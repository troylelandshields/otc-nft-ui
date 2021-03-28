import React, { Component, useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import NFTMeta from '../ui/nftmeta.js';
import axios from 'axios';
import config from '../../services/config.js';
// import Web3 from 'web3';
import { ethers } from "ethers";
import moment from 'moment';

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

	let [ counterfeitContractAddr, setCounterfeitContractAddr ] = useState("");
	let [ counterfeitTokenId, setCounterfeitTokenId ] = useState("");
	let [ includeRugPull, setIncludeRugPull ] = useState(false);
	let [ rugPullDate, setRugPullDate ] = useState(moment().add(1, "month").format("YYYY-MM-DD"));
	let [ rugPullTime, setRugPullTime ] = useState("12:00");
	let [ checkoutReady, setIsCheckoutReady ] = useState(false);
	let [ isCheckingOut, setIsCheckingOut ] = useState(false);
	let [ walletConnected, setIsWalletConnected ] = useState(false);
	let [ order, setOrder ] = useState(null);
	let [ provider, setProvider ] = useState(null);
	let [ rugPullMeta, setRugPullMeta ] = useState(null);


	useEffect(() => {
		let hasTokenDetails = !!counterfeitContractAddr && !!counterfeitTokenId;
		if (includeRugPull) {
			setIsCheckoutReady(hasTokenDetails && !!rugPullDate && !!rugPullTime);
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
		e.preventDefault();
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

			setOrder(o);

		} catch (e) {
			console.log("Error occurred when attempting to go to checkout.", e);
			alert("It looks like that NFT isn't yet supported by OTC; we're working on it, but in the meantime try another one.")
		}
	};

	let handleClear = (e) => {
		e.preventDefault();
		setCounterfeitContractAddr("");
		setCounterfeitTokenId("");
		setIncludeRugPull(false);
		setOrder(null);
		setRugPullMeta(null);
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
	};

	return (
		<div>
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
					<Button variant="primary" onClick={previewCounterfeit} disabled={!checkoutReady}>
						Go to Checkout
					</Button>
					: 				
					<Button variant="default" onClick={handleClear}>
						Clear
					</Button>
				}
			</Form>

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
					<Form>
						<Form.Group controlId="totalPrice">
							<Form.Label>Total Price</Form.Label>
							<Form.Control disabled type="text" value={order.etherValue + " ETH"} />
						</Form.Group>
						<Form.Group controlId="connectWallet">
						<Button disabled={walletConnected} variant="primary" onClick={handleConnectWallet}>
							1. Connect Wallet
						</Button>
						</Form.Group>
						<Form.Group>
						<Button disabled={!walletConnected} variant="primary" onClick={handleCheckout}>
							2. Finish Transaction to Mint NFT
						</Button>
						</Form.Group>
					</Form>

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