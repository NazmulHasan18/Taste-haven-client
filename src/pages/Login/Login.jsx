/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
   const { googleSignIn, gitHubLogin, signInEmail, forgetPassword } = useContext(AuthContext);
   const [err, setErr] = useState("");
   const location = useLocation();
   const from = location.state?.pathname;

   const navigate = useNavigate();

   const handelEmailSignIn = (e) => {
      e.preventDefault();
      setErr("");
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      if (password.length < 6) {
         toast.error("Password must be at least 6 characters");
         setErr("Password must be at least 6 characters");
         return;
      }
      signInEmail(email, password)
         .then((result) => {
            const user = result.user;
            toast.success("Log In Success");
            console.log(user);
            navigate(from || "/");
         })
         .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage);
            toast.error(errorMessage);
            console.log(errorMessage);
         });
   };

   const handelForgetPassword = () => {
      const email = document.getElementById("formBasicEmail").value;
      if (!email) {
         toast.error("Please enter a valid email");
         return;
      } else if (!email.includes("@")) {
         toast.error("Please enter a valid email");
         return;
      } else if (!email.includes(".com")) {
         toast.error("Please enter a valid email");
         return;
      }
      forgetPassword(email)
         .then(() => {
            toast.warning("Please Check Inbox to reset password");
         })
         .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage);
         });
   };

   const handelGoogleSignIn = () => {
      setErr("");
      googleSignIn()
         .then((result) => {
            const loggedUser = result.user;
            navigate(from || "/");
            toast.success("Log In Success");
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
      setErr("");
      gitHubLogin()
         .then((result) => {
            const loggedUser = result.user;
            navigate("/");
            toast.success("Log In Success");
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
      <Container className="my-5 w-100 mx-auto" style={{ backgroundColor: "#f3eded", maxWidth: "600px" }}>
         <h2 className="text-center py-5">Please Login!!!</h2>
         <Form className=" px-5 pb-3 mx-auto" style={{ maxWidth: "500px" }} onSubmit={handelEmailSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" name="email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" name="password" required />
            </Form.Group>
            <p className="text-danger">{err}</p>
            <Form.Group className="d-flex justify-content-between">
               <Form.Text>
                  Don't Have An Account?{" "}
                  <Link className="text-black" to="/register">
                     Register.
                  </Link>
               </Form.Text>
               <Button variant="link" onClick={handelForgetPassword} className="text-black">
                  Forget Password
               </Button>
            </Form.Group>
            <Button variant="danger" type="submit" className="mt-4 w-100">
               Login
            </Button>
         </Form>
         <div className="text-center">
            <p>Or</p>
         </div>
         <div className="d-flex flex-column w-100 px-5 mx-auto gap-3 pb-5" style={{ maxWidth: "500px" }}>
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

export default Login;
