import React, { Component, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import config from '../../services/config.js';


function Home(props) {

	return (
		<Row>
			<Col className="col-md-4">
            	Step 1: <a href="https://testnets.opensea.io/assets" target="_blank" rel="noreferrer">Find an NFT</a> you love or want to sell.
			</Col>
			<Col className="col-md-4">
            	Step 2: Put the URL into the Counterfeit page.
			</Col>
			<Col className="col-md-4">
            	Step 3: Profit.
			</Col>
		</Row>  
	);
}


export default Home;
