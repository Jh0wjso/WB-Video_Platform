import "./styles.css";
import DBSerie from "../../components/DragonBall/MainSerie";
import EpisodesList from "../../components/EpisodesList/EpisodesLists";
import { DBSeasonOneData } from "../../data/Classic/DBSeasonOne.data";

export default function ClassicScreen() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center">
      <DBSerie />
      <div className="bgBox pl-5 flex flex-col justify-center items-start">
        <h1 className="text-start text-3xl pt-8 font-bold">
          Episódios | Dragon Ball
        </h1>
        <h1 className="text-start text-xl text-gray-400">
          Ano de lançamento: 1986
        </h1>
        <EpisodesList episodes={DBSeasonOneData} />
      </div>
    </div>
  );
}
