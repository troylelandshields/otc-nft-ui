import React, { Component, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../services/config.js';


function FAQ(props) {

	return (
        <>
            <hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginTop:"0px"}} />
                <h1 class="display-5">Frequently Asked Questions</h1>
            <hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px"}} />
            <Row style={{marginTop:"5px"}}>
                <Col md={{ span: 8, offset: 2    }}>

                    <Card style={{boxShadow: "1px 1px 4px #5f3be3", marginTop:"20px"}}>
                        <Card.Body>
                            <Card.Title>What is an NFT and why would I buy one?</Card.Title>
                            <Card.Text>
                                <p>According to this <a href="https://pitchfork.com/thepitch/why-do-nfts-matter-for-music/?utm_medium=social&utm_social-type=owned&mbid=social_twitter&utm_brand=p4k&utm_source=twitter" target="_blank" rel="noreferrer">fantastic article from Pitchfork</a>, 
                                NFTs are a way for rich people to buy feelings. At OTC we believe even poor people should be able to buy offbrand feelings.</p>
                                <p>Well, if buying feelings isn't reason enough, it's also popular to try to flip them for more money.</p> 
                                <p>Some NFTs offer special priveleges to their owners; such as Crypto Kitties which lets you breed your digital cats, 
                                or <Link to="/own">Over the Counter's key token</Link> which let's you own and operate this marketplace.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{boxShadow: "1px 1px 4px #5f3be3", marginTop:"20px"}}>
                        <Card.Body>
                            <Card.Title>Is this a scam?</Card.Title>
                            <Card.Text>
                                <p>Oh you sweet Summer child, if you think the idea of paying real money to be able to say you own an image file that is hosted somewhere else on the web sounds appealing then this is no more of a scam than 99% of all NFTs that exists right now.</p>
                                <p>Also, you really can purchase <Link to="/own">the key NFT for OverTheCounter.icu</Link> to become the owner of this marketplace and receive the profits that it generates.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{boxShadow: "1px 1px 4px #5f3be3", marginTop:"20px"}}>
                        <Card.Body>
                            <Card.Title>How does this benefit the content creator of a certain digital asset that gets tokenized?</Card.Title>
                            <Card.Text>
                                It doesn't.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{boxShadow: "1px 1px 4px #5f3be3", marginTop:"20px"}}>
                        <Card.Body>
                            <Card.Title>I just bought an NFT from Over the Counter, how should I inform the content creator that I am the new owner?</Card.Title>
                            <Card.Text>
                                <p>Letting a content creator know that you now own their digital workproduct is extremely exciting for both you and them. Please feel free to use the following form letter when crafting your notification.</p>

                                <div style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", color:"white", padding:"10px", borderRadius:"6px"}}>
                                    <p style={{fontFamily: "'Rock Salt', cursive"}}> Dear Sir or Madam, </p>
                                    <p>I am thrilled to inform you that <strong>[reddit.com/r/nft]</strong> has recently changed ownership! This is such an exciting time for us to be working together and I could not be more <i>amped</i> for what the future holds. </p>
                                    <p>I want to let you know that you have done great work so far, but there are a few tweaks I think we should make going forward. Here are a list of changes I would like enacted immediately:</p>
                                    <ul>
                                        <li>
                                            Please create a pinned post about OverTheCounter.icu.
                                        </li>
                                        <li>
                                            Rule 2 about "content theft" makes no sense; because an NFT is not content but just proof of ownership, it's clearly impossible to steal one; please remove this rule.
                                        </li>
                                        <li>
                                            Etc...
                                        </li>
                                    </ul>
                                    <p>Thank you, let me know if you have any questions!</p>
                                    <p style={{fontFamily: "'Rock Salt', cursive"}}>0xF8852ec8f7c04DDe72d418b09abf3F2EAF4f8828</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    <Card style={{boxShadow: "1px 1px 4px #5f3be3", marginTop:"20px"}}>
                        <Card.Body>
                            <Card.Title>What should I do if the content creator refuses to recognize my ownership?</Card.Title>
                            <Card.Text>
                                <p>NFTs are a new technology and therefore the courts have yet to weigh in on exactly how this situation would play out judicially. </p>
                                <p>However, it’s safe to say that it will absolutely and without a doubt be ruled in favor of the <strong>NFT owner</strong> (you) if there is any dispute about ownership with a content creator.</p>
                                <p>After all, you have the indisputable power of blockchain proving that you do in fact own the NFT. So, feel free to have your lawyer contact their lawyer if this situation arises. </p>

                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{boxShadow: "1px 1px 4px #5f3be3", marginTop:"20px"}}>
                        <Card.Body>
                            <Card.Title>No seriously, what is this?</Card.Title>
                            <Card.Text>
                                <p>NFTs are an interesting idea that probably has a handful of legitimate use-cases.</p>
                                <p>However, just like the ICO craze of 2017, it seems the crypto world cannot resist the temptation to take an intriguing concept and milk it for all its worth with get-rich-quick schemes.</p>
                                <p>So, OverTheCounter.icu is an interactive art-piece, ownable as an NFT, that's poking fun at this NFT bubble while itself being a get-rich-quick scheme.</p>
                                <p>If you're purchasing an NFT to own some art from a marketplace such as OpenSea, then the rational choice would be to create an Over the Counter bootleg of that same NFT here.</p>
                                <p>If the NFT your purchasing needs to be a "real" one for you to interact with it on some platform such as Crypto Kitties, well then now we've come to the centralized/decentralized paradox. 
                                    If the <i>true</i> value of owning an NFT comes from a central party (such as Crypto Kitties), then why have we decentralized the ownership when it could have been done in a way that was cheaper, easier, 
                                    and better for the environment by the central party in the first place.</p>
                                <p>An NFT is probably only worth owning if the owner gets to do something unique while they own it. Just like the real world, the vast majority of NFTs from OverTheCounter.icu have no special priveleges for their owners; 
                                    however, the owner of the Key token does get the right to take ownership of this marketplace, including the power to change the pricing model and to collect all of the profits</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>  
        </>
	);
}


export default FAQ;
