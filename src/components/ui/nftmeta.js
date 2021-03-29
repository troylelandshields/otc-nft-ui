import React, { Component, useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Formik, FieldArray } from 'formik';
import moment from 'moment';
import { Trash } from 'react-bootstrap-icons';

function NFTMeta(props) {
    let isModel = (u) => {
        let fileExt = u.split('.').pop();
        if (!fileExt) {
            return false;
        }

        return fileExt.toLowerCase() === "glb";
    };

    let isVideo = (u) => {
        let fileExt = u.split('.').pop();
        if (!fileExt) {
            return false;
        }

        return fileExt.toLowerCase() === "mp4" || fileExt.toLowerCase() === "ogg" || fileExt.toLowerCase() === "webm" || fileExt.toLowerCase() === "ogv";
    };

    let displayElement = (handleChange, animationURL, imageURL) => {
        if (animationURL) {
            if (isModel(animationURL)) {
                return <model-viewer style={{maxWidth:"100%"}} height="250px" auto-rotate="true" autoplay="true" camera-controls="true" src={animationURL} ar-status="not-presenting"></model-viewer>
            } 
            if (isVideo(animationURL)) {
                return <video style={{maxWidth:"100%"}} height="250px" muted={true} autoPlay={true} controlsList="nodownload" loop={true} preload="auto" src={animationURL}></video>
            } 
        }

        if (!imageURL) {
            return <img style={{maxWidth:"100%", opacity:"70%"}} height="250px" src="https://picsum.photos/400/300" alt="Error loading contract pic"></img>
        }

        return <img style={{maxWidth:"100%"}} height="250px" src={imageURL} alt="Error loading contract pic"></img>
    };

	return (
		<Formik
            initialValues={props.meta}
            validate={values => {
                const errors = {};
                return errors;
            }}
        >
        {({
         values,
         handleChange
       }) => (
           <>
             {props.changes && props.changes(values)}
                <Row>
                    <Col className="col-md-6">
                        <div style={{maxWidth:"100%"}}>
                            {displayElement(handleChange, values.animation_url, values.image)}
                        </div>
                    </Col>
                    <Col className="col-md-6">
                        <Form.Group controlId={"nftmeta-name"+values.NFTID}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={handleChange} name="name" disabled={!props.editable} type="text" placeholder="NFT Name, go nuts" value={values.name} />
                        </Form.Group>
                        <Form.Group controlId={"nftmeta-desc"+values.NFTID}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" disabled={!props.editable} onChange={handleChange} name="description" style={{height:"100%"}} placeholder="NFT Description, make sure you sell its uniquness hard" value={values.description} />
                        </Form.Group>
                    </Col>
                </Row>
                <hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px"}} />
                <h4>Attributes</h4>
                <Row>
                    { !!values.attributes && <FieldArray name="attributes">
                    {({ insert, remove, push }) => (
                        values.attributes.map((val, idx) => { 
                            val.formattedVal = val.value;

                            if (val.value === "number") {
                                val.inputType = "number";
                            } else {
                                val.inputType = "text";
                            }

                            if (val.max_value) {
                                val.formattedVal = `${val.value} of ${val.max_value}`;
                            }
                            
                            if (val.display_type === "date") {
                                val.inputType = "date";
                                val.formattedVal = moment.unix(val.value).format("YYYY-MM-DD");
                            }

                            let disabled = !props.editable || val.origin === "otc" || !!val.max_value;

                            return <Col key={idx} className="col-4">
                                {
                                    <Form.Group controlId={"nftmeta"+idx}>
                                        { !!val.trait_type ? <Form.Label>{`${val.trait_type}`}</Form.Label> : <Form.Label style={{opacity:"20%"}}>No trait type</Form.Label> } {!disabled ? <Trash onClick={()=> remove(idx)}></Trash> : null}
                                        <Form.Control onChange={handleChange} name={`attributes.${idx}.value`} disabled={disabled} type={val.inputType} value={val.formattedVal} />
                                        {val.display_type ? <Form.Text className="text-muted">
                                            {val.display_type}
                                        </Form.Text> : null}
                                    </Form.Group>
                                }
                            </Col>
                        })
                    )}
                    </FieldArray> }
                </Row>
                <Row>
                    <Col className="col-md-12">
                        <Form.Group controlId={"nftmeta-img-url"+values.NFTID}>
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control onChange={handleChange} name="image" disabled={!props.editable} type="text" placeholder="Used to visually represent the thing you own" value={values.image} />
                        </Form.Group>

                        <Form.Group controlId={"nftmeta-animation-url"+values.NFTID}>
                            <Form.Label>Animation URL</Form.Label>
                            <Form.Control onChange={handleChange} name="animation_url" disabled={!props.editable} type="text" value={values.animation_url} placeholder="It's like an image from Harry Potter" />
                        </Form.Group>

                        <Form.Group controlId={"nftmeta-ext-url"+values.NFTID}>
                            <Form.Label>External URL</Form.Label>
                            <Form.Control onChange={handleChange} name="external_url"  disabled={!props.editable} type="text" value={values.external_url} placeholder="This is the URL to the thing you want to own (e.g., a comment on Reddit)" />
                        </Form.Group>

                        <Form.Group controlId={"nftmeta-youtube-url"+values.NFTID}>
                            <Form.Label>Youtube URL</Form.Label>
                            <Form.Control onChange={handleChange} name="youtube_url"  disabled={!props.editable} type="text" value={values.youtube_url} placeholder="Youtube was a popular site for hosting videos in the early 2000s (not required)" />
                        </Form.Group>

                    </Col>
                </Row>
                </>
            )}
		</Formik>
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