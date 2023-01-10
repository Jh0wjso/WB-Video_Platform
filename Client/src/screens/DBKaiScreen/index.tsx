import "./styles.css";
import MovieContentZ from "../../components/DragonBallZ/MovieContentZ";
import DBKaiAbstract from "../../components/DragonBallKai/DBKaiAbstract";
import SeasonOneKai from "../../components/DragonBallKai/SeasonOne";
import SeasonTwoKai from "../../components/DragonBallKai/SeasonTwo";
import SeasonThreeKai from "../../components/DragonBallKai/SeasonThree";

export default function DBKaiScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-center text-5xl py-8 font-bold">
        Assista a Todos os Episódios Aqui:
      </h1>
      <DBKaiAbstract />
      <section className="flex flex-col w-[80%]">
        <SeasonOneKai />
        <SeasonTwoKai />
        <SeasonThreeKai />
      </section>
      <MovieContentZ />
    </div>
  );
}
