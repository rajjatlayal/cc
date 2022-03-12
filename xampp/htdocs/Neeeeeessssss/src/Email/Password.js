import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Global/Footer";
import Header from "../Components/Global/Header";

function Password() {
  return (
    <>
      <Header />
      <section className="login_sec">
        <div className="edit_profile register login">
          <div className="container">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-7">
                <div className="right_part space-y-20">
                  <h1 className="color_white"> Welcome to NFT Price Watch </h1>
                  <p className="color_white">
                    Change Your Password Below
                    <Link to="/register"> Register </Link>
                  </p>
                  <div className="box edit_box w-full space-y-20">
                    <div className="space-y-10">
                      <span className="nameInput">Old Password</span>
                      <div className="confirm">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput">New Password</span>
                      <div className="confirm">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your password"
                        />
                      </div>
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput"> Confirm Password</span>
                      <div className="confirm">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your password"
                        />
                      </div>
                    </div>

                    <a href="#" className="btn btn-grad w-full btn-lg ">
                      Login
                    </a>
                  </div>
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

export default Password;
