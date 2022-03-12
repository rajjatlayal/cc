import React from "react";
import { Link } from "react-router-dom";
import Popup from "../../Email/Popup";
function Header() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="row">
          <div className="col-9">
            <Link className="navbar-brand header__logo" to="/">
              <img className="logo-img" src={"images/logo-black.png"} />
            </Link>
          </div>
          <div className="col-3">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-item nav-link hover-underline-animation"
              to="/"
            >
              Home
            </Link>

            <Link
              className="nav-item nav-link hover-underline-animation"
              to="/collections-list"
            >
              NFTs
            </Link>
            <Link
              className="nav-item nav-link hover-underline-animation"
              to="/collections"
            >
              Collections
            </Link>

            <Link
              className="nav-item nav-link hover-underline-animation"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="nav-item nav-link hover-underline-animation"
              to="/register"
            >
              Register
            </Link>

            <Link className="nav-item dropdown nav-link ">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Alerts
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div
                  className="dropdown-menu notification-ui_dd show"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="notification-ui_dd-header">
                    <h3 className="text-center">Notifications</h3>
                  </div>
                  <div className="notification-ui_dd-content">
                    <div className="notification-list notification-list--unread">
                      <div className="notification-list_img">
                        <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user" />
                      </div>
                      <div className="notification-list_detail">
                        <p>
                          <b>John Doe</b> reacted to your post
                        </p>
                        <p>
                          <small>10 mins ago</small>
                        </p>
                      </div>
                      <div className="notification-list_feature-img">
                        <img
                          src="https://i.imgur.com/AbZqFnR.jpg"
                          alt="Feature image"
                        />
                      </div>
                    </div>
                    <div className="notification-list notification-list--unread">
                      <div className="notification-list_img">
                        <img src="https://i.imgur.com/w4Mp4ny.jpg" alt="user" />
                      </div>
                      <div className="notification-list_detail">
                        <p>
                          <b>Richard Miles</b> reacted to your post
                        </p>
                        <p>
                          <small>1 day ago</small>
                        </p>
                      </div>
                      <div className="notification-list_feature-img">
                        <img
                          src="https://i.imgur.com/AbZqFnR.jpg"
                          alt="Feature image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="notification-ui_dd-footer"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid header-container">
          <div className="row">
            <div className="col-9">
              <Link className="navbar-brand header__logo" to="/">
                <img className="logo-img" src={"images/logo-black.png"} />
              </Link>
            </div>
            <div className="col-3">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active hover-underline-animation"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link
                className="nav-link hover-underline-animation"
                to="/collections-list"
              >
                NFTs
              </Link>
              <Link
                className="nav-link hover-underline-animation"
                to="/collections"
              >
                Collections
              </Link>
              <Link className="nav-link hover-underline-animation" to="/login">
                Login
              </Link>
              <Link
                className="nav-link hover-underline-animation"
                to="/register"
              >
                Register
              </Link>

              <span className="nav-item dropdown nav-link alert">
                <h6
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Alerts
                </h6>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div
                    className="dropdown-menu notification-ui_dd show"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="notification-ui_dd-header">
                      <h3 style={{ fontSize: "20px" }} className="text-center">
                        Alerts
                      </h3>
                    </div>
                    <div className="notification-ui_dd-content">
                      <div className="notification-list notification-list--unread">
                        <div className="notification-list_img">
                          <img
                            src="https://i.imgur.com/zYxDCQT.jpg"
                            alt="user"
                          />
                        </div>
                        <div className="notification-list_detail">
                          <p>
                            <b>John Doe</b> reacted to your post
                          </p>
                          <p>
                            <small>10 mins ago</small>
                          </p>
                        </div>
                      </div>
                      <div className="notification-list notification-list--unread">
                        <div className="notification-list_img">
                          <img
                            src="https://i.imgur.com/w4Mp4ny.jpg"
                            alt="user"
                          />
                        </div>
                        <div className="notification-list_detail">
                          <p>
                            <b>Richard Miles</b> reacted to your post
                          </p>
                          <p>
                            <small>1 day ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="notification-ui_dd-footer"></div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
