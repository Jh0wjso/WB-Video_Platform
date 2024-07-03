import "../styles.css";
import { DBSeasonOneData } from "../../../data/Classic/DBSeasonOne.data";
import SectionLinks from "../../SectionLinks";

export default function SeasonOne() {
  return (
    <div className="containerEps">
      <section className="episodeButtonsZ">
        {DBSeasonOneData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}