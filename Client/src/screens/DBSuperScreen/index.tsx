import DBSuperSerie from "../../components/DragonBallSuper/MainSerie";
import EpisodesList from "../../components/EpisodesList/EpisodesLists";
import { DBSSeasonOneData } from "../../data/DBS/DBSSeasonOne.data";
import "./styles.css";

export default function DBSuperScreen() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center">
      <DBSuperSerie />
      <div className="bgBox pl-5 flex flex-col justify-center items-start">
        <h1 className="text-start text-3xl pt-8 font-bold">
          Episódios | Dragon Ball KAI
        </h1>
        <h1 className="text-start text-xl text-gray-400">
          Ano de lançamento: 2009
        </h1>
        <EpisodesList episodes={DBSSeasonOneData} />
      </div>
    </div>
  );
}
