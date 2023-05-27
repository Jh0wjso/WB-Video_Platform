import HeroesCarousel from "../DragonBallHeroes/HeroesCarousel";
import DragonBallCarousel from "../DragonBallCarousel";

import "./styles.css";
import MovieContentZ from "../DragonBallZ/MovieContentZ";
import DragonBallZEpCarousel from "../DragonBallZ/DbzEpCarousel/DbzEpCarousel";

export default function Home() {
  return (
    <section className="homeContent flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <DragonBallZEpCarousel />
        <HeroesCarousel />
        <DragonBallCarousel />
        <MovieContentZ />
      </div>
    </section>
  );
}
