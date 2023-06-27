import { Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const Info1 = () => {
   return (
      <Parallax
         strength={200}
         bgImage="https://i.ibb.co/MN4wf65/blur-coffee-cafe-shop-restaurant-with-bokeh-background-xd.jpg"
         className="mt-5"
      >
         <Container className="my-5 py-5">
            <Row data-aos="fade-up" data-aos-duration="1000">
               <Col xs={12} md={6} lg={3}>
                  <motion.div
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                           type: "spring",
                           damping: 5,
                           stiffness: 100,
                           restDelta: 0.001,
                        },
                     }}
                  >
                     <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="border-0 bg-transparent"
                     >
                        <Card style={{ width: "16rem", height: "14.5rem" }} className="info1-food info-food">
                           <Card.Body className=" d-flex justify-content-center align-items-center flex-column">
                              <img src="https://i.ibb.co/6YG6vp4/protection.png" alt="" width={100} />
                              <Card.Title className="fs-3 fw-bold">50+ Bangladeshi Food</Card.Title>
                           </Card.Body>
                        </Card>
                     </motion.button>
                  </motion.div>
               </Col>
               <Col xs={12} md={6} lg={3}>
                  <motion.div
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                           type: "spring",
                           damping: 5,
                           stiffness: 100,
                           restDelta: 0.001,
                        },
                     }}
                  >
                     <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="border-0 bg-transparent"
                     >
                        <Card style={{ width: "16rem", height: "14.5rem" }} className="info2-food info-food">
                           <Card.Body className=" d-flex justify-content-center align-items-center flex-column">
                              <img
                                 src="https://i.ibb.co/DrX3czy/delivery-removebg-preview.png"
                                 alt=""
                                 width={150}
                              />
                              <Card.Title className="fs-3 fw-bold">Fastest Delivery</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                 Eat your food before it cool
                              </Card.Subtitle>
                           </Card.Body>
                        </Card>
                     </motion.button>
                  </motion.div>
               </Col>
               <Col xs={12} md={6} lg={3}>
                  <motion.div
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                           type: "spring",
                           damping: 5,
                           stiffness: 100,
                           restDelta: 0.001,
                        },
                     }}
                  >
                     <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="border-0 bg-transparent"
                     >
                        <Card style={{ width: "16rem", height: "14.5rem" }} className="info3-food info-food ">
                           <Card.Body className=" d-flex justify-content-center align-items-center flex-column">
                              <img src="https://i.ibb.co/ZN7rjVZ/chef.png" alt="" width={100} />
                              <Card.Title className="fs-3 fw-bold">20+ Best Chefs</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                 Gold made hand make food awesome
                              </Card.Subtitle>
                           </Card.Body>
                        </Card>
                     </motion.button>
                  </motion.div>
               </Col>
               <Col xs={12} md={6} lg={3}>
                  <motion.div
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                           type: "spring",
                           damping: 5,
                           stiffness: 100,
                           restDelta: 0.001,
                        },
                     }}
                  >
                     <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="border-0 bg-transparent"
                     >
                        <Card style={{ width: "16rem", height: "14.5rem" }} className="info4-food info-food">
                           <Card.Body className=" d-flex justify-content-center align-items-center flex-column">
                              <img
                                 src="https://i.ibb.co/q9bm0yP/client-removebg-preview.png"
                                 alt=""
                                 width={100}
                              />
                              <Card.Title className="fs-3">2500+ Clients</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                 Your trust is our strength
                              </Card.Subtitle>
                           </Card.Body>
                        </Card>
                     </motion.button>
                  </motion.div>
               </Col>
            </Row>
         </Container>
      </Parallax>
   );
};

export default Info1;
