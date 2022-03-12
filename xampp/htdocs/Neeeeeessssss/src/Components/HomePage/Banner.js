import React from "react";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <>
      <div className="hero__1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero__left space-y-20">
                <h1 className="hero__title head-effect">
                  Discover, collect, and sell{" "}
                  <span className="underline"> extraordinary NFTs</span>
                </h1>

                <p className="hero__text txt">
                  NFT Price Watch is a shared liquidity NFT market smart
                  contract which is used by multiple websites to provide the
                  users the best possible experience.
                </p>
                <div
                  className="space-x-20 d-flex flex-column flex-md-row
                    sm:space-y-20"
                >
                  <Link className="btn btn-grad" to="">
                    View Market
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid w-full banner floating"
                id="img_js"
                src={"images/banner-new.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
