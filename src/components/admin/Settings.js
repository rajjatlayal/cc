import React,{useState,useRef,useEffect} from "react";
import {useHistory } from "react-router-dom";
import Sidebar from './Sidebar';
import AdminNavbar from './AdminNavbar';
import { GearFill,ToggleOn,ToggleOff } from 'react-bootstrap-icons';
import { Path } from './Path.js';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';
function Settings()  {
    let history = useHistory();
    const title = useRef(null);
    const content = useRef(null);
    const section4_title = useRef(null);
    const section4_content = useRef(null);
    // const collect_title1 = useRef(null);
    // const collect_title2 = useRef(null);
    // const collect_title3 = useRef(null);
    // const collect_title4 = useRef(null);
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
    const title_font = useRef(null);
    const para_font = useRef(null);
    const list_font = useRef(null);
    const subtitle_font = useRef(null);
    const button_font = useRef(null);
    const title_weight = useRef(null);
    const para_weight = useRef(null);
    const list_weight = useRef(null);
    const subtitle_weight = useRef(null);
    const button_weight = useRef(null);
    const head_font = useRef(null);
    const head_weight = useRef(null);
    const date_time = useRef(null);

    const first_title = useRef(null);
    const second_title = useRef(null);
    const avatar_title = useRef(null);
    const sec6_heading = useRef(null);
    //const sec7_heading = useRef(null);
    const sec10_heading = useRef(null);
    const sec11_heading = useRef(null);
    const sec13_heading = useRef(null);
    const sec15_heading = useRef(null);
    const sec16_heading = useRef(null);
    // const sec17_heading = useRef(null);
    const sec8_heading = useRef(null);
    const sec8_content = useRef(null);
    const sec9_heading = useRef(null);
    const sec9_content = useRef(null);
    const sec12_heading = useRef(null);
    const sec12_content = useRef(null);
    const sec14_heading = useRef(null);
    const sec14_content = useRef(null);
    const text_under10 = useRef(null);


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
	const [crypto_cunt_img, setCryptoCuntImg] = useState('');
	//const [section4Img, setSection4Img] = useState('');
	const [giveImg1, setGiveImg1] = useState('');
	const [giveImg2, setGiveImg2] = useState('');
	const [giveImg3, setGiveImg3] = useState('');
	const [sec14Img, setSec14Img] = useState('');
	const [sec12Img, setSec12Img] = useState('');
	const [sec9Img, setSec9Img] = useState('');
    const [ collect_content1,setCollectContent1] = useState('');
    const [ collect_content2,setCollectContent2] = useState('');
    const [ collect_content3,setCollectContent3] = useState('');
    const [ collect_content4,setCollectContent4] = useState('');
    const [ greatest_content,setGreatestContent] = useState('');
    const [ greatest_content1,setGreatestContent1] = useState('');
    const [ greatest_content2,setGreatestContent2] = useState('');
    const [ greatest_content3,setGreatestContent3] = useState('');
    const [ crypto_cunt_content,setCryptoCuntContent] = useState('');
    //const [ give_content,setGiveContent] = useState('');
	const [Opacity, setOpacity] = useState('1');
	const [PointerEvents, setPointerEvents] = useState('');
    const [notification, setNotification] = useState({success:'',failed:'',show_success:false,show_failed:false});
	const [Loader, setLoader] = useState(false);
	const [errors, setErrors] = useState('');
    const [settingsData, setSettingsData] = useState('');
    const [twitterValue, setTwitterValue] = useState(false);
    const [instagramValue, setInstagramValue] = useState(false);
    const [discordValue, setDiscordValue] = useState(false);
    const [cryptocunt, setCryptoCunt] = useState(false);
    const [ape, setApe] = useState(false);
    const [famous, setFamous] = useState(false);
    const [gods, setGods] = useState(false);
    const [evolved, setEvolved] = useState(false);
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
       get_data();
	   setTimeout(hide_notification, 4000);
    }
    const handleValidation=()=>{
        let formIsValid = false;
          if(first_title.current.value===''){
            setErrors('Please enter first title');		   
          }else if(second_title.current.value===''){
            setErrors('Please enter second title');		   
          }else if(title.current.value===''){
            setErrors('Please enter third title');		   
          }else if(content.current.value===''){
            setErrors('Please enter content');	
          }else if(section4_title.current.value===''){
            setErrors('Please enter content');	
          }else if(section4_content.current.value===''){
            setErrors('Please enter content');	
          }else if(avatar_title.current.value===''){
            setErrors('Please enter heading for section 5');	
          }else if(sec6_heading.current.value===''){
            setErrors('Please enter heading for section 6');	
          }else if(collect_content1===''){
            setErrors('Please enter collection content1');	
          }else if(collect_content2===''){
            setErrors('Please enter collection content2');	
          }else if(collect_content3===''){
            setErrors('Please enter collection content3');	
          }else if(collect_content4===''){
            setErrors('Please enter content for section 4.');	
          }else if(sec8_heading.current.value===''){
            setErrors('Please enter heading for section 8');	
          }else if(sec8_content.current.value===''){
            setErrors('Please enter content for section 8');	
          }else if(sec9_heading.current.value===''){
            setErrors('Please enter heading for section 9');	
          }else if(sec9_content.current.value===''){
            setErrors('Please enter content for section 9');	
          }else if(sec10_heading.current.value===''){
            setErrors('Please enter heading for section 10');	
          }else if(greatest_content===''){
            setErrors('Please enter greatest roadmap content');	
          }else if(greatest_content1===''){
            setErrors('Please enter greatest roadmap content');	
          }else if(greatest_content2===''){
            setErrors('Please enter greatest roadmap content');	
          }else if(greatest_content3===''){
            setErrors('Please enter greatest roadmap content');	
          }else if(sec11_heading.current.value===''){
            setErrors('Please enter heading for section 11');	
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
          }else if(sec12_heading.current.value===''){
            setErrors('Please enter heading for section 12');	
          }else if(sec12_content.current.value===''){
            setErrors('Please enter content for section 12');	
          }else if(sec13_heading.current.value===''){
            setErrors('Please enter heading for section 13');	
          }else if(video_title.current.value===''){
            setErrors('Please enter video title');	
          }else if(video_link.current.value===''){
            setErrors('Please enter video link');	
          }else if(sec14_heading.current.value===''){
            setErrors('Please enter heading for section 14');	
          }else if(sec14_content.current.value===''){
            setErrors('Please enter content for section 14');	
          }else if(sec15_heading.current.value===''){
            setErrors('Please enter heading for section 15');	
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
          }else if(sec16_heading.current.value===''){
            setErrors('Please enter heading for section 16');	
          }else if(crypto_cunt_content===''){
            setErrors('Please enter cryptocunt content.');	
          }else if(head_font.current.value===''){
            setErrors('Please enter font size for first heading.');	
          }else if(head_weight.current.value===''){
            setErrors('Please enter font weight for first heading.');	
          }else if(title_font.current.value===''){
            setErrors('Please enter font size for titles.');	
          }else if(title_weight.current.value===''){
            setErrors('Please enter font weight for titles.');	
          }else if(subtitle_font.current.value===''){
            setErrors('Please enter font size for subtitles.');	
          }else if(subtitle_weight.current.value===''){
            setErrors('Please enter font weight for subtitles.');	
          }else if(para_font.current.value===''){
            setErrors('Please enter font size for paragraphs.');	
          }else if(para_weight.current.value===''){
            setErrors('Please enter font weight for paragraphs.');	
          }else if(list_font.current.value===''){
            setErrors('Please enter font size for lists.');	
          }else if(list_weight.current.value===''){
            setErrors('Please enter font weight for lists.');	
          }else if(button_font.current.value===''){
            setErrors('Please enter font size for buttons.');	
          }else if(button_weight.current.value===''){
            setErrors('Please enter font weight for buttons.');	
          }else if(date_time.current.value===''){
            setErrors('Please enter date/time for countdown timer.');	
          }else {
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
    // const changeSection4Img=(event)=>{
	// 	setSection4Img(event.target.files[0]);
    // }
    // const changeGiveImg1=(event)=>{
	// 	setGiveImg1(event.target.files[0]);
    // }
    // const changeGiveImg2=(event)=>{
	// 	setGiveImg2(event.target.files[0]);
    // }
    // const changeGiveImg3=(event)=>{
	// 	setGiveImg3(event.target.files[0]);
    // }
    const changeSec9Img=(event)=>{
		setSec9Img(event.target.files[0]);
    }
    const changeSec12Img=(event)=>{
		setSec12Img(event.target.files[0]);
    }
    const changeSec14Img=(event)=>{
		setSec14Img(event.target.files[0]);
    }
    const changeCollectContent1=(value)=>{
        setCollectContent1(value);
    };
    const changeCollectContent2=(value)=>{
        setCollectContent2(value);
    };
    const changeCollectContent3=(value)=>{
        setCollectContent3(value);
    };
    const changeCollectContent4=(value)=>{
        setCollectContent4(value);
    };
    const changeGreatestContent=(value)=>{
        setGreatestContent(value);
    };
    const changeGreatestContent1=(value)=>{
        setGreatestContent1(value);
    };
    const changeGreatestContent2=(value)=>{
        setGreatestContent2(value);
    };
    const changeGreatestContent3=(value)=>{
        setGreatestContent3(value);
    };
    const changeTwitterValue=()=>{
        setTwitterValue(!twitterValue);
    };
    const changeInstagramValue=()=>{
        setInstagramValue(!instagramValue);
    };
    const changeDiscordValue=()=>{
        setDiscordValue(!discordValue);
    };
    // const changeGiveContent=(value)=>{
    //     setGiveContent(value);
    // };
    const changeCryptoCuntContent=(value)=>{
        setCryptoCuntContent(value);
    };
    const changeGods=()=>{
        setGods(!gods);
    };
    const changeEvolved=()=>{
        setEvolved(!evolved);
    };
    const changeFamous=()=>{
        setFamous(!famous);
    };
    const changeApe=()=>{
        setApe(!ape);
    };
    const changeCryptoCunt=()=>{
        setCryptoCunt(!cryptocunt);
    };
    const update_data=(event)=>{
        event.preventDefault();
        const data = new FormData();
        data.append('first_title', first_title.current.value);
        data.append('second_title', second_title.current.value);
        data.append('avatar_title', avatar_title.current.value);
        data.append('sec6_heading', sec6_heading.current.value);
        //data.append('sec7_heading', sec7_heading.current.value);
        data.append('sec10_heading', sec10_heading.current.value);
        data.append('sec11_heading', sec11_heading.current.value);
        data.append('sec13_heading', sec13_heading.current.value);
        data.append('sec15_heading', sec15_heading.current.value);
        data.append('sec16_heading', sec16_heading.current.value);
        // data.append('sec17_heading', sec17_heading.current.value);
        data.append('sec8_heading', sec8_heading.current.value);
        data.append('sec8_content', sec8_content.current.value);
        data.append('sec9_heading', sec9_heading.current.value);
        data.append('sec9_content', sec9_content.current.value);
        data.append('sec12_heading', sec12_heading.current.value);
        data.append('sec12_content', sec12_content.current.value);
        data.append('sec14_heading', sec14_heading.current.value);
        data.append('sec14_content', sec14_content.current.value);
        data.append('text_under10', text_under10.current.value);
        
        data.append('title', title.current.value);
        data.append('content', content.current.value);
        data.append('section4_title', section4_title.current.value);
        data.append('section4_content', section4_content.current.value);
        // data.append('collect_title1', collect_title1.current.value);
        // data.append('collect_title2', collect_title2.current.value);
        // data.append('collect_title3', collect_title3.current.value);
        // data.append('collect_title4', collect_title4.current.value);
        data.append('collect_content1', collect_content1);
        data.append('collect_content2', collect_content2);
        data.append('collect_content3', collect_content3);
        data.append('collect_content4', collect_content4);
        //data.append('give_content', give_content);
        data.append('cryptocunt_content', crypto_cunt_content);
        data.append('greatest_content', greatest_content);
        data.append('greatest_content1', greatest_content1);
        data.append('greatest_content2', greatest_content2);
        data.append('greatest_content3', greatest_content3);
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
        data.append('twitter', twitterValue);
        data.append('discord', discordValue);
        data.append('instagram', instagramValue);
        data.append('logo', logo);
        data.append('banner1', banner1);
        data.append('banner2', banner2);
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
        // data.append('section4_img', section4Img);
        // data.append('give_img1', giveImg1);
        // data.append('give_img2', giveImg2);
        // data.append('give_img3', giveImg3);
        data.append('cryptocunt', cryptocunt);
        data.append('sec9_img', sec9Img);
        data.append('sec12_img', sec12Img);
        data.append('sec14_img', sec14Img);
        data.append('ape', ape);
        data.append('evolved', evolved);
        data.append('gods', gods);
        data.append('famous', famous);
        data.append('title_font', title_font.current.value);
        data.append('para_font', para_font.current.value);
        data.append('list_font', list_font.current.value);
        data.append('date_time', date_time.current.value);
        data.append('subtitle_font', subtitle_font.current.value);
        data.append('button_font', button_font.current.value);
        data.append('title_weight', title_weight.current.value);
        data.append('para_weight', para_weight.current.value);
        data.append('list_weight', list_weight.current.value);
        data.append('subtitle_weight', subtitle_weight.current.value);
        data.append('button_weight', button_weight.current.value);
        data.append('head_font', head_font.current.value);
        data.append('head_weight', head_weight.current.value);
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
                setBanner1('');
                setLogo('');
                setBanner2('');
                setImg1('');
                setImg2('');
                setImg3('');
                setImg4('');
                setAvatar1('');
                setAvatar2('');
                setAvatar3('');
                setCollectImg1('');
                setCollectImg2('');
                setCollectImg3('');
                setCollectImg4('');
                setGreatestImg1('');
                setGreatestImg2('');
                setGreatestImg3('');
                setGreatestImg4('');
                setCryptoCuntImg('');
                // setSection4Img('');
                // setGiveImg1('');
                // setGiveImg2('');
                // setGiveImg3('');
                setSec9Img('');
                setSec12Img('');
                setSec14Img('');
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
                if(response.updated_data.social_twitter==1){
                    setTwitterValue(true);
                }else{
                    setTwitterValue(false);
                }
                if(response.updated_data.social_instagram==1){
                    setInstagramValue(true);
                }else{
                    setInstagramValue(false);
                }
                if(response.updated_data.social_discord==1){
                    setDiscordValue(true);
                }else{
                    setDiscordValue(false);
                }
                if(response.updated_data.cryptocunts==1){
                    setCryptoCunt(true);
                }else{
                    setCryptoCunt(false);
                }
                if(response.updated_data.ape==1){
                    setApe(true);
                }else{
                    setApe(false);
                }
                if(response.updated_data.evolved==1){
                    setEvolved(true);
                }else{
                    setEvolved(false);
                }
                if(response.updated_data.famous==1){
                    setFamous(true);
                }else{
                    setFamous(false);
                }
                if(response.updated_data.gods==1){
                    setGods(true);
                }else{
                    setGods(false);
                }

                first_title.current.value=response.updated_data.first_title;
                second_title.current.value=response.updated_data.second_title;
                avatar_title.current.value=response.updated_data.avatar_title;
                sec6_heading.current.value=response.updated_data.sec6_heading;
                //sec7_heading.current.value=response.updated_data.sec7_heading;
                sec10_heading.current.value=response.updated_data.sec10_heading;
                sec11_heading.current.value=response.updated_data.sec11_heading;
                sec13_heading.current.value=response.updated_data.sec13_heading;
                sec15_heading.current.value=response.updated_data.sec15_heading;
                sec16_heading.current.value=response.updated_data.sec16_heading;
                // sec17_heading.current.value=response.updated_data.sec17_heading;
                sec8_heading.current.value=response.updated_data.sec8_heading;
                sec8_content.current.value=response.updated_data.sec8_content;
                sec9_heading.current.value=response.updated_data.sec9_heading;
                sec9_content.current.value=response.updated_data.sec9_content;
                sec12_heading.current.value=response.updated_data.sec12_heading;
                sec12_content.current.value=response.updated_data.sec12_content;
                sec14_heading.current.value=response.updated_data.sec14_heading;
                sec14_content.current.value=response.updated_data.sec14_content;
                text_under10.current.value=response.updated_data.text_under10;

                title.current.value=response.updated_data.title;
                content.current.value=response.updated_data.content;
                section4_title.current.value=response.updated_data.section4_title;
                section4_content.current.value=response.updated_data.section4_content;
                // collect_title1.current.value=response.updated_data.collect_title1;
                // collect_title2.current.value=response.updated_data.collect_title2;
                // collect_title3.current.value=response.updated_data.collect_title3;
                // collect_title4.current.value=response.updated_data.collect_title4;
                setCollectContent1(response.updated_data.collect_content1);
                setCollectContent2(response.updated_data.collect_content2);
                setCollectContent3(response.updated_data.collect_content3);
                setCollectContent4(response.updated_data.collect_content4);
                setGreatestContent(response.updated_data.greatest_content);
                setGreatestContent1(response.updated_data.greatest_content1);
                setGreatestContent2(response.updated_data.greatest_content2);
                setGreatestContent3(response.updated_data.greatest_content3);
                //setGiveContent(response.updated_data.give_content);
                setCryptoCuntContent(response.updated_data.crypto_cunt_content);
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
                title_font.current.value=response.updated_data.title_font;
                para_font.current.value=response.updated_data.para_font;
                list_font.current.value=response.updated_data.list_font;
                date_time.current.value=response.updated_data.date_time;
                subtitle_font.current.value=response.updated_data.subtitle_font;
                button_font.current.value=response.updated_data.button_font;
                title_weight.current.value=response.updated_data.title_weight;
                para_weight.current.value=response.updated_data.para_weight;
                list_weight.current.value=response.updated_data.list_weight;
                subtitle_weight.current.value=response.updated_data.subtitle_weight;
                button_weight.current.value=response.updated_data.button_weight;
                head_font.current.value=response.updated_data.head_font;
                head_weight.current.value=response.updated_data.head_weight;
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
                                        <input type="checkbox" className="social_links_checkbox" checked={twitterValue} onChange={changeTwitterValue}></input><label>Twitter</label>
                                    </div>
                                    <div className="checkbox_div">
                                        <input type="checkbox" className="social_links_checkbox" checked={discordValue} onChange={changeDiscordValue}></input><label>Discord</label>
                                    </div>
                                    <div className="checkbox_div">
                                        <input type="checkbox" className="social_links_checkbox" checked={instagramValue} onChange={changeInstagramValue}></input><label>Instagram</label>
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
                                        <label className="form_label">First title</label>
                                        <textarea className="form-control" ref={first_title} style={{height:"50px"}}></textarea>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Second title</label>
                                        <textarea className="form-control" ref={second_title} style={{height:"50px"}}></textarea>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Third title</label>
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
                            <h4>Update Section 4</h4>
                            <form>
                                <div className="settings_form_data">
                                    {/* <img src={Path+'images/'+settingsData.section4_img} className="imgs"></img>
                                    <div className="form_data">
                                        <label className="form_label">Image</label>
                                        <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeSection4Img}></input>
                                    </div> */}
                                    <div className="form_data">
                                        <label className="form_label">Title</label>
                                        <textarea className="form-control" ref={section4_title} style={{height:"50px"}}></textarea>
                                    </div>
                                    <div className="form_data">
                                        <label className="form_label">Content</label>
                                        <textarea className="form-control" ref={section4_content}></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Update section 5</h4>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label className="form_label">Heading</label>
                                    <textarea className="form-control" ref={avatar_title} style={{height:"50px"}}></textarea>
                                </div>
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
                            <h4>Update section 6</h4>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label className="form_label">Heading</label>
                                    <textarea className="form-control" ref={sec6_heading} style={{height:"50px"}}></textarea>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.collect_img1} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeCollectImg1}></input>
                                            </div>
                                            {/* <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control"  ref={collect_title1}></input>
                                            </div> */}
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <ReactQuill value={collect_content1} onChange={changeCollectContent1} style={{color:"black"}} />
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
                                            {/* <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control"  ref={collect_title2}></input>
                                            </div> */}
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <ReactQuill value={collect_content2} onChange={changeCollectContent2}  style={{color:"black"}} />
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
                                            {/* <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control"  ref={collect_title3}></input>
                                            </div> */}
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <ReactQuill value={collect_content3} onChange={changeCollectContent3}  style={{color:"black"}} />
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
                                            {/* <div className="form_data">
                                                <label className="form_label">Title</label>
                                                <input type="text" className="form-control" ref={collect_title4}></input>
                                            </div> */}
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <ReactQuill value={collect_content4} onChange={changeCollectContent4}  style={{color:"black"}} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Update Section 7</h4>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label className="form_label">Heading</label>
                                    <textarea className="form-control" ref={sec7_heading} style={{height:"50px"}}></textarea>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="three_img">
                                        <form>
                                            <div className="form_data">
                                                <label className="form_label">Content</label>
                                                <ReactQuill value={give_content} onChange={changeGiveContent} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.give_img1} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeGiveImg1}></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.give_img2} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeGiveImg2}></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.give_img3} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeGiveImg3}></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-12">
                        <div className="settings_div">
                        <h4>Update section 7</h4>
                            <form>
                                <div className="form_data">
                                    <label className="form_label">Title</label>
                                    <textarea className="form-control" ref={sec8_heading} style={{height:"50px"}}></textarea>
                                </div>
                                <div className="form_data">
                                    <label className="form_label">Content</label>
                                    <textarea className="form-control" ref={sec8_content}></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-12">
                        <div className="settings_div">
                        <h4>Update section 8</h4>
                        <img src={Path+'images/'+settingsData.sec9_img} className="banner_img"></img>
                            <form>
                                <div className="form_data">
                                    <label className="form_label">Image</label>
                                    <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeSec9Img}></input>
                                </div>
                                <div className="form_data">
                                    <label className="form_label">Title</label>
                                    <textarea className="form-control" ref={sec9_heading} style={{height:"50px"}}></textarea>
                                </div>
                                <div className="form_data">
                                    <label className="form_label">Content</label>
                                    <textarea className="form-control" ref={sec9_content}></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Update section 9</h4>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label className="form_label">Heading</label>
                                    <textarea className="form-control" ref={sec10_heading} style={{height:"50px"}}></textarea>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.greatest_img1} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeGreatestImg1}></input>
                                            </div>
                                            <div>
                                                <label style={{textAlign:"left",width:"100%"}}>Content</label>
                                                <ReactQuill value={greatest_content} onChange={changeGreatestContent} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.greatest_img2} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeGreatestImg2}></input>
                                            </div>
                                            <div>
                                                <label style={{textAlign:"left",width:"100%"}}>Content</label>
                                                <ReactQuill value={greatest_content1} onChange={changeGreatestContent1}  style={{color:"black"}} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.greatest_img3} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeGreatestImg3}></input>
                                            </div>
                                            <div>
                                                <label style={{textAlign:"left",width:"100%"}}>Content</label>
                                                <ReactQuill value={greatest_content2} onChange={changeGreatestContent2} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="three_img">
                                    <img src={Path+'images/'+settingsData.greatest_img4} className="imgs"></img>
                                        <form>
                                            <div className="settings_form_data">
                                                <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeGreatestImg4}></input>
                                            </div>
                                            <div>
                                                <label style={{textAlign:"left",width:"100%"}}>Content</label>
                                                <ReactQuill value={greatest_content3} onChange={changeGreatestContent3}  style={{color:"black"}} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop:"16px"}}>
                                    <label>Under section content</label>
                                    <textarea className="form-control" ref={text_under10}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Update section 10</h4>
                            <form>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label className="form_label">Heading</label>
                                    <textarea className="form-control" ref={sec11_heading} style={{height:"50px"}}></textarea>
                                </div>
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
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-12">
                        <div className="settings_div">
                        <h4>Update section 11</h4>
                        <img src={Path+'images/'+settingsData.sec12_img} className="banner_img"></img>
                            <form>
                                <div className="form_data">
                                    <label className="form_label">Image</label>
                                    <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeSec12Img}></input>
                                </div>
                                <div className="form_data">
                                    <label className="form_label">Title</label>
                                    <textarea className="form-control" ref={sec12_heading} style={{height:"50px"}}></textarea>
                                </div>
                                <div className="form_data">
                                    <label className="form_label">Content</label>
                                    <textarea className="form-control" ref={sec12_content}></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Update section 12</h4>
                            <form>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label className="form_label">Heading</label>
                                    <textarea className="form-control" ref={sec13_heading} style={{height:"50px"}}></textarea>
                                </div>
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
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-12">
                        <div className="settings_div">
                        <h4>Update section 13</h4>
                        <img src={Path+'images/'+settingsData.sec14_img} className="banner_img"></img>
                            <form>
                                <div className="form_data">
                                    <label className="form_label">Image</label>
                                    <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeSec14Img}></input>
                                </div>
                                <div className="form_data">
                                    <label className="form_label">Title</label>
                                    <textarea className="form-control" ref={sec14_heading} style={{height:"50px"}}></textarea>
                                </div>
                                <div className="form_data">
                                    <label className="form_label">Content</label>
                                    <textarea className="form-control" ref={sec14_content}></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Update section 14</h4>
                            <form>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label className="form_label">Heading</label>
                                    <textarea className="form-control" ref={sec15_heading} style={{height:"50px"}}></textarea>
                                </div>
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
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div" style={{paddingBottom:"124px"}}>
                            <h4>Update section 15</h4>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label className="form_label">Heading</label>
                                <textarea className="form-control" ref={sec16_heading} style={{height:"50px"}}></textarea>
                            </div>
                            <form>
                                <div className="settings_form_data toggle_icons">
                                    <p><span className="toggle_name">CryptoCunts</span> <span onClick={changeCryptoCunt} className="toggle_icon">
                                        {cryptocunt ?
                                        (<ToggleOn size={28} color="#4B4B4B" />):(<ToggleOff size={28} color="#4B4B4B" />)}
                                    </span></p>
                                    <p><span className="toggle_name">Evolved</span> <span onClick={changeEvolved} className="toggle_icon">
                                        {evolved ?
                                        (<ToggleOn size={28} color="#4B4B4B" />):(<ToggleOff size={28} color="#4B4B4B" />)}
                                    </span></p>
                                    <p><span className="toggle_name">Anonymous Ape</span> <span onClick={changeApe} className="toggle_icon">
                                        {ape ?
                                        (<ToggleOn size={28} color="#4B4B4B" />):(<ToggleOff size={28} color="#4B4B4B" />)}
                                    </span></p>
                                    <p><span className="toggle_name">Famous CryptoCunt</span> <span onClick={changeFamous} className="toggle_icon">
                                        {famous ?
                                        (<ToggleOn size={28} color="#4B4B4B" />):(<ToggleOff size={28} color="#4B4B4B" />)}
                                    </span></p>
                                    <p><span className="toggle_name">CryptoCunt Gods</span> <span onClick={changeGods} className="toggle_icon">
                                        {gods ?
                                        (<ToggleOn size={28} color="#4B4B4B" />):(<ToggleOff size={28} color="#4B4B4B" />)}
                                    </span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Update section 16</h4>
                            {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label className="form_label">Heading</label>
                                <textarea className="form-control" ref={sec17_heading} style={{height:"50px"}}></textarea>
                            </div> */}
                            <img src={Path+'images/'+settingsData.crypto_cunt_img} className="imgs"></img>
                            <form>
                                <div className="settings_form_data">
                                    <input type="file" className="form-control" accept=".jpg, .png, .jpeg" onChange={changeCryptoCuntImage}></input>
                                </div>
                                <div>
                                    <label>Content</label>
                                    <ReactQuill value={crypto_cunt_content} onChange={changeCryptoCuntContent}  style={{color:"black"}} />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <h4>Change font size</h4>
                            <form>
                                <div className="row" style={{width:"100%",margin:"0"}}>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="settings_form_data">
                                            <label>First heading font size (In px)</label>
                                            <input type="number" className="form-control" ref={head_font}></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="settings_form_data">
                                            <label>Font weight for first heading (Ex. 100, 200)</label>
                                            <input type="number" className="form-control" ref={head_weight}></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="settings_form_data">
                                            <label>Titles font size (In px)</label>
                                            <input type="number" className="form-control" ref={title_font}></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="settings_form_data">
                                            <label>Font weight for titles (Ex. 100, 200)</label>
                                            <input type="number" className="form-control" ref={title_weight}></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="settings_form_data">
                                            <label>Sub titles font size (In px)</label>
                                            <input type="number" className="form-control" ref={subtitle_font}></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="settings_form_data">
                                            <label>Font weight for subtitles (Ex. 100, 200)</label>
                                            <input type="number" className="form-control" ref={subtitle_weight}></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="settings_form_data">
                                            <label>Paragraphs font size (In px)</label>
                                            <input type="number" className="form-control" ref={para_font}></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="settings_form_data">
                                            <label>Font weight for paragraphs (Ex. 100, 200)</label>
                                            <input type="number" className="form-control" ref={para_weight}></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="settings_form_data">
                                            <label>Lists font size (In px)</label>
                                            <input type="number" className="form-control" ref={list_font}></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="settings_form_data">
                                            <label>Font weight for lists (Ex. 100, 200)</label>
                                            <input type="number" className="form-control" ref={list_weight}></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="settings_form_data">
                                            <label>Font size for buttons (In px)</label>
                                            <input type="number" className="form-control" ref={button_font}></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="settings_form_data">
                                            <label>Font weight for buttons (Ex. 100, 200)</label>
                                            <input type="number" className="form-control" ref={button_weight}></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <label>Date/Time for countdown timer</label>
                                        <input type="datetime-local" className="form-control" ref={date_time}></input>
                                    </div>
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
