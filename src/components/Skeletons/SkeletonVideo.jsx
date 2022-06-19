import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./_skeletonvideo.scss";

const SkeletonVideo = () => {
  return (
    <div style={{ width: "100%", margin: "1rem 0" }}>
      <SkeletonTheme color="#343a40" highlightColor="#3c4147">
        <Skeleton height={180} />
        <div style={{ margin: "0.5rem 0" }}>
          <Skeleton
            style={{ margin: "0.5rem 0" }}
            circle
            height={40}
            width={40}
          />
          <Skeleton
            height={40}
            width="75%"
            style={{
              margin: "0.5rem 0",
              position: "relative",
              top: "-54px",
              left: "65px",
            }}
          />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonVideo;
