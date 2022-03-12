import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Global/Footer";
import Header from "./Global/Header";
function Collections() {
  return (
    <>
      <Header />
      <div className="hero__collections">
        <div className="container hero__collections">
          <h1 className="section__title gradient__text">Collections</h1>

          <div className="row justify-content-between align-items-center">
            <form class="search-container">
              <input type="text" id="search-bar" placeholder="Search here" />
              <a href="#">
                <img
                  class="search-icon"
                  src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                />
              </a>
            </form>
          </div>
        </div>
      </div>

      <div className="section collections-bg mt-100">
        <div className="container">
          <div className="row justify-content-center mb-30_reset">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <Link to="/collections-list">
                  {" "}
                  <div className="collections_item">
                    <div className="images-box space-y-10">
                      <div className="d-flex space-x-10">
                        <img
                          style={{ width: "33.33%" }}
                          src={"images/item_1.png"}
                          alt=""
                        />
                        <img
                          style={{ width: "33.33%" }}
                          src={"images/item_2.png"}
                          alt=""
                        />
                        <img
                          style={{ width: "33.33%" }}
                          src={"images/item_3.png"}
                          alt=""
                        />
                      </div>
                      <div>
                        <img src={"images/item_4.png"} alt="" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="collections_footer justify-content-between">
                  <h5 className="collection_title">
                    <Link to="/collections-list">Creative Art collection</Link>
                  </h5>
                </div>
                <div className="creators space-x-10">
                  <span className="color_text txt_md">
                    {" "}
                    5 items · Created by
                  </span>
                  <div className="avatars space-x-5">
                    <Link to="/collections-list">
                      <img
                        src={"images/avatar_1.png"}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                  </div>
                  <Link to="/collections-list">
                    <p className="avatars_name txt_sm"> @william_jamy... </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <div className="collections_item">
                  <Link to="/collections-list">
                    <div className="images-box space-y-10">
                      <div className="d-flex space-x-10">
                        <img
                          style={{ width: "33.33%" }}
                          src={"images/item_5.png"}
                          alt=""
                        />
                        <img
                          style={{ width: "33.33%" }}
                          src={"images/item_6.png"}
                          alt=""
                        />
                        <img
                          style={{ width: "33.33%" }}
                          src={"images/item_7.png"}
                          alt=""
                        />
                      </div>
                      <div>
                        <img src={"images/item_8.png"} alt="" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="collections_footer justify-content-between">
                  <h5 className="collection_title">
                    <Link to="/collections-list">
                      Colorful Abstract collection
                    </Link>
                  </h5>
                </div>
                <div className="creators space-x-10">
                  <span className="color_text txt_md">
                    {" "}
                    7 items · Created by
                  </span>
                  <div className="avatars space-x-5">
                    <Link to="/collections-list">
                      <img
                        src={"images/avatar_2.png"}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                  </div>
                  <Link to="/collections-list">
                    <p className="avatars_name txt_sm"> @alexis_fenn... </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <div className="collections_item">
                  <Link to="/collections-list">
                    <div className="images-box space-y-10">
                      <div className="d-flex space-x-10">
                        <img
                          style={{ width: "33.33%" }}
                          src={"images/item_2.png"}
                          alt=""
                        />
                        <img
                          style={{ width: "33.33%" }}
                          src={"images/item_6.png"}
                          alt=""
                        />
                        <img
                          style={{ width: "33.33%" }}
                          src={"images/item_3.png"}
                          alt=""
                        />
                      </div>
                      <div>
                        <img src={"images/item_7.png"} alt="" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="collections_footer justify-content-between">
                  <h5 className="collection_title">
                    <Link to="/collections-list">
                      Photography Art collection
                    </Link>
                  </h5>
                </div>
                <div className="creators space-x-10">
                  <span className="color_text txt_md">
                    {" "}
                    2 items · Created by
                  </span>
                  <div className="avatars space-x-5">
                    <Link to="/collections-list">
                      <img
                        src={"images/avatar_3.png"}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                  </div>
                  <Link to="/collections-list">
                    <p className="avatars_name txt_sm"> @Joshua_Bren... </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <div className="collections_item">
                  <Link to="/collections-list">
                    <div className="images-box space-y-10">
                      <div className="d-flex space-x-10">
                        <img
                          style={{ width: "33.33%" }}
                          src={"images/item_1.png"}
                          alt=""
                        />
                        <img
                          style={{ width: "33.33%" }}
                          src={"images/item_2.png"}
                          alt=""
                        />
                        <img
                          style={{ width: "33.33%" }}
                          src={"images/item_3.png"}
                          alt=""
                        />
                      </div>
                      <div>
                        <img src={"images/item_4.png"} alt="" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="collections_footer justify-content-between">
                  <h5 className="collection_title">
                    <Link to="/collections-list">Fantasy Art collection</Link>
                  </h5>
                </div>
                <div className="creators space-x-10">
                  <span className="color_text txt_md">
                    {" "}
                    5 items · Created by
                  </span>
                  <div className="avatars space-x-5">
                    <Link to="/collections-list">
                      <img
                        src={"images/avatar_4.png"}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                  </div>
                  <Link to="/collections-list">
                    <p className="avatars_name txt_sm"> @william_jamy... </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <div className="collections_item">
                  <Link to="/collections-list">
                    <div className="images-box space-y-10">
                      <div className="d-flex space-x-10">
                        <img
                          style={{ width: "33.33%" }}
                          src="images/item_5.png"
                          alt=""
                        />
                        <img
                          style={{ width: "33.33%" }}
                          src="images/item_6.png"
                          alt=""
                        />
                        <img
                          style={{ width: "33.33%" }}
                          src="images/item_7.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <img src="images/item_8.png" alt="" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="collections_footer justify-content-between">
                  <h5 className="collection_title">
                    <Link to="/collections-list">Pop Art collection</Link>
                  </h5>
                </div>
                <div className="creators space-x-10">
                  <span className="color_text txt_md">
                    {" "}
                    7 items · Created by
                  </span>
                  <div className="avatars space-x-5">
                    <Link to="/collections-list">
                      <img
                        src={"images/avatar_5.png"}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                  </div>
                  <Link to="/collections-list">
                    <p className="avatars_name txt_sm"> @alexis_fenn... </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <div className="collections_item">
                  <Link to="/collections-list">
                    <div className="images-box space-y-10">
                      <div className="d-flex space-x-10">
                        <img
                          style={{ width: "33.33%" }}
                          src="images/item_2.png"
                          alt=""
                        />
                        <img
                          style={{ width: "33.33%" }}
                          src="images/item_6.png"
                          alt=""
                        />
                        <img
                          style={{ width: "33.33%" }}
                          src="images/item_3.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <img src="images/item_7.png" alt="" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="collections_footer justify-content-between">
                  <h5 className="collection_title">
                    <Link to="/collections-list">
                      Contemporary Art collection
                    </Link>
                  </h5>
                </div>
                <div className="creators space-x-10">
                  <span className="color_text txt_md">
                    {" "}
                    2 items · Created by
                  </span>
                  <div className="avatars space-x-5">
                    <Link to="/collections-list">
                      <img
                        src={"images/avatar_6.png"}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                  </div>
                  <Link to="/collections-list">
                    <p className="avatars_name txt_sm"> @Joshua_Bren... </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collections;
