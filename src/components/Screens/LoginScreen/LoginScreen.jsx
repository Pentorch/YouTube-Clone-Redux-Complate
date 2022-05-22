import React from "react";
import "./loginscreen.scss";
const LoginScreen = () => {
  return (
    <div>
      <div className="login">
        <div className="login__container">
          <img
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_168737.png"
            alt=""
          />
          <button>Login With google</button>
          <p>This Project is made using YouTube Data</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
