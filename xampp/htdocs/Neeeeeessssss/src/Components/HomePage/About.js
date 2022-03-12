import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="hero__2">
        <div className="container about-us">
          <div className="space-y-20">
            <h1 className="gradient__text text-center section__head section__title">
              About digital assets
            </h1>

            <div className="community">
              <div className="section__heads space-y-20">
                <p className="section__text text-center">
                  NFT Price Watch is a shared liquidity NFT market smart
                  contract which is used by multiple websites to provide the
                  users the best possible experience.NFT Price Watch is a shared
                  liquidity NFT market smart contract which is used by multiple
                  websites to provide the users the best possible experience.
                </p>
              </div>
            </div>
            <div className="space-x-20 d-flex justify-content-center">
              <Link className="btn btn-grad btn-md" to="/">
                View market
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
