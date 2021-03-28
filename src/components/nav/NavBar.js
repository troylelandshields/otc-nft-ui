import React, { Component } from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import config from '../../services/config.js';

function NavBar() {
    return (
        <div>
            <Row>
                <Col>
                    <h1>Over the Counter: NFTs for the Masses</h1> { config.env ? `(${config.env})` : null}
                </Col>
            </Row>  
            <Navbar sticky="top">
                <Nav defaultActiveKey="home">
                    <Nav.Link as={Link} eventKey="home" to={`/`}>Home</Nav.Link> 
                    <Nav.Link as={Link} eventKey="counterfeit" to={`/counterfeit`}>Counterfeit</Nav.Link> 
                    <Nav.Link as={Link} eventKey="custom" to={`/custom`}>Custom NFT</Nav.Link> 
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;