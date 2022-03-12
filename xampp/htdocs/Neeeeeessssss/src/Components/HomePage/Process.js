import React from "react";
function Process() {
  return (
    <>
      <div className="container our_process">
        <div className="community">
          <div className="section__heads space-y-20">
            {/* <h3 className="section__title text-center">Our Process</h3> */}
            <h1 className="gradient__text text-center section__head section__title">
              Our Process
            </h1>
            <p className="section__text text-center">
              {" "}
              Learn more about raroin, chat with the team, other people in the
              community, and express your opinion on the future development of
              raroin.{" "}
            </p>
          </div>

          <div className="community__items">
            <div className="row justify-content-center mb-20_reset">
              <div className="col-md-3 process_card">
                <div className="item space-y-10">
                  <div className="process-img">
                    <img src={"images/circle.png"} alt="logo_community" />
                  </div>
                  <h5 className="text-center">STEP 1</h5>
                  <p className="text-center">
                    Understand the progress of our code and project.Understand
                    the progress of our code and project
                  </p>
                </div>
              </div>
              <div className="col-md-3 process_card">
                <div className="item space-y-10">
                  <div className="process-img">
                    <img src={"images/step2.png"} alt="logo_community" />
                  </div>
                  <h5 className="text-center">STEP 2</h5>
                  <p className="text-center">
                    Understand the progress of our code and project.Understand
                    the progress of our code and project
                  </p>
                </div>
              </div>
              <div className="col-md-3 process_card">
                <div className="item space-y-10">
                  <div className="process-img">
                    <img src={"images/step3.png"} alt="logo_community" />
                  </div>
                  <h5 className="text-center">STEP 3</h5>
                  <p className="text-center">
                    Understand the progress of our code and project.Understand
                    the progress of our code and project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;
