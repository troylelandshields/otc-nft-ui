import React, { Component, useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import NFTMeta from '../ui/nftmeta.js';
import axios from 'axios';
import config from '../../services/config.js';
// import Web3 from 'web3';
import { ethers } from "ethers";

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
	let [ isCheckingOut, setIsCheckingOut ] = useState(false);
	let [ walletConnected, setIsWalletConnected ] = useState(false);
	let [ order, setOrder ] = useState(null);
	let [ provider, setProvider ] = useState(null);


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

	let previewCounterfeit = async (e) => {
		e.preventDefault();
		console.log(counterfeitTokenId, counterfeitContractAddr);

		try {
			let resp = await axios.post(`${config.apiHost}/api/v1/preview`, {
				"Type": "contract",
				"ContractAddr": counterfeitContractAddr,
				"CounterfeitTokenID": counterfeitTokenId
			});

			let o = resp.data;

			const etherValue =ethers.utils.formatEther(o.TotalPriceInWei+"");
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
		setCounterfeitTokenId("")
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
				"DestinationAddress": trxn.from
			});

			alert("Success! You'll have a newly minted NFT shortly");
			setCounterfeitContractAddr("");
			setCounterfeitTokenId("");
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
					<Form.Control disabled={isCheckingOut} value={counterfeitContractAddr} onChange={(e) => setCounterfeitContractAddr(e.target.value)} type="text" placeholder="Copy an ERC721 contract's ethereum address" />
					<Form.Text className="text-muted">
						If this is wrong I don't want to be right.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="counterfeitTokenId">
					<Form.Label>Token ID</Form.Label>
					<Form.Control disabled={isCheckingOut} value={counterfeitTokenId} onChange={(e) => setCounterfeitTokenId(e.target.value)} type="text" placeholder="Input the Token ID you want" />
				</Form.Group>

				{
					!isCheckingOut ? 
					<Button variant="primary" onClick={previewCounterfeit}>
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