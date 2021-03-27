import React, { Component, useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

function NFTMeta(props) {

	return (
		<div>
            <Row>
                <Col className="col-md-6">
                    <img height="200px" src={props.meta.image} alt="Error loading contract pic"></img>
                </Col>
                <Col className="col-md-6">
                    <Form.Group controlId="nftmeta">
                        <Form.Label>Name</Form.Label>
                        <Form.Control disabled={true} type="text" placeholder="NFT Name, go nuts" value={props.meta.name} />
                    </Form.Group>
                    <Form.Group controlId="nftmeta">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" disabled={true}  style={{height:"100%"}} placeholder="NFT Description, make sure you sell its uniquness hard" value={props.meta.description} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-12">
                    <Form.Group controlId="nftmeta">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control disabled={true} type="text" placeholder="Image URL" value={props.meta.image} />
                    </Form.Group>
                </Col>
            </Row>
            <h4>Attributes</h4>
            <Row>
                {
                    props.meta.attributes.map((val, idx) => { 
                        return <Col key={`attr_${idx}`} className="col-md-4">
                            <Form.Group controlId="nftmeta">
                                <Form.Label>{`${val.trait_type}`}</Form.Label>
                                <Form.Control disabled={true} type="text" placeholder="Image URL" value={val.value} />
                                {val.display_type ? <Form.Text className="text-muted">
                                    {val.display_type}
                                </Form.Text> : null}
                            </Form.Group>
                        </Col>
                    })
                }
            </Row>
		</div>
	);
}


export default NFTMeta;


// {
// 	"OrderID": "50bc8957-216d-4974-9f62-e7646e412071",
// 	"NFTID": "293285d3-8467-40c8-a8cf-d0e3b614c676",
// 	"Hash": "ec4955ca-b045-4d8b-8da1-56787ea0a74b",
// 	"SubtotalInWei": 100000000000000000,
// 	"EstimatedGasCost": 300000000000000,
// 	"TotalPriceInWei": 100300000000000000
//   }