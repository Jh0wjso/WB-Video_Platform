import React from "react";

import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import { FaRegNewspaper } from "react-icons/fa";

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
      <div className="my-10 container text-center">
        <h1 className="font-bold text-5xl">Noticias Semanais Dragon Ball</h1>
        <h2 className="text-xl">
          Saiba tudo sobre o mundo de Dragon Ball aqui:{" "}
        </h2>
        <div className="w-full bg-gray-700 p-7 rounded mt-5">
          <div className="justify-between flex flex-row items-center">
            <FaRegNewspaper size={200} className="mr-5" />
            <p className="font-bold text-2xl text-right">Todas as notícias do mundo de Dragon Ball aqui...</p>
          </div>
          <div className="flex justify-end">
            <Link to="/news" className="bg-gray-800 p-3 rounded hover:bg-gray-600 transition-colors font-bold">
              Clique aqui
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
