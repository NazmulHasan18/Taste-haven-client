import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "@formspree/react";
import { Parallax } from "react-parallax";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const BookNow = () => {
   const { user } = useContext(AuthContext);

   const [state, handleSubmit] = useForm("xnqkavel");
   if (state.succeeded) {
      toast.success("Your form was successfully submitted");
   }
   const currentDate = new Date().toISOString().split("T")[0];

   return (
      <Parallax
         bgImage="https://i.ibb.co/NFvmSw0/various-vegetables-black-table-with-space-message.jpg"
         blur={5}
         strength={200}
         data-aos="fade-up"
         data-aos-duration="2000"
      >
         <Container className="text-white my-5">
            <h2>Book a Table</h2>
            <Row>
               <Col xs={12} md={6}>
                  <Form onSubmit={handleSubmit} action="https://formspree.io/f/xnqkavel" method="POST">
                     <Form.Group controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" name="name" required />
                     </Form.Group>

                     <Form.Group controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" name="email" required />
                     </Form.Group>

                     <Form.Group controlId="phone">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="tel" name="number" required />
                     </Form.Group>

                     <Form.Group controlId="date">
                        <Form.Label>Date of Reservation:</Form.Label>
                        <Form.Control type="date" name="date" min={currentDate} required />
                     </Form.Group>

                     <Form.Group controlId="time">
                        <Form.Label>Time of Reservation:</Form.Label>
                        <Form.Control type="time" name="time" required />
                     </Form.Group>

                     <Form.Group controlId="guests">
                        <Form.Label>Number of Guests:</Form.Label>
                        <Form.Control type="number" name="guests" required />
                     </Form.Group>

                     <Form.Group controlId="specialRequests">
                        <Form.Label>Special Requests/Preferences:</Form.Label>
                        <Form.Control as="textarea" rows={3} name="specialRequests" />
                     </Form.Group>

                     {user ? (
                        <Button variant="danger" type="submit" className="mt-4">
                           Submit
                        </Button>
                     ) : (
                        <Link to="/login" className="btn btn-danger mt-4">
                           {" "}
                           Submit
                        </Link>
                     )}
                  </Form>
               </Col>
               <Col xs={12} md={6} className="d-none d-md-block">
                  <img src="https://i.ibb.co/fGPzTY2/Booknow.png" alt="" width={650} />
               </Col>
            </Row>
         </Container>
      </Parallax>
   );
};

export default BookNow;
