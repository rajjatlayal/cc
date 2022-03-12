import React from "react";

import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

function GoogleLog() {
  return (
    <>
      {/* <Header /> */}
      <GoogleLogin
        clientId="898519673309-app7jhdpk5ib3l29jibl5pkvefnsgrfc.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      {/* <Footer /> */}
    </>
  );
}

export default GoogleLog;
