import React from "react";
export default function Friends({ user }) {
  return (
    <li className="contactList">
      <img className="onlineFriendImg" src={user.profilePicture} alt="" />
      <span className="onlineFriendName">{user.username}</span>
    </li>
  );
}
