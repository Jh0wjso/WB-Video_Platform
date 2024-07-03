import "./styles.css";
import SeasonOneBbz from "../../components/DragonBallZ/SeasonOne";
import DBZSerie from "../../components/DragonBallZ/MainSerie";

export default function DBZScreen() {
  return (
    
    <div className="min-h-screen min-w-full flex flex-col items-center">
    <DBZSerie />
    <div className="bgBox pl-5 flex flex-col justify-center items-start">
      <h1 className="text-start text-3xl pt-8 font-bold">
        Episódios | Dragon Ball Z
      </h1>
      <h1 className="text-start text-xl text-gray-400">
        Ano de lançamento: 1989
      </h1>
      <SeasonOneBbz />
    </div>
  </div>
  );
}
