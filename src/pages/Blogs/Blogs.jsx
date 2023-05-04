// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Row } from "react-bootstrap";
import Blog from "./Blog/Blog";
import { Container } from "react-bootstrap/esm";
import PDFfile from "./PDFfile/PDFfile";

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
         <div className="my-5">
            <h2>Want to download the answer?</h2>
            <p>Select the answer from Q&A Section And Click The Icon Button Bellow</p>
            <PDFfile></PDFfile>
         </div>
      </Container>
   );
};

export default Blogs;
