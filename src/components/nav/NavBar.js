import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ethers } from "ethers";
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import config from '../../services/config.js';

const abi = [
	"function basePriceUSD() public view returns (uint256)",
    "function balances(uint256) public view returns (uint256)",
    "function seriesSupply() public view returns (uint256)",
    "function seriesMintedCount() public view returns (uint256)",
    "function seriesID() public view returns (uint256)"
]

function NavBar() {
    let [ readProvider, setReadProvider ] = useState(null);
    let [ currBasePrice, setCurrBasePrice ] = useState(null);
    let [ currOwnerBal, setCurrOwnerBal ] = useState(null);
    let [ seriesTotal, setSeriesTotal ] = useState(null);
    let [ seriesMinted, setSeriesMinted ] = useState(null);
    let [ seriesID, setSeriesID ] = useState(null);

    let sub = "";
    if (config.env) {
        sub = `${config.env}.`;
    }
    let contractURL = `https://${sub}etherscan.io/address/${config.contractAddr}#readContract`;



    useEffect(() => {
        const provider = new ethers.providers.EtherscanProvider(config.env, config.etherscanAPIKey);
        setReadProvider(provider);
    }, []);

    useEffect(() => {
        let f = async () => {
            if (!readProvider) { return ;}
            try {
                let contract = new ethers.Contract(config.contractAddr, abi, readProvider);
                let basePrice = await contract.basePriceUSD();
                setCurrBasePrice(basePrice.toNumber());

                let ownerBal = await contract.balances(0);
                setCurrOwnerBal(ethers.utils.formatEther(ownerBal.toString()));

                let total = await contract.seriesSupply();
                setSeriesTotal(total.toNumber());

                let minted = await contract.seriesMintedCount();
                setSeriesMinted(minted.toNumber());

                let sID = await contract.seriesID();
                setSeriesID(sID.toNumber());
            } catch (e) {
                console.log("error trying to get details from contract", e)
            }
        };
        f();
    }, [readProvider]);

    return (
        <div style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", boxShadow: "3px 3px 6px #5f3be3", marginBottom:"35px", color:"white"}}>
            { config.env ? <span style={{position:"absolute", opacity:"30%"}}>{config.env}</span> : null}
            <Container>
                <Row style={{paddingTop:"10px"}}>
                    <Col className="col-md-8">
                        <h1 style={{fontFamily: "'Rock Salt', cursive"}}>Over the Counter</h1> 
                        <h5 style={{fontFamily: "'Raleway', sans-serif", bottom:"0px"}}>NFTs for the Masses</h5> 
                    </Col>
                    { currBasePrice && <Col md={{span:3, offset:1}}>
                        <h5 style={{fontFamily: "'Raleway', sans-serif", bottom:"0px", opacity:"60%", fontSize:"14px"}}>NFT Base Price: ${currBasePrice} </h5> 
                        <h5 style={{fontFamily: "'Raleway', sans-serif", bottom:"0px", opacity:"60%", fontSize:"14px"}}>Owner Balance: {currOwnerBal}&nbsp;Eth </h5> 
                        { seriesID && <h5 style={{fontFamily: "'Raleway', sans-serif", bottom:"0px", opacity:"60%", fontSize:"14px"}}>{seriesMinted} of {seriesTotal} minted in Series {seriesID}</h5> }
                    </Col> }
                </Row>  
                <Navbar sticky="top" expand="md" className="navbar-dark" style={{marginBotom:"15px"}}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="float-right" /> 
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="home">
                            <Nav.Link as={Link} eventKey="home" to={`/`}>Home</Nav.Link> 
                            {/* <Nav.Link as={Link} eventKey="market" to={`/market`}>Featured Market</Nav.Link>  */}
                            <Nav.Link as={Link} eventKey="counterfeit" to={`/counterfeit`}>Counterfeit</Nav.Link> 
                            <Nav.Link as={Link} eventKey="custom" to={`/custom`}>NFT the Web</Nav.Link> 
                            <Nav.Link as={Link} eventKey="own" to={`/own`}>Own this Market</Nav.Link> 
                            <Nav.Link as={Link} eventKey="faq" to={`/faq`}>FAQs</Nav.Link> 
                            <Nav.Link  href={contractURL} target="_blank" rel="noreferrer">Smart Contract <BoxArrowUpRight style={{marginLeft:"0px"}}></BoxArrowUpRight></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

export default NavBar;