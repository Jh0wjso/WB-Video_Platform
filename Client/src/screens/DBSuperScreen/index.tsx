import DBSuperAbstract from "../../components/DragonBallSuper/DBSuperAbstract";
import MovieRowSuper from "../../components/DragonBallSuper/MovieRow";
import SeasonFinalSuper from "../../components/DragonBallSuper/SeasonFinal";
import SeasonFourSuper from "../../components/DragonBallSuper/SeasonFour";
import SeasonOneSuper from "../../components/DragonBallSuper/SeasonOne";
import SeasonThreeSuper from "../../components/DragonBallSuper/SeasonThree";
import SeasonTwoSuper from "../../components/DragonBallSuper/SeasonTwo";

export default function DBSuperScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-center text-5xl py-8 font-bold">
        Assista a Todos os Episódios Aqui:
      </h1>
      <DBSuperAbstract />
      <section className="flex flex-col w-[80%]">
        <SeasonOneSuper />
        <SeasonTwoSuper />
        <SeasonThreeSuper />
        <SeasonFourSuper />
        <SeasonFinalSuper />
      </section>
      <MovieRowSuper />
    </div>
  );
}
