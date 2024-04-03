import "../styles.css";
import { DBKSeasonFourData } from "../../../data/DBK/DBKSeasonFour.data";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonFourKai() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Buu</h1>
      <section className="episodeButtonsZ">
      {DBKSeasonFourData.map((item) => (
          <NewSectionLinks num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
