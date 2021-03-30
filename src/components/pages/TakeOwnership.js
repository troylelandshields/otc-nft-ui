import React, { Component, useState, useEffect } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../services/config.js';
import { ethers } from "ethers";
import moment from "moment";

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


function TakeOwnership(props) {
	let [ provider, setProvider ] = useState(null);
	let [ readProvider, setReadProvider ] = useState(null);
	let [ walletConnected, setIsWalletConnected ] = useState(false);
	let [ priceParams, setPriceParams ] = useState({});
	let [ isKeyTokenOwner, setIsKeyTokenOwner ] = useState(false);
	let [ contractClient, setContractClient ] = useState(null);


	useEffect(() => {
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			setProvider(provider);
		}

		const reader = new ethers.providers.EtherscanProvider(config.env, config.etherscanAPIKey);
        setReadProvider(reader);
	}, []);

	useEffect(() => {
        let f = async () => {
            if (!readProvider) { return ;}
            try {
                let readContract = new ethers.Contract(config.contractAddr, abi, readProvider);
                
				let basePrice = await readContract.basePriceUSD();
				let hashCountModifier = await readContract.priceModifierHashCount();
				let totalCountModifier = await readContract.priceModifierTotalMintedCount();
				let intervalCountModifier = await readContract.priceModifierIntervalCount();
				let intervalStartUnixSeconds = await readContract.intervalStartUnixSeconds();
				let intervalLengthSeconds = await readContract.intervalLengthSeconds();

				let intervalStartDate = moment.unix(intervalStartUnixSeconds);
				let intervalDuration = moment.duration(intervalLengthSeconds, "seconds").humanize(false); 

				setPriceParams({
					basePrice: basePrice.toNumber(),
					hashCountMutliplier: hashCountModifier.toNumber(),
					totalCountMultiplier: totalCountModifier.toNumber(),
					timeMultiplier: intervalCountModifier.toNumber(),
					intervalStartDate: intervalStartDate,
					intervalDuration: intervalDuration
				});
            } catch (e) {
                console.log("error trying to get base usd price", e)
            }
        };
        f();
    }, [readProvider]);

	useEffect(() => {
		let f = async () => {
			if (!provider) { return; }
			let accounts = await provider.listAccounts();
			setIsWalletConnected(accounts > 0);

			let contract = new ethers.Contract(config.contractAddr, abi, provider);
			setContractClient(contract);

			let nftContract = new ethers.Contract(config.nftAddr, abi, provider);

			let ownerOfKey = await nftContract.ownerOf(config.keyToken);

			for (let account of accounts) {
				if (account === ownerOfKey) {
					setIsKeyTokenOwner(true);
				}
			}
		};
		f();
	}, [provider]);

	let handleConnectWallet = async (e) => {
		try {
			await window.ethereum.request({ method: 'eth_requestAccounts' });
			setIsWalletConnected(true);
		} catch (e) {
			console.log("Error requesting accounts", e);
		}
	};

	let handleTakeOwnership = async (e) => {
		if (!isKeyTokenOwner) {
			alert("You are not the key token holder, but you can still try");
		} 

		let signer = provider.getSigner();
		let contractWithSigner = contractClient.connect(signer);

		try {
			await contractWithSigner.takeOwnership();
		}
		catch (e) {
			alert("Error occurred trying to take ownership");
			console.log(e);
		}
	}


	return (
        <>
            <hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginTop:"0px"}} />
                <h1 class="display-5">Own this Marketplace</h1>
            <hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px"}} />

			<Row>
				<Col className="col-md-4 col-12" style={{marginTop:"15px"}}>
					<Card style={{minHeight: "100%", boxShadow: "1px 1px 4px #5f3be3", marginTop:"15px"}}>
                        <Card.Body>
                            <Card.Title>Step 1</Card.Title>
                            <Card.Text>
								{/* TODO: this needs to be more dynamic based on the configs */}
								<a href={`https://testnets.opensea.io/assets/0x944bce254c9ac0c6b17a0206b889e1e4129752d9/${config.keyToken}`} target="_blank" rel="noreferrer">Buy the Key NFT that indicates who owns overthecounter.icu.</a>
                            </Card.Text>
                        </Card.Body>
					</Card>
				</Col>
				<Col className="col-md-4 col-12" style={{marginTop:"15px"}}>
					<Card style={{minHeight: "100%", boxShadow: "1px 1px 4px #5f3be3", marginTop:"15px"}}>
                        <Card.Body>
                            <Card.Title>Step 2</Card.Title>
                            <Card.Text>
								Click the take ownership button below. <span style={{opacity:"50%"}}>(The profits held by the contract will be released to the current owner).</span>
                            </Card.Text>
                        </Card.Body>
					</Card>
				</Col>
				<Col className="col-md-4 col-12" style={{marginTop:"15px"}}>
					<Card style={{minHeight: "100%", boxShadow: "1px 1px 4px #5f3be3", marginTop:"15px"}}>
                        <Card.Body>
                            <Card.Title>Step 3</Card.Title>
                            <Card.Text>
								Profit. <span style={{opacity:"50%"}}>(Literally. You will get the profits that this marketplace generates. Go read the smart contract if you must).</span>
                            </Card.Text>
                        </Card.Body>
					</Card>
				</Col>
			</Row>  
			<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginBottom:"15px", marginTop:"35px"}}/>
            <Row style={{marginTop:"25px"}}>
                <Col style={{marginLeft:"5px"}} md={{offset:1}}>
					<Form>
						<Row>
							<Button disabled={walletConnected} className="btn-primary btn-lg" onClick={handleConnectWallet}>
								1. Connect Wallet
							</Button>
						</Row>
						<Row style={{marginTop:"3px"}}>
							<Button className="btn-lg btn-danger" onClick={handleTakeOwnership}>
								2. Take Ownership
							</Button>
						</Row>
					</Form>
                </Col>
            </Row>  

			<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginBottom:"15px", marginTop:"35px"}}/>

			{ priceParams.basePrice && <Form>
				<h3 class="display-5">Only the owner can edit these values</h3>
				<Form.Group controlId="totalPrice">
					<Form.Label><h5>Base Price USD</h5></Form.Label>
					<Form.Control readOnly={true} type="text" value={`${priceParams.basePrice} dollars base price`} />
				</Form.Group>
				<Form.Group controlId="hashCountMultiplier">
					<Form.Label><h5>Price bump for each similar NFTs that has been minted on OTC</h5></Form.Label>
					<Form.Control readOnly={true} type="text" value={`${priceParams.hashCountMutliplier/100} additional dollar(s) for each matching NFT minted`} />
				</Form.Group>
				<Form.Group controlId="totalNFTSMultiplier">
					<Form.Label><h5>Price bump for each NFT that has been minted on OTC</h5></Form.Label>
					<Form.Control readOnly={true} type="text" value={`${priceParams.totalCountMultiplier/100} additional dollar(s) for each NFT minted`} />
				</Form.Group>

				<Form.Group controlId="totalPrice">
					<Form.Label><h5>Price bump for how much time has passed using the parameters below</h5></Form.Label>
					<Form.Control readOnly={true} type="text" value={`${priceParams.timeMultiplier / 100} additonial dollar(s) for each interval`} />
				</Form.Group>
				
				{ priceParams.intervalStartDate && <Row>
					<Col>
						<Form.Group controlId="intervalStartTime">
							<Form.Label><h5>Start date for calculating time-based price bump</h5></Form.Label>
							<Form.Control readOnly={true} type="date" value={`${priceParams.intervalStartDate.format("YYYY-MM-DD")}`} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="intervalLength">
							<Form.Label><h5>Duration of each price bump interval</h5></Form.Label>
							<Form.Control readOnly={true} type="text" value={`${priceParams.intervalDuration}`} />
						</Form.Group>
					</Col>
				</Row> }
			</Form> }
        </>
	);
}


export default TakeOwnership;
