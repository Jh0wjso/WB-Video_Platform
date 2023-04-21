import "../styles.css";
import SectionLinks from "../../SectionLinks";
import { DBHSeasonTwoData } from "../../../data/DBH/DBHSeasonTwo.data";

export default function SeasonTwoHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Conflito Universal</h1>
      <section className="episodeButtonsZ">
        {DBHSeasonTwoData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
