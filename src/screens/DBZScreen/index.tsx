import "./styles.css";
import DragonBallZAbstract from "../../components/DragonBallZ/DragonBallZAbstract";
import SeasonOneBbz from "../../components/DragonBallZ/SeasonOne";
import MovieContentZ from "../../components/DragonBallZ/MovieContentZ";

export default function DBZScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-center text-5xl py-8 font-bold">
        Assista a Todos os Episodios Aqui:
      </h1>
      <DragonBallZAbstract />
      <section className="flex flex-col w-[80%]">
        <SeasonOneBbz />
      </section>
      <MovieContentZ />
    </div>
  );
}
