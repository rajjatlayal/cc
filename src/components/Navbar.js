/* eslint-disable */
import React,{useState,useEffect} from "react";
import { Twitter,Discord,Instagram } from 'react-bootstrap-icons';
import { setting_table_id } from './admin/Path.js';
import { DataStore,Predicates } from '@aws-amplify/datastore';
import {Settings} from './../models';
import { Amplify,Hub} from 'aws-amplify';
export default function Navbar() {
  const [settingsData, setSettingsData] = useState('');
    const get_data=async()=>{
      const data= await DataStore.query(Settings,setting_table_id).then((data)=>{
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
    const removeListener = Hub.listen("datastore", async (capsule) => {
      const {
        payload: { event, data },
      } = capsule;
      if (event === "ready") {
        get_data();
      }
    });
    // Start the DataStore, this kicks-off the sync process.
    DataStore.start();
    return () => {
      removeListener();
    };
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
                      (<li className="social_li"><span onClick={openLink}><Twitter color="#72F595" size={20}/></span></li>):('')}
                      {settingsData.social_discord==='true' ?
                      (<li className="social_li"><span onClick={openLink1}><Discord color="#72F595" size={20}/></span></li>):('')}
                      {settingsData.social_instagram==='true' ?
                      (<li className="social_li"><span onClick={openLink2}><Instagram color="#72F595" size={20}/></span></li>):('')}
                  </ul>
              </div>
          </div>
      </div>
    </>
  );
}
