import { Link } from "react-router-dom";
import React from "react";
import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";
function Reset() {
  return (
    <>
      <Header />
      {/* <!-- content begin --> */}

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          className="full-height relative no-top no-bottom vertical-center login-sec"
          data-stellar-background-ratio=".5"
        >
          <section className="login-sec">
            <div className="overlay-gradient t50">
              <div className="center-y relative">
                <div className="container">
                  <div className="row align-items-center">
                    <div
                      className="col-lg-4 offset-lg-4 wow fadeIn bg-color"
                      data-wow-delay=".5s"
                    >
                      <div className="box-rounded padding40">
                        <h3 className="mb10">Forgot Password</h3>
                        <p>Fill the form to reset your password.</p>
                        <form
                          name="contactForm"
                          id="contact_form"
                          className="form-border"
                          method="post"
                          action="blank.php"
                        >
                          <div className="field-set">
                            <label className="label-email">
                              Email Address:
                            </label>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              className="form-control"
                              placeholder="email"
                              required
                            />
                          </div>

                          <div className="field-set">
                            <Link className="btn btn-grad submit-btn" to="">
                              submit
                            </Link>
                          </div>

                          <div className="clearfix"></div>

                          <div className="spacer-single"></div>

                          <div className="forgot">
                            <p>
                              Return to <Link to="/login">Sign in</Link>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Reset;
