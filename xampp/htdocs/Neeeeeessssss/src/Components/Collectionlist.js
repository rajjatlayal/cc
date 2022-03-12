import React from "react";
import Footer from "./Global/Footer";
import Header from "./Global/Header";
import { Link } from "react-router-dom";
function Collectionlist() {
  return (
    <>
      <Header />

      <div className="hero__collections">
        <div className="container hero__collections">
          <h1 className="section__title gradient__text">Collection Info</h1>

          <div className="row justify-content-between align-items-center">
            <form class="search-container">
              <input type="text" id="search-bar" placeholder="Search here" />
              <Link to="/">
                <img
                  class="search-icon"
                  src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                />
              </Link>
            </form>
          </div>
        </div>
      </div>

      <div className="container list">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-7 order-md-0 order-1">
            <div className="profile__sidebar">
              <div className="space-y-40">
                <div className="space-y-10">
                  <h5>About Collection</h5>
                  <div className="box space-y-20">
                    <p>
                      I make art with the simple goal of giving you something
                      pleasing to look at for a few seconds.
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <span className="txt_sm color_text">Collections</span>
                        <h4>105</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-10">
                  <h5>Follow me</h5>
                  <div className="box">
                    <ul className="social_profile space-y-10 overflow-hidden">
                      <li>
                        <Link to="/">
                          <i className="ri-facebook-line"></i>
                          <span className="color_text">facebook/</span>
                          @collection
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="ri-messenger-line"></i>
                          <span className="color_text"> messenger/</span>
                          @collection
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="ri-whatsapp-line"></i>
                          <span className="color_text"> whatsapp/</span>
                          @collection
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="ri-twitter-line"></i>
                          <span className="color_text">twitter/</span>
                          @collection
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-center txt_sm mt-20 color_text">Since 2021</p>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 order-md-1 order-0">
            <div className="profile__content">
              <div className="d-flex justify-content-between">
                <div className="space-x-10">
                  <div className="d-flex justify-content-between">
                    <ul
                      className="nav nav-tabs d-flex space-x-10 mb-30"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <Link
                          className="btn btn-white btn-sm active"
                          data-toggle="tab"
                          to="#"
                          role="tab"
                        >
                          Collections
                        </Link>
                      </li>
                    </ul>
                    {/* <!-- Tab panes --> */}
                  </div>

                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-1"
                      role="tabpanel"
                    >
                      <div className="row mb-30_reset">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="card__item three">
                            <div className="card_body space-y-10">
                              {/* <!-- =============== --> */}
                              <div className="card_head">
                                <img src={"images/item_1.png"} alt="" />

                                <div className="action">
                                  <Link
                                    to="/"
                                    className="btn
																		btn-primary btn-sm
																		btn_auction"
                                    data-toggle="modal"
                                    data-target="/popup_bid"
                                  >
                                    <i
                                      className="ri-auction-line
																			color_white"
                                    ></i>
                                    Watchlist +
                                  </Link>
                                </div>
                              </div>
                              {/* <!-- =============== --> */}
                              <h6 className="card_title">
                                <Link className="color_black" to="">
                                  pop art Painting
                                </Link>
                              </h6>

                              <div
                                className="card_footer d-block
																space-y-10"
                              >
                                <div
                                  className="d-flex
																	justify-content-between
																	align-items-center"
                                >
                                  <div
                                    className="creators
																		space-x-10"
                                  >
                                    <div
                                      className="avatars
																			-space-x-20"
                                    >
                                      <img
                                        src={"images/avatar_1.png"}
                                        alt="Avatar"
                                        className="avatar
																					avatar-sm"
                                      />

                                      <img
                                        src={"images/avatar_2.png"}
                                        alt="Avatar"
                                        className="avatar
																					avatar-sm"
                                      />
                                    </div>

                                    <p
                                      className="avatars_name
																				txt_sm"
                                    >
                                      @luka_fenn..
                                    </p>
                                  </div>

                                  <p
                                    className="color_green
																			txt_sm"
                                  >
                                    0.001 ETH
                                  </p>
                                </div>
                                <div className="hr"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="card__item three">
                            <div className="card_body space-y-10">
                              {/* <!-- =============== --> */}
                              <div className="card_head">
                                <img src={"images/item_2.png"} alt="" />

                                <div className="action">
                                  <Link
                                    to="/"
                                    className="btn
																		btn-primary btn-sm
																		btn_auction"
                                    data-toggle="modal"
                                    data-target="/popup_bid"
                                  >
                                    <i
                                      className="ri-auction-line
																			color_white"
                                    ></i>
                                    Watchlist +
                                  </Link>
                                </div>
                              </div>
                              {/* <!-- =============== --> */}
                              <h6 className="card_title">Dodo hide the seek</h6>

                              <div
                                className="card_footer d-block
																space-y-10"
                              >
                                <div
                                  className="d-flex
																	justify-content-between
																	align-items-center"
                                >
                                  <div
                                    className="creators
																		space-x-10"
                                  >
                                    <div
                                      className="avatars
																			-space-x-20"
                                    >
                                      <img
                                        src={"images/avatar_3.png"}
                                        alt="Avatar"
                                        className="avatar
																					avatar-sm"
                                      />

                                      <img
                                        src={"images/avatar_4.png"}
                                        alt="Avatar"
                                        className="avatar
																					avatar-sm"
                                      />
                                    </div>

                                    <p
                                      className="avatars_name
																				txt_sm"
                                    >
                                      @noel_meon..
                                    </p>
                                  </div>
                                  <Link to="/" className="space-x-3">
                                    <p
                                      className="color_green
																			txt_sm"
                                    >
                                      0.035 ETH
                                    </p>
                                  </Link>
                                </div>
                                <div className="hr"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="card__item three">
                            <div className="card_body space-y-10">
                              {/* <!-- =============== --> */}
                              <div className="card_head">
                                <img src={"images/item_3.png"} alt="" />

                                <div className="action">
                                  <Link
                                    to="/"
                                    className="btn
																		btn-primary btn-sm
																		btn_auction"
                                    data-toggle="modal"
                                    data-target="/popup_bid"
                                  >
                                    <i
                                      className="ri-auction-line
																			color_white"
                                    ></i>
                                    Watchlist +
                                  </Link>
                                </div>
                              </div>
                              {/* <!-- =============== --> */}
                              <h6 className="card_title">
                                couple Abstract Painting
                              </h6>

                              <div
                                className="card_footer d-block
																space-y-10"
                              >
                                <div
                                  className="d-flex
																	justify-content-between
																	align-items-center"
                                >
                                  <div
                                    className="creators
																		space-x-10"
                                  >
                                    <div
                                      className="avatars
																			-space-x-20"
                                    >
                                      <img
                                        src={"images/avatar_5.png"}
                                        alt="Avatar"
                                        className="avatar
																					avatar-sm"
                                      />

                                      <img
                                        src={"images/avatar_6.png"}
                                        alt="Avatar"
                                        className="avatar
																					avatar-sm"
                                      />
                                    </div>

                                    <p
                                      className="avatars_name
																				txt_sm"
                                    >
                                      @zion_ach..
                                    </p>
                                  </div>
                                  <Link to="/" className="space-x-3">
                                    <p
                                      className="color_green
																			txt_sm"
                                    >
                                      0.008 ETH
                                    </p>
                                  </Link>
                                </div>
                                <div className="hr"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="card__item three">
                            <div className="card_body space-y-10">
                              {/* <!-- =============== --> */}
                              <div className="card_head">
                                <img src={"images/item_4.png"} alt="" />

                                <div className="action">
                                  <Link
                                    to="/"
                                    className="btn
																		btn-primary btn-sm
																		btn_auction"
                                    data-toggle="modal"
                                    data-target="/popup_bid"
                                  >
                                    <i
                                      className="ri-auction-line
																			color_white"
                                    ></i>
                                    Watchlist +
                                  </Link>
                                </div>
                              </div>
                              {/* <!-- =============== --> */}
                              <h6 className="card_title">
                                Smoking Abstract Painting
                              </h6>

                              <div
                                className="card_footer d-block
																space-y-10"
                              >
                                <div
                                  className="d-flex
																	justify-content-between
																	align-items-center"
                                >
                                  <div
                                    className="creators
																		space-x-10"
                                  >
                                    <div
                                      className="avatars
																			-space-x-20"
                                    >
                                      <img
                                        src={"images/avatar_7.png"}
                                        alt="Avatar"
                                        className="avatar
																					avatar-sm"
                                      />

                                      <img
                                        src={"images/avatar_8.png"}
                                        alt="Avatar"
                                        className="avatar
																					avatar-sm"
                                      />
                                    </div>

                                    <p
                                      className="avatars_name
																				txt_sm"
                                    >
                                      @nacer_dahr..
                                    </p>
                                  </div>
                                  <Link to="/" className="space-x-3">
                                    <p
                                      className="color_green
																			txt_sm"
                                    >
                                      0.002 ETH
                                    </p>
                                  </Link>
                                </div>
                                <div className="hr"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="card__item three">
                            <div className="card_body space-y-10">
                              {/* <!-- =============== --> */}
                              <div className="card_head">
                                <img src={"images/item_5.png"} alt="" />

                                <div className="action">
                                  <Link
                                    to="/"
                                    className="btn
																		btn-primary btn-sm
																		btn_auction"
                                    data-toggle="modal"
                                    data-target="/popup_bid"
                                  >
                                    <i
                                      className="ri-auction-line
																			color_white"
                                    ></i>
                                    Watchlist +
                                  </Link>
                                </div>
                              </div>
                              {/* <!-- =============== --> */}
                              <h6 className="card_title">
                                The girl with the firefly
                              </h6>

                              <div
                                className="card_footer d-block
																space-y-10"
                              >
                                <div
                                  className="d-flex
																	justify-content-between
																	align-items-center"
                                >
                                  <div
                                    className="creators
																		space-x-10"
                                  >
                                    <div
                                      className="avatars
																			-space-x-20"
                                    >
                                      <img
                                        src={"images/avatar_9.png"}
                                        alt="Avatar"
                                        className="avatar
																					avatar-sm"
                                      />

                                      <img
                                        src={"images/avatar_10.png"}
                                        alt="Avatar"
                                        className="avatar
																					avatar-sm"
                                      />
                                    </div>

                                    <p
                                      className="avatars_name
																				txt_sm"
                                    >
                                      @noel_meon..
                                    </p>
                                  </div>
                                  <Link to="/" className="space-x-3">
                                    <p
                                      className="color_green
																			txt_sm"
                                    >
                                      0.063 ETH
                                    </p>
                                  </Link>
                                </div>
                                <div className="hr"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="card__item three">
                            <div className="card_body space-y-10">
                              {/* <!-- =============== --> */}
                              <div className="card_head">
                                <img src={"images/item_6.png"} alt="" />

                                <div className="action">
                                  <Link
                                    to="/"
                                    className="btn
																		btn-primary btn-sm
																		btn_auction"
                                    data-toggle="modal"
                                    data-target="/popup_bid"
                                  >
                                    <i
                                      className="ri-auction-line
																			color_white"
                                    ></i>
                                    Watchlist +
                                  </Link>
                                </div>
                              </div>
                              {/* <!-- =============== --> */}
                              <h6 className="card_title">
                                couple Abstract Painting
                              </h6>

                              <div
                                className="card_footer d-block
																space-y-10"
                              >
                                <div
                                  className="d-flex
																	justify-content-between
																	align-items-center"
                                >
                                  <div
                                    className="creators
																		space-x-10"
                                  >
                                    <div
                                      className="avatars
																			-space-x-20"
                                    >
                                      <img
                                        src={"images/avatar_10.png"}
                                        alt="Avatar"
                                        className="avatar
																					avatar-sm"
                                      />

                                      <img
                                        src={"images/avatar_12.png"}
                                        alt="Avatar"
                                        className="avatar
																					avatar-sm"
                                      />
                                    </div>

                                    <p
                                      className="avatars_name
																				txt_sm"
                                    >
                                      @zain_gal..
                                    </p>
                                  </div>
                                  <Link to="/" className="space-x-3">
                                    <p
                                      className="color_green
																			txt_sm"
                                    >
                                      0.034 ETH
                                    </p>
                                  </Link>
                                </div>
                                <div className="hr"></div>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collectionlist;
