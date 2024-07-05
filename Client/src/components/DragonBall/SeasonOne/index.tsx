import "../styles.css";
import { DBSeasonOneData } from "../../../data/Classic/DBSeasonOne.data";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonOne() {
  return (
    <div className="containerEps">
      <section className="episodeButtonsZ">
        {DBSeasonOneData.map((item) => (
          <NewSectionLinks num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}