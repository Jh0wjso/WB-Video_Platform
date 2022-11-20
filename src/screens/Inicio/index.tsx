import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import One from "../../images/605799.jpg";
import Two from "../../images/dragon-ball-z-wallpaper-background-1.jpg";

export default function Inicio() {
  return (
    <section className="flex flex-col mt-7">
      <Swiper navigation={true} modules={[Navigation]} loop className="mySwiper container">
        <SwiperSlide>
          <img
            className="object-fill w-full h-96 rounded"
            src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-96 rounded"
            src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-96 rounded"
            src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
            alt="image slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
