import React from "react";

import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import { FaRegNewspaper } from 'react-icons/fa';

import HeroesCarousel from "../../components/HeroesCarousel";
import DragonBallCarousel from "../../components/DragonBallCarousel";
import MoviesCarousel from "../../components/MoviesCarousel";

import "./styles.css";

const HomeComponent = () => {
  SwiperCore.use([Autoplay]);
};

export default function Inicio() {
  return (
    <section className="flex flex-col mt-7 items-center justify-center">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
        }}
        className="mySwiper container"
      >
        <SwiperSlide>
          <img
            className="object-fill w-full h-96"
            src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-96"
            src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-96"
            src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
            alt="image slide 3"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-col">
        <HeroesCarousel />
        <DragonBallCarousel />
        <MoviesCarousel />
      </div>
      <div className="my-10 container">
        <h1 className="font-bold text-5xl">Noticias Semanais Dragon Ball</h1>
        <h2 className="ml-14 text-xl">Saiba tudo sobre o mundo de Dragon Ball aqui: </h2>
        <div className="w-full bg-gray-700 justify-between flex flex-row items-center p-7 rounded mt-5">
          <FaRegNewspaper size={150} className="mr-5" />
          <div>
            <p>Saiba tudo sobre Dragon Ball </p>
          </div>
        </div>
      </div>
    </section>
  );
}
