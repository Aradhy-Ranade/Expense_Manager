import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = (props) => {
  const [userinput, setuserinput] = useState({
    username: "",
    password: "",
    name: "",
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
  const onnamechangeHandler = (event) => {
    setuserinput((pervalue) => {
      return {
        ...pervalue,
        name: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.valid();
  };

  return (
    <form onSubmit={submitHandler} className="signupform">
      <div className="signup_control">
        <div className="holderl">
          <label for="name">Name</label>
        </div>
        <div className="holderin">
          <input
            type="text"
            id="name"
            value={userinput.name}
            onChange={onnamechangeHandler}
          />
        </div>
      </div>
      <div className="signup_control">
        <div className="holderl">
          <label for="username">Username</label>
        </div>
        <div className="holderin">
          <input
            type="text"
            min="1"
            id="username"
            value={userinput.password}
            onChange={onusernamechangeHandler}
          />
        </div>
      </div>
      <div className="signup_control">
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
      <div className="signup__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">SignUp</button>
      </div>
    </form>
  );
};
export default SignupForm;
