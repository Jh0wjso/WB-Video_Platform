import MovieRowClassic from "../../components/DragonBall/MovieRowClassic";
import SeasonFive from "../../components/DragonBall/SeasonFive";
import SeasonFour from "../../components/DragonBall/SeasonFour";
import SeasonOne from "../../components/DragonBall/SeasonOne";
import SeasonThree from "../../components/DragonBall/SeasonThree";
import SeasonTwo from "../../components/DragonBall/SeasonTwo";
import DragonBallAbstract from "../../components/DragonBall/DragonBallAbstract";
import "./styles.css";

export default function ClassicScreen() {
  return (
    <div className="classicScreenBox min-h-screen min-w-full flex flex-col items-center">
      <div className="bgBox flex flex-col justify-center items-center">
        <DragonBallAbstract />
        <h1 className="text-center text-5xl py-8 font-bold">
          Assista a Todos os Episódios Aqui:
        </h1>
        <section className="flex flex-col">
          <SeasonOne />
          <SeasonTwo />
          <SeasonThree />
          <SeasonFour />
          <SeasonFive />
        </section>
        <MovieRowClassic />
      </div>
    </div>
  );
}
