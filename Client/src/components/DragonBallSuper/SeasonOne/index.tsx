import "../styles.css";
import { DBSSeasonOneData } from "../../../data/DBS/DBSSeasonOne.data";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonOneSuper() {
  return (
    <div className="containerEps">
      <section className="episodeButtonsZ">
        {DBSSeasonOneData.map((item) => (
          <NewSectionLinks num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
