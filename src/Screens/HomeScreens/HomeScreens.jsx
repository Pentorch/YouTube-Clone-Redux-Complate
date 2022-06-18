import React, { useEffect } from "react";
import Video from "../../components/Video/Video";
import { Row, Container, Col } from "react-bootstrap";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";
import { getPopularVideos } from "../../redux/actions/videos.action";
import { useDispatch, useSelector } from "react-redux";

const HomeScreens = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.homeVideos);

  return (
    <div>
      <Container>
        <CategoriesBar />
        <Row>
          {videos.map((video) => (
            <Col lg={3} md={3} sm={12}>
              <Video video={video} key={video.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreens;
