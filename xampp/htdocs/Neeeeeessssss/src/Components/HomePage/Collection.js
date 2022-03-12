import React from "react";
import { Link } from "react-router-dom";
function Collection() {
  return (
    <>
      <div className="section collection_1 mt-100 collections">
        <div className="container">
          <div className="section__head">
            <div className="d-flex justify-content-between align-items-center trending">
              <h2 className="section__title gradient__text">
                Trending Collections
              </h2>

              <Link className="btn btn-grad btn-md" to="/">
                View More
              </Link>
            </div>
          </div>

          <div className="row justify-content-center mb-30_reset">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <Link to="/collections">
                  <div className="collections_item">
                    <div className="images-box space-y-10">
                      <div className="top_imgs">
                        <img src={"images/item_9.png"} alt="" />
                        <img src={"images/item_10.png"} alt="" />
                        <img src={"images/item_11.png"} alt="" />
                      </div>
                      <img src={"images/item_12.png"} alt="" />
                    </div>
                  </div>
                </Link>
                <div className="collections_footer justify-content-between">
                  <h5 className="collection_title">
                    <Link to="/collections">Creative Art collection</Link>
                  </h5>
                  {/* <Link to="#" className="likes space-x-3">
                    <i className="ri-heart-3-fill"></i>
                    <span className="txt_md">2.1k</span>
                  </Link> */}
                </div>
                <div className="creators space-x-10">
                  <span className="color_text txt_md">
                    5 items · Created by
                  </span>
                  <div className="avatars space-x-5">
                    <Link to="/">
                      <img
                        src="/images/avatar_2.png"
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                  </div>
                  <Link to="/">
                    <p className="avatars_name txt_sm"> @william_jamy... </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <Link to="/collections">
                  <div className="collections_item">
                    <div className="images-box space-y-10">
                      <div className="top_imgs">
                        <img src="/images/item_13.png" alt="" />
                        <img src="/images/item_14.png" alt="" />
                        <img src="/images/item_15.png" alt="" />
                      </div>
                      <img src="/images/item_16.png" alt="" />
                    </div>
                  </div>
                </Link>
                <div className="collections_footer justify-content-between">
                  <h5 className="collection_title">
                    <Link to="/collections">Colorful Abstract Painting</Link>
                  </h5>
                  {/* <Link to="#" className="likes space-x-3">
                    <i className="ri-heart-3-fill"></i>
                    <span className="txt_md">3.5k</span>
                  </Link> */}
                </div>
                <div className="creators space-x-10">
                  <span className="color_text txt_md">
                    7 items · Created by
                  </span>
                  <div className="avatars space-x-5">
                    <Link to="/">
                      <img
                        src="/images/avatar_3.png"
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                  </div>
                  <Link to="/">
                    <p className="avatars_name txt_sm"> @alexis_fenn... </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <Link to="/collections">
                  <div className="collections_item">
                    <div className="images-box space-y-10">
                      <div className="top_imgs">
                        <img src="/images/item_17.png" alt="" />
                        <img src="/images/item_18.png" alt="" />
                        <img src="/images/item_19.png" alt="" />
                      </div>
                      <img src="/images/item_20.png" alt="" />
                    </div>
                  </div>
                </Link>
                <div className="collections_footer justify-content-between">
                  <h5 className="collection_title">
                    <Link to="/collections">Modern Art collection</Link>
                  </h5>
                  {/* <Link to="#" className="likes space-x-3">
                    <i className="ri-heart-3-fill"></i>
                    <span className="txt_md">7.2k</span>
                  </Link> */}
                </div>
                <div className="creators space-x-10">
                  <span className="color_text txt_md">
                    2 items · Created by
                  </span>
                  <div className="avatars space-x-5">
                    <Link to="/">
                      <img
                        src="/images/avatar_1.png"
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                  </div>
                  <Link to="/">
                    <p className="avatars_name txt_sm"> @Joshua_Bren... </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
