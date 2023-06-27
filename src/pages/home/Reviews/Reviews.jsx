// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ReactStars from "react-rating-stars-component";

const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   useEffect(() => {
      fetch("https://taste-haven-server-nazmulhasan18.vercel.app/reviews")
         .then((res) => res.json())
         .then((data) => setReviews(data));
   }, []);
   return (
      <Container id="reviews" className="my-5">
         <div className="text-center py-5">
            <h2>Customer Reviews</h2>
            <p>
               Read what our customers have to say about their <br /> experience at our Bengali food
               restaurant.
            </p>
         </div>
         <Carousel>
            {reviews.map((reviewed) => {
               return (
                  <Carousel.Item key={reviewed.id} className="bg-black">
                     <img className="d-block w-100 opacity-50 " src="review-bg.jpg" alt="Third slide" />

                     <Carousel.Caption className="translate-lg-middle-y pb-0">
                        <img
                           src={reviewed.image}
                           style={{ height: "150px", width: "150px" }}
                           className="rounded-circle border border-4 border-danger my-4 review-user"
                           alt=""
                        />
                        <h3 className="my-3">{reviewed.name}</h3>
                        <p className="fw-semibold">{reviewed.review}</p>
                        <div className="d-flex align-items-center justify-content-center gap-3 fw-bold">
                           <h6 className="mb-0">Rating:</h6>
                           <ReactStars
                              count={5}
                              value={reviewed.rating}
                              size={24}
                              activeColor="yellow"
                              isHalf={true}
                              color="red"
                              edit={false}
                           />
                           <p className="mb-0">{reviewed.rating}</p>
                        </div>
                     </Carousel.Caption>
                  </Carousel.Item>
               );
            })}
         </Carousel>
      </Container>
   );
};

export default Reviews;
