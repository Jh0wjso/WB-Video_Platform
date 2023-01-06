import DragonBallGTAbstract from "../../components/DragonBallGT/DragonBallGTAbstract";
import SeasonFinalGT from "../../components/DragonBallGT/SeasonFinal";
import SeasonOneGT from "../../components/DragonBallGT/SeasonOne";
import SeasonThreeGT from "../../components/DragonBallGT/SeasonThree";
import SeasonTwoGT from "../../components/DragonBallGT/SeasonTwo";

export default function GTScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <DragonBallGTAbstract />
      <h1 className="text-center text-5xl py-8 font-bold">Assista a Todos os Episódios Aqui:</h1>
      <section className="flex flex-col w-[80%]">
        <SeasonOneGT />
        <SeasonTwoGT />
        <SeasonThreeGT />
        <SeasonFinalGT />
      </section>
    </div>
  );
}
