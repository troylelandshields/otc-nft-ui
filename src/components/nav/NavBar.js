import React, { Component } from 'react';
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import config from '../../services/config.js';

function NavBar() {
    return (
        <div style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", boxShadow: "3px 3px 6px #5f3be3", marginBottom:"35px", color:"white"}}>
            { config.env ? <span style={{position:"absolute", opacity:"30%"}}>{config.env}</span> : null}
            <Container>
                <Row style={{paddingTop:"10px"}}>
                    <Col className="col-md-12">
                        <h1 style={{fontFamily: "'Rock Salt', cursive"}}>Over the Counter</h1> 
                        <h5 style={{fontFamily: "'Raleway', sans-serif", bottom:"0px"}}>NFTs for the Masses</h5> 
                    </Col>
                </Row>  
                <Navbar sticky="top" className="navbar-dark" style={{marginBotom:"15px"}}>
                    <Nav defaultActiveKey="home">
                        <Nav.Link as={Link} eventKey="home" to={`/`}>Home</Nav.Link> 
                        <Nav.Link as={Link} eventKey="counterfeit" to={`/counterfeit`}>Counterfeit</Nav.Link> 
                        <Nav.Link as={Link} eventKey="custom" to={`/custom`}>NFT the Web</Nav.Link> 
                        <Nav.Link as={Link} eventKey="own" to={`/own`}>Own this Market</Nav.Link> 
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default NavBar;