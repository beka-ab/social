import "./share.css";
import React from "react";

import {
  AddAPhoto,
  Label,
  AddLocation,
  EmojiEmotions,
} from "@mui/icons-material";
export default function Share() {
  return (
    <div className="feed">
      <div className="sidebarPost">
        <div className="postContainer">
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
          <input
            type="text"
            className="inputPost"
            placeholder="what's in your mind"
          />
        </div>
        <div className="postLine">
          <hr />
        </div>
        <div className="aditionalPostAction">
          <div className="postAction">
            <AddAPhoto className="" />
            <span>Photo or Video</span>
          </div>
          <div className="postAction">
            <Label className="addTag" />
            <span>Tag</span>
          </div>
          <div className="postAction">
            <AddLocation className="addLocation" />
            <span>Location</span>
          </div>
          <div className="postAction">
            <EmojiEmotions className="addEmotion" />
            <span>Feelings</span>
          </div>
          <button className="postMind">Share</button>
        </div>
      </div>
    </div>
  );
}
