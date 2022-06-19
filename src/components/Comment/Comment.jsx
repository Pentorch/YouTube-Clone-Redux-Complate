import React from "react";
import moment from "moment";
import "./_comment.scss";
const Comment = () => {
  return (
    <div className="comment py-2 d-flex">
      <img
        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        alt="avatar"
        className="rounded-circle me-3"
      />
      <div className="comment__body">
        <p className="comment_header mb-1">
          Submit Day • {moment("2022-06-19").fromNow()}
        </p>
        <p className="mb-0">Nice Video Bro!!</p>
      </div>
    </div>
  );
};

export default Comment;
