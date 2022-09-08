/* eslint-disable */
import React,{useState,useRef,useEffect} from "react";
import {useHistory } from "react-router-dom";
import Sidebar from './Sidebar';
import AdminNavbar from './AdminNavbar';
import { GearFill,ToggleOn,ToggleOff,PencilFill } from 'react-bootstrap-icons';
import { Path,setting_table_id,bucketName,dirName,region,accessKeyId,secretAccessKey } from './../Path.js';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';
// import { DataStore } from '@aws-amplify/datastore';
// import {Settings} from './../models';
// import awsconfig from './../aws-exports';
// import S3 from 'react-aws-s3';

// Amplify.configure(awsconfig);
const config = {
    bucketName: bucketName,
    dirName: dirName, /* optional */
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
}
function GlobalSettings()  {
    let history = useHistory();
    const title = useRef(null);
    // const content = useRef(null);
    const [ content,setContent] = useState('');
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
    const faq_title7 = useRef(null);
    const faq_title8 = useRef(null);
    const faq_content1 = useRef(null);
    const faq_content2 = useRef(null);
    const faq_content3 = useRef(null);
    const faq_content4 = useRef(null);
    const faq_content5 = useRef(null);
    const faq_content6 = useRef(null);
    const faq_content7 = useRef(null);
    const faq_content8 = useRef(null);
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
    const banner1_link = useRef(null);


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
	// const [giveImg1, setGiveImg1] = useState('');
	// const [giveImg2, setGiveImg2] = useState('');
	// const [giveImg3, setGiveImg3] = useState('');
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
    // const [ greatest_content3,setGreatestContent3] = useState('');
    const [ crypto_cunt_content,setCryptoCuntContent] = useState('');
    
    const [ gods_img,setGodsImg] = useState('');
    const [ ape_img,setApeImg] = useState('');
    const [ famous_img,setFamousImg] = useState('');
    const [ evolved_img,setEvolvedImg] = useState('');
    const [ gods_content,setGodsContent] = useState('');
    const [ ape_content,setApeContent] = useState('');
    const [ famous_content,setFamousContent] = useState('');
    const [ evolved_content,setEvolvedContent] = useState('');

    //const [ give_content,setGiveContent] = useState('');
	const [Opacity, setOpacity] = useState('1');
	const [PointerEvents, setPointerEvents] = useState('');
    const [notification, setNotification] = useState({success:'',failed:'',show_success:false,show_failed:false});
	const [Loader, setLoader] = useState(false);
	const [errors, setErrors] = useState('');
    const [settingsData, setSettingsData] = useState('');
    const [twitterValue, setTwitterValue] = useState('false');
    const [instagramValue, setInstagramValue] = useState('false');
    const [discordValue, setDiscordValue] = useState('false');
    const [cryptocunt, setCryptoCunt] = useState('false');
    const [ape, setApe] = useState('false');
    const [famous, setFamous] = useState('false');
    const [gods, setGods] = useState('false');
    const [evolved, setEvolved] = useState('false');
    const [showtimer, setTimer] = useState('false');

    const [logoname, setLogoName] = useState('');
    const [banner1name, setBanner1Name] = useState('');
    const [banner2name, setBanner2Name] = useState('');
    const [collect_img1name, setCollectImg1Name] = useState('');
    const [collect_img2name, setCollectImg2Name] = useState('');
    const [collect_img3name, setCollectImg3Name] = useState('');
    const [collect_img4name, setCollectImg4Name] = useState('');
    const [avatar1name, setAvatar1Name] = useState('');
    const [avatar2name, setAvatar2Name] = useState('');
    const [avatar3name, setAvatar3Name] = useState('');
    const [img1name, setImg1Name] = useState('');
    const [img2name, setImg2Name] = useState('');
    const [img3name, setImg3Name] = useState('');
    const [img4name, setImg4Name] = useState('');
    const [greatest_img1name, setGreatestImg1Name] = useState('');
    const [greatest_img2name, setGreatestImg2Name] = useState('');
    const [greatest_img3name, setGreatestImg3Name] = useState('');
    const [greatest_img4name, setGreatestImg4Name] = useState('');
    const [crypto_cunt_imgname, setCryptoCuntImgName] = useState('');
    const [ape_imgname, setApeImgName] = useState('');
    const [famous_imgname, setFamousImgName] = useState('');
    const [evolved_imgname, setEvolvedImgName] = useState('');
    const [gods_imgname, setGodsImgName] = useState('');
    const [sec9_imgname, setSec9ImgName] = useState('');
    const [sec12_imgname, setSec12ImgName] = useState('');
    const [sec14_imgname, setSec14ImgName] = useState('');
    // const [dataa, setDataa] = useState([]);
    const hide_notification=()=>{
      setNotification({sucess:'',failed:'',show_failed:false,show_success:false});
      setErrors('');
    }
    // const handleValidation=()=>{
    //     let formIsValid = false;
    //     //   if(banner1_link.current.value===''){
    //     //     setErrors('Please enter embeded video link for first banner.');		   
    //     //   }else
    //       if(first_title.current.value===''){
    //         setErrors('Please enter first title');		   
    //       }else if(second_title.current.value===''){
    //         setErrors('Please enter second title');		   
    //       }else if(title.current.value===''){
    //         setErrors('Please enter third title');		   
    //       }else if(content===''){
    //         setErrors('Please enter content');	
    //       }else if(section4_title.current.value===''){
    //         setErrors('Please enter content');	
    //       }else if(section4_content.current.value===''){
    //         setErrors('Please enter content');	
    //       }else if(avatar_title.current.value===''){
    //         setErrors('Please enter heading for section 5');	
    //       }else if(sec6_heading.current.value===''){
    //         setErrors('Please enter heading for section 6');	
    //       }else if(collect_content1===''){
    //         setErrors('Please enter collection content1');	
    //       }else if(collect_content2===''){
    //         setErrors('Please enter collection content2');	
    //       }else if(collect_content3===''){
    //         setErrors('Please enter collection content3');	
    //       }else if(collect_content4===''){
    //         setErrors('Please enter content for section 4.');	
    //       }else if(sec8_heading.current.value===''){
    //         setErrors('Please enter heading for section 8');	
    //       }else if(sec8_content.current.value===''){
    //         setErrors('Please enter content for section 8');	
    //       }else if(sec9_heading.current.value===''){
    //         setErrors('Please enter heading for section 9');	
    //       }else if(sec9_content.current.value===''){
    //         setErrors('Please enter content for section 9');	
    //       }else if(sec10_heading.current.value===''){
    //         setErrors('Please enter heading for section 10');	
    //       }else if(greatest_content===''){
    //         setErrors('Please enter greatest roadmap content');	
    //       }else if(greatest_content1===''){
    //         setErrors('Please enter greatest roadmap content');	
    //       }else if(greatest_content2===''){
    //         setErrors('Please enter greatest roadmap content');	
    //       }else if(sec11_heading.current.value===''){
    //         setErrors('Please enter heading for section 11');	
    //       }else if(roadmap_per1.current.value===''){
    //         setErrors('Please enter roadmap percentage1');	
    //       }else if(roadmap_per2.current.value===''){
    //         setErrors('Please enter roadmap percentage2');	
    //       }else if(roadmap_per3.current.value===''){
    //         setErrors('Please enter roadmap percentage3');	
    //       }else if(roadmap_per4.current.value===''){
    //         setErrors('Please enter roadmap percentage4');	
    //       }else if(roadmap_per5.current.value===''){
    //         setErrors('Please enter roadmap percentage5');	
    //       }else if(roadmap_per6.current.value===''){
    //         setErrors('Please enter roadmap percentage6');	
    //       }else if(roadmap_per7.current.value===''){
    //         setErrors('Please enter roadmap percentage7');	
    //       }else if(roadmap_per8.current.value===''){
    //         setErrors('Please enter roadmap percentage8');	
    //       }else if(roadmap_per9.current.value===''){
    //         setErrors('Please enter roadmap percentage9');	
    //       }else if(roadmap_per10.current.value===''){
    //         setErrors('Please enter roadmap percentage10');	
    //       }else if(roadmap_content1.current.value===''){
    //         setErrors('Please enter roadmap content1');	
    //       }else if(roadmap_content2.current.value===''){
    //         setErrors('Please enter roadmap content2');	
    //       }else if(roadmap_content3.current.value===''){
    //         setErrors('Please enter roadmap content3');	
    //       }else if(roadmap_content4.current.value===''){
    //         setErrors('Please enter roadmap content4');	
    //       }else if(roadmap_content5.current.value===''){
    //         setErrors('Please enter roadmap content5');	
    //       }else if(roadmap_content6.current.value===''){
    //         setErrors('Please enter roadmap content6');	
    //       }else if(roadmap_content7.current.value===''){
    //         setErrors('Please enter roadmap content7');	
    //       }else if(roadmap_content8.current.value===''){
    //         setErrors('Please enter roadmap content8');	
    //       }else if(roadmap_content9.current.value===''){
    //         setErrors('Please enter roadmap content9');	
    //       }else if(roadmap_content10.current.value===''){
    //         setErrors('Please enter roadmap content10');	
    //       }else if(sec12_heading.current.value===''){
    //         setErrors('Please enter heading for section 12');	
    //       }else if(sec12_content.current.value===''){
    //         setErrors('Please enter content for section 12');	
    //       }else if(sec13_heading.current.value===''){
    //         setErrors('Please enter heading for section 13');	
    //       }else if(video_title.current.value===''){
    //         setErrors('Please enter video title');	
    //       }else if(video_link.current.value===''){
    //         setErrors('Please enter video link');	
    //       }else if(sec14_heading.current.value===''){
    //         setErrors('Please enter heading for section 14');	
    //       }else if(sec14_content.current.value===''){
    //         setErrors('Please enter content for section 14');	
    //       }else if(sec15_heading.current.value===''){
    //         setErrors('Please enter heading for section 15');	
    //       }else if(faq_title1.current.value===''){
    //         setErrors('Please enter faq question1');
    //       }else if(faq_content1.current.value===''){
    //         setErrors('Please enter faq answer1');	
    //       }else if(faq_title2.current.value===''){
    //         setErrors('Please enter faq question2');	
    //       }else if(faq_content2.current.value===''){
    //         setErrors('Please enter faq answer2');	
    //       }else if(faq_title3.current.value===''){
    //         setErrors('Please enter faq question3');	
    //       }else if(faq_content3.current.value===''){
    //         setErrors('Please enter faq answer3');	
    //       }else if(faq_title4.current.value===''){
    //         setErrors('Please enter faq question4');	
    //       }else if(faq_content4.current.value===''){
    //         setErrors('Please enter faq answer4');	
    //       }else if(faq_title5.current.value===''){
    //         setErrors('Please enter faq question5');	
    //       }else if(faq_content5.current.value===''){
    //         setErrors('Please enter faq answer5');	
    //       }else if(faq_title6.current.value===''){
    //         setErrors('Please enter faq question6');	
    //       }else if(faq_content6.current.value===''){
    //         setErrors('Please enter faq answer6');	
    //       }else if(faq_title7.current.value===''){
    //         setErrors('Please enter faq question7');	
    //       }else if(faq_content7.current.value===''){
    //         setErrors('Please enter faq answer7');	
    //       }else if(faq_title8.current.value===''){
    //         setErrors('Please enter faq question8');	
    //       }else if(faq_content8.current.value===''){
    //         setErrors('Please enter faq answer8');	
    //       }else if(sec16_heading.current.value===''){
    //         setErrors('Please enter heading for section 16');	
    //       }else if(crypto_cunt_content===''){
    //         setErrors('Please enter cryptocunt content.');	
    //       }else if(head_font.current.value===''){
    //         setErrors('Please enter font size for first heading.');	
    //       }else if(head_weight.current.value===''){
    //         setErrors('Please enter font weight for first heading.');	
    //       }else if(title_font.current.value===''){
    //         setErrors('Please enter font size for titles.');	
    //       }else if(title_weight.current.value===''){
    //         setErrors('Please enter font weight for titles.');	
    //       }else if(subtitle_font.current.value===''){
    //         setErrors('Please enter font size for subtitles.');	
    //       }else if(subtitle_weight.current.value===''){
    //         setErrors('Please enter font weight for subtitles.');	
    //       }else if(para_font.current.value===''){
    //         setErrors('Please enter font size for paragraphs.');	
    //       }else if(para_weight.current.value===''){
    //         setErrors('Please enter font weight for paragraphs.');	
    //       }else if(list_font.current.value===''){
    //         setErrors('Please enter font size for lists.');	
    //       }else if(list_weight.current.value===''){
    //         setErrors('Please enter font weight for lists.');	
    //       }else if(button_font.current.value===''){
    //         setErrors('Please enter font size for buttons.');	
    //       }else if(button_weight.current.value===''){
    //         setErrors('Please enter font weight for buttons.');	
    //       }else if(date_time.current.value===''){
    //         setErrors('Please enter date/time for countdown timer.');	
    //       }else {
    //         setErrors('');
    //         formIsValid = true;
    //       }	
    //     return formIsValid;
    // }
    
    const changeBanner1=(event)=>{
		setBanner1(event.target.files[0]);
		setBanner1Name(event.target.files[0].name);
    }
    const changeLogo=(event)=>{
		setLogo(event.target.files[0]);
        setLogoName(event.target.files[0].name);
        // var file=event.target.files[0];
        // const ReactS3Client=new S3(config);
        // ReactS3Client.uploadFile(file,file.name)
        // .then((data)=>{
        //     console.log(data);
        // }).catch((err)=>{
        //     console.log(err);
        // })
    }
    const changeBanner2=(event)=>{
		setBanner2(event.target.files[0]);
		setBanner2Name(event.target.files[0].name);
    }
    const changeImg1=(event)=>{
		setImg1(event.target.files[0]);
		setImg1Name(event.target.files[0].name);
    }
    const changeImg2=(event)=>{
		setImg2(event.target.files[0]);
		setImg2Name(event.target.files[0].name);
    }
    const changeImg3=(event)=>{
		setImg3(event.target.files[0]);
		setImg3Name(event.target.files[0].name);
    }
    const changeImg4=(event)=>{
		setImg4(event.target.files[0]);
		setImg4Name(event.target.files[0].name);
    }
    const changeAvatar1=(event)=>{
		setAvatar1(event.target.files[0]);
		setAvatar1Name(event.target.files[0].name);
    }
    const changeAvatar2=(event)=>{
		setAvatar2(event.target.files[0]);
		setAvatar2Name(event.target.files[0].name);
    }
    const changeAvatar3=(event)=>{
		setAvatar3(event.target.files[0]);
		setAvatar3Name(event.target.files[0].name);
    }
    const changeCollectImg1=(event)=>{
		setCollectImg1(event.target.files[0]);
		setCollectImg1Name(event.target.files[0].name);
    }
    const changeCollectImg2=(event)=>{
		setCollectImg2(event.target.files[0]);
		setCollectImg2Name(event.target.files[0].name);
    }
    const changeCollectImg3=(event)=>{
		setCollectImg3(event.target.files[0]);
		setCollectImg3Name(event.target.files[0].name);
    }
    const changeCollectImg4=(event)=>{
		setCollectImg4(event.target.files[0]);
		setCollectImg4Name(event.target.files[0].name);
    }
    const changeGreatestImg1=(event)=>{
		setGreatestImg1(event.target.files[0]);
		setGreatestImg1Name(event.target.files[0].name);
    }
    const changeGreatestImg2=(event)=>{
		setGreatestImg2(event.target.files[0]);
		setGreatestImg2Name(event.target.files[0].name);
    }
    const changeGreatestImg3=(event)=>{
		setGreatestImg3(event.target.files[0]);
		setGreatestImg3Name(event.target.files[0].name);
    }
    const changeGreatestImg4=(event)=>{
		setGreatestImg4(event.target.files[0]);
		setGreatestImg4Name(event.target.files[0].name);
    }
    const changeCryptoCuntImage=(event)=>{
		setCryptoCuntImg(event.target.files[0]);
		setCryptoCuntImgName(event.target.files[0].name);
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
		setSec9ImgName(event.target.files[0].name);
    }
    const changeSec12Img=(event)=>{
		setSec12Img(event.target.files[0]);
		setSec12ImgName(event.target.files[0].name);
    }
    const changeSec14Img=(event)=>{
		setSec14Img(event.target.files[0]);
		setSec14ImgName(event.target.files[0].name);
    }
    const changeGodsImg=(event)=>{
		setGodsImg(event.target.files[0]);
		setGodsImgName(event.target.files[0].name);
    }
    const changeFamousImg=(event)=>{
		setFamousImg(event.target.files[0]);
		setFamousImgName(event.target.files[0].name);
    }
    const changeEvolvedImg=(event)=>{
		setEvolvedImg(event.target.files[0]);
		setEvolvedImgName(event.target.files[0].name);
    }
    const changeApeImg=(event)=>{
		setApeImg(event.target.files[0]);
		setApeImgName(event.target.files[0].name);
    }
    const changeCollectContent1=(value)=>{
        setCollectContent1(value);
    };
    const changeContent=(value)=>{
        setContent(value);
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
    // const changeGreatestContent3=(value)=>{
    //     setGreatestContent3(value);
    // };
    const changeTwitterValue=()=>{
        if(twitterValue==='false'){
            setTwitterValue('true');
        }else{
            setTwitterValue('false');
        }
    };
    const changeInstagramValue=()=>{
        if(instagramValue==='false'){
            setInstagramValue('true');
        }else{
            setInstagramValue('false');
        }
    };
    const changeDiscordValue=()=>{
        if(discordValue==='false'){
            setDiscordValue('true');
        }else{
            setDiscordValue('false');
        }
    };
    // const changeGiveContent=(value)=>{
    //     setGiveContent(value);
    // };
    const changeCryptoCuntContent=(value)=>{
        setCryptoCuntContent(value);
    };
    const changeGodsContent=(value)=>{
        setGodsContent(value);
    };
    const changeEvolvedContent=(value)=>{
        setEvolvedContent(value);
    };
    const changeFamousContent=(value)=>{
        setFamousContent(value);
    };
    const changeApeContent=(value)=>{
        setApeContent(value);
    };
    const changeTimer=()=>{
        if(showtimer==='false'){
            setTimer('true');
        }else{
            setTimer('false');
        }
    };
    const changeGods=()=>{
        if(gods==='false'){
            setGods('true');
        }else{
            setGods('false');
        }
    };
    const changeEvolved=()=>{
        if(evolved==='false'){
            setEvolved('true');
        }else{
            setEvolved('false');
        }
    };
    const changeFamous=()=>{
        if(famous==='false'){
            setFamous('true');
        }else{
            setFamous('false');
        }
    };
    const changeApe=()=>{
        if(ape==='false'){
            setApe('true');
        }else{
            setApe('false');
        }
    };
    const changeCryptoCunt=()=>{
        if(cryptocunt==='false'){
            setCryptoCunt('true');
        }else{
            setCryptoCunt('false');
        }
    };
    const update_data= async(event)=>{
        event.preventDefault();
        //if(handleValidation()){	
            // setLoader(true);
            // setOpacity('0.5');
            // setPointerEvents('none');
            // const original = await DataStore.query(Settings,setting_table_id)
            // await DataStore.save(
            //     Settings.copyOf(original, updated => {
            //     updated.first_title=`${first_title.current.value}`;
            //     // updated.banner1_link=`${banner1_link.current.value}`;
            //     updated.second_title=`${second_title.current.value}`;
            //     updated.avatar_title=`${avatar_title.current.value}`;
            //     updated.sec6_heading=`${sec6_heading.current.value}`;
            //     updated.sec10_heading=`${sec10_heading.current.value}`;
            //     updated.sec11_heading=`${sec11_heading.current.value}`;
            //     updated.sec13_heading=`${sec13_heading.current.value}`;
            //     updated.sec15_heading=`${sec15_heading.current.value}`;
            //     updated.sec16_heading=`${sec16_heading.current.value}`;
            //     updated.sec8_heading=`${sec8_heading.current.value}`;
            //     updated.sec8_content=`${sec8_content.current.value}`;
            //     updated.sec9_heading=`${sec9_heading.current.value}`;
            //     updated.sec9_content=`${sec9_content.current.value}`;
            //     updated.sec12_heading=`${sec12_heading.current.value}`;
            //     updated.sec12_content=`${sec12_content.current.value}`;
            //     updated.sec14_heading=`${sec14_heading.current.value}`;
            //     updated.sec14_content=`${sec14_content.current.value}`;
            //     updated.text_under10=`${text_under10.current.value}`;
            //     updated.title=`${title.current.value}`;
            //     updated.content=`${content}`;
            //     updated.section4_title=`${section4_title.current.value}`;
            //     updated.section4_content=`${section4_content.current.value}`;
            //     updated.collect_content1=`${collect_content1}`;
            //     updated.collect_content2=`${collect_content2}`;
            //     updated.collect_content3=`${collect_content3}`;
            //     updated.collect_content4=`${collect_content4}`;
            //     updated.cryptocunt_content=`${crypto_cunt_content}`;
            //     updated.famous_content=`${famous_content}`;
            //     updated.ape_content=`${ape_content}`;
            //     updated.gods_content=`${gods_content}`;
            //     updated.evolved_content=`${evolved_content}`;
            //     updated.greatest_content=`${greatest_content}`;
            //     updated.greatest_content1=`${greatest_content1}`;
            //     updated.greatest_content2=`${greatest_content2}`;
            //     updated.roadmap_per1=`${roadmap_per1.current.value}`;
            //     updated.roadmap_per2=`${roadmap_per2.current.value}`;
            //     updated.roadmap_per3=`${roadmap_per3.current.value}`;
            //     updated.roadmap_per4=`${roadmap_per4.current.value}`;
            //     updated.roadmap_per5=`${roadmap_per5.current.value}`;
            //     updated.roadmap_per6=`${roadmap_per6.current.value}`;
            //     updated.roadmap_per7=`${roadmap_per7.current.value}`;
            //     updated.roadmap_per8=`${roadmap_per8.current.value}`;
            //     updated.roadmap_per9=`${roadmap_per9.current.value}`;
            //     updated.roadmap_per10=`${roadmap_per10.current.value}`;
            //     updated.roadmap_content1=`${roadmap_content1.current.value}`;
            //     updated.roadmap_content2=`${roadmap_content2.current.value}`;
            //     updated.roadmap_content3=`${roadmap_content3.current.value}`;
            //     updated.roadmap_content4=`${roadmap_content4.current.value}`;
            //     updated.roadmap_content5=`${roadmap_content5.current.value}`;
            //     updated.roadmap_content6=`${roadmap_content6.current.value}`;
            //     updated.roadmap_content7=`${roadmap_content7.current.value}`;
            //     updated.roadmap_content8=`${roadmap_content8.current.value}`;
            //     updated.roadmap_content9=`${roadmap_content9.current.value}`;
            //     updated.roadmap_content10=`${roadmap_content10.current.value}`;
            //     updated.video_title=`${video_title.current.value}`;
            //     updated.video_link=`${video_link.current.value}`;
            //     updated.faq_title1=`${faq_title1.current.value}`;
            //     updated.faq_title2=`${faq_title2.current.value}`;
            //     updated.faq_title3=`${faq_title3.current.value}`;
            //     updated.faq_title4=`${faq_title4.current.value}`;
            //     updated.faq_title5=`${faq_title5.current.value}`;
            //     updated.faq_title6=`${faq_title6.current.value}`;
            //     updated.faq_title7=`${faq_title7.current.value}`;
            //     updated.faq_title8=`${faq_title8.current.value}`;
            //     updated.faq_content1=`${faq_content1.current.value}`;
            //     updated.faq_content2=`${faq_content2.current.value}`;
            //     updated.faq_content3=`${faq_content3.current.value}`;
            //     updated.faq_content4=`${faq_content4.current.value}`;
            //     updated.faq_content5=`${faq_content5.current.value}`;
            //     updated.faq_content6=`${faq_content6.current.value}`;
            //     updated.faq_content7=`${faq_content7.current.value}`;
            //     updated.faq_content8=`${faq_content8.current.value}`;
            //     updated.social_twitter=`${twitterValue}`;
            //     updated.social_discord=`${discordValue}`;
            //     updated.social_instagram=`${instagramValue}`;
            //     updated.AnonymousApe=`${ape}`;
            //     updated.Evolved=`${evolved}`;
            //     updated.CryptoCuntGods=`${gods}`;
            //     updated.FamousCryptoCunt=`${famous}`;
            //     updated.CryptoCunts=`${cryptocunt}`;
            //     updated.title_font=`${title_font.current.value}`;
            //     updated.para_font=`${para_font.current.value}`;
            //     updated.list_font=`${list_font.current.value}`;
            //     updated.subtitle_font=`${subtitle_font.current.value}`;
            //     updated.button_font=`${button_font.current.value}`;
            //     updated.title_weight=`${title_weight.current.value}`;
            //     updated.para_weight=`${para_weight.current.value}`;
            //     updated.list_weight=`${list_weight.current.value}`;
            //     updated.subtitle_weight=`${subtitle_weight.current.value}`;
            //     updated.button_weight=`${button_weight.current.value}`;
            //     updated.head_font=`${head_font.current.value}`;
            //     updated.head_weight=`${head_weight.current.value}`;
            //     updated.logo=`${logoname}`;
            //     updated.banner1=`${banner1name}`;
            //     updated.banner2=`${banner2name}`;
            //     updated.collect_img1=`${collect_img1name}`;
            //     updated.collect_img2=`${collect_img2name}`;
            //     updated.collect_img3=`${collect_img3name}`;
            //     updated.collect_img4=`${collect_img4name}`;
            //     updated.avatar1=`${avatar1name}`;
            //     updated.avatar2=`${avatar2name}`;
            //     updated.avatar3=`${avatar3name}`;
            //     updated.img1=`${img1name}`;
            //     updated.img2=`${img2name}`;
            //     updated.img3=`${img3name}`;
            //     updated.img4=`${img4name}`;
            //     updated.greatest_img1=`${greatest_img1name}`;
            //     updated.greatest_img2=`${greatest_img2name}`;
            //     updated.greatest_img3=`${greatest_img3name}`;
            //     updated.greatest_img4=`${greatest_img4name}`;
            //     updated.crypto_cunt_img=`${crypto_cunt_imgname}`;
            //     updated.ape_img=`${ape_imgname}`;
            //     updated.famous_img=`${famous_imgname}`;
            //     updated.evolved_img=`${evolved_imgname}`;
            //     updated.gods_img=`${gods_imgname}`;
            //     updated.sec9_img=`${sec9_imgname}`;
            //     updated.sec12_img=`${sec12_imgname}`;
            //     updated.sec14_img=`${sec14_imgname}`;
            //     updated.date_time=`${date_time.current.value}`;
            //     updated.showTimer=`${showtimer}`;
            //     })
            // ).then((data)=>{
            //     const ReactS3Client=new S3(config);
            //     if(logo!==''){
            //         ReactS3Client.uploadFile(logo,logoname)
            //         setLogo('');
            //     }
            //     if(banner1!==''){
            //         ReactS3Client.uploadFile(banner1,banner1name);
            //         setBanner1('');
            //     }
            //     if(banner2!==''){
            //         ReactS3Client.uploadFile(banner2,banner2name);
            //         setBanner2('');
            //     }
            //     if(collect_img1!==''){
            //         ReactS3Client.uploadFile(collect_img1,collect_img1name);
            //         setCollectImg1('');
            //     }
            //     if(collect_img2!==''){
            //         ReactS3Client.uploadFile(collect_img2,collect_img2name);
            //         setCollectImg2('');
            //     }
            //     if(collect_img3!==''){
            //         ReactS3Client.uploadFile(collect_img3,collect_img3name);
            //         setCollectImg3('');
            //     }
            //     if(collect_img4!==''){
            //         ReactS3Client.uploadFile(collect_img4,collect_img4name);
            //         setCollectImg4('');
            //     }
            //     if(avatar1!==''){
            //         ReactS3Client.uploadFile(avatar1,avatar1name);
            //         setAvatar1('');
            //     }
            //     if(avatar2!==''){
            //         ReactS3Client.uploadFile(avatar2,avatar2name);
            //         setAvatar2('');
            //     }
            //     if(avatar3!==''){
            //         ReactS3Client.uploadFile(avatar3,avatar3name);
            //         setAvatar3('');
            //     }
            //     if(img1!==''){
            //         ReactS3Client.uploadFile(img1,img1name);
            //         setImg1('');
            //     }
            //     if(img2!==''){
            //         ReactS3Client.uploadFile(img2,img2name);
            //         setImg2('');
            //     }
            //     if(img3!==''){
            //         ReactS3Client.uploadFile(img3,img3name);
            //         setImg3('');
            //     }
            //     if(img4!==''){
            //         ReactS3Client.uploadFile(img4,img4name);
            //         setImg4('');
            //     }
            //     if(greatest_img1!==''){
            //         ReactS3Client.uploadFile(greatest_img1,greatest_img1name);
            //         setGreatestImg1('');
            //     }
            //     if(greatest_img2!==''){
            //         ReactS3Client.uploadFile(greatest_img2,greatest_img2name);
            //         setGreatestImg2('');
            //     }
            //     if(greatest_img3!==''){
            //         ReactS3Client.uploadFile(greatest_img3,greatest_img3name);
            //         setGreatestImg3('');
            //     }
            //     if(greatest_img4!==''){
            //         ReactS3Client.uploadFile(greatest_img4,greatest_img4name);
            //         setGreatestImg4('');
            //     }
            //     if(crypto_cunt_img!==''){
            //         ReactS3Client.uploadFile(crypto_cunt_img,crypto_cunt_imgname);
            //         setCryptoCuntImg('');
            //     }
            //     if(ape_img!==''){
            //         ReactS3Client.uploadFile(ape_img,ape_imgname);
            //         setApeImg('');
            //     }
            //     if(famous_img!==''){
            //         ReactS3Client.uploadFile(famous_img,famous_imgname);
            //         setFamousImg('');
            //     }
            //     if(evolved_img!==''){
            //         ReactS3Client.uploadFile(evolved_img,evolved_imgname);
            //         setEvolvedImg('');
            //     }
            //     if(gods_img!==''){
            //         ReactS3Client.uploadFile(gods_img,gods_imgname);
            //         setGodsImg('');
            //     }
            //     if(sec9Img!==''){
            //         ReactS3Client.uploadFile(sec9Img,sec9_imgname);
            //         setSec9Img('');
            //     }
            //     if(sec12Img!==''){
            //         ReactS3Client.uploadFile(sec12Img,sec12_imgname);
            //         setSec12Img('');
            //     }
            //     if(sec14Img!==''){
            //         ReactS3Client.uploadFile(sec14Img,sec14_imgname);
            //         setSec14Img('');
            //     }
            //     setLoader(false);
            //     setOpacity('');
            //     setPointerEvents('');
            //     get_data();
            //     setNotification({success:'Data updated successfully.',failed:'',show_failed:false,show_success:true});
            //     setErrors('');	
            //     setTimeout(hide_notification, 4000);
            // }).catch((err)=>{
            //     setNotification({success:'',failed:err,show_failed:true,show_success:false});
            //     setTimeout(hide_notification, 4000);
            //     setErrors('');	
            //     // console.log(err);
            // })    
        // }
    }
    const get_data=()=>{
        DataStore.query(Settings,setting_table_id).then((data)=>{
            setSettingsData(data);
            setTwitterValue(data.social_twitter);
            setInstagramValue(data.social_instagram);
            setDiscordValue(data.social_discord);
            setCryptoCunt(data.CryptoCunts);
            setApe(data.AnonymousApe);
            setEvolved(data.Evolved);
            setFamous(data.FamousCryptoCunt	);
            setGods(data.CryptoCuntGods);
            setTimer(data.showTimer);
            // banner1_link.current.value=data.banner1_link;
            first_title.current.value=data.first_title;
            second_title.current.value=data.second_title;
            avatar_title.current.value=data.avatar_title;
            sec6_heading.current.value=data.sec6_heading;
            //sec7_heading.current.value=response.updated_data.sec7_heading;
            sec10_heading.current.value=data.sec10_heading;
            sec11_heading.current.value=data.sec11_heading;
            sec13_heading.current.value=data.sec13_heading;
            sec15_heading.current.value=data.sec15_heading;
            sec16_heading.current.value=data.sec16_heading;
            // sec17_heading.current.value=response.updated_data.sec17_heading;
            sec8_heading.current.value=data.sec8_heading;
            sec8_content.current.value=data.sec8_content;
            sec9_heading.current.value=data.sec9_heading;
            sec9_content.current.value=data.sec9_content;
            sec12_heading.current.value=data.sec12_heading;
            sec12_content.current.value=data.sec12_content;
            sec14_heading.current.value=data.sec14_heading;
            sec14_content.current.value=data.sec14_content;
            text_under10.current.value=data.text_under10;

            title.current.value=data.title;
            // content.current.value=response.updated_data.content;
            setContent(data.content);
            section4_title.current.value=data.section4_title;
            section4_content.current.value=data.section4_content;
            // collect_title1.current.value=response.updated_data.collect_title1;
            // collect_title2.current.value=response.updated_data.collect_title2;
            // collect_title3.current.value=response.updated_data.collect_title3;
            // collect_title4.current.value=response.updated_data.collect_title4;
            setCollectContent1(data.collect_content1);
            setCollectContent2(data.collect_content2);
            setCollectContent3(data.collect_content3);
            setCollectContent4(data.collect_content4);
            setGreatestContent(data.greatest_content);
            setGreatestContent1(data.greatest_content1);
            setGreatestContent2(data.greatest_content2);
            //setGreatestContent3(response.updated_data.greatest_content3);
            setFamousContent(data.famous_content);
            setApeContent(data.ape_content);
            setGodsContent(data.gods_content);
            setEvolvedContent(data.evolved_content);
            //setGiveContent(response.updated_data.give_content);
            setCryptoCuntContent(data.cryptocunt_content);
            roadmap_per1.current.value=data.roadmap_per1;
            roadmap_per2.current.value=data.roadmap_per2;
            roadmap_per3.current.value=data.roadmap_per3;
            roadmap_per4.current.value=data.roadmap_per4;
            roadmap_per5.current.value=data.roadmap_per5;
            roadmap_per6.current.value=data.roadmap_per6;
            roadmap_per7.current.value=data.roadmap_per7;
            roadmap_per8.current.value=data.roadmap_per8;
            roadmap_per9.current.value=data.roadmap_per9;
            roadmap_per10.current.value=data.roadmap_per10;
            roadmap_content1.current.value=data.roadmap_content1;
            roadmap_content2.current.value=data.roadmap_content2;
            roadmap_content3.current.value=data.roadmap_content3;
            roadmap_content4.current.value=data.roadmap_content4;
            roadmap_content5.current.value=data.roadmap_content5;
            roadmap_content6.current.value=data.roadmap_content6;
            roadmap_content7.current.value=data.roadmap_content7;
            roadmap_content8.current.value=data.roadmap_content8;
            roadmap_content9.current.value=data.roadmap_content9;
            roadmap_content10.current.value=data.roadmap_content10;
            video_title.current.value=data.video_title;
            video_link.current.value=data.video_link;
            faq_title1.current.value=data.faq_title1;
            faq_title2.current.value=data.faq_title2;
            faq_title3.current.value=data.faq_title3;
            faq_title4.current.value=data.faq_title4;
            faq_title5.current.value=data.faq_title5;
            faq_title6.current.value=data.faq_title6;
            faq_title7.current.value=data.faq_title7;
            faq_title8.current.value=data.faq_title8;
            faq_content1.current.value=data.faq_content1;
            faq_content2.current.value=data.faq_content2;
            faq_content3.current.value=data.faq_content3;
            faq_content4.current.value=data.faq_content4;
            faq_content5.current.value=data.faq_content5;
            faq_content6.current.value=data.faq_content6;
            faq_content7.current.value=data.faq_content7;
            faq_content8.current.value=data.faq_content8;
            title_font.current.value=data.title_font;
            para_font.current.value=data.para_font;
            list_font.current.value=data.list_font;
            date_time.current.value=data.date_time;
            subtitle_font.current.value=data.subtitle_font;
            button_font.current.value=data.button_font;
            title_weight.current.value=data.title_weight;
            para_weight.current.value=data.para_weight;
            list_weight.current.value=data.list_weight;
            subtitle_weight.current.value=data.subtitle_weight;
            button_weight.current.value=data.button_weight;
            head_font.current.value=data.head_font;
            head_weight.current.value=data.head_weight;
            setLogoName(data.logo);
            setBanner1Name(data.banner1);
            setBanner2Name(data.banner2);
            setImg1Name(data.img1);
            setImg2Name(data.img2);
            setImg3Name(data.img3);
            setImg4Name(data.img4);
            setAvatar1Name(data.avatar1);
            setAvatar2Name(data.avatar2);
            setAvatar3Name(data.avatar3);
            setCollectImg1Name(data.collect_img1);
            setCollectImg2Name(data.collect_img2);
            setCollectImg3Name(data.collect_img3);
            setCollectImg4Name(data.collect_img4);
            setGreatestImg1Name(data.greatest_img1);
            setGreatestImg2Name(data.greatest_img2);
            setGreatestImg3Name(data.greatest_img3);
            setGreatestImg4Name(data.greatest_img4);
            setCryptoCuntImgName(data.crypto_cunt_img);
            setSec9ImgName(data.sec9_img);
            setSec12ImgName(data.sec12_img);
            setSec14ImgName(data.sec14_img);
            setGodsImgName(data.gods_img);
            setFamousImgName(data.famous_img);
            setEvolvedImgName(data.evolved_img);
            setApeImgName(data.ape_img);
        }).catch((err)=>{
            console.log(err);
        })
	}
    useEffect(() => {
        // if(localStorage.getItem('token')!==null && localStorage.getItem('token')!==undefined && localStorage.getItem('token')!==''){
        //     // get_data();
        // }else{
        //     history.push('/admin/login');
        // }
    },[]);// eslint-disable-line react-hooks/exhaustive-deps	
    return (
        <>
        <AdminNavbar/>
        <div className="row main_row" style={{background:"#E9EDF2",width:"100%",margin:"0"}}>
            <div className="col-xl-2 col-lg-3 col-md-3" style={{paddingRight:"0",paddingLeft:"0"}}>
                <Sidebar/>
            </div>
           
            <div className="col-xl-10 col-lg-9 col-md-9" style={{paddingLeft:"0",paddingRight:"0"}}>
                {/* <h3 className="page_head"><span><GearFill size={18} color="#4B4B4B" /></span> Global Settings</h3> */}
                <div className="row" style={{width:"100%",margin:"0",paddingTop:"20px"}}>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="settings_div">
                            <div className="heading_bar">
                                <h4>Global Settings</h4>
                                <span><PencilFill size={16} color="#000000" /></span>
                            </div><br></br>
                            <form className="inner_form">
                                <div className="row" style={{width:"100%",margin:"0"}}>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div className="settings_form_data">
                                            <label>Price meter value</label>
                                            <input type="text" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div className="settings_form_data">
                                            <label>Date/Time for countdown timer</label>
                                            <input type="datetime-local" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{marginTop:"10px"}}>
                                        <div className="settings_form_data">
                                            {/* <label>Show/Hide winners list</label> */}
                                            <div className="checkbox_div">
                                                <input type="checkbox" className="social_links_checkbox"></input><label>Show/Hide winners list</label>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{marginTop:"10px"}}>
                                        <div className="settings_form_data">
                                            {/* <label>Show/Hide whitelist users</label> */}
                                            <div className="checkbox_div">
                                                <input type="checkbox" className="social_links_checkbox"></input><label>Show/Hide whitelist users</label>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop:"10px"}}>
                                        <div className="settings_form_data">
                                            <label>Privacy & security</label>
                                            <ReactQuill style={{color:"black"}} />
                                        </div>
                                    </div> <br></br>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{marginTop:"60px"}}>
                                        <div className="settings_form_data">
                                            <label>Contact email</label>
                                            <input type="text" className="form-control"></input>
                                        </div>
                                    </div>  
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{marginTop:"60px"}}>
                                        <div className="settings_form_data">
                                            <label>Contact address</label>
                                            <input type="text" className="form-control"></input>
                                        </div>
                                    </div>  
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div className="settings_form_data">
                                            <label>Contact phone</label>
                                            <input type="text" className="form-control"></input>
                                        </div>
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
                                <div className="settings_form_data btn_div" style={{justifyContent:"right"}}>
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
export default GlobalSettings;
