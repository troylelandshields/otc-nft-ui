import React, { Component, useState } from 'react';
import { Row, Col, Card, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../services/config.js';


function Market(props) {

	return (
        <>
            <hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginTop:"0px"}} />
                <h1 class="display-5">Featured Market</h1>
            <hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px"}} />
            <Row style={{marginTop:"5px"}}>
                <Col md={{ span: 6}} className="col-12">

                    <Card style={{boxShadow: "1px 1px 4px #5f3be3", marginTop:"20px"}}>
                        <Card.Body>
                            <Card.Title>What is an NFT and why would I buy one?</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    
                    <Figure style={{boxShadow: "1px 1px 4px #5f3be3", marginTop:"20px"}}>
                        <a href="https://medium.com/nifty-gateway/the-nifty-gateway-blockchain-wallet-explainer-d4c7156f480a" target="_blank" rel="noreferrer">
                            <Figure.Image
                                src="tomorrow.png"
                            />
                        </a>
                    </Figure>

                </Col>
            </Row>  
        </>
	);
}


export default Market;
