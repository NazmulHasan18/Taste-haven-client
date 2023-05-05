/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart, getFoodCart } from "../../../../utils/fakeDB";

const Recipe = ({ foodItem }) => {
   const [click, setClick] = useState(false);

   const { name, description, requiredItems, cookingMethod, image, rating, id } = foodItem;

   useEffect(() => {
      const storedFood = getFoodCart();
      const exist = storedFood.find((food) => food.id === id);
      if (exist) {
         setClick(true);
      }
      return;
   }, []);

   return (
      <Col>
         <Card>
            <Card.Img variant="top" src={image} className="img-fluid" />
            <Card.Body>
               <Card.Title>
                  <p className="fw-semibold fs-4">{name}</p>
               </Card.Title>
               <Card.Text>{description}</Card.Text>
               <Row md={2}>
                  <Col md={9} className="mb-1 d-flex align-items-center gap-3">
                     <p className="mb-0">Rating: </p>
                     <ReactStars
                        count={5}
                        value={rating}
                        size={24}
                        activeColor="red"
                        isHalf={true}
                        color="blue"
                        edit={false}
                     />
                     <p className="mb-0">{rating}</p>
                  </Col>
                  <Col md={3}>
                     {click ? (
                        <Button className="rounded-circle" variant="warning" disabled>
                           <FaHeart className="text-danger"></FaHeart>
                        </Button>
                     ) : (
                        <Button
                           className="rounded-circle"
                           variant={click ? "warning" : "outline-warning"}
                           onClick={() => {
                              setClick(true);
                              addToCart(id);
                              toast.success("The recipe is your favorite !");
                           }}
                        >
                           <FaHeart className="text-danger"></FaHeart>
                        </Button>
                     )}
                  </Col>
               </Row>

               <div>
                  <p className="fw-semibold fs-6">ingredient:</p>
                  <ul>
                     {requiredItems.map((item, index) => (
                        <li key={index}>{item}</li>
                     ))}
                  </ul>
               </div>
               <div>
                  <p>
                     <span className="fw-semibold fs-6">Cooking Method: </span>
                     {cookingMethod}
                  </p>
               </div>
            </Card.Body>
         </Card>
      </Col>
   );
};

export default Recipe;
