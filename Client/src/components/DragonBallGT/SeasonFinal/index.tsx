import "../styles.css";
import NewSectionLinksAlternative from "../../NewSectionLinksAlternative";
import { GTSeasonFourData } from "../../../data/GT/GTSeasonFour.data";

export default function SeasonFinalGT() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga dos Dragões Malignos</h1>
      <section className="episodeButtonsZ">
        {GTSeasonFourData.map((item) => (
          <NewSectionLinksAlternative num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
