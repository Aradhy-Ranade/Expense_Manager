import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = (props) => {
  const [errmsg, seterrmsg] = useState("");

  const [userinput, setuserinput] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const onemailchangeHandler = (event) => {
    setuserinput((pervalue) => {
      return {
        ...pervalue,
        email: event.target.value,
      };
    });
  };
  const onfirstnamechangeHandler = (event) => {
    setuserinput((pervalue) => {
      return {
        ...pervalue,
        firstName: event.target.value,
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
  const onlastnamechangeHandler = (event) => {
    setuserinput((pervalue) => {
      return {
        ...pervalue,
        lastName: event.target.value,
      };
    });
  };

  async function registerUser(userdata) {
    try {
      const response = await fetch("http://localhost:1000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(userdata),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const res = await response.json();
        seterrmsg(res.message);
      } else {
        const res = await response.json();
        const userforlogin = {
          email: userdata.email,
          password: userdata.password,
        };
        alert(res.message);
        loginreq(userforlogin);
        props.valid(localStorage.getItem("token"));
        setInputnull();
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        // throw Error(response.statusText);
        seterrmsg(
          await response.json().then((res) => console.log(res.message))
        );
      } else {
        const res = await response.json();
        localStorage.setItem("token", res.token);
        props.valid(localStorage.getItem("token"));
        seterrmsg("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const setInputnull = () => {
    setuserinput({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setuserinput({
      email: event.target.email.value,
      firstName: event.target.firstname.value,
      lastName: event.target.lastname.value,
      password: event.target.password.value,
    });
    registerUser(userinput);
  };

  return (
    <form onSubmit={submitHandler} className="signupform">
      <div className="signup_control">
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
      <div className="signup_control">
        <div className="holderl">
          <label>Firstname</label>
        </div>
        <div className="holderin">
          <input
            type="text"
            id="firstname"
            value={userinput.firstName}
            onChange={onfirstnamechangeHandler}
          />
        </div>
      </div>
      <div className="signup_control">
        <div className="holderl">
          <label>Lastname</label>
        </div>
        <div className="holderin">
          <input
            type="text"
            min="1"
            id="lastname"
            value={userinput.lastName}
            onChange={onlastnamechangeHandler}
          />
        </div>
      </div>
      <div className="signup_control">
        <div className="holderl">
          <label>Password</label>
        </div>
        <div className="holderin">
          <input
            type="text"
            min="1"
            id="password"
            value={userinput.password}
            onChange={onpasswordchangeHandler}
          />
          <div className="logerr">
            <label>{errmsg}</label>
          </div>
        </div>
      </div>
      <div className="signup__actions">
        <button type="button" onClick={setInputnull}>
          Cancel
        </button>
        <button type="submit">SignUp</button>
      </div>
    </form>
  );
};
export default SignupForm;
