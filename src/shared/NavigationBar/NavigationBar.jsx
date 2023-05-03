// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
   return (
      <Navbar bg="danger" variant="dark" sticky="top" className="py-3">
         <Container className="gap-4 mt-3 pb-3 align-items-center">
            <h2 className="text-white fs-2">Taste Haven</h2>

            <Form className="d-flex position-relative flex-grow-1">
               <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 bg-white bg-opacity-25 search-input text-white"
                  aria-label="Search"
               />
               <Button
                  variant="success"
                  className="rounded-0 rounded-end position-absolute end-0 me-2  bg-success bg-opacity-25"
               >
                  <FaSearch></FaSearch>
               </Button>
            </Form>
            <Nav className="flex-grow-1 justify-content-center align-items-center gap-4">
               <NavLink to="/" className={({ isActive }) => (isActive ? "activeA" : "inactiveA")}>
                  Home
               </NavLink>
               <NavLink to="/blogs" className={({ isActive }) => (isActive ? "activeA" : "inactiveA")}>
                  Blogs
               </NavLink>
               <NavLink to="/foods" className={({ isActive }) => (isActive ? "activeA" : "inactiveA")}>
                  Foods
               </NavLink>
               <NavLink to="/chefs" className={({ isActive }) => (isActive ? "activeA" : "inactiveA")}>
                  Chefs
               </NavLink>
               <NavLink to="/reviews" className={({ isActive }) => (isActive ? "activeA" : "inactiveA")}>
                  Reviews
               </NavLink>
            </Nav>
            <Nav className="align-items-center">
               <NavLink to="/profile" className={({ isActive }) => (isActive ? "activeA" : "inactiveA")}>
                  img
               </NavLink>
               <Link className="ms-2" to="/login">
                  <Button variant="warning" className="text-white fw-semibold">
                     Login
                  </Button>
               </Link>
            </Nav>
         </Container>
      </Navbar>
   );
};

export default NavigationBar;
