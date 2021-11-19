import React,{useState,useEffect} from "react";
import { Link} from "react-router-dom";
import { Twitter,Discord,Instagram } from 'react-bootstrap-icons';
import { Path } from './admin/Path.js';

export default function Navbar() {
  const [settingsData, setSettingsData] = useState('');
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
        }
    )		
  }
  const openLink=()=>{
    window.open("http://twitter.com/");
  }
  const openLink1=()=>{
    window.open("https://discord.com/");
  }
  const openLink2=()=>{
    window.open("https://www.instagram.com/?hl=en");
  }
  useEffect(() => {
      get_data();
  }, []);	
  return (
    <>
      <div className="container-fluid home_navbar">
          <div className="row" style={{width:"100%",margin:"0"}}>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home_navbar_left_div">
                  <h4>CRYPTOCUNTS</h4>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home_navbar_right_div">
                  <ul>
                      <li><Link to="/admin/login" style={{fontSize:"17px",textDecoration:"none",color:"white"}}>Admin login</Link></li>
                      {settingsData.social_twitter==='1' ?
                      (<li><span onClick={openLink}><Twitter color="#72F595" size={20}/></span></li>):('')}
                      {settingsData.social_discord==='1' ?
                      (<li><span onClick={openLink1}><Discord color="#72F595" size={20}/></span></li>):('')}
                      {settingsData.social_instagram==='1' ?
                      (<li><span onClick={openLink2}><Instagram color="#72F595" size={20}/></span></li>):('')}
                  </ul>
              </div>
          </div>
      </div>
    </>
  );
}
