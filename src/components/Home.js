import React,{useState,useEffect} from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { QuestionLg } from 'react-bootstrap-icons';
import { Accordion } from 'react-bootstrap-accordion';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { Path } from './admin/Path.js';

function Home()  {
    const [settingsData, setSettingsData] = useState('');
    const get_data=()=>{
		fetch(Path+"get_settings_data.php", { 
			method: "POST",       
			body: JSON.stringify({
				token: localStorage.getItem('token'),
			}), 	
		})
		.then(res => res.json())
		.then(response=>{
            setSettingsData(response.updated_data);
        }
		)		
	}
    useEffect(() => {
        get_data();
    }, []);	
    return (
        <div className="container-fluid p-0" style={{background:"#0F1922"}}>
            <Navbar/>
            

            <div className="row landing_page">
            <div className="row banner_image" style={{paddingRight:"0"}}>
            {/* <div className="col-6">
                
            </div> */}
            <div className="col-12 right_banner" style={{backgroundImage:"url('"+Path+"images/"+settingsData.banner1+"')"}}>
                
            </div>
            </div>
                <div className="banner">
                    {/* <p>BANNER</p> */}
                </div>
                <div className="second_section">
                    <h3>A Society for the Uncensored</h3>
                    <h3> Unapologetic Cunts Of Crypto:</h3>
                    {/* <p>BANNER</p> */}
                    <p><img  src={Path+'images/'+settingsData.banner2}/></p>
                    <h3 style={{paddingTop:"20px"}}>FUCK BEING AN ORDINARY CUNT - BE A CRYPTOCUNT</h3>
                    <span>{settingsData.title}</span> 
                    <h6>{settingsData.content}</h6>
                    <div className="row" style={{margin:"0",width:"100%",paddingTop:"40px"}}>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div className="section1_img">
                                {/* <h5>Img</h5> */}
                                <img src={Path+'images/'+settingsData.img1}/>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div className="section1_img">
                                {/* <h5>Img</h5> */}
                                <img src={Path+'images/'+settingsData.img2}/>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div className="section1_img">
                                {/* <h5>Img</h5> */}
                                <img src={Path+'images/'+settingsData.img3}/>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div className="section1_img">
                                {/* <h5>Img</h5> */}
                                <img src={Path+'images/'+settingsData.img4}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="third_section">
                        <div className="row" style={{margin:"0",width:"100%"}}>
                            <div className="col-xl-6 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <img src={"images/a3bd7a_53507bf7b67a46d787549cc33e67a30e_mv2.png"} alt="Avatar"/>

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
                                <p className="p-1"><img src={Path+'images/'+settingsData.avatar1}/></p>
                            </div>
                            <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4 col-xs-4 under_fourth">
                                <div className="line arrow-left"></div>
                                <p className="p-2"><img className="cent-img" src={Path+'images/'+settingsData.avatar2}/></p>
                                <div className="line2 arrow-right"></div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-4 under_fourth_section2">
                                <p className="p4"><img src={Path+'images/'+settingsData.avatar3}/></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container fifth_section">
                        <h3>Every Mint Gets You A Chance To</h3><h3> Collect The Following:</h3>
                        <div className="row" style={{margin:"0",width:"100%",textAlign:"center",paddingTop:"30px"}}>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4 under_fifth1">
                                <h5>{settingsData.collect_title1}</h5>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                        <img src={Path+'images/'+settingsData.collect_img1} alt="Avatar"/>
                                        </div>
                                        <div className="flip-card-back">
                                            <ul style={{paddingTop:"20px"}}>
                                           
                                            <li>CryptoCunts Perks: 
                                                    <p>1/9556 Rare Collectable</p>
                                                    <p>It’s a beautiful unique CryptoCunt</p>
                                                    <p>PvP Video GameFi Avatar </p>
                                                    <p>It’s your CryptoCunt, play with it </p>
                                                    <p>Stake To Earn </p>
                                                    <p>Pimp your CryptoCunt to earn passive income </p>
                                                    <p>Combine 2 CryptoCunts to get 1 Anonymous Ape CryptoCunt (50% chance it has lasers)</p>
                                            </li>
                                            </ul>
                                        
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4 under_fifth1">
                                <h5>{settingsData.collect_title2}</h5>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                        <img src={Path+'images/'+settingsData.collect_img2} alt="Avatar"/>
                                        </div>
                                        <div className="flip-card-back">
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
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4 under_fifth1">
                            <h5>{settingsData.collect_title3}</h5>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                        <img src={Path+'images/'+settingsData.collect_img3} alt="Avatar"/>
                                        </div>
                                        <div className="flip-card-back">
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
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4 under_fifth1">
                            <h5>{settingsData.collect_title4}</h5>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                        <img src={Path+'images/'+settingsData.collect_img4} alt="Avatar"/>
                                        </div>
                                        <div className="flip-card-back">
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
                                    <span> <img className="musk-1" src ="images\a3bd7a_43f73508863d4b7d86310906c566dccc_mv2.png"/> </span>
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
                                    <span><img className="musk-1" src ="images\elon laser.png"/></span>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-4">
                                <div className="under_sixth1">
                                    <span><img className="musk-1" src="images\elon laser.png"/></span>
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
                                    <p><img src={Path+'images/'+settingsData.greatest_img1}/></p>
                                </div>
                                <div className="nineth_image_div">
                                    <p><img src={Path+'images/'+settingsData.greatest_img2}/></p>
                                </div>
                                <div className="nineth_image_div">
                                    <p><img src={Path+'images/'+settingsData.greatest_img3}/></p>
                                </div>
                                <div className="nineth_image_div">
                                    <p><img src={Path+'images/'+settingsData.greatest_img4}/></p>
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
                            <li className="tl-item one" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per1}%</span>
                                <p className="road_line"></p>
                                <div className="item-title">{settingsData.roadmap_content1}</div>
                            </li>
                            <li className="tl-item two" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per2}%</span>
                                <p className="road_line"></p>
                                <div className="item-title">{settingsData.roadmap_content2}</div>
                            </li>
                            <li className="tl-item three" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per3}%</span>
                                <p className="road_line"></p>
                                <div className="item-title four">{settingsData.roadmap_content3}</div>
                            </li>
                            <li className="tl-item four" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per4}%</span>
                                <p className="road_line"></p>
                                <div className="item-title">{settingsData.roadmap_content4}</div>
                            </li>
                            <li className="tl-item five" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per5}%</span>
                                <p className="road_line fifty"></p>
                                <div className="item-title">{settingsData.roadmap_content5}</div>
                            </li>
                            <li className="tl-item six" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per6}%</span>
                                <p className="road_line"></p>
                                <div className="item-title">{settingsData.roadmap_content6}</div>
                            </li>
                            <li className="tl-item seven" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per7}%</span>
                                <p className="road_line"></p>
                                <div className="item-title">{settingsData.roadmap_content7}</div>
                            </li>
                            <li className="tl-item eight" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per8}%</span>
                                <p className="road_line eighty"></p>
                                <div className="item-title">{settingsData.roadmap_content8}</div>
                            </li>
                            <li className="tl-item nine" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per9}%</span>
                                <p className="road_line"></p>
                                <div className="item-title">{settingsData.roadmap_content9}</div>
                            </li>
                            <li className="tl-item ten" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per10}%</span>
                                <div className="item-title">{settingsData.roadmap_content10}</div>
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
                        <p>{settingsData.video_title}</p>
                    </div>
                    <div className="container video_section">
                        <iframe width="100%" height="300px" src={settingsData.video_link} title="YouTube video player" style={{borderRadius:"36px"}}></iframe>
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
                        <Accordion show title={settingsData.faq_title1}>
                        {settingsData.faq_content1}
                        </Accordion>
                        <Accordion title={settingsData.faq_title2}>
                        {settingsData.faq_content2} 
                        </Accordion>
                        <Accordion title={settingsData.faq_title3}>
                        {settingsData.faq_content3}

                        </Accordion>
                        <Accordion title={settingsData.faq_title4}>
                        {settingsData.faq_content4}
                        </Accordion>
                        <Accordion title={settingsData.faq_title5}>
                        {settingsData.faq_content5}
                        </Accordion>
                        <Accordion title={settingsData.faq_title6}>
                        {settingsData.faq_content6}
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
                                            <p><img src="images\rotating.png" /></p>
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
                                            <p><img src="images\rotating.png" /></p>
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
                                            <p><img src="images\rotating.png"/></p>
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
                                            <p><img src="images\rotating.png" /></p>
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
                                            <p><img src={Path+'images/'+settingsData.crypto_cunt_img}/></p>
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



