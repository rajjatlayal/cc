import React,{useState,useRef,useEffect} from "react";
import { Link,useHistory} from "react-router-dom";
import Sidebar from './Sidebar';
import AdminNavbar from './AdminNavbar';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';
import { CardImage,PencilFill } from 'react-bootstrap-icons';
import { Path,setting_table_id,bucketName,dirName,region,accessKeyId,secretAccessKey } from './../Path.js';
import { DataStore,Predicates } from '@aws-amplify/datastore';
// import {Faq} from './../../models';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
// import awsconfig from './../aws-exports';
import S3 from 'react-aws-s3';
import "./../AdminStyle.css";

// Amplify.configure(awsconfig);
const config = {
    bucketName: bucketName,
    dirName: dirName, /* optional */
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
}
function CreatePerk()  {
    let history = useHistory();
    const title = useRef(null);
    const [content,setContent] = useState('');
    const [Opacity, setOpacity] = useState('1');
	const [PointerEvents, setPointerEvents] = useState('');
    const [notification, setNotification] = useState({success:'',failed:'',show_success:false,show_failed:false});
	const [Loader, setLoader] = useState(false);
	const [errors, setErrors] = useState('');
    const handleValidation=()=>{
        let formIsValid = false;
          if(title.current.value===''){
            setErrors('Please enter question!!');		   
          }else if(content===''){
            setErrors('Please enter answer');	
          }else {
            setErrors('');
            formIsValid = true;
          }	
        return formIsValid;
    }
    const hide_notification=()=>{
        setNotification({sucess:'',failed:'',show_failed:false,show_success:false});
        setErrors('');
    }
    const changeContent=(value)=>{
        setContent(value);
    };
    const add_data= async(event)=>{
        event.preventDefault();
        // if(handleValidation()){	
        //     setLoader(true);
        //     setOpacity('0.5');
        //     setPointerEvents('none');
        //     await DataStore.save(
        //         new Faq({
        //             "ques": title.current.value,
        //             "ans": content,
        //         })
        //     ).then((data)=>{
        //         title.current.value='';
        //         setContent('');
        //         setLoader(false);
        //         setOpacity('');
        //         setPointerEvents('');
        //         setNotification({success:'FAQ added successfully.',failed:'',show_failed:false,show_success:true});
        //         setErrors('');	
        //         setTimeout(hide_notification, 4000);
        //     }).catch((err)=>{
        //         setNotification({success:'',failed:err,show_failed:true,show_success:false});
        //         setTimeout(hide_notification, 4000);
        //         setErrors('');
        //     })    
        // }
    }
    useEffect(() => {
        // if(localStorage.getItem('token')===null || localStorage.getItem('token')===undefined || localStorage.getItem('token')===''){
        //     history.push('/admin/login');
        // }
    }, []);	
    return (
        <>
           <AdminNavbar/>
            <div className="row main_row" style={{width:"100%",margin:"0",height:"100vh"}}>
                <div className="col-xl-2 col-lg-3 col-md-3" style={{paddingRight:"0",paddingLeft:"0"}}>
                    <Sidebar/>
                </div>
              
                <div className="col-xl-10 col-lg-9 col-md-9" style={{paddingLeft:"0",paddingRight:"0"}}>
                    <div className="row" style={{width:"100%",margin:"0",paddingTop:"20px"}}>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="settings_div">
                                <div className="heading_bar">
                                    <h4>Create Membership Perk</h4>
                                    <span><PencilFill size={16} color="#000000" /></span>
                                </div><br></br>
                                <form className="inner_form">
                                    <div className="row" style={{width:"100%",margin:"0"}}>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="settings_form_data">
                                                <label>Heading</label>
                                                <input type="text" className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop:"10px",marginBottom:'60px'}}>
                                            <div className="settings_form_data">
                                                <label>Content</label>
                                                <textarea type="text" className="form-control"></textarea>
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
                                        <button className="form_btn" style={{opacity:Opacity,pointerEvents:PointerEvents}} >
                                            {Loader ? (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>): ('')} Add
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
export default CreatePerk;
