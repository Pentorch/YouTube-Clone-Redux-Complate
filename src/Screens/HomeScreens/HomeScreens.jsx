import React, { useEffect } from "react";
import Video from "../../components/Video/Video";
import { Row, Container, Col } from "react-bootstrap";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";
import { getPopularVideos } from "../../redux/actions/videos.action";
import { useDispatch, useSelector } from "react-redux";

import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreens = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.homeVideos);

  const fetchData = () => {
    dispatch(getPopularVideos());
  };

  return (
    <div>
      <Container>
        <CategoriesBar />

        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
          }
          className="row"
        >
          {videos.map((video) => (
            <Col lg={3} md={3} sm={12}>
              <Video video={video} key={video.id} />
            </Col>
          ))}
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default HomeScreens;
