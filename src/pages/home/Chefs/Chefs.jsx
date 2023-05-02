// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import ChefCard from "../ChefCard/ChefCard";

const Chefs = () => {
   const [chefs, setChefs] = useState([]);
   useEffect(() => {
      fetch("http://localhost:3000/chefs")
         .then((res) => res.json())
         .then((data) => setChefs(data));
   }, []);
   return (
      <div className="my-5">
         <h2 className="text-center py-5">The Hand You Like To EAT (Chefs)</h2>
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
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
               },
               1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 50,
               },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
         >
            {chefs.map((chef) => {
               return (
                  <SwiperSlide key={chef.id}>
                     <ChefCard chef={chef}></ChefCard>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
};

export default Chefs;
