import "../styles.css";
import { DBHSeasonSixData } from "../../../data/DBH/DBHSeasonSix.data";
import SectionLinks from "../../SectionLinks";

export default function SeasonSixHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">
        Saga da Missão Ultra Deus
      </h1>
      <section className="episodeButtonsZ">
        {DBHSeasonSixData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
