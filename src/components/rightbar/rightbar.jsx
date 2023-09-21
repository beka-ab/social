import React from "react";
import Online from "../online/online";
import "./rightbar.css";
import { Users } from "../../data";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <img className="birthdayimg" src="./assets/gift.png" alt="" />
        <span>
          <b>Pola Foster </b>and <b>3 other friends</b> have a birthday today
        </span>
      </div>
      <div className="advertisment">
        <img className="adimg" src="./assets/ad.png" alt="" />
      </div>
      <div className="onlineFriends">
        <h4 className="onlineHeadline">Online Friends</h4>
        <ul className="onlineLists">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
