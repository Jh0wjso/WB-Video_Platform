import { Link } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa";

import HeroesCarousel from "../HeroesCarousel";
import DragonBallCarousel from "../DragonBallCarousel";

import "./styles.css";
import MovieContentZ from "../DragonBallZ/MovieContentZ";

export default function Home() {
  return (
    <section className="homeContent flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <HeroesCarousel />
        <DragonBallCarousel />
        <MovieContentZ />
      </div>
      <div className="container text-center flex justify-center flex-col items-center my-14">
        <h1 className="font-bold text-5xl">Noticias Semanais Dragon Ball</h1>
        <h2 className="text-xl">
          Saiba tudo sobre o mundo de Dragon Ball aqui:{" "}
        </h2>
        <div className="bg-gray-700 p-7 rounded mt-5">
          <div className="justify-center flex flex-col md:flex-row items-center md:justify-between">
            <FaRegNewspaper size={200} className="justify-start" />
            <p className="font-bold text-2xl mb-8 w-[50%]">Todas as notícias do mundo de Dragon Ball aqui...</p>
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
