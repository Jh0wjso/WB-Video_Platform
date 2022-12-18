import SeasonOne from "../../components/DragonBall/SeasonOne";
import SeasonTwo from "../../components/DragonBall/SeasonTwo";
import DragonBallAbstract from "../../components/DragonBallAbstract";
import "./styles.css";

export default function ClassicSceen() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <DragonBallAbstract />
      <h1 className="text-center text-5xl py-8 font-bold">Assista a Todos os Episodios Aqui:</h1>
      <section className="flex flex-col w-[80%]">
        <SeasonOne />
        <SeasonTwo />
      </section>
    </div>
  );
}
