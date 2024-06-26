import HeroesCarousel from "../DragonBallHeroes/HeroesCarousel";
import "./styles.css";
import MovieContentZ from "../DragonBallZ/MovieContentZ";
import DragonBallZEpCarousel from "../DragonBallZ/DbzEpCarousel/DbzEpCarousel";
import MainSerie from "../MainSerie";
import DragonBallCarousel from "../DragonBallCarousel";

export default function Home() {
  return (
    <section className="homeContent">
      <MainSerie />
      <div className="bg-gray-600 w-full flex justify-center py-10">
        <div className="flex flex-col container">
          <DragonBallZEpCarousel />
          <HeroesCarousel />
          <DragonBallCarousel />
          <MovieContentZ />
        </div>
      </div>
    </section>
  );
}
