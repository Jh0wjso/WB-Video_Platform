import "../styles.css";
import NewSectionLinksAlternative from "../../NewSectionLinksAlternative";
import { DBKSeasonTwoData } from "../../../data/DBK/DBKSeasonTwo.data";

export default function SeasonTwoKai() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Freeza</h1>
      <section className="episodeButtonsZ">
        {DBKSeasonTwoData.map((item) => (
          <NewSectionLinksAlternative
            num={`${item.num}`}
            name={`${item.name}`}
          />
        ))}
      </section>
    </div>
  );
}
