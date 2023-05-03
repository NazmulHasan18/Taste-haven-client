// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError();
   console.error(error);

   return (
      <Container className="my-auto bg-danger text-white rounded-3">
         <Row
            style={{ marginTop: "100px" }}
            className="border border-5 border-warning rounded-3 py-5 px-4 align-items-center"
         >
            <Col sm={6}>
               <h1 style={{ fontSize: "128px" }}>404</h1>
               <h2 style={{ fontSize: "90px" }}>{error.statusText || error.message}</h2>
               <p className="fs-1 fw-semibold">Something Went Wrong!</p>
               <Link>
                  <Button variant="primary">Back To Page</Button>
               </Link>
            </Col>
            <Col sm={6}>
               <img src="Error.png" alt="" className="img-fluid rounded-3 border border-5 border-warning" />
            </Col>
         </Row>
      </Container>
   );
};

export default ErrorPage;
