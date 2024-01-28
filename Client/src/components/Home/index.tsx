import HeroesCarousel from "../DragonBallHeroes/HeroesCarousel";
import DragonBallCarousel from "../DragonBallCarousel";

import "./styles.css";
import MovieContentZ from "../DragonBallZ/MovieContentZ";
import DragonBallZEpCarousel from "../DragonBallZ/DbzEpCarousel/DbzEpCarousel";
import HomeEp from "../HomeEp/HomeEp";

export default function Home() {
  return (
    <section className="homeContent flex flex-col items-center justify-center px-3 py-5">
      <div className="flex flex-col">
        <HomeEp />
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
