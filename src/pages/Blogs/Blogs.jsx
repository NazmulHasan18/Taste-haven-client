// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Row } from "react-bootstrap";
import Blog from "./Blog/Blog";
import { Container } from "react-bootstrap/esm";

const Blogs = () => {
   return (
      <Container className="my-5">
         <h1 className="my-4">Question And Answer</h1>
         <Row>
            <Col xs={12} md={8}>
               <Blog></Blog>
            </Col>
            <Col xs={12} md={4}>
               <img src="qna.jpg" className="img-fluid" alt="" />
            </Col>
         </Row>
      </Container>
   );
};

export default Blogs;
