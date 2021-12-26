import React from "react";
import "./LogoutBar.css";

const LogoutBar = (props) => {
  const logout = () => {
    props.logoutit();
  };
  return (
    <div className="bar">
      <nav>
        <button onClick={logout}>Logout</button>
      </nav>
    </div>
  );
};

export default LogoutBar;
