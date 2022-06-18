import React, { useEffect } from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id,
        },
      });
      console.log(items);
    };
    get_video_details();
  }, [id]);
  return (
    <div className="video">
      <div className="video__top">
        <img src={medium.url} alt="" />
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
