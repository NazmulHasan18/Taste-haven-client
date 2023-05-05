/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getFoodCart, removeFood } from "../../utils/fakeDB";
import { useLoaderData } from "react-router-dom";
import FavFood from "./FavFood/FavFood";
import CookMethod from "./CookMethod/CookMethod";

const Favorite = () => {
   const chefs = useLoaderData();
   const storedCart = getFoodCart();
   const [cart, setCart] = useState(storedCart);
   const [favFood, setFavFood] = useState([]);
   const [cookFood, setCookFood] = useState({});

   const handelRemove = (id) => {
      removeFood(id);
      const newStoredCart = getFoodCart();
      setCart(newStoredCart);
   };

   useEffect(() => {
      let foodArr = [];

      chefs.forEach((chef) => {
         const chefFoods = chef.foodItems;
         cart.forEach((chefFood) => {
            const storedFood = chefFoods.find((items) => items.id === chefFood.id);
            if (storedFood) {
               storedFood.chefName = chef.name;
               foodArr.push(storedFood);
            }
         });
      });
      setFavFood(foodArr);
      setCookFood(foodArr[0]);
   }, [cart, chefs]);

   const handelCookMethod = (food) => {
      setCookFood(food);
   };

   return (
      <Container className="my-5">
         <h2>My Favorite Recipes: {favFood.length} </h2>
         <Row>
            <Col xs={12} md={9}>
               {favFood.map((food) => (
                  <FavFood
                     key={food.id}
                     food={food}
                     handelRemove={handelRemove}
                     handelCookMethod={handelCookMethod}
                  ></FavFood>
               ))}
            </Col>
            <Col xs={12} md={3}>
               <CookMethod cookMethod={cookFood}></CookMethod>
            </Col>
         </Row>
      </Container>
   );
};

export default Favorite;
