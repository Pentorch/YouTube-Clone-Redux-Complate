import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Comments from "../../components/Comments/Comments";
import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal";
import VideoMetaData from "../../components/VideoMetaData/VideoMetaData";
import "./_watchScreen.scss";
const WatchScreen = () => {
  const { id } = useParams();

  // const dispatch = useDispatch();
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
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