import React, { Component, useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Row, Col, Form, Button, Card, Spinner, Modal } from 'react-bootstrap';
import NFTMeta from '../ui/nftmeta.js';
import Checkout from '../ui/checkout.js';
import axios from 'axios';
import config from '../../services/config.js';
// import Web3 from 'web3';
import { ethers } from "ethers";
import moment from 'moment';
import { InfoCircleFill } from 'react-bootstrap-icons';

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
	let [ order, setOrder ] = useState(null);
	let [ provider, setProvider ] = useState(null);
	let [ loadingPreview, setLoadingPreview ] = useState(false);


	useEffect(() => {
		if (nftMeta && nftMeta.name) {
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

	let previewCustom = async (e) => {
		setLoadingPreview(true);
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
		setLoadingPreview(false);
	};

	let handleClear = (e) => {
		e.preventDefault();
		setOrder(null);
	};

	return (
		<>

			<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginTop:"0px"}} />
				<h1 class="display-5">NFT the Web</h1> 
			<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px"}} />
			<Row>
				<Col className="col-md-4 col-12" style={{marginTop:"15px"}}>
					<Card style={{minHeight: "100%", boxShadow: "1px 1px 4px #5f3be3", marginTop:"15px"}}>
                        <Card.Body>
                            <Card.Title>Step 1</Card.Title>
                            <Card.Text>
								<a href="https://bing.com" target="_blank" rel="noreferrer">Find some content</a> you love or want to sell or control. <span style={{opacity:"50%"}}>Your friend's Twitter account, your favorite CSS library, a subreddit, facebook.com... Anything that has a URL</span>
                            </Card.Text>
                        </Card.Body>
					</Card>
				</Col>
				<Col className="col-md-4 col-12" style={{marginTop:"15px"}}>
					<Card style={{minHeight: "100%", boxShadow: "1px 1px 4px #5f3be3", marginTop:"15px"}}>
                        <Card.Body>
                            <Card.Title>Step 2</Card.Title>
                            <Card.Text>
								Paste the details into the form below.
                            </Card.Text>
                        </Card.Body>
					</Card>
				</Col>
				<Col className="col-md-4 col-12" style={{marginTop:"15px"}}>
					<Card style={{minHeight: "100%", boxShadow: "1px 1px 4px #5f3be3", marginTop:"15px"}}>
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
							<Button variant="primary" onClick={previewCustom} disabled={!checkoutReady || loadingPreview}>
								{ loadingPreview ? <Spinner
									as="span"
									animation="grow"
									size="sm"
									role="status"
									aria-hidden="true"
								/> : "Preview" }
							</Button>
							: 				
							<Button variant="default" onClick={handleClear}>
								Edit
							</Button>
						}
					</Form>

					{ order ? 
						<Checkout order={order} nftMeta={nftMeta} handleDone={() => setNFTMeta(zeroNFTMeta())} clearOrder={() => setOrder(null)}></Checkout>
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