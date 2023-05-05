/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card } from "react-bootstrap";

const CookMethod = ({ cookMethod }) => {
   const { name, image, requiredItems, cookingMethod } = cookMethod;
   return (
      <Card style={{ width: "18rem" }} className="my-3">
         <Card.Img variant="top" src={image} />
         <Card.Body>
            <Card.Title>{name}</Card.Title>
            <ul>
               {requiredItems?.map((item, index) => (
                  <li key={index}>{item}</li>
               ))}
            </ul>
            <Card.Text>
               <span>Method: </span>
               {cookingMethod}
            </Card.Text>
         </Card.Body>
      </Card>
   );
};

export default CookMethod;
