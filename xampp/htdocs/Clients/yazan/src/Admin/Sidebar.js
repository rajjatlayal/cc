/*eslint-disable*/
import React,{useState,useEffect} from "react";
import { Link,useHistory} from "react-router-dom";
import eventBus from "../eventBus";
import "./../AdminStyle.css";
import { QuestionCircle, Gear, LockFill, XSquare, Power, Speedometer2  } from 'react-bootstrap-icons';

export default function Sidebar() {
  let history = useHistory();
  const [viewSidebar, setViewSidebar] = useState('');  
  const [currentPath, setCurrentPath] = useState('/users');  
  const changeSidebar=()=>{
    setViewSidebar(false);
    eventBus.dispatch("viewSidebar", { message: false});
  }
  const logout=()=>{
		localStorage.setItem('token', '');
		eventBus.dispatch("token", { message: ''});
		localStorage.clear();
		history.push('/admin/login'); 
	} 
  useEffect(() => {
    if(window.innerWidth<='767'){
      setViewSidebar(false);
      eventBus.dispatch("viewSidebar", { message: false});
    }else{
      setViewSidebar(true);
      eventBus.dispatch("viewSidebar", { message: true});
    }
    eventBus.on("viewSidebar", (data) =>
      setViewSidebar(data.message)
    );
    const url1=window.location.pathname;
    setCurrentPath(url1);
  }, []);
  return (
    <>
      <div className="sidebar" style={viewSidebar ? {display:'block'} : {display:'none'}}>
        <div className="text-white gbo_dash small_sidebar">
          <h4>ADMIN PANEL</h4>
          <div className="navbar_toggle sidebar_cross" style={{display:"none",float:"right"}} onClick={changeSidebar}><XSquare size="24" style={{marginBottom:"4px"}}/></div>
        </div>
        <ul className="nav flex-column" id="nav_accordion">
          <li className="nav-item" style={(currentPath==='/admin/dashboard') ? {backgroundImage:"linear-gradient(to right, #FF00FF , #00CFFF)"} :{background:"transparent"}}>
            <Link to="#" className="nav-link"><span><Speedometer2 size={18} color="#ffffff" /></span> Dashboard</Link>
          </li>

          <li className="nav-item" style={(currentPath==='/admin/admin_faq' || currentPath==='/admin/create_faq' || currentPath==='/admin/update_faq') ? {backgroundImage:"linear-gradient(to right, #FF00FF , #00CFFF)"} :{background:"transparent"}}>
            <Link to="/admin/admin_faq" className="nav-link"><span><QuestionCircle size={18} color="#ffffff" /></span> FAQs</Link>
          </li>

          <li className="nav-item" style={(currentPath==='/admin/perks' || currentPath==='/admin/create_perk' || currentPath==='/admin/update_perk') ? {backgroundImage:"linear-gradient(to right, #FF00FF , #00CFFF)"} :{background:"transparent"}}>
            <Link to="/admin/perks" className="nav-link"><span><QuestionCircle size={18} color="#ffffff" /></span> Membership Perks</Link>
          </li>

          <li className="nav-item" style={(currentPath==='/admin/whitelist_users' || currentPath==='/admin/create_whitelist' || currentPath==='/admin/update_whitelist') ? {backgroundImage:"linear-gradient(to right, #FF00FF , #00CFFF)"} :{background:"transparent"}}>
            <Link to="/admin/whitelist_users" className="nav-link"><span><QuestionCircle size={18} color="#ffffff" /></span> Whitelist Users</Link>
          </li>

          <li className="nav-item" style={(currentPath==='/admin/winners') ? {backgroundImage:"linear-gradient(to right, #FF00FF , #00CFFF)"} :{background:"transparent"}}>
            <Link to="/admin/winners" className="nav-link"><span><QuestionCircle size={18} color="#ffffff" /></span> Winner List</Link>
          </li>

          <li className="nav-item" style={(currentPath==='/admin/teams') ? {backgroundImage:"linear-gradient(to right, #FF00FF , #00CFFF)"} :{background:"transparent"}}>
            <Link to="#" className="nav-link"><span><QuestionCircle size={18} color="#ffffff" /></span> Teams</Link>
          </li>

          <li className="nav-item" style={(currentPath==='/admin/roadmap') ? {backgroundImage:"linear-gradient(to right, #FF00FF , #00CFFF)"} :{background:"transparent"}}>
            <Link to="#" className="nav-link"><span><QuestionCircle size={18} color="#ffffff" /></span> Roadmap</Link>
          </li>

          <li className="nav-item" style={currentPath==='/admin/landing_settings' ? {backgroundImage:"linear-gradient(to right, #FF00FF , #00CFFF)"} :{background:"transparent"}}>
            <Link to="#" className="nav-link"><span><Gear size={18} color="#ffffff" /></span> Landing Page</Link>
          </li>

          <li className="nav-item" style={currentPath==='/admin/global_settings' ? {backgroundImage:"linear-gradient(to right, #FF00FF , #00CFFF)"} :{background:"transparent"}}>
            <Link to="/admin/global_settings" className="nav-link"><span><Gear size={18} color="#ffffff" /></span> Global Settings</Link>
          </li>

          <li className="nav-item" style={currentPath==='/admin/change_password' ? {backgroundImage:"linear-gradient(to right, #FF00FF , #00CFFF)"} :{background:"transparent"}}>
            <Link to="/admin/change_password" className="nav-link"><span><LockFill size={18} color="#ffffff" /></span> Change Password</Link>
          </li>

          <li className="nav-item">
            <a onClick={logout} className="nav-link" style={{cursor:"pointer"}}><span><Power size={18} color="#ffffff" /></span>  Logout</a>
          </li>

          {/* <li className="nav-item">
            <p onClick={logout}><span><Power size={18} color="#ffffff"/></span> Logout</p>
          </li> */}

        </ul>
      </div>
    </>
  );
}
