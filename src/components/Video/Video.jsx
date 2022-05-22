import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          id="img"
          className="style-scope yt-img-shadow img-fluid "
          width="999px"
          alt=""
          src="https://i.ytimg.com/vi/5HZ9qeFjhYk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAACW9Spn09z8_fG3juYbxr_B7Cmw"
        />
        <span>06:45</span>
      </div>
      <div className="content-global-img">
        <img
          id="img"
          className="style-scope yt-img-shadow"
          alt=""
          width="48"
          src="https://yt3.ggpht.com/O-h6r7zzw8GsyOZ2K65SX90Jy5rmHU6_pY9cS9369C216JqGH94CJldQVcTkefWULucZrKsaVQ=s88-c-k-c0x00ffffff-no-rj"
        />

        <div className="video__title">
          Zack Tabudlo - Give Me Your Forever (Lyric Video)
        </div>
        <div className="video__channel">
          <p>Zack Tabudlo</p>
        </div>
        <div className="video__details">
          <span>14m x watched</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
