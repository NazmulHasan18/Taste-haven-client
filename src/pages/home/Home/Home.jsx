// eslint-disable-next-line no-unused-vars
import React from "react";
import Chefs from "../Chefs/Chefs";
import { useLoaderData } from "react-router-dom";
import Foods from "../Foods/Foods";
import Reviews from "../Reviews/Reviews";

const Home = () => {
   const chefs = useLoaderData();
   return (
      <div>
         <Foods></Foods>
         <Chefs chefs={chefs}></Chefs>
         <Reviews></Reviews>
      </div>
   );
};

export default Home;
