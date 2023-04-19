import "../styles.css";
import NewSectionButtonsAlternative from "../../NewSectionButtonsAlternative";
import NewSectionLinksAlternative from "../../NewSectionLinksAlternative";
import { GTSeasonTwoData } from "../../../data/GT/GTSeasonTwo.data";

export default function SeasonTwoGT() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga do Baby</h1>
      <section className="episodeButtonsZ">
        {GTSeasonTwoData.map((item) => (
          <NewSectionLinksAlternative num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
