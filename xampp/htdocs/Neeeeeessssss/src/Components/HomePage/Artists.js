import React from "react";

function Artists() {
  return (
    <>
      <div className="section__artists mt-100">
        <div className="container">
          <div className="space-y-30">
            <div className="section_head">
              <h2 className="section__title">Top Artists</h2>
            </div>
            <div className="section_body swiper_artists">
              {/* <!-- Additional required wrapper --> */}
              <div className="swiper-wrapper position-relative">
                {/* <!-- Slides --> */}
                <div className="swiper-slide">
                  <div className="creator_item creator_card rounded_border space-x-10">
                    <div className="avatars space-x-10">
                      <div className="media">
                        <div className="badge">
                          <img src="assets/img/icons/Badge.svg" alt="" />
                        </div>
                        <Link href="Profile.html">
                          <img
                            src="assets/img/avatars/avatar_1.png"
                            alt="Avatar"
                            className="avatar avatar-md"
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="Profile.html">
                          <p className="avatars_name color_black">
                            @xander_hall...
                          </p>
                        </Link>
                        <span className="price color_green">16.58 ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Slides --> */}
                <div className="swiper-slide">
                  <div className="creator_item creator_card rounded_border space-x-10">
                    <div className="avatars space-x-10">
                      <div className="media">
                        <div className="badge">
                          <img src="assets/img/icons/Badge.svg" alt="" />
                        </div>
                        <Link href="Profile.html">
                          <img
                            src="assets/img/avatars/avatar_2.png"
                            alt="Avatar"
                            className="avatar avatar-md"
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="Profile.html">
                          <p className="avatars_name color_black">
                            @hamza_pitts...
                          </p>
                        </Link>
                        <span className="price color_green">14.55 ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Slides --> */}
                <div className="swiper-slide">
                  <div className="creator_item creator_card rounded_border space-x-10">
                    <div className="avatars space-x-10">
                      <div className="media">
                        <div className="badge">
                          <img src="assets/img/icons/Badge.svg" alt="" />
                        </div>
                        <Link href="Profile.html">
                          <img
                            src="assets/img/avatars/avatar_3.png"
                            alt="Avatar"
                            className="avatar avatar-md"
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="Profile.html">
                          <p className="avatars_name color_black">
                            @nathan_walls...
                          </p>
                        </Link>
                        <span className="price color_green">24.13 ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Slides --> */}
                <div className="swiper-slide">
                  <div className="creator_item creator_card rounded_border space-x-10">
                    <div className="avatars space-x-10">
                      <div className="media">
                        <div className="badge">
                          <img src="assets/img/icons/Badge.svg" alt="" />
                        </div>
                        <Link href="Profile.html">
                          <img
                            src="assets/img/avatars/avatar_4.png"
                            alt="Avatar"
                            className="avatar avatar-md"
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="Profile.html">
                          <p className="avatars_name color_black">
                            @kelton_collier...
                          </p>
                        </Link>
                        <span className="price color_green">62.68 ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Slides --> */}
                <div className="swiper-slide">
                  <div className="creator_item creator_card rounded_border space-x-10">
                    <div className="avatars space-x-10">
                      <div className="media">
                        <div className="badge">
                          <img src="assets/img/icons/Badge.svg" alt="" />
                        </div>
                        <Link href="Profile.html">
                          <img
                            src="assets/img/avatars/avatar_5.png"
                            alt="Avatar"
                            className="avatar avatar-md"
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="Profile.html">
                          <p className="avatars_name color_black">
                            @cade_glover...
                          </p>
                        </Link>
                        <span className="price color_green">32.48 ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- If we need pagination --> */}
              <div className="swiper-pagination"></div>

              {/* <!-- If we need navigation buttons --> */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Artists;
