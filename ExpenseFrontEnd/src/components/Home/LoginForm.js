import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [userinput, setuserinput] = useState({
    username: "",
    password: "",
  });

  const onusernamechangeHandler = (event) => {
    setuserinput((pervalue) => {
      return {
        ...pervalue,
        username: event.target.value,
      };
    });
  };
  const onpasswordchangeHandler = (event) => {
    setuserinput((pervalue) => {
      return {
        ...pervalue,
        password: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.valid();
  };

  return (
    <form onSubmit={submitHandler} className="loginform">
      <div className="login__control">
        <div className="holderl">
          <label for="username">Username</label>
        </div>
        <div className="holderin">
          <input
            type="text"
            id="username"
            value={userinput.username}
            onChange={onusernamechangeHandler}
          />
        </div>
      </div>
      <div className="login__control">
        <div className="holderl">
          <label for="password">Password</label>
        </div>
        <div className="holderin">
          <input
            type="text"
            min="1"
            id="password"
            value={userinput.password}
            onChange={onpasswordchangeHandler}
          />
        </div>
      </div>

      <div className="login__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
