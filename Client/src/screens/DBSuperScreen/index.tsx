import DBSuperAbstract from "../../components/DragonBallSuper/DBSuperAbstract";
import DragonBallZAbstract from "../../components/DragonBallZ/DragonBallZAbstract";
import MovieContentZ from "../../components/DragonBallZ/MovieContentZ";

export default function DBSuperScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-center text-5xl py-8 font-bold">
        Assista a Todos os Episódios Aqui:
      </h1>
      <DBSuperAbstract />
      <section className="flex flex-col w-[80%]">
      </section>
      <MovieContentZ />
    </div>
  );
}
