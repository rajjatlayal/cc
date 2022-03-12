import React from "react";
import Footer from "./Global/Footer";
import Header from "./Global/Header";
function Error() {
  return (
    <>
      <Header />
      <section>
        <div className="not__found">
          <div className="container">
            <div className="row justify-content-center align-items-center pt-100">
              <div className="col-lg-3 d-none d-lg-block">
                <img
                  className="img-fluid"
                  src={"images/left-Skull.png"}
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <div className="space-y-30 content">
                  <div
                    className="space-y-20 d-flex flex-column
			                        justify-content-center align-items-center"
                  >
                    <img src={"images/404.png"} alt="" />
                    <h2 className="text-center">whooops 🥺! Page not Found</h2>
                    <p className="text-center">
                      Maybe bigfoot has broken this page. Come back to the
                      Homepage
                    </p>
                    <div>
                      <a href="/" className="btn btn-grad error-btn">
                        Home
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-none d-lg-block">
                <img
                  className="img-fluid"
                  src={"images/right-Skull.png"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Error;
