/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactStars from "react-rating-stars-component";
import { Button, Card } from "react-bootstrap";
import { BiBowlHot } from "react-icons/bi";

const FoodCard = ({ food }) => {
   const { image, name, description, category, price, rating } = food;
   return (
      <Card
         className="mb-5 border-warning"
         style={{ maxWidth: "25rem", height: "41rem", backgroundColor: "#fff5f6" }}
      >
         <Card.Img variant="top" src={image} style={{ height: "19rem" }} />
         <Card.Body>
            <Card.Title>
               <h3>{name}</h3>
            </Card.Title>
            <Card.Text className="mb-1">
               <span className="fw-semibold">Description :</span> {description}
            </Card.Text>
            <Card.Text className="mb-1">
               <span className="fw-semibold">Category :</span> {category}
            </Card.Text>
            <div className="d-flex justify-content-between">
               <Card.Text className="mb-1">
                  <span className="fw-semibold">Price : $</span> {price}
               </Card.Text>

               <div className="mb-1 d-flex align-items-center gap-3">
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
               </div>
            </div>
            <Button variant="danger" className="mt-3  mb-4 position-absolute bottom-0">
               Buy Now <BiBowlHot></BiBowlHot>
            </Button>
         </Card.Body>
      </Card>
   );
};

export default FoodCard;
<h1>food card</h1>;
