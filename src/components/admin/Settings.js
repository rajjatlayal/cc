import React,{useState,useRef,useEffect} from "react";
import {useHistory } from "react-router-dom";
import Sidebar from './Sidebar';
import AdminNavbar from './AdminNavbar';
//import file from './settings.json';
import { GearFill } from 'react-bootstrap-icons';
import RichTextEditor from 'react-rte';
import { Path } from './Path.js';
// const fs = require('fs');
//const jsonfile = require('jsonfile');
// const editJsonFile = require("edit-json-file");
// let file = editJsonFile(`./settings.json`);

function Settings()  {
    let history = useHistory();
    const title = useRef(null);
    const content = useRef(null);
    const collect_title1 = useRef(null);
    const collect_title2 = useRef(null);
    const collect_title3 = useRef(null);
    const collect_title4 = useRef(null);
    const roadmap_per1 = useRef(null);
    const roadmap_per2 = useRef(null);
    const roadmap_per3 = useRef(null);
    const roadmap_per4 = useRef(null);
    const roadmap_per5 = useRef(null);
    const roadmap_per6 = useRef(null);
    const roadmap_per7 = useRef(null);
    const roadmap_per8 = useRef(null);
    const roadmap_per9 = useRef(null);
    const roadmap_per10 = useRef(null);
    const roadmap_content1 = useRef(null);
    const roadmap_content2 = useRef(null);
    const roadmap_content3 = useRef(null);
    const roadmap_content4 = useRef(null);
    const roadmap_content5 = useRef(null);
    const roadmap_content6 = useRef(null);
    const roadmap_content7 = useRef(null);
    const roadmap_content8 = useRef(null);
    const roadmap_content9 = useRef(null);
    const roadmap_content10 = useRef(null);
    const video_title = useRef(null);
    const video_link = useRef(null);
    const faq_title1 = useRef(null);
    const faq_title2 = useRef(null);
    const faq_title3 = useRef(null);
    const faq_title4 = useRef(null);
    const faq_title5 = useRef(null);
    const faq_title6 = useRef(null);
    const faq_content1 = useRef(null);
    const faq_content2 = useRef(null);
    const faq_content3 = useRef(null);
    const faq_content4 = useRef(null);
    const faq_content5 = useRef(null);
    const faq_content6 = useRef(null);
    const [ value ] = useState(RichTextEditor.createEmptyValue());
	const [Opacity, setOpacity] = useState('1');
	const [PointerEvents, setPointerEvents] = useState('');
    const [notification, setNotification] = useState({success:'',failed:'',show_success:false,show_failed:false});
	const [Loader, setLoader] = useState(false);
	const [errors, setErrors] = useState('');
    const hide_notification=()=>{
      setNotification({sucess:'',failed:'',show_failed:false,show_success:false});
      setErrors('');
    }
    const show_notification=(response)=>{	   
	   if(response.failed!=null){
		   setNotification({success:'',failed:global.siteText[0][response.failed],show_failed:true,show_success:false});
	   }else if(response.success!=null){
		   setNotification({success:response.success,failed:'',show_failed:false,show_success:true});
	   }
	   setTimeout(hide_notification, 4000);
    }
    const handleValidation=()=>{
        let formIsValid = false;
          if(title.current.value===''){
            setErrors('Please enter title');		   
          }else if(content.current.value===''){
            setErrors('Please enter content');	
          }else if(collect_title1.current.value===''){
            setErrors('Please enter collection title1');	
          }else if(collect_title2.current.value===''){
            setErrors('Please enter collection title2');	
          }else if(collect_title3.current.value===''){
            setErrors('Please enter collection title3');	
          }else if(collect_title4.current.value===''){
            setErrors('Please enter collection title4');	
          }else if(roadmap_per1.current.value===''){
            setErrors('Please enter roadmap percentage1');	
          }else if(roadmap_per2.current.value===''){
            setErrors('Please enter roadmap percentage2');	
          }else if(roadmap_per3.current.value===''){
            setErrors('Please enter roadmap percentage3');	
          }else if(roadmap_per4.current.value===''){
            setErrors('Please enter roadmap percentage4');	
          }else if(roadmap_per5.current.value===''){
            setErrors('Please enter roadmap percentage5');	
          }else if(roadmap_per6.current.value===''){
            setErrors('Please enter roadmap percentage6');	
          }else if(roadmap_per7.current.value===''){
            setErrors('Please enter roadmap percentage7');	
          }else if(roadmap_per8.current.value===''){
            setErrors('Please enter roadmap percentage8');	
          }else if(roadmap_per9.current.value===''){
            setErrors('Please enter roadmap percentage9');	
          }else if(roadmap_per10.current.value===''){
            setErrors('Please enter roadmap percentage10');	
          }else if(roadmap_content1.current.value===''){
            setErrors('Please enter roadmap content1');	
          }else if(roadmap_content2.current.value===''){
            setErrors('Please enter roadmap content2');	
          }else if(roadmap_content3.current.value===''){
            setErrors('Please enter roadmap content3');	
          }else if(roadmap_content4.current.value===''){
            setErrors('Please enter roadmap content4');	
          }else if(roadmap_content5.current.value===''){
            setErrors('Please enter roadmap content5');	
          }else if(roadmap_content6.current.value===''){
            setErrors('Please enter roadmap content6');	
          }else if(roadmap_content7.current.value===''){
            setErrors('Please enter roadmap content7');	
          }else if(roadmap_content8.current.value===''){
            setErrors('Please enter roadmap content8');	
          }else if(roadmap_content9.current.value===''){
            setErrors('Please enter roadmap content9');	
          }else if(roadmap_content10.current.value===''){
            setErrors('Please enter roadmap content10');	
          }else if(video_title.current.value===''){
            setErrors('Please enter video title');	
          }else if(video_link.current.value===''){
            setErrors('Please enter video link');	
          }else if(faq_title1.current.value===''){
            setErrors('Please enter faq question1');	
          }else if(faq_title2.current.value===''){
            setErrors('Please enter faq question2');	
          }else if(faq_title3.current.value===''){
            setErrors('Please enter faq question3');	
          }else if(faq_title4.current.value===''){
            setErrors('Please enter faq question4');	
          }else if(faq_title5.current.value===''){
            setErrors('Please enter faq question5');	
          }else if(faq_title6.current.value===''){
            setErrors('Please enter faq question6');	
          }else if(faq_content1.current.value===''){
            setErrors('Please enter faq answer1');	
          }else if(faq_content2.current.value===''){
            setErrors('Please enter faq answer2');	
          }else if(faq_content3.current.value===''){
            setErrors('Please enter faq answer3');	
          }else if(faq_content4.current.value===''){
            setErrors('Please enter faq answer4');	
          }else if(faq_content5.current.value===''){
            setErrors('Please enter faq answer5');	
          }else if(faq_content6.current.value===''){
            setErrors('Please enter faq answer6');	
          }else {
            setErrors('');
            formIsValid = true;
          }	
        return formIsValid;
    }
    const update_data=(event)=>{
        event.preventDefault();
        const data = new FormData();
        if(handleValidation()){	
            data.append('title', title.current.value);
            data.append('content', content.current.value);
            data.append('collect_title1', collect_title1.current.value);
            data.append('collect_title2', collect_title2.current.value);
            data.append('collect_title3', collect_title3.current.value);
            data.append('collect_title4', collect_title4.current.value);
            data.append('roadmap_per1', roadmap_per1.current.value);
            data.append('roadmap_per2', roadmap_per2.current.value);
            data.append('roadmap_per3', roadmap_per3.current.value);
            data.append('roadmap_per4', roadmap_per4.current.value);
            data.append('roadmap_per5', roadmap_per5.current.value);
            data.append('roadmap_per6', roadmap_per6.current.value);
            data.append('roadmap_per7', roadmap_per7.current.value);
            data.append('roadmap_per8', roadmap_per8.current.value);
            data.append('roadmap_per9', roadmap_per9.current.value);
            data.append('roadmap_per10', roadmap_per10.current.value);
            data.append('roadmap_content1', roadmap_content1.current.value);
            data.append('roadmap_content2', roadmap_content2.current.value);
            data.append('roadmap_content3', roadmap_content3.current.value);
            data.append('roadmap_content4', roadmap_content4.current.value);
            data.append('roadmap_content5', roadmap_content5.current.value);
            data.append('roadmap_content6', roadmap_content6.current.value);
            data.append('roadmap_content7', roadmap_content7.current.value);
            data.append('roadmap_content8', roadmap_content8.current.value);
            data.append('roadmap_content9', roadmap_content9.current.value);
            data.append('roadmap_content10', roadmap_content10.current.value);
            data.append('video_title', video_title.current.value);
            data.append('video_link', video_link.current.value);
            data.append('faq_title1', faq_title1.current.value);
            data.append('faq_title2', faq_title2.current.value);
            data.append('faq_title3', faq_title3.current.value);
            data.append('faq_title4', faq_title4.current.value);
            data.append('faq_title5', faq_title5.current.value);
            data.append('faq_title6', faq_title6.current.value);
            data.append('faq_content1', faq_content1.current.value);
            data.append('faq_content2', faq_content2.current.value);
            data.append('faq_content3', faq_content3.current.value);
            data.append('faq_content4', faq_content4.current.value);
            data.append('faq_content5', faq_content5.current.value);
            data.append('faq_content6', faq_content6.current.value);
            data.append('token', localStorage.getItem('token'));


          setLoader(true);
          setOpacity('0.5');
          setPointerEvents('none');
          fetch(Path+"settings.php", {
            method: "POST",       
            body: data				
          })
          .then(res => res.json())
          .then(response=>{
            //console.log(response);	
            setLoader(false);
            setOpacity('');
            setPointerEvents('');
            }
          )
          .catch(err => {
            setLoader(false);
            setOpacity('');
            setPointerEvents('');
            setErrors('Some problem occured.');
            setTimeout(hide_notification, 4000);
            return err;
          })
        }
    }	
    return (
        <>
        <AdminNavbar/>
        <div className="row main_row" style={{background:"#E9EDF2",width:"100%",margin:"0"}}>
            <div className="col-xl-2 col-lg-3 col-md-3" style={{paddingRight:"0",paddingLeft:"0"}}>
                <Sidebar/>
            </div>
            <div className="col-xl-10 col-lg-9 col-md-9" style={{paddingLeft:"0",paddingRight:"0"}}>
                <h3 className="page_head"><span><GearFill size={18} color="#4B4B4B" /></span> Settings</h3>
                <div className="row" style={{width:"100%",margin:"0",paddingTop:"20px"}}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change Logo</h4>
                            <p className="logo"><span>Logo</span></p>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Social Links</h4>
                            <form>
                                <div className="settings_form_data">
                                    <div className="checkbox_div">
                                        <input type="checkbox" className="form-control social_links_checkbox" defaultChecked="checked"></input><label>Twitter</label>
                                    </div>
                                    <div className="checkbox_div">
                                        <input type="checkbox" className="form-control social_links_checkbox"></input><label>Discord</label>
                                    </div>
                                    <div className="checkbox_div">
                                        <input type="checkbox" className="form-control social_links_checkbox"></input><label>Instagram</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change Banner1</h4>
                            <p className="logo"><span>Banner</span></p>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change Banner2</h4>
                            <p className="logo"><span>Banner</span></p>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change Title, Content & Images</h4>
                            <form>
                                <div className="settings_form_data">
                                    <div className="form_data">
                                        <label className="form_label">Title</label>
                                        <input type="text" className="form-control" ref={title}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" ref={content}></textarea>
                                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>1</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>2</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>3</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>4</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change cool avatar</h4>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>1</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>2</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>3</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change cryptocunts collections</h4>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image</p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control"  ref={collect_title1}></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <RichTextEditor value={value} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image</p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control"  ref={collect_title2}></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <RichTextEditor value={value} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image</p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control"  ref={collect_title3}></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <RichTextEditor value={value} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image</p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control" ref={collect_title4}></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <RichTextEditor value={value} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change details of the greatest roadmap</h4>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>1</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>2</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>3</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                        <p className="logo" style={{margin:"16px auto 18px"}}>Image <span>4</span></p>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop:"16px"}}>
                                    <label>Content</label>
                                    <RichTextEditor value={value} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change roadmap moments</h4>
                            <form>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control"  ref={roadmap_per1}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control"  ref={roadmap_content1}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control"  ref={roadmap_per2}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" ref={roadmap_content2}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control"  ref={roadmap_per3}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control"  ref={roadmap_content3}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control"  ref={roadmap_per4}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control"  ref={roadmap_content4}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control"  ref={roadmap_per5}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control"  ref={roadmap_content5}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control"  ref={roadmap_per6}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control"  ref={roadmap_content6}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control"  ref={roadmap_per7}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control"  ref={roadmap_content7}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control"  ref={roadmap_per8}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control"  ref={roadmap_content8}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control"  ref={roadmap_per9}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control"  ref={roadmap_content9}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Percent</label>
                                        <input type="text" className="form-control"  ref={roadmap_per10}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control"  ref={roadmap_content10}></textarea>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change video game</h4>
                            <form>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">title</label>
                                        <input type="text" className="form-control"  ref={video_title}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Link</label>
                                        <input type="text" className="form-control" ref={video_link}></input>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change FAQs</h4>
                            <form>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Question 1</label>
                                        <input type="text" className="form-control" ref={faq_title1}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Answer</label>
                                        <textarea className="form-control"  ref={faq_content1}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Question 2</label>
                                        <input type="text" className="form-control" ref={faq_title2}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Answer</label>
                                        <textarea className="form-control"  ref={faq_content2}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Question 3</label>
                                        <input type="text" className="form-control"  ref={faq_title3}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Answer</label>
                                        <textarea className="form-control"  ref={faq_content3}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Question 4</label>
                                        <input type="text" className="form-control"  ref={faq_title4}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Answer</label>
                                        <textarea className="form-control"  ref={faq_content4}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Question 5</label>
                                        <input type="text" className="form-control"  ref={faq_title5}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Answer</label>
                                        <textarea className="form-control"  ref={faq_content5}></textarea>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form_data">
                                        <label className="form_label">Question 6</label>
                                        <input type="text" className="form-control"  ref={faq_title6}></input>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Answer</label>
                                        <textarea className="form-control"  ref={faq_content6}></textarea>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change cryptocunt image</h4>
                            <p className="logo"><span>Image</span></p>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      {notification.show_success ? (<div className="alert alert-success" id="success2">{notification.success}
                        <button type="button" className="close" data-dismiss="alert"></button>
                      </div>) : ('')}		
                      {notification.show_failed ? (<div className="alert alert-danger" id="danger2">{notification.failed}
                        <button type="button" className="close" data-dismiss="alert"></button>
                      </div>) : ('')}
                      {errors ?(<div className="alert alert-danger" style={{color: "#721c24"}}>{errors}</div>):('')}
                        <div className="settings_div">
                            <form>
                                <div className="settings_form_data" style={{justifyContent:"right"}}>
                                    <button className="form_btn" style={{opacity:Opacity,pointerEvents:PointerEvents}} onClick={update_data}>
                                        {Loader ? (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>): ('')} Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Settings;
