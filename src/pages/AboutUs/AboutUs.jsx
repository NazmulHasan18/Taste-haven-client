import React from "react";
import { Container } from "react-bootstrap";

const AboutUs = () => {
   return (
      <Container className="my-5">
         <div>
            <h2 className="text-center">About Us!</h2>
            <h3 className="text-center">
               Welcome To <span>Taste Haven</span>
            </h3>

            <p>
               <span>Taste Haven</span> is a Professional <span>rastaurent website</span> Platform. Here we
               will provide you only interesting content, which you will like very much. We're dedicated to
               providing you the best of <span>rastaurent website</span>, with a focus on dependability and{" "}
               <span>food and chefs</span>. We're working to turn our passion for{" "}
               <span>rastaurent website</span> into a booming{" "}
               <a href="/" rel="do-follow" className="text-decoration-none text-primary">
                  online website
               </a>
               . We hope you enjoy our <span>rastaurent website</span> as much as we enjoy offering them to
               you.
            </p>

            <p>
               I will keep posting more important posts on my Website for all of you. Please give your support
               and love.
            </p>

            <p className="fw-bold text-center">
               Thanks For Visiting Our Site
               <br />
               <br />
               <span className="text-primary fs-6 fw-bold text-center">Have a nice day!</span>
            </p>
         </div>
      </Container>
   );
};

export default AboutUs;
