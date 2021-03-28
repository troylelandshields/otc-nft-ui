import React, { Component, useState } from 'react';
import { Row, Col, Jumbotron, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../services/config.js';


function Home(props) {

	return (
		<div>
			<Jumbotron className="">	
				<h1 class="display-5">Get your non-fungibles over the counter</h1>
				<p class="lead">Why pay millions of dollars for an NFT when you can get the same high quality product fresh and certified from the Over the Counter market?</p>
				<p class="lead">Over the Counter is the easiest and cheapest place to mint an NFT for any digital asset you would like to own, so that you can take advantage of the investment opportunity of a lifetime.</p>
				<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px"}} />
				<p>Ready to get started? Head on over to the <Link to="counterfeit">minting presses</Link> to try it out. Curious to learn more about how it works? Keep reading below or check out our FAQs.</p>
				<p class="lead">
					<Link to="faqs" class="btn btn-primary btn-sm">Learn more</Link>
					<Link to="own" class="btn btn-default btn-sm">Buy this marketplace</Link>
				</p>
			</Jumbotron>

			<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"25px"}}/>

			<Jumbotron className="">
				<Row>
					<Col className="col-md-6 col-12">
						<Figure >
							<Figure.Image
								height={300}
								src="https://images.unsplash.com/photo-1501066927591-314112b5888e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80"
								style={{boxShadow: "3px 3px 6px #5f3be3"}}
							/>
							<Figure.Caption>
								Your future car (Lamborghini)
							</Figure.Caption>
						</Figure>
					</Col>
					<Col className="col-md-6 col-12">
						<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginTop:"0px"}} />
						<h1 class="display-5">Bootlegs</h1>
						<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px"}} />
						<div className="lead">
							<p>
								Let say you see another (expensive) NFT that makes you think, “Wow, this should belong to me so I can brag about it at parties or sell it or whatever.”
							</p>
							<p>
								While you may have had to <a target="_blank" rel="noreferrer" href="https://www.theverge.com/2021/3/22/22344937/jack-dorsey-nft-sold-first-tweet-ethereum-cryptocurrency-twitter">pay millions of dollars</a> to be the owner of that thing on some other platforms, Over the Counter believes that NFTs are meant to be for the masses and therefore offers a reasonable price to own any digital asset your heart desires. 
							</p>
							
						</div>
					</Col>
				</Row>	
				<Row>
					<Col>
						<Link to="counterfeit" class="btn btn-danger btn-lg float-right">Let's funge some non-fungibles</Link>
					</Col>
				</Row>
				
			</Jumbotron>

			<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"25px"}}/>

			<Jumbotron className="">
				<Row>
					<Col className="col-md-6 col-12">
						<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginTop:"0px"}} />
						<h1 class="display-5">Own the Web</h1>
						<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px"}} />
						<div className="lead">
							<p>
								At OTC, we believe that everything on the web should be ownable as an NFT, so we've made our platform do just that! If you see a website, image, CSS file, Tweet, or any other digital resource with a URL 
								that you know in your heart belongs to you just head on over to our <Link to="custom">NFT the Web</Link> minting presses.
							</p>
							<p>
								Once you own the digital asset you had your eye on then you are free to do with it whatever you wish. For example, you should probably inform the content creator that you now own that digital asset and they’re
								going to need to bend to your will in regards to how it’s used. You are also free to resell that asset on a platform such as OpenSea or Electronic-Bay.com.
							</p>
							
						</div>
					</Col>

					<Col className="col-md-6 col-12">
						<Row>
							<Col>
								<Figure>
									<Figure.Image
										height={300}
										src="https://images.unsplash.com/photo-1518183214770-9cffbec72538?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80"
										style={{boxShadow: "3px 3px 6px #5f3be3"}}
									/>
									<Figure.Caption>
										Your future dollars (apprx. $119 American)
									</Figure.Caption>
								</Figure>
							</Col>
						</Row>
						<Row>
							<Col>
								<p>
									Check out the form letters and tips we have in our FAQ section about how to take ownership of your new digital asset. Congratulations, use it wisely!
								</p>	
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col>
						<Link to="counterfeit" class="btn btn-danger btn-lg float-right">I'm ready to pwn the web!</Link>
					</Col>
				</Row>
				
			</Jumbotron>

			<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"25px"}}/>

			<Jumbotron className="">
				<Row>
					<Col className="col-md-12 col-12">
						<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px", marginTop:"0px"}} />
						<h1 class="display-5">Authenticity</h1>
						<hr style={{backgroundImage: "linear-gradient(to right, #5f3be3, #e33b3b)", height:"1px"}} />
						<Row>
							<Col>
								<a target="_blank" rel="noreferrer" href="https://www.reddit.com/r/ethereum/comments/lzch1m/dont_use_cent_to_buy_tweets_or_any_other_closed/gq34xie?utm_source=share&utm_medium=web2x&context=3">
									<Figure>
										<Figure.Image
											height={300}
											src="/whatisreal.png"
											style={{boxShadow: "3px 3px 6px #5f3be3"}}
										/>
										<Figure.Caption>
											I love this comment so much that I own the NFT of it, minted right here on OTC.
										</Figure.Caption>
									</Figure>
								</a>
							</Col>
						</Row>
						<div className="lead">
							<p>
								We take NFT authenticity seriously here at OTC, which is each and every digital asset that gets purchased on Over the Counter receives a proprietary Authenticity score. 
							</p>
							<p>
								It pays to be the first to mint any given digital asset so that you get the highest Authenticity score. As an asset is purchased more by the community, each subsequent, matching token’s Authenticity goes down and its price goes up. Double ouch! 
							</p>
						</div>
					</Col>
				</Row>
				
			</Jumbotron>
		</div>
	);
}


export default Home;
