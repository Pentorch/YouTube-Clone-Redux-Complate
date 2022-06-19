import React from "react";
import moment from "moment";
const Comment = () => {
  return (
    <div className="comment py-2 d-flex">
      <img
        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        alt="avatar"
      />
      <div className="comment__body">
        <p className="comment_header">
          Submit Day • {moment("2022-06-19").fromNow()}
        </p>
        <p>Nice Video Bro!!</p>
      </div>
    </div>
  );
};

export default Comment;
