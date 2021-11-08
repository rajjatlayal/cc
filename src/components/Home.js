import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { QuestionLg } from 'react-bootstrap-icons';
import { Accordion } from 'react-bootstrap-accordion';
import {Tabs, Tab} from 'react-bootstrap-tabs';

function Home()  {
    return (
        <div className="container-fluid p-0" style={{background:"#0F1922"}}>
            <Navbar/>
            <div className="row landing_page">
                <div className="banner">
                    {/* <p>BANNER</p> */}
                    <img src="../images/banner.jpg"/>
                </div>
                <div className="second_section">
                    <h3>A Society for the Uncensored</h3>
                    <h3> Unapologetic ***** Of Crypto:</h3>
                    {/* <p>BANNER</p> */}
                    <p><img src="../images/banner1.jpg"/></p>
                    <h3 style={{paddingTop:"20px"}}>**** BEING AN ORDINARY ****</h3>
                    <span>BE A CRYPTOCUNT</span>
                    <h6>What started as a joke with some British CryptoCunts at an NFT meetup, has</h6>
                    <h6>grown into a fully fleshed out utility backed NFT collection.</h6>
                    <div className="row" style={{margin:"0",width:"100%",paddingTop:"40px"}}>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div className="section1_img">
                                {/* <h5>Img</h5> */}
                                <img src="../images/img1.jpg"/>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div className="section1_img">
                                {/* <h5>Img</h5> */}
                                <img src="../images/img2.jpg"/>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div className="section1_img">
                                {/* <h5>Img</h5> */}
                                <img src="../images/img3.jpg"/>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div className="section1_img">
                                {/* <h5>Img</h5> */}
                                <img src="../images/img4.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="third_section">
                        <div className="row" style={{margin:"0",width:"100%"}}>
                            <div className="col-xl-6 col-lg-3 col-md-3 col-sm-3 col-xs-3">

                            </div>
                            <div className="col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-3 third_section_content">
                                <h5>CryptoCunts Club is a deflationary GameFi utility collection of 10,690 NFTS, programmatically generated and made up the world's most popular crypto.</h5>
                                <p>As no two cunts are alike in the real world, so too, no two CryptoCunts are the same in this metaverse.</p>
                                <p>The collection pays homage to the pixelated aesthetic of the CryptoPunks who gave birth to the NFT movement while respecting the underlying technology that fucked this NFT movement into existence.</p>
                            </div>
                            <div className="col-xl-1 col-lg-3 col-md-3 col-sm-3 col-xs-3 third_section_content"></div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container fourth_section">
                        <h3>IT'S NOT JUST A <span style={{color:"#72F595",fontWeight:"600"}}>COOL AVATAR</span></h3>
                        <div className="row" style={{margin:"0",width:"100%",textAlign:"center"}}>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-4 under_fourth_section1">
                                <p className="p-1"><img src="../images/avatar.png"/></p>
                            </div>
                            <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4 col-xs-4 under_fourth">
                                <div className="line arrow-left"></div>
                                <p className="p-2"><img src="../images/avatar.png"/></p>
                                <div className="line arrow-right"></div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-4 under_fourth_section2">
                                <p className="p4"><img src="../images/avatar.png"/></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container fifth_section">
                        <h3>Every Mint Gets You A Chance To</h3><h3> Collect The Following:</h3>
                        <div className="row" style={{margin:"0",width:"100%",textAlign:"center",paddingTop:"30px"}}>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4">
                                <div className="under_fifth1 flip-box">
                                    <h5>1111 Evolved CryptoCunts</h5>
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <img src="../images/collect1.jpg" alt="Paris" style={{width:"100%"}} />
                                        </div>
                                        <div class="flip-box-back">
                                            <ul style={{paddingTop:"20px"}}>
                                                <li>1/1111 Rare Collectable
                                                    <p>a). Like a CryptoCunt but with arms and legs</p>
                                                    <p>b). 50% buff arms and legs</p>
                                                    <p>c). 50% skinny arms and legs</p>
                                                </li>
                                                <li>PvP Video GameFi Avatar
                                                    <p>a). It's your Cunt, play with it</p>
                                                    <p>b). Advanced Gameplay Img</p>
                                                </li>
                                                <li>Stake To Earn
                                                    <p>a). Pimp out your Cunt to earn passive income</p>
                                                    <p>Combine 2 Evolved CryptoCunts to get 1
                                                    Anonymous-Ape CryptoCunt (50% chance
                                                    it has laser-eyes)</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4">
                                <div className="under_fifth1 flip-box">
                                    <h5>8445 CryptoCunts</h5>
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <img src="../images/collect1.jpg" alt="Paris" style={{width:"100%"}} />
                                        </div>
                                        <div class="flip-box-back">
                                            <ul style={{paddingTop:"20px"}}>
                                                <li>1/1111 Rare Collectable
                                                    <p>a). Like a CryptoCunt but with arms and legs</p>
                                                    <p>b). 50% buff arms and legs</p>
                                                    <p>c). 50% skinny arms and legs</p>
                                                </li>
                                                <li>PvP Video GameFi Avatar
                                                    <p>a). It's your Cunt, play with it</p>
                                                    <p>b). Advanced Gameplay Img</p>
                                                </li>
                                                <li>Stake To Earn
                                                    <p>a). Pimp out your Cunt to earn passive income</p>
                                                    <p>Combine 2 Evolved CryptoCunts to get 1
                                                    Anonymous-Ape CryptoCunt (50% chance
                                                    it has laser-eyes)</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4">
                                <div className="under_fifth1 flip-box">
                                    <h5>222 Anonymous Ape CryptoCunts</h5>
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <img src="../images/collect1.jpg" alt="Paris" style={{width:"100%"}} />
                                        </div>
                                        <div class="flip-box-back">
                                            <ul style={{paddingTop:"20px"}}>
                                                <li>1/1111 Rare Collectable
                                                    <p>a). Like a CryptoCunt but with arms and legs</p>
                                                    <p>b). 50% buff arms and legs</p>
                                                    <p>c). 50% skinny arms and legs</p>
                                                </li>
                                                <li>PvP Video GameFi Avatar
                                                    <p>a). It's your Cunt, play with it</p>
                                                    <p>b). Advanced Gameplay Img</p>
                                                </li>
                                                <li>Stake To Earn
                                                    <p>a). Pimp out your Cunt to earn passive income</p>
                                                    <p>Combine 2 Evolved CryptoCunts to get 1
                                                    Anonymous-Ape CryptoCunt (50% chance
                                                    it has laser-eyes)</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4">
                                <div className="under_fifth1 flip-box">
                                    <h5>22 Anonymous CryptoCunts W/ Laser Eyes</h5>
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <img src="../images/collect1.jpg" alt="Paris" style={{width:"100%"}} />
                                        </div>
                                        <div class="flip-box-back">
                                            <ul style={{paddingTop:"20px"}}>
                                                <li>1/1111 Rare Collectable
                                                    <p>a). Like a CryptoCunt but with arms and legs</p>
                                                    <p>b). 50% buff arms and legs</p>
                                                    <p>c). 50% skinny arms and legs</p>
                                                </li>
                                                <li>PvP Video GameFi Avatar
                                                    <p>a). It's your Cunt, play with it</p>
                                                    <p>b). Advanced Gameplay Img</p>
                                                </li>
                                                <li>Stake To Earn
                                                    <p>a). Pimp out your Cunt to earn passive income</p>
                                                    <p>Combine 2 Evolved CryptoCunts to get 1
                                                    Anonymous-Ape CryptoCunt (50% chance
                                                    it has laser-eyes)</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container sixth_section">
                        <h3><span style={{color:"#72F595",fontWeight:"600"}}>CRYPTOCUNTS</span> THAT ARE</h3><h3>ONLY AVAILABLE FROM GIVEAWAYS:</h3>
                        <div className="row" style={{margin:"0",width:"100%",textAlign:"center",paddingTop:"30px"}}>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4">
                                <div className="under_sixth1">
                                    <span><QuestionLg size={180} color="#ffffff" /></span>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4">
                                <div className="under_sixth2">
                                    <h5>111 Famous CryptoCunts Perks:</h5>
                                    <ul>
                                        <li>1/1 rare collectable
                                            <p>Seriously rare, only 1 like this will ever be
                                            available</p>
                                        </li>
                                        <li>
                                            Commercial Rights
                                            <p>It's Your Cunt Do With It What You Want</p>
                                        </li>
                                        <li>PVP video game avatar w/ the power to influence all other Crypto and Anonymous Ape Cunts</li>
                                        <li>It's Your Cunt Play With It Stake To Earn</li>
                                        <li>It's Your Cunt Play With It Stake To Earn Pimp Your Cunt Out and Earn</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4">
                                <div className="under_sixth1">
                                    <span><QuestionLg size={180} color="#ffffff" /></span>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4">
                                <div className="under_sixth1">
                                    <span><QuestionLg size={180} color="#ffffff" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%",background:"#12232D",padding:"50px 16px"}}>
                    <div className="container seventh_section">
                        <h3 style={{color:"#72F595",marginBottom:"0"}}>THE FOREPLAY</h3><h3 style={{color:"#72F595",paddingBottom:"20px"}}>BEFORE THE MINT</h3>
                        <p>1. Reach critical mass on our Discord & Twitter. We'll gauge this by interest and activity</p>
                        <p>2. Announce How To Get On Our First Day Whitelist (Limited to 100 Wallets/Discord Members)</p>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container eighth_section">
                        <h3 style={{color:"#72F595",marginBottom:"0"}}>THE GREATEST ROADMAP ON THE</h3><h3 style={{color:"#72F595",paddingBottom:"20px"}}>METAVERSE AND 100 DAYS OF GAMES:</h3>
                        <p>Emperor Titus was an OG cunt and after the Colosseum was built in 80 AD he had 100 days of games. In honor of these events we will MINT our CCC NFTS with our own 100 days of games and the greatest roadmap on the NFT metaverse</p>
                        <h5 style={{color:"#72F595",marginTop:"50px"}}>THE DETAILS</h5>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container nineth_section">
                        <div className="row" style={{margin:"0",width:"100%"}}>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4">
                                <div className="nineth_image_div">
                                    <p><img src="../images/roadmap1.jpg"/></p>
                                </div>
                                <div className="nineth_image_div">
                                    <p><img src="../images/roadmap2.jpg"/></p>
                                </div>
                                <div className="nineth_image_div">
                                    <p><img src="../images/roadmap3.jpg"/></p>
                                </div>
                                <div className="nineth_image_div">
                                    <p><img src="../images/roadmap4.jpg"/></p>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-4 col-sm-4 col-xs-4">
                                <div className="nineth_div_text">
                                    <p>Each day will have a max whitelist of 100 people. To get on the whitelist, you have to participate in our Discord Games / Competitions etc. Each person on the whitelist can mint up to 2 CryptoCunts to ensure we sell out daily. Don't delay mint your CryptoCunt as soon as possible or live in regret</p>
                                    <p>Each whitelist represents 1% of our CryptoCunts minted. Secondary Sales will happen on day 101; THE AFTER PARTY we call it. This will prevent rug pulls and make our sales process more of an experience to constantly grow our community while rewarding the earliest HODLRS.</p>
                                    <p>Price to mint starts at 0.01 Eth and doubles every 10 days. This ensures our early minters get the best rewards while also creating momentum on our floor price. Our project is designed to attract whales who will pick up the later CCs.</p>
                                    <p>Each day will give existing HODLRS the chance to win 2, 1/1, Famous CryptoCunts.</p>
                                    <p>Example of how that will work.</p>
                                    <h6 style={{fontWeight:"600"}}>1% SOLD:</h6>
                                    <h6>Release The Ultimate King Maker Of Crypto, LORD ELON
                                    HIMSELF:</h6>
                                    <p>Two Elon Musk CryptoCunts (1 with laser eyes, 1 without) will be released. Elon Musk has 24 hrs to claim his cunts before we make it a random giveaway to everyone who owns a CCC NFT and tweets (claim your CryptoCunt @elonmusk @cryptocuntsclub)</p>
                                    <h6 style={{fontWeight:"600"}}>2% SOLD:</h6>
                                    <h6>Release the Founder of Ethereum, THE ALIEN VITALIK
                                    BUTERIN:</h6>
                                    <p>Two Vitalik Buterin CryptoCunts (1 with laser eyes, 1 without) will be released. Vitalik Buterin has 24 hrs to claim his cunts before we make it a random giveaway to everyone who owns a CCC NFT and tweets (claim your CryptoCunt</p>
                                    <h6>@vitalikbuterin @cryptocuntsclub)</h6>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container tenth_section">
                        <p>Each day before our launch and during our 100 days of games we will run a giveaway</p>
                        <p>with an NFT influencer in order to grow our community and spread our awareness.</p>
                    </div>
                </div>
                <div className="container roadmap">
                    <h3 style={{color:"#72F595",marginBottom:"0"}}>OTHER BIG</h3>
                    <h3 style={{color:"#ffffff"}}>ROADMAP MOMENTS</h3>
                    <div className="history-tl-container">
                        <ul className="tl">
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <span>10%</span>
                                <p className="road_line"></p>
                                <div className="item-title">Release The CryptoCunt Evolutionary Machine. Here you can burn two CryptoCunts and get an Evolved CryptoCunt. Rarer and more powerful gameplay.</div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <span>20%</span>
                                <p className="road_line"></p>
                                <div className="item-title">Release The CryptoCunt Aping -In Machine. Here you can burn two Evolved CryptoCunts and get an Anoymous-Ape CryptoCunt. Rarer and more powerful gameplay.</div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <span>30%</span>
                                <p className="road_line"></p>
                                <div className="item-title">We begin developing our PVP, gambling CryptoCunts Colloseum game. Think we are uncensored now; just you wait! tokenomics are comig.</div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <span>40%</span>
                                <p className="road_line"></p>
                                <div className="item-title">We open THE UNCENSORED CCC discord channel, exclusive for CCC holders, exclusive for CryptoCunts.</div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <span>50%</span>
                                <p className="road_line"></p>
                                <div className="item-title">We release the full list of Famous CryptoCunts. CCC holders vote on 20 Famous CryptoCunts not already on our list to create. We will release these as a BIG giveaway when we reach 100%.</div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <span>60%</span>
                                <p className="road_line"></p>
                                <div className="item-title">A merchandise line EXCLUSIVE for CCC holders gets designed.</div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <span>70%</span>
                                <p className="road_line"></p>
                                <div className="item-title">CCC holders and those whitelisted (even those who missed their chance to mint) will have a chance to win 44 Anonymous Ape CryptoCunts.</div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <span>80%</span>
                                <p className="road_line"></p>
                                <div className="item-title">The CryptoCunts Gods are revealed;the project creator, the project artist and one OUTSTANDING CCC NFT holder will be selected and immortalized as a CryptoCunt God. In total there will be 3 CryptoCunt Gods with Laser Eyes and 3 CryptoCunt Gods with Lightning eyes. These will be released as a giveaway.</div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <span>90%</span>
                                <p className="road_line"></p>
                                <div className="item-title">1000 Eth gets put into the CryptoCunt Colosseum Treasury as future prize money.</div>
                            </li>
                            <li className="tl-item" ng-repeat="item in retailer_history">
                                <span>100%</span>
                                <div className="item-title">We'll be doing a massive giveaway for the community voted Famous CryptoCunts. In total 20 without laser eyes will be given away.</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container eighth_section">
                        <h3 style={{color:"#72F595",marginBottom:"0",paddingBottom:"20px"}}>The After Party</h3>
                        <p>The CryptoCunts rarity data will be added to Rarity.Tools, Rarity Sniper, & NFTEXP.io as well as OpenSea and other Ethereum based 66secondary markets. Sell your cunts at your own peril. You might never get one back.</p>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container eleventh_section">
                        <h3 style={{color:"#72F595",marginBottom:"0",paddingBottom:"20px"}}>The Video Game</h3>
                        <p>The CryptoCunt Colosseum is released. Finally you can do more than just look at your cunt. Play for free or bet crypto against your opponents. Pimp out your cunt and earn money off non-CC-holders who want to play with your CryptoCunt.</p>
                    </div>
                    <div className="container video_section">
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/FAs3nl1x2Yw" title="YouTube video player" style={{borderRadius:"36px"}}></iframe>
                    </div>
                </div>  
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container twelth_section">
                        <h3 style={{color:"#72F595",marginBottom:"0"}}>CRYPTOCUNT.CLUB store opens:</h3>
                        <h3 style={{color:"#72F595",marginBottom:"0",paddingBottom:"20px"}}>Only HOLDERS can buy this CUNTASTIC clothing and merch.</h3>
                        <p>THE DRIP: ALL CRYPTOCUNTS will get airdropped CC tokens which they can use to bet against other players in the CryptoCunt Colloseum game. New players will have to purchase CC tokens to place bets further enhancing the tokenomics and bringing value to the CCC community.</p>
                    </div>
                </div> 
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container thirt_section">
                        <h3 style={{color:"#72F595",marginBottom:"0",paddingBottom:"20px"}}>THE CRYPTOCUNTS FAQ</h3>
                        <Accordion show title="Why wait til the morning after 101 days for secondary markets?">
                            We want to avoid rugpulls and we also want to do something a little different. This project is built for longevity.
                        </Accordion>
                        <Accordion title="Why does the price double every 10 days?">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
                            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
                            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
                            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
                            unde.
                        </Accordion>
                        <Accordion title="Why cryptoCunts:">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
                            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
                            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
                            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
                            unde.
                        </Accordion>
                        <Accordion title="Isn’t the word Cunt Bad?">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
                            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
                            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
                            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
                            unde.
                        </Accordion>
                        <Accordion title="How is it deflationary?">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
                            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
                            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
                            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
                            unde.
                        </Accordion>
                        <Accordion title="How is there utility?">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
                            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
                            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
                            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
                            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
                            unde.
                        </Accordion>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container fourt_section" id="exTab1">
                        <h3 style={{color:"#72F595",marginBottom:"0"}}>Crypto Cunts minted so far</h3>
                        <Tabs selected="CryptoCunts">
                            <Tab label="CryptoCunts">
                                <div className="under_tab_content">
                                    <h3 style={{color:"#72F595",marginBottom:"0",paddingBottom:"40px"}}>CryptoCunts</h3>
                                    <div className="row" style={{width:"100%",margin:"0"}}>
                                        <div className="col-xl-6">
                                            <ul>
                                                <li>Like a beautiful bejeweled flower made up of your favourite crypto.</li>
                                                <li>Common</li>
                                                <li>Total 7334 available to mint.</li>
                                                <li>Basic Gameplay</li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-6">
                                            <p><img src="../images/crypto_cunt.jpg" /></p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab label="Evolved">
                                <div className="under_tab_content">
                                    <h3 style={{color:"#72F595",marginBottom:"0",paddingBottom:"40px"}}>Evolved</h3>
                                    <div className="row" style={{width:"100%",margin:"0"}}>
                                        <div className="col-xl-6">
                                            <ul>
                                                <li>Like a beautiful bejeweled flower made up of your favourite crypto.</li>
                                                <li>Common</li>
                                                <li>Total 7334 available to mint.</li>
                                                <li>Basic Gameplay</li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-6">
                                            <p><img src="../images/crypto_cunt.jpg" /></p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab label="Anonymous Ape">
                                <div className="under_tab_content">
                                    <h3 style={{color:"#72F595",marginBottom:"0",paddingBottom:"40px"}}>Anonymous Ape</h3>
                                    <div className="row" style={{width:"100%",margin:"0"}}>
                                        <div className="col-xl-6">
                                            <ul>
                                                <li>Like a beautiful bejeweled flower made up of your favourite crypto.</li>
                                                <li>Common</li>
                                                <li>Total 7334 available to mint.</li>
                                                <li>Basic Gameplay</li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-6">
                                            <p><img src="../images/crypto_cunt.jpg" /></p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab label="Famous CryptoCunt">
                                <div className="under_tab_content">
                                    <h3 style={{color:"#72F595",marginBottom:"0",paddingBottom:"40px"}}>Famous CryptoCunt</h3>
                                    <div className="row" style={{width:"100%",margin:"0"}}>
                                        <div className="col-xl-6">
                                            <ul>
                                                <li>Like a beautiful bejeweled flower made up of your favourite crypto.</li>
                                                <li>Common</li>
                                                <li>Total 7334 available to mint.</li>
                                                <li>Basic Gameplay</li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-6">
                                            <p><img src="../images/crypto_cunt.jpg" /></p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab label="CryptoCunt Gods">
                                <div className="under_tab_content">
                                    <h3 style={{color:"#72F595",marginBottom:"0",paddingBottom:"40px"}}>CryptoCunt Gods</h3>
                                    <div className="row" style={{width:"100%",margin:"0"}}>
                                        <div className="col-xl-6">
                                            <ul>
                                                <li>Like a beautiful bejeweled flower made up of your favourite crypto.</li>
                                                <li>Common</li>
                                                <li>Total 7334 available to mint.</li>
                                                <li>Basic Gameplay</li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-6">
                                            <p><img src="../images/crypto_cunt.jpg" /></p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                        <button className="mint_now">MINT NOW</button>
                    </div>
                </div>            
            </div>
            <Footer/>
        </div>
    );
}
export default Home;



