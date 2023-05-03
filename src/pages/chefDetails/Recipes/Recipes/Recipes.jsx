/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row } from "react-bootstrap";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ chef }) => {
   const { foodItems } = chef;
   return (
      <Container className="my-5">
         <div className="text-center pt-5">
            <h1>Mouth-Watering Recipes from The Chef</h1>
            <p>
               Indulge in a culinary journey with <br /> our chefs handcrafted recipes, showcasing a <br />{" "}
               harmonious blend of flavors and artful presentation. Elevate your <br /> cooking game and savor
               the exquisite taste of our expertly crafted dishes.
            </p>
         </div>
         <Row xs={1} md={3} className="g-4">
            {foodItems.map((foodItem) => (
               <Recipe key={foodItem.id} foodItem={foodItem}></Recipe>
            ))}
         </Row>
      </Container>
   );
};

export default Recipes;
