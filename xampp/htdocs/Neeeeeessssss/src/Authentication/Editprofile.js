import React from "react";

import { Link } from "react-router-dom";
function Editprofile() {
  return (
    <>
      <div className="container-xl px-4 mt-4">
        <div className="row">
          <div className="col-xl-4">
            {/* <!-- Profile picture card--> */}
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                {/* <!-- Profile picture image--> */}
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                {/* <!-- Profile picture help block--> */}
                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                {/* <!-- Profile picture upload button--> */}
                <div id="boxUpload">
                  <Link to="/" className="btn btn-sm btn-dark">
                    {" "}
                    Upload Image
                  </Link>
                  <input
                    id="imageUpload"
                    type="file"
                    name="profile_photo"
                    placeholder="Photo"
                    required=""
                    capture=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            {/* <!-- Account details card--> */}
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  {/* <!-- Form Group (username)--> */}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">
                      Username (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                    />
                  </div>
                  {/* <!-- Form Row--> */}
                  <div className="row gx-3 mb-3">
                    {/* <!-- Form Group (first name)--> */}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                      />
                    </div>
                    {/* <!-- Form Group (last name)--> */}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  {/* <!-- Form Row        --> */}
                  <div className="row gx-3 mb-3">
                    {/* <!-- Form Group (organization name)--> */}
                    {/* <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputOrgName">
                        Organization name
                      </label>
                      <input
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter your organization name"
                        value="Start Bootstrap"
                      />
                    </div> */}
                    {/* <!-- Form Group (location)--> */}
                    {/* <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLocation">
                        Location
                      </label>
                      <input
                        className="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter your location"
                        value="San Francisco, CA"
                      />
                    </div> */}
                  </div>
                  {/* <!-- Form Group (email address)--> */}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  {/* <!-- Form Row--> */}
                  <div className="row gx-3 mb-3">
                    {/* <!-- Form Group (phone number)--> */}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">
                        Phone number
                      </label>
                      <input
                        className="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    {/* <!-- Form Group (birthday)--> */}
                    {/* <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputBirthday">
                        Birthday
                      </label>
                      <input
                        className="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Enter your birthday"
                        value="06/10/1988"
                      />
                    </div> */}
                  </div>
                  {/* <!-- Save changes button--> */}
                  <Link className="btn btn-grad btn-md submit-profile" to="/">
                    Submit
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Editprofile;
