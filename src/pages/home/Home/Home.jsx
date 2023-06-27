// eslint-disable-next-line no-unused-vars
import React from "react";
import Chefs from "../Chefs/Chefs";
import { useLoaderData } from "react-router-dom";
import Foods from "../Foods/Foods";
import Reviews from "../Reviews/Reviews";
import Banner from "../../../shared/Banner/Banner";
import { Container } from "react-bootstrap";
import Info1 from "../Info1/Info1";

const Home = () => {
   const chefs = useLoaderData();
   return (
      <div>
         <Banner></Banner>
         <Info1></Info1>
         <Container>
            <Foods></Foods>
            <Chefs chefs={chefs}></Chefs>
            <Reviews></Reviews>
         </Container>
      </div>
   );
};

export default Home;
