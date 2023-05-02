// eslint-disable-next-line no-unused-vars
import React from "react";
import Chefs from "../Chefs/Chefs";
import { useLoaderData } from "react-router-dom";
import Foods from "../Foods/Foods";

const Home = () => {
   const chefs = useLoaderData();
   return (
      <div>
         <Foods></Foods>
         <Chefs chefs={chefs}></Chefs>
      </div>
   );
};

export default Home;
