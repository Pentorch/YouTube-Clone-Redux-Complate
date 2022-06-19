import React from "react";
import { Row, Col } from "react-bootstrap";
import Comments from "../Comments/Comments";
import VideoHorizontal from "../VideoHorizontal/VideoHorizontal";
import VideoMetaData from "../VideoMetaData/VideoMetaData";
import "./_watchScreen.scss";
const WatchScreen = () => {
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            frameBorder="0"
            title="YouTube video player"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoMetaData />
        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
