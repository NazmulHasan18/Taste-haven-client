/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

import { toast } from "react-toastify";

const Register = () => {
   const { googleSignIn, gitHubLogin, signUpEmail, updateUserProfile } = useContext(AuthContext);
   const navigate = useNavigate();
   const [clicked, setClicked] = useState(false);
   const [err, setErr] = useState("");

   const handelEmailSignUp = (e) => {
      e.preventDefault();
      setErr(err);
      const from = e.target;
      const firstName = from.firstName.value;
      const lastName = from.lastName.value;
      const fullName = firstName + " " + lastName;
      const url = from.url.value;
      const email = from.email.value;
      const password = from.password.value;
      if (password.length < 6) {
         toast.error("Password must be at least 6 characters");
         setErr("Password must be at least 6 characters");
         return;
      }

      signUpEmail(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            updateUserProfile(fullName, url);
            navigate("/");
            toast.success("Sign Up Success");
         })
         .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage);
            toast.error(errorMessage);
            console.error(errorMessage);
         });
   };

   const handelGoogleSignIn = () => {
      setErr(err);
      googleSignIn()
         .then((result) => {
            const loggedUser = result.user;
            navigate("/");
            toast.success("Sign Up Success");
            console.log(loggedUser);
         })
         .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage);
            toast.error(errorMessage);
            console.log(errorMessage);
         });
   };

   const handelGitHubLogin = () => {
      setErr(err);
      gitHubLogin()
         .then((result) => {
            const loggedUser = result.user;
            navigate("/");
            toast.success("Sign Up Success");
            console.log(loggedUser);
         })
         .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage);
            toast.error(errorMessage);
            console.log(errorMessage);
         });
   };
   return (
      <Container className="my-5 w-50 mx-auto" style={{ backgroundColor: "#f3eded" }}>
         <h2 className="text-center py-5">Please Register!!!</h2>
         <Form className="px-5 pb-3 w-75 mx-auto" onSubmit={handelEmailSignUp}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
               <Form.Label>First Name</Form.Label>
               <Form.Control type="text" placeholder="First Name" name="firstName" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
               <Form.Label>Last Name</Form.Label>
               <Form.Control type="text" name="lastName" placeholder="Last Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicURL">
               <Form.Label>Photo URL</Form.Label>
               <Form.Control type="text" name="url" placeholder="Photo URL" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <p className="text-danger">{err}</p>
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
