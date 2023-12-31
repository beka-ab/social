import "./feed.css";
import React from "react";
import Share from "../share/share";
import Post from "../post/post";
import { Posts } from "../../data";
export default function Feed() {
  return (
    <div className="feedComp">
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}
