/* eslint-disable */
import React,{useState,useRef,useEffect} from "react";
import {useHistory } from "react-router-dom";
import { Server,PersonFill,LockFill } from 'react-bootstrap-icons';
import { admin_table_id } from './../Path.js';
import { DataStore } from '@aws-amplify/datastore';
import {Admin} from './../models';
import {Amplify,Hub,Auth } from 'aws-amplify';
import awsconfig from './../aws-exports';
import "./../AdminStyle.css";
import md5 from "md5";

// let myAppConfig = {
//   aws_project_region: "us-east-2",
//   aws_appsync_graphqlEndpoint: "https://smz5uq4mdrat5m3yy4ab72soca.appsync-api.us-east-2.amazonaws.com/graphql",
//   aws_appsync_region: "us-east-2",
//   aws_appsync_authenticationType: "API_KEY",
//   aws_appsync_apiKey: "da2-3j6g5hxcbfbfvidff75q6ngplq"
// };

// Amplify.configure(myAppConfig);


Amplify.configure(awsconfig);
function Login()  {
  let history = useHistory();
  const username = useRef(null);
  const pwd = useRef(null);
	const [Opacity, setOpacity] = useState('1');
	// const [loginData, setLoginData] = useState([]);
	const [PointerEvents, setPointerEvents] = useState('');
  const [notification, setNotification] = useState({success:'',failed:'',show_success:false,show_failed:false});
	const [Loader, setLoader] = useState(false);
	const [errors, setErrors] = useState('');
    const handleValidation=()=>{
      let formIsValid = false;
        if(username.current.value===''){
          setErrors('Please enter username');		   
        }else if(pwd.current.value===''){
          setErrors('Please enter password');	
        }else {
          setErrors('');
          formIsValid = true;
        }	
      return formIsValid;
    }
    const login_data = async (event) => {
      event.preventDefault();
        await DataStore.save(
          new Admin({
          "username": 'admin',
          "password": 'admin'
        })
      ).then((data)=>{
          console.log('add_data',data);
      }).catch((err)=>{
          console.log('add_error',err);
      }) 
      // if(handleValidation()){	
      //   const original = await DataStore.query(Adminn,admin_table_id);
      //   setLoader(true);
      //   setOpacity('0.5');
      //   setPointerEvents('none');
      //   if((original.username===username.current.value) &&(original.password===pwd.current.value)){
      //     setLoader(false);
      //     setOpacity('');
      //     setPointerEvents('');
      //     localStorage.setItem('token', original.id);
      //     history.push('/admin/admin_faq');
      //   }else{
      //     setLoader(false);
      //     setOpacity('');
      //     setPointerEvents('');
      //     setNotification({success:'',failed:'Invalid credentials',show_failed:true,show_success:false});
      //   }
      // }
    }
    useEffect(() => {
      const removeListener = Hub.listen("datastore", async (capsule) => {
          const {
            payload: { event, data },
          } = capsule;
        });
        // Start the DataStore, this kicks-off the sync process.
        DataStore.start().catch(() => {
          DataStore.clear().then(() => {
            DataStore.start();
          });
        });
        return () => {
          console.log('remove listener');
          removeListener();
        };
    },[]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="row row_class">
            <div className="container admin_container">
              <div className="row row_class">
                <div className="login_right_div col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{paddingLeft:"0",paddingRight:"0",margin:"auto"}}>
                    <div className="login_img_div">
                      <img src={"../images/admin_login_img.jpeg"} alt="login_img"></img>
                    </div>
                </div>
                <div className="login_left_div col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{paddingRight:"0",paddingLeft:"0",margin:"auto"}}>
                    <div className="admin_div">
                      <h2 style={{color:"#ffffff"}}>Admin Login</h2>
                      <p style={{color:"#ffffff"}}>Sign in to your account</p>
                      {notification.show_success ? (<div className="alert alert-success admin_alerts" id="success2">{notification.success}
                        <button type="button" className="close" data-dismiss="alert"></button>
                      </div>) : ('')}		
                      {notification.show_failed ? (<div className="alert alert-danger admin_alerts" id="danger2">{notification.failed}
                        <button type="button" className="close" data-dismiss="alert"></button>
                      </div>) : ('')}
                      {errors ?(<div className="alert alert-danger admin_alerts" style={{color: "#721c24"}}>{errors}</div>):('')}
                      <form onSubmit={login_data}>
                        <div className="form_data">
                          <label>Email</label>
                          <div className="form_group">
                            <span><PersonFill size={20} color="#00CFFF" /></span>
                            <input type="text" className="form-control admin_input" placeholder="Enter your username" ref={username} style={{color:"white"}}></input>
                          </div>
                        </div>
                        <div className="form_data">
                          <label>Password</label>
                          <div className="form_group">
                            <span><LockFill size={20} color="#00CFFF" /></span>
                            <input type="password" className="form-control admin_input" placeholder="Enter your password" ref={pwd} style={{color:"white"}}/>
                          </div>
                        </div>
                        <div>
                          <button className="login_btn" style={{opacity:Opacity,pointerEvents:PointerEvents}} onClick={login_data}>
                            {Loader ? (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>): ('')} LOGIN
                          </button>
                        </div>
                      </form>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
}
export default Login;
