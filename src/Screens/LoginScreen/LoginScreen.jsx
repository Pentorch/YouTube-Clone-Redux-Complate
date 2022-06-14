import React, { useEffect } from "react";
import "./loginscreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      console.log("Login success");
    }
  }, [accessToken, navigate]);

  return (
    <div>
      <div className="login">
        <div className="login__container">
          <img
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_168737.png"
            alt=""
          />
          <button onClick={handleLogin}>Login With google</button>
          <p>This Project is made using YouTube Data</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
