import React from "react";
import "../css/App.css";
import loginimg from "../assets/Image/login.png";
import logo from "../assets/Image/logo.png";
const Login = () => {
  return (
    <div className="login-pg">
        {/* Nav */}
      <div className="nav">
        <img src={logo} alt="Logo" />
        <h1>ConstructEaze</h1>
      </div>
      {/* content */}
      <div className="login">
        <div className="image">
          <img className="immg" src={loginimg} alt="Login-Img" />
        </div>
        {/* Form */}
        <div className="form">
            <header><h1>Login</h1></header>
          <form>
            <input type="text" placeholder="UserName" />
            <input type="text" placeholder="Password" />
          </form>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
