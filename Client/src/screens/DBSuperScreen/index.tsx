import DBSuperAbstract from "../../components/DragonBallSuper/DBSuperAbstract";
import SeasonOneSuper from "../../components/DragonBallSuper/SeasonOne";
import SeasonTwoSuper from "../../components/DragonBallSuper/SeasonTwo";
import MovieContentZ from "../../components/DragonBallZ/MovieContentZ";

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
      </section>
      <MovieContentZ />
    </div>
  );
}