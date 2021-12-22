import React,{useState,useEffect} from "react";
import { Link} from "react-router-dom";
import { Twitter,Discord,Instagram } from 'react-bootstrap-icons';
import { Path } from './admin/Path.js';
import { DataStore,Predicates } from '@aws-amplify/datastore';
import {Settings} from './../models';

export default function Navbar() {
  const [settingsData, setSettingsData] = useState('');
    const get_data=()=>{
    // fetch(Path+"get_settings_data.php", { 
    //   method: "POST",       
    //   body: JSON.stringify({
    //     token: localStorage.getItem('token'),
    //   }), 	
    // })
    // .then(res => res.json())
    // .then(response=>{
    //         setSettingsData(response.updated_data);
    //     }
    // )	
      DataStore.query(Settings,'9916452e-cbef-4e28-b459-016bf0f5a713').then((data)=>{
          setSettingsData(data);
      }).catch((err)=>{
          console.log(err);
      })	
  }
  const openLink=()=>{
    window.open(settingsData.twitter_link);
  }
  const openLink1=()=>{
    window.open(settingsData.discord_link);
  }
  const openLink2=()=>{
    window.open(settingsData.insta_link);
  }
  const discordLink=()=>{
    window.open("https://discord.gg/hjrtqattwp");
  }
  useEffect(() => {
      get_data();
  }, []);	
  return (
    <>
      <div className="container-fluid home_navbar">
          <div className="row top_bar" style={{width:"100%",margin:"0"}}>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home_navbar_left_div">
                  <h4>CRYPTOCUNTS CLUB</h4>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home_navbar_right_div">
                  <ul>
                      <li><span className="top_btn" onClick={discordLink}>Join our discord</span></li>
                      {settingsData.social_twitter==='true' ?
                      (<li><span onClick={openLink}><Twitter color="#72F595" size={20}/></span></li>):('')}
                      {settingsData.social_discord==='true' ?
                      (<li><span onClick={openLink1}><Discord color="#72F595" size={20}/></span></li>):('')}
                      {settingsData.social_instagram==='true' ?
                      (<li><span onClick={openLink2}><Instagram color="#72F595" size={20}/></span></li>):('')}
                  </ul>
              </div>
          </div>
      </div>
    </>
  );
}
