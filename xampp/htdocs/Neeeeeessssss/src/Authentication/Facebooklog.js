import React from "react";

import FacebookLogin from "react-facebook-login";

const responseFacebook = (response) => {
  console.log(response);
};

export default function Facebooklog() {
  return (
    <>
      <FacebookLogin
        appId="336782458403338"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        // icon="fa-facebook"
      />
      ,
    </>
  );
}
