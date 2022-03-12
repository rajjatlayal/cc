import React from "react";
import { Link } from "react-router-dom";
function Trending() {
  return (
    <>
      <div className="section mt-100 collections">
        <div className="container">
          <div className="section__head">
            <div className="d-flex justify-content-between align-items-center trending">
              <h2 className="section__title gradient__text">Trending Nfts</h2>
              {/* <Link to="Collections.html" className="btn btn-dark btn-sm">
			                    View
			                    All</Link>   */}
              <Link className="btn btn-grad btn-md" to="/">
                View More{" "}
              </Link>
            </div>
          </div>

          <div className="row justify-content-center mb-30_reset">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="card__item three">
                <div className="card_body space-y-10">
                  {/* <!-- =============== --> */}
                  <div className="card_head">
                    <img src={"images/item_1.png"} alt="" />
                  </div>
                  {/* <!-- =============== --> */}
                  <div className="add-butn">
                    <h6 className="card_title">
                      <Link className="color_black" to="/">
                        pop art Painting
                      </Link>
                      <span>
                        <button className="add_btns">Add +</button>
                      </span>
                    </h6>
                  </div>

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
                          <Link to="Profile.html">
                            <img
                              src={"images/avatar_1.png"}
                              alt="Avatar"
                              className="avatar
																					avatar-sm"
                            />
                          </Link>
                          <Link to="Profile.html">
                            <img
                              src={"images/avatar_2.png"}
                              alt="Avatar"
                              className="avatar
																					avatar-sm"
                            />
                          </Link>
                        </div>
                        <Link to="Profile.html">
                          <p
                            className="avatars_name
																				txt_sm"
                          >
                            @luka_fenn..
                          </p>
                        </Link>
                      </div>
                      <Link to="/" className="space-x-3">
                        <p
                          className="color_green
																			txt_sm"
                        >
                          0.001 ETH
                        </p>
                      </Link>
                    </div>
                    <div className="hr"></div>
                    {/* <div
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="card__item three">
                <div className="card_body space-y-10">
                  {/* <!-- =============== --> */}
                  <div className="card_head">
                    <img src={"images/item_3.png"} alt="" />
                  </div>
                  {/* <!-- =============== --> */}
                  <div className="add-butn">
                    <h6 className="card_title">
                      <Link className="color_black" to="/">
                        pop art Painting
                      </Link>
                      <span>
                        <button className="add_btns">Add +</button>
                      </span>
                    </h6>
                  </div>

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
                          <Link to="Profile.html">
                            <img
                              src={"images/avatar_1.png"}
                              alt="Avatar"
                              className="avatar
																					avatar-sm"
                            />
                          </Link>
                          <Link to="Profile.html">
                            <img
                              src={"images/avatar_2.png"}
                              alt="Avatar"
                              className="avatar
																					avatar-sm"
                            />
                          </Link>
                        </div>
                        <Link to="Profile.html">
                          <p
                            className="avatars_name
																				txt_sm"
                          >
                            @luka_fenn..
                          </p>
                        </Link>
                      </div>
                      <Link to="/" className="space-x-3">
                        <p
                          className="color_green
																			txt_sm"
                        >
                          0.001 ETH
                        </p>
                      </Link>
                    </div>
                    <div className="hr"></div>
                    {/* <div
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="card__item three">
                <div className="card_body space-y-10">
                  {/* <!-- =============== --> */}
                  <div className="card_head">
                    <img src={"images/item_2.png"} alt="" />
                  </div>
                  {/* <!-- =============== --> */}
                  <div className="add-butn">
                    <h6 className="card_title">
                      <Link className="color_black" to="/">
                        pop art Painting
                      </Link>
                      <span>
                        <button className="add_btns">Add +</button>
                      </span>
                    </h6>
                  </div>

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
                          <Link to="Profile.html">
                            <img
                              src={"images/avatar_1.png"}
                              alt="Avatar"
                              className="avatar
																					avatar-sm"
                            />
                          </Link>
                          <Link to="Profile.html">
                            <img
                              src={"images/avatar_2.png"}
                              alt="Avatar"
                              className="avatar
																					avatar-sm"
                            />
                          </Link>
                        </div>
                        <Link to="Profile.html">
                          <p
                            className="avatars_name
																				txt_sm"
                          >
                            @luka_fenn..
                          </p>
                        </Link>
                      </div>
                      <Link to="/" className="space-x-3">
                        <p
                          className="color_green
																			txt_sm"
                        >
                          0.001 ETH
                        </p>
                      </Link>
                    </div>
                    <div className="hr"></div>
                    {/* <div
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
                    </div> */}
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

export default Trending;
