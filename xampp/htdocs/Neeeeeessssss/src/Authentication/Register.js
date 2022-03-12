import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Global/Footer";
import Header from "../Components/Global/Header";
function Register() {
  return (
    <>
      <Header />
      <div className="edit_profile register register_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="right_part space-y-20">
                <h1 className="color_white"> Register new account</h1>

                <div className="box edit_box w-full space-y-20">
                  <div className="row">
                    <div className="col-lg-12 account-info">
                      <div className="avatars space-x-20 mb-30">
                        <div id="profile-container">
                          <img
                            id="profileImage"
                            src={"images/avatar_3.png"}
                            alt="Avatar"
                            className="avatar avatar-lg border-0"
                          />
                        </div>
                        <div className="user-heading">
                          <h6 className="mb-1">Profile photo</h6>
                          <p className="mb-1">
                            We recommend an image of at least 400x400. Gifs work
                            too 🙌
                          </p>

                          <div id="boxUpload">
                            <Link to="/" className="btn btn-sm btn-dark">
                              {" "}
                              Upload{" "}
                            </Link>
                            <input
                              id="imageUpload"
                              type="file"
                              name="profile_photo"
                              placeholder="Photo"
                              required=""
                              capture=""
                            />
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-20 account-head"> 🍉 Account info </h3>
                      <div className="form-group space-y-10 mb-0">
                        <div className="space-y-20">
                          <div className="space-y-10">
                            <span className="nameInput">Display name</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="your name"
                            />
                          </div>

                          <div className="space-y-10">
                            <span className="nameInput d-flex justify-content-between">
                              Email
                            </span>
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
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput"> Confirm Password</span>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hr"></div>
                  <p className="color_black">
                    Please take a few minutes to read and understand{" "}
                    <Link to="/terms-conditions">Terms and Conditions.</Link>
                  </p>
                  <div className="register-button">
                    <Link to="/" className="btn btn-grad reg-btn">
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
