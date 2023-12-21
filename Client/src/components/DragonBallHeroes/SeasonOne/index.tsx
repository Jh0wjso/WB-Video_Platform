import "../styles.css";
import { DBHSeasonOneData } from "../../../data/DBH/DBHSeasonOne.data";
import SectionLinks from "../../SectionLinks";

export default function SeasonOneHeroes() {
  return (
    <div className="containerEps">
      <section className="episodeButtonsZ">
        {DBHSeasonOneData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
