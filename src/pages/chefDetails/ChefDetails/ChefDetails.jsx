// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "../ChefBanner/ChefBanner";
import Recipes from "../Recipes/Recipes/Recipes";

const ChefDetails = () => {
   const chef = useLoaderData();
   console.log(chef);
   return (
      <div>
         <ChefBanner chef={chef}></ChefBanner>
         <Recipes chef={chef}></Recipes>
      </div>
   );
};

export default ChefDetails;
