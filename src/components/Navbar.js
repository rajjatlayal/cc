import React from "react";
import { Twitter,Discord } from 'react-bootstrap-icons';

export default function Navbar() {
  return (
    <>
      <div className="container-fluid home_navbar">
          <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home_navbar_left_div">
                  <h4>LOGO</h4>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 home_navbar_right_div">
                  <ul>
                      <li><span><Twitter color="#72F595" size={20}/></span></li>
                      <li><span><Discord color="#72F595" size={20}/></span></li>
                  </ul>
              </div>
          </div>
      </div>
    </>
  );
}
