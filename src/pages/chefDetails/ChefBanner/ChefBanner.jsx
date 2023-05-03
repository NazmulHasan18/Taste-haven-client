/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const ChefBanner = ({ chef }) => {
   const { likes, bio, name, image, foodItems, chefPosition, experience } = chef;
   return (
      <div className="bg-danger pb-5">
         <Container className="bg-white p-5 rounded mb-5">
            <Row className="align-items-center">
               <Col md={7}>
                  <h1 style={{ fontSize: "70px" }}>{name}</h1>

                  <div className="d-flex gap-3 align-items-center">
                     <h3>Position:</h3>
                     <p className="fw-semibold fs-3 mb-2">{chefPosition}</p>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                     <h4>Experience:</h4>
                     <p className="fw-semibold fs-4 mb-2">{experience}</p>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                     <h5>Likes:</h5>
                     <p className="d-flex align-items-center fw-semibold fs-5 mb-2">
                        {likes} <FaHeart className="text-danger"></FaHeart>
                     </p>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                     <h6>Experience:</h6>
                     <p className="fw-semibold fs-6 mb-2">{foodItems.length}</p>
                  </div>

                  <p>{bio}</p>
               </Col>
               <Col md={5} className="text-end ">
                  <img src={image} alt="" className="img-fluid rounded" style={{ maxHeight: "30rem" }} />
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default ChefBanner;
