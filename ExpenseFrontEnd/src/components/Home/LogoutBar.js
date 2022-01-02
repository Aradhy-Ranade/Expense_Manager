import React from "react";
import Profile from "./Profile";
import "./LogoutBar.css";

const LogoutBar = (props) => {
  const logout = () => {
    props.logoutit();
  };
  return (
    <div className="bar">
      <nav>
        <button onClick={logout}>Logout</button>
        <Profile firstname={props.fname} lastname={props.lname} />
      </nav>
    </div>
  );
};

export default LogoutBar;
