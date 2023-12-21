import DBHeroesAbstract from "../../components/DragonBallHeroes/DBHeroesAbstract";
import SeasonOneHeroes from "../../components/DragonBallHeroes/SeasonOne";
import MovieContentZ from "../../components/DragonBallZ/MovieContentZ";

export default function DBHeroesScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-center text-5xl py-8 font-bold">
        Assista a Todos os Episódios Aqui:
      </h1>
      <DBHeroesAbstract />
      <section className="flex flex-col w-[80%]">
        <SeasonOneHeroes />
      </section>
      <MovieContentZ />
    </div>
  );
}
