import React from "react";
import { Server,PersonFill,LockFill } from 'react-bootstrap-icons';

function Login()  {
    return (
        <div className="row row_class">
            <div className="container admin_container">
              <div className="row row_class">
                <div className="login_left_div col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{paddingRight:"0",margin:"auto"}}>
                    <div className="admin_div">
                      <h2>Admin Login</h2>
                      <p>Sign in to your account</p>
                      <form>
                        <div className="form_data">
                          <label>Email</label>
                          <div className="form_group">
                            <span><PersonFill size={20} color="#4B4B4B" /></span>
                            <input type="text" className="form-control" placeholder="Enter your username"></input>
                          </div>
                        </div>
                        <div className="form_data">
                          <label>Password</label>
                          <div className="form_group">
                            <span><LockFill size={20} color="#4B4B4B" /></span>
                            <input type="password" className="form-control" placeholder="Enter your password"/>
                          </div>
                        </div>
                        <div>
                          <button className="login_btn">LOGIN</button>
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
                          <h2>Work <span>Flow</span></h2>
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
