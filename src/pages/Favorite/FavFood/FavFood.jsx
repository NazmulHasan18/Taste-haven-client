/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const FavFood = ({ food, handelRemove, handelCookMethod }) => {
   const { name, chefName, image, id } = food;
   return (
      <div
         className=" my-3 p-3 rounded border border-danger d-md-flex gap-3 align-items-center"
         style={{ backgroundColor: "#f1f1f1" }}
      >
         <div>
            <img src={image} alt="" className="img-fluid" style={{ maxHeight: "150px", maxWidth: "200px" }} />
         </div>
         <div className="flex-grow-1">
            <h2>{name}</h2>
            <p className="fw-semibold fs-4">Chef: {chefName}</p>
         </div>
         <div>
            <Button variant="warning" className="me-3" onClick={() => handelCookMethod(food)}>
               View Cooking Method
            </Button>
            <Button variant="danger" className="rounded-circle" onClick={() => handelRemove(id)}>
               <FaTrashAlt></FaTrashAlt>
            </Button>
         </div>
      </div>
   );
};

export default FavFood;
