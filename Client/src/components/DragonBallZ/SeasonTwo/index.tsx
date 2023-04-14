import "../styles.css";
import NewSectionLinks from "../../NewSectionLinks";
import { DBZSeasonTwoData } from "../../../data/DBZ/DragonBallZSeasonTwo.data";

export default function SeasonTwoBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Freeza</h1>
      <section className="episodeButtonsZ">
        {DBZSeasonTwoData.map((item) => (
          <NewSectionLinks num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
