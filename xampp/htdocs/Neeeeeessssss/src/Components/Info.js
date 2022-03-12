import React from "react";
function Info() {
  return (
    <>
      <section id="contact" className="contact section-bg">
        <section>
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="section-title">
              <h2>
                <span className="tapered">Get in touch with Us</span>
              </h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="info-box mb-4">
                  {/* <i className="bx bx-map"></i> */}
                  <img src={"images/13.png"} />
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  {/* <i className="bx bx-envelope"></i> */}
                  <img src={"images/14.png"} />
                  <h3>Email Us</h3>
                  <p>contact@example.com</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="info-box  mb-4">
                  {/* <i className="bx bx-phone-call"></i> */}
                  <img src={"images/15.png"} />
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Info;
