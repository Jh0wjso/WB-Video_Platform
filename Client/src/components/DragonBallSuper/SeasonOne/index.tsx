import "../styles.css";
import SectionLinks from "../../SectionLinks";
import { DBSSeasonOneData } from "../../../data/DBS/DBSSeasonOne.data";

export default function SeasonOneSuper() {
  return (
    <div className="containerEps">
      <section className="episodeButtonsZ">
        {DBSSeasonOneData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
