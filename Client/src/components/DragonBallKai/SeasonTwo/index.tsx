import "../styles.css";
import { DBKSeasonTwoData } from "../../../data/DBK/DBKSeasonTwo.data";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonTwoKai() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Freeza</h1>
      <section className="episodeButtonsZ">
        {DBKSeasonTwoData.map((item) => (
          <NewSectionLinks
            num={`${item.num}`}
            name={`${item.name}`}
          />
        ))}
      </section>
    </div>
  );
}
