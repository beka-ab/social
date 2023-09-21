import React from "react";
import "./online.css";
export default function Online({ user }) {
  return (
    <div>
      <li className="onlineList">
        <img className="onlineListImg" src={user.profilePicture} alt="" />
        <hr className="onlineDoc" />
        <span className="onlineListUser">{user.username}</span>
      </li>
    </div>
  );
}
