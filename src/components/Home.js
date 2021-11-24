import React,{useState,useEffect} from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { QuestionLg } from 'react-bootstrap-icons';
import { Accordion } from 'react-bootstrap-accordion';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { Path } from './admin/Path.js';

function Home()  {
    const [settingsData, setSettingsData] = useState('');
    const [active_class, setActiveClass] = useState('cryptocunt');
    const [currentDate, setCurrentDate] = useState('');
    const [faq, setFaq] = useState("");
    const [showCountDown, setShowCountDown] = useState(true);
    const get_countdown=(date_time)=>{
        var countDownDate = new Date(date_time).getTime();
        // Update the count down every 1 second
        var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
            
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        document.getElementById("countdown").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";
            
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            setShowCountDown(false);
        }
        }, 1000);
    }
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
            setFaq(response.updated_data.faq_content1);
            if(response.updated_data.cryptocunts==='1'){
                setActiveClass('cryptocunt');
            }else if(response.updated_data.evolved==='1'){
                setActiveClass('evolved');
            }else if(response.updated_data.ape==='1'){
                setActiveClass('ape');
            }else if(response.updated_data.famous==='1'){
                setActiveClass('famous');
            }else if(response.updated_data.gods==='1'){
                setActiveClass('gods');
            }
            if(response.updated_data.show_date_time!==''){
                get_countdown(response.updated_data.show_date_time);
            }
        }
		)		
	}
    const changeActiveClass = (value) => {
       setActiveClass(value);
    };
    useEffect(() => {
        get_data();
    }, [faq]);	
    return (
        <div className="container-fluid p-0" style={{background:"#0F1922"}}>
            <Navbar/>
            <div className="row landing_page" style={{width:"100%",margin:"0"}}>
            <div className="row banner_image" style={{width:"100%",margin:"0",padding:"0"}}>
            <div className="col-12 right_banner" style={{backgroundImage:"url('"+Path+"images/"+settingsData.banner1+"')"}}>
                
            </div>
            <div className="countdown">
                {showCountDown &&
                (<span id="countdown"></span>)}
                {!showCountDown &&
                (<button className="mint_now" style={{fontSize:settingsData.button_font+'px',fontWeight:settingsData.button_weight}}>MINT NOW</button>)}
            </div> 
            </div>
                <div className="banner">
                </div>
                <div className="second_section">
                    <h1 style={{fontSize:settingsData.head_font+'px',fontWeight:settingsData.head_weight,color:"white"}}>{settingsData.first_title}</h1>
                    <p><img  src={Path+'images/'+settingsData.banner2}/></p>
                    <h3 style={{fontSize:settingsData.title_font+'px',paddingTop:"20px",fontWeight:settingsData.title_weight}}>{settingsData.second_title}</h3>
                    <span style={{fontSize:settingsData.title_font+'px',fontWeight:settingsData.title_weight}}>{settingsData.title}</span> 
                    <h6 style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.content}</h6>
                    <div className="row" style={{margin:"0",width:"100%",paddingTop:"40px"}}>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div className="section1_img">
                                <img src={Path+'images/'+settingsData.img1}/>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div className="section1_img">
                                <img src={Path+'images/'+settingsData.img2}/>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div className="section1_img">
                                <img src={Path+'images/'+settingsData.img3}/>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <div className="section1_img">
                                <img src={Path+'images/'+settingsData.img4}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container third_section">
                        <div className="row" style={{margin:"0",width:"100%"}}>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 third_section_content">
                                <h5 style={{fontSize:settingsData.subtitle_font+'px',fontWeight:settingsData.subtitle_weight}}>{settingsData.section4_title}</h5>
                                <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.section4_content}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container fourth_section">
                        <h3 style={{fontSize:settingsData.title_font+'px',fontWeight:settingsData.title_weight}}>{settingsData.avatar_title}
                        </h3>
                        <div className="row" style={{margin:"0",width:"100%",textAlign:"center"}}>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 under_fourth_section1">
                                <p className="p-1"><img src={Path+'images/'+settingsData.avatar1}/></p>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 under_fourth">
                                <div className="line arrow-left"></div>
                                <p className="p-2"><img className="cent-img" src={Path+'images/'+settingsData.avatar2}/></p>
                                <div className="line2 arrow-right"></div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 under_fourth_section2">
                                <p className="p-3"><img src={Path+'images/'+settingsData.avatar3}/></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container fifth_section">
                        <h3 style={{fontSize:settingsData.title_font+'px',fontWeight:settingsData.title_weight}}>{settingsData.sec6_heading}</h3>
                        <div className="row" style={{margin:"0",width:"100%",textAlign:"center",paddingTop:"30px"}}>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 under_fifth1">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                        <img src={Path+'images/'+settingsData.collect_img1} alt="Avatar"/>
                                        </div>
                                        <div className="flip-card-back" dangerouslySetInnerHTML={{ __html: settingsData.collect_content1 }}  style={{fontSize:settingsData.list_font+'px',fontWeight:settingsData.list_weight}}>
                                            
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 under_fifth1">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                        <img src={Path+'images/'+settingsData.collect_img2} alt="Avatar"/>
                                        </div>
                                        <div className="flip-card-back" dangerouslySetInnerHTML={{ __html: settingsData.collect_content2 }}  style={{fontSize:settingsData.list_font+'px',fontWeight:settingsData.list_weight}}>
                                            
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 under_fifth1">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                        <img src={Path+'images/'+settingsData.collect_img3} alt="Avatar"/>
                                        </div>
                                        <div className="flip-card-back" dangerouslySetInnerHTML={{ __html: settingsData.collect_content3 }}  style={{fontSize:settingsData.list_font+'px',fontWeight:settingsData.list_weight}}>
                                           
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 under_fifth1">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                        <img src={Path+'images/'+settingsData.collect_img4} alt="Avatar"/>
                                        </div>
                                        <div className="flip-card-back" dangerouslySetInnerHTML={{ __html: settingsData.collect_content4 }}  style={{fontSize:settingsData.list_font+'px',fontWeight:settingsData.list_weight}}>
                                            
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%",background:"#12232D",padding:"50px 0px"}}>
                    <div className="container seventh_section">
                        <h3 style={{fontSize:settingsData.title_font+'px',color:"#72F595",paddingBottom:"20px",fontWeight:settingsData.title_weight}}>{settingsData.sec8_heading}</h3>
                        <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.sec8_content}</p>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container eighth_section">
                        <h3 style={{fontSize:settingsData.title_font+'px',color:"#72F595",paddingBottom:"20px",fontWeight:settingsData.title_weight}}>{settingsData.sec9_heading}</h3>
                        <p><img  src={Path+'images/'+settingsData.sec9_img}/></p>
                        <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.sec9_content}</p>
                        <h5 style={{fontSize:settingsData.subtitle_font+'px',color:"#72F595",marginTop:"50px",fontWeight:settingsData.subtitle_weight}}>{settingsData.sec10_heading}</h5>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container nineth_section">
                        <div className="row" style={{margin:"0",width:"100%"}}>


                        <div className="row" style={{margin:"0",width:"100%"}}>
                            {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <div className="nineth_image_div">
                                    <p><img src={Path+'images/'+settingsData.greatest_img1}/></p>
                                </div>
                            </div> */}
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="nineth_div_text" dangerouslySetInnerHTML={{ __html: settingsData.greatest_content }}>
                                </div>
                            </div>
                        </div>

                        {/* <div className="row" style={{margin:"0",width:"100%"}}>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <div className="nineth_image_div">
                                    <p><img src={Path+'images/'+settingsData.greatest_img2}/></p>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-xs-12">
                                <div className="nineth_div_text" dangerouslySetInnerHTML={{ __html: settingsData.greatest_content1 }}>
                                </div>
                            </div>
                        </div> */}

                        <div className="row" style={{margin:"0",width:"100%"}}>
                            {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <div className="nineth_image_div">
                                    <p><img src={Path+'images/'+settingsData.greatest_img3}/></p>
                                </div>
                            </div> */}
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="nineth_div_text" dangerouslySetInnerHTML={{ __html: settingsData.greatest_content1 }}>
                                </div>
                                <div className="row" style={{width:"100%",margin:"0"}}>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="nineth_image_div">
                                            <p><img src={Path+'images/'+settingsData.greatest_img1}/></p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="nineth_image_div">
                                            <p><img src={Path+'images/'+settingsData.greatest_img2}/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{margin:"0",width:"100%"}}>
                            {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <div className="nineth_image_div">
                                    <p><img src={Path+'images/'+settingsData.greatest_img4}/></p>
                                </div>
                            </div> */}
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="nineth_div_text" dangerouslySetInnerHTML={{ __html: settingsData.greatest_content2 }}>
                                </div>
                                <div className="row" style={{width:"100%",margin:"0"}}>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="nineth_image_div">
                                            <p><img src={Path+'images/'+settingsData.greatest_img3}/></p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="nineth_image_div">
                                            <p><img src={Path+'images/'+settingsData.greatest_img4}/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container tenth_section" style={{maxWidth:"800px"}}>
                        <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.text_under10}</p>
                    </div>
                </div>
                <div className="container roadmap">
                    <h3 style={{fontSize:settingsData.title_font+'px',color:"#ffffff",fontWeight:settingsData.title_weight}}>{settingsData.sec11_heading}</h3>
                    <div className="history-tl-container">
                        <ul className="tl">
                            <li className="tl-item one" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per1}%</span>
                                <p className="road_line"></p>
                                <div className="item-title" style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.roadmap_content1}</div>
                            </li>
                            <li className="tl-item two" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per2}%</span>
                                <p className="road_line"></p>
                                <div className="item-title" style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.roadmap_content2}</div>
                            </li>
                            <li className="tl-item three" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per3}%</span>
                                <p className="road_line"></p>
                                <div className="item-title four" style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.roadmap_content3}</div>
                            </li>
                            <li className="tl-item four" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per4}%</span>
                                <p className="road_line"></p>
                                <div className="item-title" style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.roadmap_content4}</div>
                            </li>
                            <li className="tl-item five" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per5}%</span>
                                <p className="road_line fifty"></p>
                                <div className="item-title" style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.roadmap_content5}</div>
                            </li>
                            <li className="tl-item six" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per6}%</span>
                                <p className="road_line"></p>
                                <div className="item-title" style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.roadmap_content6}</div>
                            </li>
                            <li className="tl-item seven" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per7}%</span>
                                <p className="road_line"></p>
                                <div className="item-title" style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.roadmap_content7}</div>
                            </li>
                            <li className="tl-item eight" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per8}%</span>
                                <p className="road_line eighty"></p>
                                <div className="item-title" style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.roadmap_content8}</div>
                            </li>
                            <li className="tl-item nine" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per9}%</span>
                                <p className="road_line"></p>
                                <div className="item-title" style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.roadmap_content9}</div>
                            </li>
                            <li className="tl-item ten" ng-repeat="item in retailer_history">
                                <span>{settingsData.roadmap_per10}%</span>
                                <div className="item-title" style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.roadmap_content10}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container eighth_section">
                        <h3 style={{fontSize:settingsData.title_font+'px',color:"#72F595",marginBottom:"0",paddingBottom:"20px",fontWeight:settingsData.title_weight}}>{settingsData.sec12_heading}</h3>
                        <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.sec12_content}</p>
                        <img  src={Path+'images/'+settingsData.sec12_img}/>
                    </div>
                </div>
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div style={{width:"820px",margin:"auto"}}>
                        <div className="eleventh_section">
                            <h3 style={{fontSize:settingsData.title_font+'px',color:"#72F595",marginBottom:"0",paddingBottom:"20px",fontWeight:settingsData.title_weight}}>{settingsData.sec13_heading}</h3>
                            <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.video_title}</p>
                        </div>
                        <div className="video_section">
                            <iframe width="100%" height="300px" src={settingsData.video_link} title="YouTube video player" style={{borderRadius:"36px"}}></iframe>
                        </div>
                    </div>
                </div>  
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container twelth_section">
                        <h3 style={{fontSize:settingsData.title_font+'px',color:"#72F595",marginBottom:"0",paddingBottom:"20px",fontWeight:settingsData.title_weight}}>{settingsData.sec14_heading}</h3>
                        <img  src={Path+'images/'+settingsData.sec14_img}/>
                        <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.sec14_content}</p>
                    </div>
                </div> 
                <div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container thirt_section">
                        <h3 style={{fontSize:settingsData.title_font+'px',color:"#72F595",marginBottom:"0",paddingBottom:"20px",fontWeight:settingsData.title_weight}}>{settingsData.sec15_heading}</h3>
                        <div className="accor1">
                            <Accordion show title={settingsData.faq_title1}>
                            <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{faq}</p>
                            </Accordion>
                        </div>
                        <Accordion title={settingsData.faq_title2}>
                        <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.faq_content2}</p> 
                        </Accordion>
                        <Accordion title={settingsData.faq_title3}>
                        <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.faq_content3}</p>

                        </Accordion>
                        <Accordion title={settingsData.faq_title4}>
                        <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.faq_content4}</p>
                        </Accordion>
                        <Accordion title={settingsData.faq_title5}>
                        <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.faq_content5}</p>
                        </Accordion>
                        <Accordion title={settingsData.faq_title6}>
                        <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.faq_content6}</p>
                        </Accordion>
                        <Accordion title={settingsData.faq_title7}>
                        <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.faq_content7}</p>
                        </Accordion>
                        <Accordion title={settingsData.faq_title8}>
                        <p style={{fontSize:settingsData.para_font+'px',fontWeight:settingsData.para_weight}}>{settingsData.faq_content8}</p>
                        </Accordion>
                    </div>
                </div>
                {(settingsData.cryptocunts ==='1' || settingsData.evolved ==='1' || settingsData.ape ==='1' ||settingsData.famous ==='1' ||settingsData.gods ==='1') &&
                (<div className="row" style={{margin:"0",width:"100%"}}>
                    <div className="container fourt_section" id="exTab1">
                        <h3 style={{fontSize:settingsData.title_font+'px',color:"#72F595",marginBottom:"0",fontWeight:settingsData.title_weight}}>{settingsData.sec16_heading}</h3>

                        <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                            {settingsData.cryptocunts==='1' &&
                            (<li className="nav-item" role="presentation" onClick={() => changeActiveClass('cryptocunt')}>
                                <a className={active_class==='cryptocunt' ? 'nav-link active' : 'nav-link '}>CryptoCunt</a>
                            </li>)}
                            {settingsData.evolved==='1' &&
                            (<li className="nav-item" role="presentation" onClick={() => changeActiveClass('evolved')}>
                                <a className={active_class==='evolved' ? 'nav-link active' : 'nav-link '}>Evolved</a>
                            </li>)}
                            {settingsData.ape==='1' &&
                            (<li className="nav-item" role="presentation" onClick={() => changeActiveClass('ape')}>
                                <a className={active_class==='ape' ? 'nav-link active' : 'nav-link '}>Anonymous Ape</a>
                            </li>)}
                            {settingsData.famous==='1' &&
                            (<li className="nav-item" role="presentation" onClick={() => changeActiveClass('famous')}>
                                <a className={active_class==='famous' ? 'nav-link active' : 'nav-link '}>Famous CryptoCunt</a>
                            </li>)}
                            {settingsData.gods==='1' &&
                            (<li className="nav-item" role="presentation" onClick={() => changeActiveClass('gods')}>
                                <a className={active_class==='gods' ? 'nav-link active' : 'nav-link '}>CryptoCunt Gods</a>
                            </li>)}
                        </ul>
                        <div className="tab-content" id="ex1-content">
                            <div className={active_class==='cryptocunt' ? 'under_tab_content tab-pane fade show active' : 'under_tab_content tab-pane fade'}>
                                <h3 style={{fontSize:settingsData.title_font+'px',color:"#72F595",marginBottom:"0",paddingBottom:"40px",fontWeight:settingsData.title_weight}}>CryptoCunts</h3>
                                <div className="row" style={{width:"100%",margin:"0"}}>
                                    <div className="col-xl-6" dangerouslySetInnerHTML={{ __html: settingsData.crypto_cunt_content }}  style={{fontSize:settingsData.list_font+'px',fontWeight:settingsData.list_weight}}>
                                    </div>
                                    <div className="col-xl-6">
                                        <p><img src={Path+'images/'+settingsData.crypto_cunt_img} /></p>
                                    </div>
                                </div>
                            </div>
                            <div className={active_class==='evolved' ? 'under_tab_content tab-pane fade show active' : 'under_tab_content tab-pane fade'}>
                                <h3 style={{fontSize:settingsData.title_font+'px',color:"#72F595",marginBottom:"0",paddingBottom:"40px",fontWeight:settingsData.title_weight}}>Evolved</h3>
                                <div className="row" style={{width:"100%",margin:"0"}}>
                                    <div className="col-xl-6" dangerouslySetInnerHTML={{ __html: settingsData.evolved_content }}  style={{fontSize:settingsData.list_font+'px',fontWeight:settingsData.list_weight}}>
                                    </div>
                                    <div className="col-xl-6">
                                        <p><img src={Path+'images/'+settingsData.evolved_img} /></p>
                                    </div>
                                </div>
                            </div>
                            <div className={active_class==='ape' ? 'under_tab_content tab-pane fade show active' : 'under_tab_content tab-pane fade'}>
                                <h3 style={{fontSize:settingsData.title_font+'px',color:"#72F595",marginBottom:"0",paddingBottom:"40px",fontWeight:settingsData.title_weight}}>Anonymous Ape</h3>
                                <div className="row" style={{width:"100%",margin:"0"}}>
                                    <div className="col-xl-6" dangerouslySetInnerHTML={{ __html: settingsData.ape_content }}  style={{fontSize:settingsData.list_font+'px',fontWeight:settingsData.list_weight}}>
                                    </div>
                                    <div className="col-xl-6">
                                        <p><img src={Path+'images/'+settingsData.ape_img} /></p>
                                    </div>
                                </div>
                            </div>
                            <div className={active_class==='famous' ? 'under_tab_content tab-pane fade show active' : 'under_tab_content tab-pane fade'}>
                                <h3 style={{fontSize:settingsData.title_font+'px',color:"#72F595",marginBottom:"0",paddingBottom:"40px",fontWeight:settingsData.title_weight}}>Famous CryptoCunt</h3>
                                <div className="row" style={{width:"100%",margin:"0"}}>
                                    <div className="col-xl-6" dangerouslySetInnerHTML={{ __html: settingsData.famous_content }}  style={{fontSize:settingsData.list_font+'px',fontWeight:settingsData.list_weight}}>
                                    </div>
                                    <div className="col-xl-6">
                                        <p><img src={Path+'images/'+settingsData.famous_img} /></p>
                                    </div>
                                </div>
                            </div>
                            <div className={active_class==='gods' ? 'under_tab_content tab-pane fade show active' : 'under_tab_content tab-pane fade'}>
                                <h3 style={{fontSize:settingsData.title_font+'px',color:"#72F595",marginBottom:"0",paddingBottom:"40px",fontWeight:settingsData.title_weight}}>CryptoCunt Gods</h3>
                                <div className="row" style={{width:"100%",margin:"0"}}>
                                    <div className="col-xl-6" dangerouslySetInnerHTML={{ __html: settingsData.gods_content }}  style={{fontSize:settingsData.list_font+'px',fontWeight:settingsData.list_weight}}>
                                    </div>
                                    <div className="col-xl-6">
                                        <p><img src={Path+'images/'+settingsData.gods_img} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="mint_now" style={{fontSize:settingsData.button_font+'px',fontWeight:settingsData.button_weight}}>MINT NOW</button>
                    </div>
                </div>)}

            </div>
            <Footer/>
        </div>
    );
}
export default Home;



