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
	const [logo, setLogo] = useState('');
	const [banner1, setBanner1] = useState('');
	const [banner2, setBanner2] = useState('');
	const [img1, setImg1] = useState('');
	const [img2, setImg2] = useState('');
	const [img3, setImg3] = useState('');
	const [img4, setImg4] = useState('');
	const [collect_img1, setCollectImg1] = useState('');
	const [collect_img2, setCollectImg2] = useState('');
	const [collect_img3, setCollectImg3] = useState('');
	const [collect_img4, setCollectImg4] = useState('');
	const [avatar1, setAvatar1] = useState('');
	const [avatar2, setAvatar2] = useState('');
	const [avatar3, setAvatar3] = useState('');
	const [greatest_img1, setGreatestImg1] = useState('');
	const [greatest_img2, setGreatestImg2] = useState('');
	const [greatest_img3, setGreatestImg3] = useState('');
	const [greatest_img4, setGreatestImg4] = useState('');

    // const [getCollContent1, setCollContent1] = useState('');
	// const [getCollContent2, setGreatestImg2] = useState('');
	// const [getCollContent3, setGreatestImg3] = useState('');
	// const [getCollContent4, setGreatestImg4] = useState('');
	// const [getGreatContent, setGreatContent] = useState('');

	const [crypto_cunt_img, setCryptoCuntImg] = useState('');
    const [ collect_content1,setCollectContent1] = useState(RichTextEditor.createEmptyValue());
    const [ collect_content2,setCollectContent2] = useState(RichTextEditor.createEmptyValue());
    const [ collect_content3,setCollectContent3] = useState(RichTextEditor.createEmptyValue());
    const [ collect_content4,setCollectContent4] = useState(RichTextEditor.createEmptyValue());
    const [ greatest_content,setGreatestContent] = useState(RichTextEditor.createEmptyValue());
	const [Opacity, setOpacity] = useState('1');
	const [PointerEvents, setPointerEvents] = useState('');
    const [notification, setNotification] = useState({success:'',failed:'',show_success:false,show_failed:false});
	const [Loader, setLoader] = useState(false);
	const [errors, setErrors] = useState('');
    const [settingsData, setSettingsData] = useState('');
    const [twitterValue, setTwitterValue] = useState('');
    const [instagramValue, setInstagramValue] = useState('');
    const [discordValue, setDiscordValue] = useState('');
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
          }
          else if(content.current.value===''){
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
          }
          else {
            setErrors('');
            formIsValid = true;
          }	
        return formIsValid;
    }
    const changeBanner1=(event)=>{
		setBanner1(event.target.files[0]);
    }
    const changeLogo=(event)=>{
		setLogo(event.target.files[0]);
    }
    const changeBanner2=(event)=>{
		setBanner2(event.target.files[0]);
    }
    const changeImg1=(event)=>{
		setImg1(event.target.files[0]);
    }
    const changeImg2=(event)=>{
		setImg2(event.target.files[0]);
    }
    const changeImg3=(event)=>{
		setImg3(event.target.files[0]);
    }
    const changeImg4=(event)=>{
		setImg4(event.target.files[0]);
    }
    const changeAvatar1=(event)=>{
		setAvatar1(event.target.files[0]);
    }
    const changeAvatar2=(event)=>{
		setAvatar2(event.target.files[0]);
    }
    const changeAvatar3=(event)=>{
		setAvatar3(event.target.files[0]);
    }
    const changeCollectImg1=(event)=>{
		setCollectImg1(event.target.files[0]);
    }
    const changeCollectImg2=(event)=>{
		setCollectImg2(event.target.files[0]);
    }
    const changeCollectImg3=(event)=>{
		setCollectImg3(event.target.files[0]);
    }
    const changeCollectImg4=(event)=>{
		setCollectImg4(event.target.files[0]);
    }
    const changeGreatestImg1=(event)=>{
		setGreatestImg1(event.target.files[0]);
    }
    const changeGreatestImg2=(event)=>{
		setGreatestImg2(event.target.files[0]);
    }
    const changeGreatestImg3=(event)=>{
		setGreatestImg3(event.target.files[0]);
    }
    const changeGreatestImg4=(event)=>{
		setGreatestImg4(event.target.files[0]);
    }
    const changeCryptoCuntImage=(event)=>{
		setCryptoCuntImg(event.target.files[0]);
    }
    const changeCollectContent1=(value)=>{
        setCollectContent1(value);
        value.toString('html');
    };
    const changeCollectContent2=(value)=>{
        setCollectContent2(value);
        value.toString('html');
    };
    const changeCollectContent3=(value)=>{
        setCollectContent3(value);
        value.toString('html');
    };
    const changeCollectContent4=(value)=>{
        setCollectContent4(value);
        value.toString('html');
    };
    const changeGreatestContent=(value)=>{
        setGreatestContent(value);
        value.toString('html');
    };
    const update_data=(event)=>{
        event.preventDefault();
        const data = new FormData();
        data.append('title', title.current.value);
        data.append('content', content.current.value);
        data.append('collect_title1', collect_title1.current.value);
        data.append('collect_title2', collect_title2.current.value);
        data.append('collect_title3', collect_title3.current.value);
        data.append('collect_title4', collect_title4.current.value);
        data.append('collect_content1', collect_content1._cache.html);
        data.append('collect_content2', collect_content2._cache.html);
        data.append('collect_content3', collect_content3._cache.html);
        data.append('collect_content4', collect_content4._cache.html);
        data.append('greatest_content', greatest_content._cache.html);
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
        data.append('logo', logo);
        data.append('banner1', banner1);
        data.append('banner2', banner1);
        data.append('collect_img1', collect_img1);
        data.append('collect_img2', collect_img2);
        data.append('collect_img3', collect_img3);
        data.append('collect_img4', collect_img4);
        data.append('avatar1', avatar1);
        data.append('avatar2', avatar2);
        data.append('avatar3', avatar3);
        data.append('img1', img1);
        data.append('img2', img2);
        data.append('img3', img3);
        data.append('img4', img4);
        data.append('greatest_img1', greatest_img1);
        data.append('greatest_img2', greatest_img2);
        data.append('greatest_img3', greatest_img3);
        data.append('greatest_img4', greatest_img4);
        data.append('crypto_cunt_img', crypto_cunt_img);
        data.append('token', localStorage.getItem('token'));
        if(handleValidation()){	
            setLoader(true);
            setOpacity('0.5');
            setPointerEvents('none');
            fetch(Path+"settings.php", {
                method: "POST",       
                body: data				
            })
            .then(res => res.json())
            .then(response=>{	
                setLoader(false);
                setOpacity('');
                setPointerEvents('');
                get_data();
                show_notification(response.notifications);
                }
            )
            .catch(err => {
                setLoader(false);
                setOpacity('');
                setPointerEvents('');
                setErrors('Some problem occured.');
                setTimeout(hide_notification, 4000);
                console.log('error',err);
                return err;
            })
        }
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
                setTwitterValue(response.updated_data.social_twitter);
                setInstagramValue(response.updated_data.social_instagram);
                setDiscordValue(response.updated_data.social_discord);
                title.current.value=response.updated_data.title;
                content.current.value=response.updated_data.content;
                collect_title1.current.value=response.updated_data.collect_title1;
                collect_title2.current.value=response.updated_data.collect_title2;
                collect_title3.current.value=response.updated_data.collect_title3;
                collect_title4.current.value=response.updated_data.collect_title4;
                // setCollectContent1(response.updated_data.collect_content1);
                // console.log('get',response.updated_data.collect_content1);
                // setCollContent1(response.updated_data.collect_content1);
                // setCollContent2(response.updated_data.collect_content1);
                // setCollContent3(response.updated_data.collect_content1);
                // setCollContent4(response.updated_data.collect_content1);
                // setCollContent5(response.updated_data.collect_content1);
                roadmap_per1.current.value=response.updated_data.roadmap_per1;
                roadmap_per2.current.value=response.updated_data.roadmap_per2;
                roadmap_per3.current.value=response.updated_data.roadmap_per3;
                roadmap_per4.current.value=response.updated_data.roadmap_per4;
                roadmap_per5.current.value=response.updated_data.roadmap_per5;
                roadmap_per6.current.value=response.updated_data.roadmap_per6;
                roadmap_per7.current.value=response.updated_data.roadmap_per7;
                roadmap_per8.current.value=response.updated_data.roadmap_per8;
                roadmap_per9.current.value=response.updated_data.roadmap_per9;
                roadmap_per10.current.value=response.updated_data.roadmap_per10;
                roadmap_content1.current.value=response.updated_data.roadmap_content1;
                roadmap_content2.current.value=response.updated_data.roadmap_content2;
                roadmap_content3.current.value=response.updated_data.roadmap_content3;
                roadmap_content4.current.value=response.updated_data.roadmap_content4;
                roadmap_content5.current.value=response.updated_data.roadmap_content5;
                roadmap_content6.current.value=response.updated_data.roadmap_content6;
                roadmap_content7.current.value=response.updated_data.roadmap_content7;
                roadmap_content8.current.value=response.updated_data.roadmap_content8;
                roadmap_content9.current.value=response.updated_data.roadmap_content9;
                roadmap_content10.current.value=response.updated_data.roadmap_content10;
                video_title.current.value=response.updated_data.video_title;
                video_link.current.value=response.updated_data.video_link;
                faq_title1.current.value=response.updated_data.faq_title1;
                faq_title2.current.value=response.updated_data.faq_title2;
                faq_title3.current.value=response.updated_data.faq_title3;
                faq_title4.current.value=response.updated_data.faq_title4;
                faq_title5.current.value=response.updated_data.faq_title5;
                faq_title6.current.value=response.updated_data.faq_title6;
                faq_content1.current.value=response.updated_data.faq_content1;
                faq_content2.current.value=response.updated_data.faq_content2;
                faq_content3.current.value=response.updated_data.faq_content3;
                faq_content4.current.value=response.updated_data.faq_content4;
                faq_content5.current.value=response.updated_data.faq_content5;
                faq_content6.current.value=response.updated_data.faq_content6;
			}
		)		
	}
    useEffect(() => {
        get_data();
    }, []);	
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
                            <img src={Path+'images/'+settingsData.logo} className="logoo"></img>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeLogo}></input>
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
                            <img src={Path+'images/'+settingsData.banner1} className="banner_img"></img>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeBanner1}></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change Banner2</h4>
                            <img src={Path+'images/'+settingsData.banner2} className="banner_img"></img>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeBanner2}></input>
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
                                    <img src={Path+'images/'+settingsData.img1} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeImg1}></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.img2} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeImg2}></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.img3} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeImg3}></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.img4} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeImg4}></input>
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
                                    <img src={Path+'images/'+settingsData.avatar1} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeAvatar1}></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.avatar2} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeAvatar2}></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.avatar3} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeAvatar3}></input>
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
                                    <img src={Path+'images/'+settingsData.collect_img1} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeCollectImg1}></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control"  ref={collect_title1}></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <RichTextEditor value={collect_content1} onChange={changeCollectContent1} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.collect_img2} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeCollectImg2}></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control"  ref={collect_title2}></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <RichTextEditor  value={collect_content2} onChange={changeCollectContent2} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.collect_img3} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeCollectImg3}></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control"  ref={collect_title3}></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <RichTextEditor  value={collect_content3} onChange={changeCollectContent3} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.collect_img4} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeCollectImg4}></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control" ref={collect_title4}></input>
                                            </div>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <RichTextEditor  value={collect_content4} onChange={changeCollectContent4} />
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
                                    <img src={Path+'images/'+settingsData.greatest_img1} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeGreatestImg1}></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.greatest_img2} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeGreatestImg2}></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.greatest_img3} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeGreatestImg3}></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.greatest_img4} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeGreatestImg4}></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop:"16px"}}>
                                    <label>Content</label>
                                    <RichTextEditor  value={greatest_content} onChange={changeGreatestContent} />
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
                                        <textarea className="form-control"  ref={video_title}></textarea>
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
                            <img src={Path+'images/'+settingsData.crypto_cunt_img} className="imgs"></img>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeCryptoCuntImage}></input>
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
