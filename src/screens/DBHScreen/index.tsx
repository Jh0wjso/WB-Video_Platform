import DBHeroesSerie from "../../components/DragonBallHeroes/MainSerie";
import SeasonOneHeroes from "../../components/DragonBallHeroes/SeasonOne";
import "./styles.css";

export default function DBHeroesScreen() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center">
      <DBHeroesSerie />
      <div className="bgBox pl-5 flex flex-col justify-center items-start">
        <h1 className="text-start text-3xl pt-8 font-bold">
          Episódios | Dragon Ball Heroes
        </h1>
        <h1 className="text-start text-xl text-gray-400">
          Ano de lançamento: 2009
        </h1>
        <SeasonOneHeroes />
      </div>
    </div>
  );
}
/*
<div className="classicScreenBoxH">
      <div className="bgBox min-h-screen flex flex-col items-center">
        <h1 className="text-center text-5xl py-8 font-bold">
          Assista a Todos os Episódios Aqui:
        </h1>
        <DBHeroesAbstract />
        <section className="flex flex-col w-[80%]">
          <SeasonOneHeroes />
        </section>
        <MovieContentZ />
      </div>
    </div>
*/