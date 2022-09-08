import React,{useEffect } from "react";
import {useHistory } from "react-router-dom";
import { Power,Justify } from 'react-bootstrap-icons';
import eventBus from "../eventBus";
import "./../AdminStyle.css";

export default function AdminNavbar() {
  let history = useHistory();
  const changeSidebar=()=>{
    eventBus.dispatch("viewSidebar", { message: true});
  }
  const logout=()=>{
		localStorage.setItem('token', '');
		eventBus.dispatch("token", { message: ''});
		localStorage.clear();
		history.push('/admin/login'); 
	} 
  useEffect(() => {
    if(window.innerWidth<='767'){
      eventBus.dispatch("viewSidebar", { message: false});
    }else{
      eventBus.dispatch("viewSidebar", { message: true});
    }
    window.addEventListener('resize', (event) => {
      if(window.innerWidth<='767'){
        eventBus.dispatch("viewSidebar", { message: false});
      }else{
        eventBus.dispatch("viewSidebar", { message: true});
      }
    });
  }, []);
  return (
    <>
      <div className="container-fluid main_navbar">
          <div className="row" style={{width:"100%",margin:"0"}}>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 navbar_left_div">
                  <h4 style={{color:"white"}}><span className="navbar_toggle" style={{display:"none"}} onClick={changeSidebar}><span className="toggle_icon"><Justify color="#ffffff" size={30}/></span></span> ADMIN PANEL</h4>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 navbar_right_div">
                  <h5 style={{color:"white"}}><span style={{cursor:"pointer"}} onClick={logout}><span><Power size={20} color="#ffffff"/></span> Logout</span></h5>
              </div>
          </div>
      </div>
    </>
  );
}
