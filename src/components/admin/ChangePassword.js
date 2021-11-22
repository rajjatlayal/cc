import React,{useState,useRef,useEffect} from "react";
import Sidebar from './Sidebar';
import AdminNavbar from './AdminNavbar';
import { Lock} from 'react-bootstrap-icons';
import { Path } from './Path.js';
function Settings()  {
    const old_password = useRef(null);
    const new_password = useRef(null);
    const confirm_password = useRef(null);
	const [Opacity, setOpacity] = useState('');
	const [PointerEvents, setPointerEvents] = useState('');
    const [notification, setNotification] = useState({success:'',failed:'',show_success:false,show_failed:false});
	const [Loader, setLoader] = useState(false);
    const [errors, setErrors] = useState('');
	const [token, setToken] = useState(localStorage.getItem('token'));
    const hide_notification=()=>{
      setNotification({success:'',failed:'',show_failed:false,show_success:false});
      setErrors('');
    }
    const show_notification=(response)=>{	   
	   if(response.failed!=null){
		   setNotification({success:'',failed:response.failed,show_failed:true,show_success:false});
	   }else if(response.success!=null){
		   setNotification({success:response.success,failed:'',show_failed:false,show_success:true});
	   }
	   setTimeout(hide_notification, 4000);
    }
    const handleValidation=()=>{
        let formIsValid = false;
		if(old_password.current.value===''){
			setErrors('Please enter old password');		   
		}else if(new_password.current.value===''){
			setErrors('Please enter new password.');
		}else if(confirm_password.current.value===''){
			setErrors('Please confirm your password.');
		}else if(new_password.current.value!=confirm_password.current.value){
			setErrors('New password and confirm password does not matched');
		}else {
			setErrors('');
			formIsValid = true;
		}	
		return formIsValid;
    }
    const Password_data=(event)=>{
        event.preventDefault();
        const data = new FormData();
        data.append('old_password', old_password.current.value);
        data.append('new_password', new_password.current.value);
        //data.append('token', localStorage.getItem('token'));
        if(handleValidation()){	
            setLoader(true);
            setOpacity('0.5');
            setPointerEvents('none');
            fetch(Path+"change_password.php", {
                method: "POST",       
                body: data				
            })
            .then(res => res.json())
            .then(response=>{	
                setLoader(false);
                setOpacity('');
                setPointerEvents('');
                show_notification(response);
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
        <div className="row main_row" style={{background:"#E9EDF2",width:"100%",margin:"0",height:"100vh"}}>
            <div className="col-xl-2 col-lg-3 col-md-3" style={{paddingRight:"0",paddingLeft:"0"}}>
                <Sidebar/>
            </div>
            <div className="col-xl-10 col-lg-9 col-md-9" style={{paddingLeft:"0",paddingRight:"0"}}>
                <h3 className="page_head"><span><Lock size={18} color="#4B4B4B" /></span> Change Password</h3>
                <form id="change_pwd" className="formm settings_div" onSubmit={Password_data} style={{margin:"24px"}}>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <label>Old password</label>
                            <input type="password" className="form-control" name="OldPass" ref={old_password} />
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <label>New password</label>
                            <input type="password" className="form-control" name="NewPass" ref={new_password} />
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <label>Confirm password</label>
                            <input type="password" className="form-control" name="NewConPass" ref={confirm_password} />
                        </div>
                        <div className="col-md-12 col-sm-12 text-right" style={{marginTop:"20px"}}>
                        {notification.show_success ? (<div className="alert alert-success" id="success2">{notification.success}
                            <button type="button" className="close" data-dismiss="alert"></button>
                        </div>) : ('')}		
                        {notification.show_failed ? (<div className="alert alert-danger" id="danger2">{notification.failed}
                            <button type="button" className="close" data-dismiss="alert"></button>
                        </div>) : ('')}
                        {errors ?(<div className="alert alert-danger" style={{color: "#721c24"}}>{errors}</div>):('')}
                            <button variant="primary" className="modal_btn form_btn" onClick={Password_data} style={{opacity:Opacity,pointerEvents:PointerEvents}}>
                                {Loader ? (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>): ('')} Update
                            </button>						
                        </div>					
                    </div>
                </form>	
            </div>
        </div>
        </>
    );
}
export default Settings;
