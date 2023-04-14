import "../styles.css";
import NewSectionButtons from "../../NewSectionButtons";
import NewSectionLinks from "../../NewSectionLinks";
import { DBZSeasonFourData } from "../../../data/DBZ/DragonBallZSeasonFour.data";

export default function SeasonFourBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Galik Jr.</h1>
      <section className="episodeButtonsZ">
        {DBZSeasonFourData.map((item) => (
          <NewSectionLinks num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}