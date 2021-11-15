/*eslint-disable*/
import React,{useState,useEffect} from "react";
import { Link,useHistory} from "react-router-dom";
import eventBus from "../../eventBus";
import { GearFill,Power,XSquare } from 'react-bootstrap-icons';

export default function Sidebar() {
  let history = useHistory();
  const [viewSidebar, setViewSidebar] = useState('');  
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
  }, []);
  return (
    <>
      <div className="sidebar" style={viewSidebar ? {display:'block'} : {display:'none'}}>
        <div className="text-white gbo_dash">
          <div className="navbar_toggle sidebar_cross" style={{display:"none",float:"right"}} onClick={changeSidebar}><XSquare size="24" style={{marginBottom:"4px"}}/></div>
        </div>
        <ul className="nav flex-column" id="nav_accordion">  
          <li className="nav-item">
            <Link to="/admin/settings" className="nav-link"><span><GearFill size={18} color="#ffffff" /></span> Settings</Link>
          </li>
          <li className="nav-item">
            <p onClick={logout}><span><Power size={18} color="#ffffff"/></span> Logout</p>
          </li>
        </ul>
      </div>
    </>
  );
}
