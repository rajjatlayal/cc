import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Global/Footer";
import Header from "../Components/Global/Header";
function Emailtemp() {
  return (
    <>
      <Header />
      <div className="jumbotron text-center">
        <h1>Thanks For Registering</h1>
        <p>You Can Simply Login by Clicking here</p>
        <form>
          <div className="input-group">
            <div className="input-group-btn">
              <Link className="btn btn-grad btn-md" to="/login">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>

      <div id="about" className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <h2>About Our Company</h2>
            <br />
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <br />
            <Link className="btn btn-grad btn-md" to="/">
              Contact
            </Link>
          </div>
          <div className="col-sm-4">
            <img src={"images/banner10.png"} className="email-img" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Emailtemp;
