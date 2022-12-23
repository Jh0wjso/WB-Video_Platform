import "./styles.css";
import DragonBallZAbstract from "../../components/DragonBallZ/DragonBallZAbstract";
import SeasonOneBbz from "../../components/DragonBallZ/SeasonOne";
import MovieContentZ from "../../components/DragonBallZ/MovieContentZ";
import SeasonTwoBbz from "../../components/DragonBallZ/SeasonTwo";

export default function DBZScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-center text-5xl py-8 font-bold">
        Assista a Todos os Episodios Aqui:
      </h1>
      <DragonBallZAbstract />
      <section className="flex flex-col w-[80%]">
        <SeasonOneBbz />
        <SeasonTwoBbz />
      </section>
      <MovieContentZ />
    </div>
  );
}
