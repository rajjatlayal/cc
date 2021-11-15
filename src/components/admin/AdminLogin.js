import React,{useState,useRef} from "react";
import {useHistory } from "react-router-dom";
import eventBus from "../../eventBus";
import { Server,PersonFill,LockFill } from 'react-bootstrap-icons';
import { Path } from './Path.js';

function Login()  {
  let history = useHistory();
  const username = useRef(null);
  const pwd = useRef(null);
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
  const login_data=(event)=>{
    event.preventDefault();
    const data = new FormData();
    data.append('username', username.current.value);
    data.append('password', pwd.current.value);
    console.log(handleValidation());
    if(handleValidation()){	
      setLoader(true);
      setOpacity('0.5');
      setPointerEvents('none');
      fetch(Path+"login.php", {
        method: "POST",       
        body: data				
      })
      .then(res => res.json())
      .then(response=>{
        //console.log(response);	
        setLoader(false);
				setOpacity('');
				setPointerEvents('');
        localStorage.setItem('token', response.token);
        eventBus.dispatch("token", { message: response.token});
        history.push('/admin/settings');
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
        <div className="row row_class">
            <div className="container admin_container">
              <div className="row row_class">
                <div className="login_left_div col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{paddingRight:"0",margin:"auto"}}>
                    <div className="admin_div">
                      <h2>Admin Login</h2>
                      <p>Sign in to your account</p>
                      {notification.show_success ? (<div className="alert alert-success" id="success2">{notification.success}
                        <button type="button" className="close" data-dismiss="alert"></button>
                      </div>) : ('')}		
                      {notification.show_failed ? (<div className="alert alert-danger" id="danger2">{notification.failed}
                        <button type="button" className="close" data-dismiss="alert"></button>
                      </div>) : ('')}
                      {errors ?(<div className="alert alert-danger" style={{color: "#721c24"}}>{errors}</div>):('')}
                      <form onSubmit={login_data}>
                        <div className="form_data">
                          <label>Email</label>
                          <div className="form_group">
                            <span><PersonFill size={20} color="#4B4B4B" /></span>
                            <input type="text" className="form-control" placeholder="Enter your username" ref={username}></input>
                          </div>
                        </div>
                        <div className="form_data">
                          <label>Password</label>
                          <div className="form_group">
                            <span><LockFill size={20} color="#4B4B4B" /></span>
                            <input type="password" className="form-control" placeholder="Enter your password" ref={pwd}/>
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
                <div className="login_right_div col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{paddingLeft:"0",margin:"auto"}}>
                    <div className="login_img_div">
                      <img src={"../images/login_img.jpg"} alt="login_img"></img>
                      <div className="overlay">
                        <div className="admin_data">
                          <Server size={60} />
                          <h2><span>CC</span></h2>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
}
export default Login;
