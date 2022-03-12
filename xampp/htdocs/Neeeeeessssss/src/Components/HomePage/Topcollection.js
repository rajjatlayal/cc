import React from "react";
import { Link } from "react-router-dom";
function Topcollection() {
  return (
    <>
      <div className="container list">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-12 order-md-1 order-0">
            <div className="section__head">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="section__title gradient__text">Trending Nfts</h2>
                {/* <a href="Collections.html" className="btn btn-dark btn-sm">
			                    View
			                    All</a>   */}
                <Link className="btn btn-grad btn-md" to="/">
                  View All{" "}
                </Link>
              </div>
            </div>
            <div className="profile__content">
              <div className="d-flex justify-content-between">
                <div className="space-x-10">
                  <div className="d-flex justify-content-between">
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
                              </div>
                              {/* <!-- =============== --> */}
                              <h6 class="card_title">pop art Paintings</h6>

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
                                  <a href="#" className="space-x-3">
                                    <p
                                      className="color_green
																			txt_sm"
                                    >
                                      0.001 ETH
                                    </p>
                                  </a>
                                </div>
                                <div className="hr"></div>
                                <div
                                  className="d-flex
																	align-items-center
																	space-x-10"
                                >
                                  <i className="ri-vip-crown-line"></i>
                                  <p
                                    className="color_text
																		txt_sm"
                                    style={{ width: "auto" }}
                                  >
                                    Highest bid
                                  </p>
                                  <span
                                    className="color_black
																		txt_sm"
                                  >
                                    0.022 ETH
                                  </span>
                                </div>
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

                                {/* <div className="action">
                                  <a
                                    href="#"
                                    className="btn
																		btn-primary btn-sm
																		btn_auction"
                                    data-toggle="modal"
                                    data-target="#popup_bid"
                                  >
                                    <i
                                      className="ri-auction-line
																			color_white"
                                    ></i>
                                    Place Your Bid
                                  </a>
                                </div> */}
                              </div>
                              {/* <!-- =============== --> */}
                              <h6 className="card_title">
                                <a
                                  className="color_black"
                                  href="Item-details.html"
                                >
                                  Dodo hide the seek
                                </a>
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
                                      <a href="Profile.html">
                                        <img
                                          src={"images/avatar_3.png"}
                                          alt="Avatar"
                                          className="avatar
																					avatar-sm"
                                        />
                                      </a>
                                      <a href="Profile.html">
                                        <img
                                          src={"images/avatar_4.png"}
                                          alt="Avatar"
                                          className="avatar
																					avatar-sm"
                                        />
                                      </a>
                                    </div>
                                    <a href="Profile.html">
                                      <p
                                        className="avatars_name
																				txt_sm"
                                      >
                                        @noel_meon..
                                      </p>
                                    </a>
                                  </div>
                                  <a href="#" className="space-x-3">
                                    <p
                                      className="color_green
																			txt_sm"
                                    >
                                      0.035 ETH
                                    </p>
                                  </a>
                                </div>
                                <div className="hr"></div>
                                <div
                                  className="d-flex
																	align-items-center
																	space-x-10"
                                >
                                  <i className="ri-vip-crown-line"></i>
                                  <p
                                    className="color_text
																		txt_sm"
                                    style={{ width: "auto" }}
                                  >
                                    Highest bid
                                  </p>
                                  <span
                                    className="color_black
																		txt_sm"
                                  >
                                    0.075 ETH
                                  </span>
                                </div>
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
                              </div>
                              {/* <!-- =============== --> */}
                              <h6 className="card_title">
                                <a
                                  className="color_black"
                                  href="Item-details.html"
                                >
                                  couple Abstract Painting
                                </a>
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
                                      <a href="Profile.html">
                                        <img
                                          src={"images/avatar_5.png"}
                                          alt="Avatar"
                                          className="avatar
																					avatar-sm"
                                        />
                                      </a>
                                      <a href="Profile.html">
                                        <img
                                          src={"images/avatar_6.png"}
                                          alt="Avatar"
                                          className="avatar
																					avatar-sm"
                                        />
                                      </a>
                                    </div>
                                    <a href="Profile.html">
                                      <p
                                        className="avatars_name
																				txt_sm"
                                      >
                                        @zion_ach..
                                      </p>
                                    </a>
                                  </div>
                                  <a href="#" className="space-x-3">
                                    <p
                                      className="color_green
																			txt_sm"
                                    >
                                      0.008 ETH
                                    </p>
                                  </a>
                                </div>
                                <div className="hr"></div>
                                <div
                                  className="d-flex
																	align-items-center
																	space-x-10"
                                >
                                  <i className="ri-vip-crown-line"></i>
                                  <p
                                    className="color_text
																		txt_sm"
                                    style={{ width: "auto" }}
                                  >
                                    Highest bid
                                  </p>
                                  <span
                                    className="color_black
																		txt_sm"
                                  >
                                    0.074 ETH
                                  </span>
                                </div>
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

                                {/* <div className="action">
                                  <a
                                    href="#"
                                    className="btn
																		btn-primary btn-sm
																		btn_auction"
                                    data-toggle="modal"
                                    data-target="#popup_bid"
                                  >
                                    <i
                                      className="ri-auction-line
																			color_white"
                                    ></i>
                                    Place Your Bid
                                  </a>
                                </div> */}
                              </div>
                              {/* <!-- =============== --> */}
                              <h6 className="card_title">
                                <a
                                  className="color_black"
                                  href="Item-details.html"
                                >
                                  smoking Abstract Painting
                                </a>
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
                                      <a href="Profile.html">
                                        <img
                                          src={"images/avatar_7.png"}
                                          alt="Avatar"
                                          className="avatar
																					avatar-sm"
                                        />
                                      </a>
                                      <a href="Profile.html">
                                        <img
                                          src={"images/avatar_8.png"}
                                          alt="Avatar"
                                          className="avatar
																					avatar-sm"
                                        />
                                      </a>
                                    </div>
                                    <a href="Profile.html">
                                      <p
                                        className="avatars_name
																				txt_sm"
                                      >
                                        @nacer_dahr..
                                      </p>
                                    </a>
                                  </div>
                                  <a href="#" className="space-x-3">
                                    <p
                                      className="color_green
																			txt_sm"
                                    >
                                      0.002 ETH
                                    </p>
                                  </a>
                                </div>
                                <div className="hr"></div>
                                <div
                                  className="d-flex
																	align-items-center
																	space-x-10"
                                >
                                  <i className="ri-vip-crown-line"></i>
                                  <p
                                    className="color_text
																		txt_sm"
                                    style={{ width: "auto" }}
                                  >
                                    Highest bid
                                  </p>
                                  <span
                                    className="color_black
																		txt_sm"
                                  >
                                    0.063 ETH
                                  </span>
                                </div>
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

                                {/* <div className="action">
                                  <a
                                    href="#"
                                    className="btn
																		btn-primary btn-sm
																		btn_auction"
                                    data-toggle="modal"
                                    data-target="#popup_bid"
                                  >
                                    <i
                                      className="ri-auction-line
																			color_white"
                                    ></i>
                                    Place Your Bid
                                  </a>
                                </div> */}
                              </div>
                              {/* <!-- =============== --> */}
                              <h6 className="card_title">
                                <a
                                  className="color_black"
                                  href="Item-details.html"
                                >
                                  The girl with the firefly
                                </a>
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
                                      <a href="Profile.html">
                                        <img
                                          src={"images/avatar_9.png"}
                                          alt="Avatar"
                                          className="avatar
																					avatar-sm"
                                        />
                                      </a>
                                      <a href="Profile.html">
                                        <img
                                          src={"images/avatar_10.png"}
                                          alt="Avatar"
                                          className="avatar
																					avatar-sm"
                                        />
                                      </a>
                                    </div>
                                    <a href="Profile.html">
                                      <p
                                        className="avatars_name
																				txt_sm"
                                      >
                                        @noel_meon..
                                      </p>
                                    </a>
                                  </div>
                                  <a href="#" className="space-x-3">
                                    <p
                                      className="color_green
																			txt_sm"
                                    >
                                      0.063 ETH
                                    </p>
                                  </a>
                                </div>
                                <div className="hr"></div>
                                <div
                                  className="d-flex
																	align-items-center
																	space-x-10"
                                >
                                  <i className="ri-vip-crown-line"></i>
                                  <p
                                    className="color_text
																		txt_sm"
                                    style={{ width: "auto" }}
                                  >
                                    Highest bid
                                  </p>
                                  <span
                                    className="color_black
																		txt_sm"
                                  >
                                    0.054 ETH
                                  </span>
                                </div>
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

                                {/* <div className="action">
                                  <a
                                    href="#"
                                    className="btn
																		btn-primary btn-sm
																		btn_auction"
                                    data-toggle="modal"
                                    data-target="#popup_bid"
                                  >
                                    <i
                                      className="ri-auction-line
																			color_white"
                                    ></i>
                                    Place Your Bid
                                  </a>
                                </div> */}
                              </div>
                              {/* <!-- =============== --> */}
                              <h6 className="card_title">
                                <a
                                  className="color_black"
                                  href="Item-details.html"
                                >
                                  couple Abstract Painting
                                </a>
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
                                      <a href="Profile.html">
                                        <img
                                          src={"images/avatar_10.png"}
                                          alt="Avatar"
                                          className="avatar
																					avatar-sm"
                                        />
                                      </a>
                                      <a href="Profile.html">
                                        <img
                                          src={"images/avatar_12.png"}
                                          alt="Avatar"
                                          className="avatar
																					avatar-sm"
                                        />
                                      </a>
                                    </div>
                                    <a href="Profile.html">
                                      <p
                                        className="avatars_name
																				txt_sm"
                                      >
                                        @zain_gal..
                                      </p>
                                    </a>
                                  </div>
                                  <a href="#" className="space-x-3">
                                    <p
                                      className="color_green
																			txt_sm"
                                    >
                                      0.034 ETH
                                    </p>
                                  </a>
                                </div>
                                <div className="hr"></div>
                                <div
                                  className="d-flex
																	align-items-center
																	space-x-10"
                                >
                                  <i className="ri-vip-crown-line"></i>
                                  <p
                                    className="color_text
																		txt_sm"
                                    style={{ width: "auto" }}
                                  >
                                    Highest bid
                                  </p>
                                  <span
                                    className="color_black
																		txt_sm"
                                  >
                                    0.084 ETH
                                  </span>
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
      </div>
    </>
  );
}

export default Topcollection;
