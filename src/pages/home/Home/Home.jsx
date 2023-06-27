// eslint-disable-next-line no-unused-vars
import React from "react";
import Chefs from "../Chefs/Chefs";
import { useLoaderData } from "react-router-dom";
import Foods from "../Foods/Foods";
import Reviews from "../Reviews/Reviews";
import Banner from "../../../shared/Banner/Banner";
import Info1 from "../Info1/Info1";
import About from "../About/About";
import BookNow from "../BookNow/BookNow";

const Home = () => {
   const chefs = useLoaderData();
   return (
      <div>
         <Banner></Banner>
         <Info1></Info1>
         <Foods></Foods>
         <About></About>
         <Chefs chefs={chefs}></Chefs>
         <BookNow></BookNow>
         <Reviews></Reviews>
      </div>
   );
};

export default Home;
