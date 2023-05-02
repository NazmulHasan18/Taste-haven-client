// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Carousel } from "react-bootstrap";

const Banner = () => {
   return (
      <Carousel controls={false} indicators={false} interval={5000}>
         <Carousel.Item>
            <img className="d-block w-100 " src="/Panta_Ilish2.jpg" alt="First slide" />

            <Carousel.Caption className="mb-5">
               <h1 className="fw-bolder" style={{ color: "#ecec4c", fontSize: "80px" }}>
                  Indulge in the Flavors of Bangladesh Cuisine
               </h1>
               <p className="fs-5 w-50 mx-auto">
                  Experience culinary excellence and warm hospitality at Taste Haven. Indulge in exquisite
                  flavors crafted from the finest ingredients, in an inviting and exceptional dining
                  atmosphere.
               </p>
               <Button variant="danger py-3 px-4 fs-5 my-4">Order Now</Button>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img className="d-block w-100 " src="/Panta_Ilish2.jpg" alt="First slide" />

            <Carousel.Caption className="mt-5  top-0">
               <h1 className="fw-bolder mt-5" style={{ color: "#ecec4c", fontSize: "90px" }}>
                  Satisfy Your Cravings with Our Delicious Dishes
               </h1>
               <p className="fs-5 w-50 mx-auto">
                  Discover a haven of culinary delights where every bite is a celebration of flavor and
                  quality.
               </p>
               <Button variant="danger py-3 px-4 fs-5 my-4">Order Now</Button>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img className="d-block w-100 " src="/Panta_Ilish2.jpg" alt="First slide" />

            <Carousel.Caption className="mt-5 pt-5 top-0">
               <h1 className="fw-bolder" style={{ color: "#ecec4c", fontSize: "90px" }}>
                  Discover the Perfect Blend of Taste and Tradition
               </h1>
               <p className="fs-5 w-50 mx-auto">
                  From farm to table, our commitment to using fresh, locally sourced ingredients shines
                  through in every dish.
               </p>
               <Button variant="danger py-3 px-4 fs-5 my-4">Order Now</Button>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
};

export default Banner;
