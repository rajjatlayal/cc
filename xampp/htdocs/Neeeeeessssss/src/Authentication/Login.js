import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Global/Footer";
import Header from "../Components/Global/Header";
import GoogleLogin from "react-google-login";

import Social from "./Social";
import Facebooklog from "./Facebooklog";

function Login() {
  // function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  //   var profile = googleUser.getBasicProfile();
  //   console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  //   console.log("Full Name: " + profile.getName());
  //   console.log("Given Name: " + profile.getGivenName());
  //   console.log("Family Name: " + profile.getFamilyName());
  //   console.log("Image URL: " + profile.getImageUrl());
  //   console.log("Email: " + profile.getEmail());

  //   // The ID token you need to pass to your backend:
  //   var id_token = googleUser.getAuthResponse().id_token;
  //   console.log("ID Token: " + id_token);
  // }

  return (
    <>
      <Header />
      <section className="login_sec">
        <div className="edit_profile register login">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="right_part space-y-20">
                  <h1 className="color_white"> Welcome to NFT Price Watch </h1>
                  <p className="color_white">
                    Don't have an account yet?
                    <Link to="/register"> Register </Link>
                  </p>
                  <div className="box edit_box w-full space-y-20">
                    <div className="space-y-10">
                      <span className="nameInput">Email </span>
                      <div className="confirm">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput">Password</span>
                      <div className="confirm">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your password"
                        />
                      </div>
                    </div>
                    <Link to="/forgot-password">
                      <div className="forgot">
                        <h6>Forgot Password?</h6>
                      </div>
                    </Link>
                    <Link to="/" className="btn btn-grad w-full btn-lg ">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="social-share-media form-wrapper-one">
                  <h6>Another way to log in</h6>
                  <p>
                    Lorem ipsum dolor sit, amet sectetur adipisicing
                    elit.cumque.
                  </p>
                  <ul className="login_list">
                    <li>
                      {/* <div
                        className="g-signin2"
                        data-onsuccess="onSignIn"
                        data-theme="dark"
                      ></div> */}
                      <GoogleLogin
                        clientId="898519673309-app7jhdpk5ib3l29jibl5pkvefnsgrfc.apps.googleusercontent.com"
                        buttonText="Sign in with Google"
                        // onSuccess={successLogin}
                        // onFailure={responseGoogle}
                        autoLoad={true}
                        cookiePolicy={"single_host_origin"}
                        // uxMode="popup"
                        redirectUri="http://localhost:3000/"
                        render={(renderProps) => (
                          <button
                            className="btn2 btn-primary2 animate shake"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                          >
                            Sign in with Google
                          </button>
                        )}
                      />
                      {/* <GoogleLog /> */}
                      {/* <div className="g-signin">
                        <Social />
                      </div> */}
                      {/* </button> */}
                    </li>
                    <li>
                      <button className="another-login login-facebook">
                        <img
                          className="small-image"
                          src={"images/facebook.png"}
                          alt=""
                        />
                        <span>
                          <Facebooklog />
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Login;
