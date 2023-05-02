// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import FoodCard from "../FoodCard/FoodCard";

const Foods = () => {
   const [foods, setFoods] = useState([]);
   useEffect(() => {
      fetch("https://taste-haven-server-nazmulhasan18.vercel.app/foods")
         .then((res) => res.json())
         .then((data) => setFoods(data));
   }, []);
   return (
      <div className="my-5" id="foods">
         <div className="text-center py-5">
            <h2>Our Food Menu </h2>
            <p>
               Assertively myocardinate robust e-tailers for extensible human <br /> capital. dpropriately
               benchmark networks.
            </p>
         </div>

         <Swiper
            slidesPerView={3}
            navigation={true}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            pagination={{
               clickable: true,
            }}
            breakpoints={{
               640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
               },
               1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
               },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
         >
            {foods.map((food) => {
               return (
                  <SwiperSlide key={food.id}>
                     <FoodCard food={food}></FoodCard>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
};

export default Foods;
