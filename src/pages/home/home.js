import React from "react";
import Topbar from "../../components/topbar/topbar";
import Feed from "../../components/feed/feed";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar";
import "./home.css";
export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="mianContent">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}
