// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Button, Container, Form, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Dropdown from "react-bootstrap/Dropdown";
import { toast } from "react-toastify";

const NavigationBar = () => {
   const { user, logOut } = useContext(AuthContext);

   const handelLogOut = () => {
      logOut()
         .then(() => {
            toast.success("User logged out successfully");
         })
         .catch((error) => {
            console.log(error.message);
         });
   };
   return (
      <Navbar bg="danger" variant="dark" className="py-3" collapseOnSelect expand="lg">
         <Container className="gap-4 mt-3 pb-3 align-items-center">
            <h2 className="text-white fs-2">Taste Haven</h2>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav>
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
               </Nav>
               <Nav className="flex-grow-1 justify-content-center align-items-center gap-4 my-3 nav-pills">
                  <div className="d-flex position-relative align-items-center">
                     <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "activeA me-2" : "inactiveA px-4")}
                     >
                        Home
                     </NavLink>
                     <NavDropdown title="" id="home-dropdown" className="position-absolute end-0" href="#">
                        <Nav.Link href="#foods" className="activeA">
                           Foods
                        </Nav.Link>
                        <Nav.Link href="#chefs" className="activeA">
                           Chefs
                        </Nav.Link>
                        <Nav.Link href="#reviews" className="activeA">
                           Reviews
                        </Nav.Link>
                     </NavDropdown>
                  </div>

                  <NavLink to="/blogs" className={({ isActive }) => (isActive ? "activeA" : "inactiveA")}>
                     Blogs
                  </NavLink>
                  <NavLink to="/favorite" className={({ isActive }) => (isActive ? "activeA" : "inactiveA")}>
                     Favorite
                  </NavLink>

                  <NavLink to="/about" className={({ isActive }) => (isActive ? "activeA" : "inactiveA")}>
                     About Us
                  </NavLink>
               </Nav>
               <Nav className="align-items-center gap-3">
                  {user ? (
                     <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                           <Link to="/profile">
                              <img
                                 src={user?.photoURL}
                                 className="rounded-circle border-3 border border-warning me-3"
                                 alt=""
                                 style={{ height: "50px", width: "50px" }}
                                 title={`${user.displayName || ""}`}
                              />
                           </Link>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-warning rounded-0">
                           <Button variant="danger" className="ms-3 rounded-0" onClick={handelLogOut}>
                              Log Out
                           </Button>
                        </Dropdown.Menu>
                     </Dropdown>
                  ) : (
                     <Link className="ms-2" to="/login">
                        <Button variant="warning" className="text-white fw-semibold rounded-0">
                           Login
                        </Button>
                     </Link>
                  )}
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default NavigationBar;
