import React from "react";
import "./profile.css";

const Profile = (props) => {
  return (
    <div className="profile">
      <div>
        <label>{props.firstname}</label>
      </div>
      <div>
        <label>{props.lastname}</label>
      </div>
    </div>
  );
};

export default Profile;
