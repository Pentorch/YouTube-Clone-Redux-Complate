import React, { useEffect } from "react";
import Video from "../../components/Video/Video";
import { Row, Container, Col } from "react-bootstrap";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";
import { getPopularVideos } from "../../redux/actions/video.action";
import { useDispatch } from "react-redux";

const HomeScreens = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <CategoriesBar />
        <Row>
          {[...new Array(20)].map(() => (
            <Col lg={3} md={3} sm={12}>
              <Video />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreens;
