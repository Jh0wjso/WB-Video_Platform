import "../styles.css";
import NewSectionLinks from "../../NewSectionLinks";
import { DBZSeasonFinalData } from "../../../data/DBZ/DragonBallZSeasonFinal.data";

export default function SeasonFinalDbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Buu</h1>
      <section className="episodeButtonsZ">
        {DBZSeasonFinalData.map((item) => (
          <NewSectionLinks num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}