import React from "react";
import Footer from "./Global/Footer";
import Header from "./Global/Header";
import Info from "./Info";

function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
        <div className="row">
          <div className="col-md-4 contact__img">
            <div className="img__wrap">
              <img src={"images/contact.png"} alt="" />
            </div>
          </div>
          <div className="col-md-8 contact__content">
            <div className="container">
              <div className="content__wrap space-y-20">
                <div className="space-y-20">
                  <h1 className="text-left">Hi, 🖐 we are here to help.</h1>
                  <p className="contact__desc">
                    We’re here to help and answer any question you might have.{" "}
                    <br /> We look forward to hearing from you 🙂
                  </p>
                </div>
                <div className="box is__big">
                  <div className="space-y-10 mb-0">
                    <div className="row">
                      <div className="col-sm-6 space-y-20 mt-10">
                        <div className="space-y-10">
                          <span className="nameInput">Email address</span>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="contact@xyz.com"
                          />
                        </div>
                        <div className="space-y-10">
                          <span className="nameInput">Select Country</span>
                          <select
                            className="form-select
			                                            custom-select"
                            aria-label="Default
			                                            select example"
                          >
                            <option>United States</option>
                            <option>Finland</option>
                            <option>Norway</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 space-y-20 mt-10">
                        <div className="space-y-10">
                          <span className="nameInput">Full Name</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="space-y-10">
                          <span className="nameInput">Select a Subject</span>
                          <select
                            className="form-select
			                                            custom-select"
                            aria-label="Default
			                                            select example"
                          >
                            <option>Service Request</option>
                            <option>NFT items</option>
                            <option>Wallet</option>
                            <option>Purchase</option>
                            <option>Support</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 mt-20">
                        <div className="space-y-10">
                          <span className="nameInput">Message</span>
                          <textarea className="mb-0"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Info />
      <Footer />
    </>
  );
}

export default Contact;
