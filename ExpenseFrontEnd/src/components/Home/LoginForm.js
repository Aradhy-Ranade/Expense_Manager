import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [errmsg, seterrmsg] = useState("");
  const [userinput, setUserinput] = useState({
    email: "",
    password: "",
  });

  const onemailchangeHandler = (event) => {
    setUserinput((pervalue) => {
      return {
        ...pervalue,
        email: event.target.value,
      };
    });
  };
  const onpasswordchangeHandler = (event) => {
    setUserinput((pervalue) => {
      return {
        ...pervalue,
        password: event.target.value,
      };
    });
  };

  async function loginreq(userinput) {
    try {
      const response = await fetch("http://localhost:1000/api/auth/signin", {
        method: "POST",
        body: JSON.stringify(userinput),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const res = await response.json();
        seterrmsg(res.message);
      } else {
        const res = await response.json();
        localStorage.setItem("token", res.token);
        props.valid(localStorage.getItem("token"));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const setInputnull = () => {
    setUserinput({
      email: "",
      password: "",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setUserinput({
      email: event.target.email.value,
      password: event.target.password.value,
    });
    loginreq(userinput);
    setInputnull();
  };

  return (
    <form onSubmit={submitHandler} className="loginform">
      <div className="login__control">
        <div className="holderl">
          <label>Email</label>
        </div>
        <div className="holderin">
          <input
            type="text"
            id="email"
            value={userinput.email}
            onChange={onemailchangeHandler}
          />
        </div>
      </div>
      <div className="login__control">
        <div className="holderl">
          <label>Password</label>
        </div>
        <div className="holderin">
          <input
            type="password"
            min="6"
            id="password"
            value={userinput.password}
            onChange={onpasswordchangeHandler}
          />
          <label className="logerr">{errmsg}</label>
        </div>
      </div>

      <div className="login__actions">
        <button type="button" onClick={setInputnull}>
          Cancel
        </button>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
