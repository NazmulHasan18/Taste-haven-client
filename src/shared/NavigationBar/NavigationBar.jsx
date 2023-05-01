// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
   return (
      <Navbar bg="dark" variant="dark" sticky="top">
         <Container className="gap-4">
            <Navbar.Brand href="#home">Taste Haven</Navbar.Brand>
            <Form className="d-flex">
               <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
               <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="flex-grow-1 justify-content-center gap-4">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#blogs">Blogs</Nav.Link>
               <Nav.Link href="#chefs">Chefs</Nav.Link>
               <Nav.Link href="#reviews">Reviews</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
               <Nav.Link href="#home">img</Nav.Link>
               <Nav.Link href="#blogs">
                  <Button variant="danger">Danger</Button>
               </Nav.Link>
            </Nav>
         </Container>
      </Navbar>
   );
};

export default NavigationBar;
