import DBgtSerie from "../../components/DragonBallGT/MainSerie";
import SeasonOneGT from "../../components/DragonBallGT/SeasonOne";

export default function GTScreen() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center">
      <DBgtSerie />
      <div className="bgBox pl-5 flex flex-col justify-center items-start">
        <h1 className="text-start text-3xl pt-8 font-bold">
          Episódios | Dragon Ball GT
        </h1>
        <h1 className="text-start text-xl text-gray-400">
          Ano de lançamento: 1996
        </h1>
        <SeasonOneGT />
      </div>
    </div>
  );
}
