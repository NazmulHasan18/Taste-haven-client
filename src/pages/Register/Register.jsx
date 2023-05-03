/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
   return (
      <Container className="my-5 w-50 mx-auto" style={{ backgroundColor: "#f3eded" }}>
         <h2 className="text-center py-5">Please Register!!!</h2>
         <Form className="px-5 pb-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>First Name</Form.Label>
               <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Last Name</Form.Label>
               <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Photo URL</Form.Label>
               <Form.Control type="text" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
               <Form.Text>
                  Already Have An Account?{" "}
                  <Link className="text-black" to="/login">
                     Login.
                  </Link>
               </Form.Text>
            </Form.Group>
            <Button variant="danger" type="submit" className="mt-4">
               Login
            </Button>
         </Form>
      </Container>
   );
};

export default Register;
