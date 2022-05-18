import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          id="img"
          className="style-scope yt-img-shadow img-fluid"
          width="999px"
          alt=""
          src="https://i.ytimg.com/vi/N4pxT4gYM4w/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAx7oV8F5pzhTDohizU-nHAweXRHA"
        />
        <span>06:45</span>
      </div>
      <div className="video__title">
        🔴 Stream Relax + Showcase Your Workspace
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 1.3m x watched 5 months ago
        </span>
      </div>
      <div className="video__channel">
        <img
          id="img"
          class="style-scope yt-img-shadow"
          alt=""
          width="48"
          src="https://yt3.ggpht.com/ytc/AKedOLTn3FAeWcd7pgq7Bvz5k9SIDj_ccBbFNbbV15bDUA=s68-c-k-c0x00ffffff-no-rj"
        />
        <p>Web Programming UNPAS</p>
      </div>
    </div>
  );
};

export default Video;
