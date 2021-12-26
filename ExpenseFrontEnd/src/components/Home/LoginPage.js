import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./LoginPage.css";

const LoginPage = (props) => {
  const [login, setLogin] = useState(true);

  const setforLogin = () => {
    setLogin(true);
  };
  const setforSignup = () => {
    setLogin(false);
  };

  return (
    <div className="login">
      <button onClick={setforLogin}>Login</button>
      <button onClick={setforSignup}>SignUp</button>
      {login && <LoginForm valid={props.validit} />}
      {!login && <SignupForm valid={props.validit} />}
    </div>
  );
};

export default LoginPage;
