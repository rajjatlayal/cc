import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer__1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 space-y-20">
              <div className="footer__logo">
                {/* <a href="/">
									<img src="../images/newlogo.png" alt="logo" id="logo_js_f"/>
								</Link> */}
              </div>
              <p className="footer__text" text-align="center">
                NFT Price Watch is a shared liquidity NFT market smart contract.
                Follow us for more updates on :
              </p>
              <div>
                <ul className="footer__social space-x-10 mb-40">
                  <li>
                    <Link to="">
                      <i className="ri-facebook-line"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="ri-discord-line"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="ri-instagram-line"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="ri-twitter-line"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title">NFT Price</h6>
              <ul className="footer__list">
                <li>
                  <Link to="">Home</Link>
                </li>
                <li>
                  <Link to="">Trending NFTs</Link>
                </li>
                {/* <li> <a href="Home3.html"> Home3</Link> </li>
								<li> <a href="Marketplace.html"> Marketplace
									</Link>
								</li> */}
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title">Assets</h6>
              <ul className="footer__list">
                <li>
                  <Link to="/collections"> Collections</Link>
                </li>
                <li>
                  <Link to="/profile">Watchlist</Link>
                </li>
                {/* <li> <a href="Collections.html"> Colletctions</Link>
								</li>
								<li> <a href="Activity.html"> Activity
									</Link> </li> */}
              </ul>
            </div>

            <div className="col-lg-2 col-6">
              <h6 className="footer__title">Company</h6>
              <ul className="footer__list">
                <li>
                  <Link to="/terms-conditions">Term & Condition</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                {/* <li> <a href="Connect-wallet.html"> Connect wallet
									</Link> </li>
								<li> <a href="Item-details.html"> Item details</Link>
								</li> */}
              </ul>
            </div>
          </div>

          {/* <p className="copyright text-center">
						Copyright © 2021. Created with love by US.
					</p> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
