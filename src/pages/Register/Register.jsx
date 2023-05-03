/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Register = () => {
   const { user, googleSignIn, gitHubLogin, signUpEmail } = useContext(AuthContext);
   const [clicked, setClicked] = useState(false);

   const handelEmailSignUp = (e) => {
      e.preventDefault();
      const from = e.target;
      const firstName = from.firstName.value;
      const lastName = from.lastName.value;
      const fullName = firstName + " " + lastName;
      const url = from.url.value;
      const email = from.email.value;
      const password = from.password.value;
      console.log(fullName, url, email, password);
      signUpEmail(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
         })
         .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
         });
   };

   const handelGoogleSignIn = () => {
      googleSignIn()
         .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
         })
         .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
         });
   };

   const handelGitHubLogin = () => {
      gitHubLogin()
         .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
         })
         .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
         });
   };
   return (
      <Container className="my-5 w-50 mx-auto" style={{ backgroundColor: "#f3eded" }}>
         <h2 className="text-center py-5">Please Register!!!</h2>
         <Form className="px-5 pb-3 w-75 mx-auto" onSubmit={handelEmailSignUp}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
               <Form.Label>First Name</Form.Label>
               <Form.Control type="text" placeholder="First Name" name="firstName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
               <Form.Label>Last Name</Form.Label>
               <Form.Control type="text" name="lastName" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicURL">
               <Form.Label>Photo URL</Form.Label>
               <Form.Control type="text" name="url" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check
                  onClick={() => setClicked(!clicked)}
                  type="checkbox"
                  label={
                     <>
                        Accept <Link to="/terms">Terms And Condition</Link>
                     </>
                  }
               />
            </Form.Group>
            <Form.Group>
               <Form.Text>
                  Already Have An Account?{" "}
                  <Link className="text-black" to="/login">
                     Login.
                  </Link>
               </Form.Text>
            </Form.Group>
            {clicked ? (
               <Button
                  variant="danger"
                  type="submit"
                  className="mt-4 w-100 mx-auto d-flex justify-content-center"
               >
                  Sign Up
               </Button>
            ) : (
               <Button
                  variant="danger"
                  type="submit"
                  className="mt-4 w-100 mx-auto d-flex justify-content-center"
                  disabled
               >
                  Sign Up
               </Button>
            )}
         </Form>
         <div className="text-center">
            <p>Or</p>
         </div>
         <div className="d-flex flex-column w-75 px-5 mx-auto gap-3 pb-5">
            <Button variant="outline-primary" onClick={handelGoogleSignIn}>
               <FaGoogle></FaGoogle> Continue With Google
            </Button>
            <Button variant="outline-secondary" onClick={handelGitHubLogin}>
               <FaGithub></FaGithub> Continue With GitHub
            </Button>
         </div>
      </Container>
   );
};

export default Register;
