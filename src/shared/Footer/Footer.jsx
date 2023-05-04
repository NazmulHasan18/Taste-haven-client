// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <Container className="text-white">
         <Row className="mt-5">
            <Col xs={12} md={3}>
               <h2>Taste Haven</h2>
               <p>
                  Indulge in the Flavors of <span className="fw-bold">Bangladesh</span>
                  <br /> Cuisine.
               </p>
            </Col>
            <Col xs={6} md={2} className="">
               <h5 className="mb-3">Explore</h5>
               <div>
                  <Link to="#" className="text-decoration-none text-white footer-link">
                     Home
                  </Link>
               </div>
               <div className="my-3">
                  <Link to="#" className="text-decoration-none text-white footer-link">
                     Blogs
                  </Link>
               </div>
               <div className="my-3">
                  <Link to="#" className="text-decoration-none text-white footer-link">
                     Chefs
                  </Link>
               </div>
               <div className="my-3">
                  <Link to="#" className="text-decoration-none text-white footer-link">
                     Reviews
                  </Link>
               </div>
            </Col>

            <Col xs={6} md={2}>
               <div>
                  <h5>Follow</h5>
                  <div className="my-3">
                     <Link to="#" className="text-decoration-none text-white footer-link">
                        Facebook
                     </Link>
                  </div>
                  <div className="my-3">
                     <Link to="#" className="text-decoration-none text-white footer-link">
                        Twitter
                     </Link>
                  </div>
                  <div className="my-3">
                     <Link to="#" className="text-decoration-none text-white footer-link">
                        Instagram
                     </Link>
                  </div>
                  <div className="my-3">
                     <Link to="#" className="text-decoration-none text-white footer-link">
                        Linked In
                     </Link>
                  </div>
               </div>
            </Col>
            <Col xs={6} md={2}>
               <h5 className="mb-3">Explore</h5>
               <div>
                  <Link to="#" className="text-decoration-none text-white footer-link">
                     Terms And Conditions
                  </Link>
               </div>
               <div className="my-3">
                  <Link to="#" className="text-decoration-none text-white footer-link">
                     Privacy
                  </Link>
               </div>
            </Col>
            <Col xs={12} md={3}>
               <div>
                  <h5 className="mb-3">Contact</h5>
                  <p>+88 01904-723512</p>
                  <p>nazmul182218@gmail.com</p>
               </div>
               <h5>Visit</h5>
               <address className="mt-3">
                  Foiljana west area, <br /> Chatmohor #10A, <br /> Pabna, Bangladesh.
               </address>
            </Col>
         </Row>

         <div>
            <p className="text-center my-5">&#x24B8; Copy Right, 2023</p>
         </div>
      </Container>
   );
};

export default Footer;
