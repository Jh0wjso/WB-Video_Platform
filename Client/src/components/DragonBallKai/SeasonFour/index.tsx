import "../styles.css";
import NewSectionButtonsAlternative from "../../NewSectionButtonsAlternative";
import NewSectionLinksAlternative from "../../NewSectionLinksAlternative";
import { DBKSeasonFourData } from "../../../data/DBK/DBKSeasonFour.data";

export default function SeasonFourKai() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Buu</h1>
      <section className="episodeButtonsZ">
      {DBKSeasonFourData.map((item) => (
          <NewSectionLinksAlternative num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
