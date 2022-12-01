import React from "react";

import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import { FaRegNewspaper } from "react-icons/fa";

import HeroesCarousel from "../HeroesCarousel";
import DragonBallCarousel from "../DragonBallCarousel";
import MoviesCarousel from "../MoviesCarousel";

import "./styles.css";

const HomeComponent = () => {
  SwiperCore.use([Autoplay]);
};

export default function Home() {
  return (
    <section className="homeContent flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <HeroesCarousel />
        <DragonBallCarousel />
        <MoviesCarousel />
      </div>
      <div className="container text-center flex justify-center flex-col items-center my-14">
        <h1 className="font-bold text-5xl">Noticias Semanais Dragon Ball</h1>
        <h2 className="text-xl">
          Saiba tudo sobre o mundo de Dragon Ball aqui:{" "}
        </h2>
        <div className="bg-gray-700 p-7 rounded mt-5">
          <div className="justify-between flex flex-row items-center">
            <FaRegNewspaper size={200} className="mr-5" />
            <p className="font-bold text-2xl text-right">Todas as notícias do mundo de Dragon Ball aqui...</p>
          </div>
          <div className="flex justify-end">
            <Link to="/news" className="bg-orange-600 p-3 rounded hover:bg-orange-400 transition-colors font-bold">
              Clique aqui
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
