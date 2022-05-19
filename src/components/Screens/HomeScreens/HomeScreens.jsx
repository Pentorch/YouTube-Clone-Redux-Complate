import React from "react";
import Video from "../../Video/Video";
import { Row, Container, Col } from "react-bootstrap";
import CategoriesBar from "../../CategoriesBar/CategoriesBar";
const HomeScreens = () => {
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
