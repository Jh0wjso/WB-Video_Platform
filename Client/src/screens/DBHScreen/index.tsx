import DBHeroesAbstract from "../../components/DragonBallHeroes/DBHeroesAbstract";
import SeasonFiveHeroes from "../../components/DragonBallHeroes/SeasonFive";
import SeasonFourHeroes from "../../components/DragonBallHeroes/SeasonFour";
import SeasonOneHeroes from "../../components/DragonBallHeroes/SeasonOne";
import SeasonSixHeroes from "../../components/DragonBallHeroes/SeasonSix";
import SeasonThreeHeroes from "../../components/DragonBallHeroes/SeasonThree";
import SeasonTwoHeroes from "../../components/DragonBallHeroes/SeasonTwo";
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
        <SeasonTwoHeroes />
        <SeasonThreeHeroes />
        <SeasonFourHeroes />
        <SeasonFiveHeroes /> 
        <SeasonSixHeroes />
      </section>
      <MovieContentZ />
    </div>
  );
}
