import HeroesCarousel from "../DragonBallHeroes/HeroesCarousel";
import "./styles.css";
import MovieContentZ from "../DragonBallZ/MovieContentZ";
import DragonBallZEpCarousel from "../DragonBallZ/DbzEpCarousel/DbzEpCarousel";
import MainSerie from "../MainSerie";

export default function Home() {
  return (
    <section className="homeContent bg-transparent flex flex-col items-center justify-center px-3 py-5">
      <MainSerie />
      <div className="flex flex-col">
        <DragonBallZEpCarousel />
        <div style={{display: "none"}}>
          <HeroesCarousel />
          {
            //<DragonBallCarousel />
          }
          <MovieContentZ />
        </div>
      </div>
    </section>
  );
}
