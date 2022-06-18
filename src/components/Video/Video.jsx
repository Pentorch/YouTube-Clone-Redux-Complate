import React, { useEffect, useState } from "react";
import "./_video.scss";

import request from "../../api";

import moment from "moment";
import numeral from "numeral";

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

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [chanelIcon, setChanelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

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
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChanelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  return (
    <div className="video">
      <div className="video__top">
        <img
          className="style-scope yt-img-shadow img-fluid "
          src={medium.url}
          alt=""
        />
        <span>{_duration}</span>
      </div>
      <div className="content-global-img">
        <img src={chanelIcon?.url} alt="" />

        <div className="video__title">{title}</div>
        <div className="video__channel">
          <p>{channelTitle}</p>
        </div>
        <div className="video__details">
          <span>{numeral(views).format("0.a")} Views •</span>
          <span>{moment(publishedAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
