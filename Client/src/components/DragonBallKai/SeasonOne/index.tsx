import "../styles.css";
import { DBKSeasonOneData } from "../../../data/DBK/DBKSeasonOne.data";
import NewSectionLinksAlternative from "../../NewSectionLinksAlternative";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonOneKai() {
  return (
    <div className="containerEps">
      <section className="episodeButtonsZ">
        {DBKSeasonOneData.map((item) => (
          <NewSectionLinks
            name={`${item.name}`}
            num={`${item.num}`}
          />
        ))}
      </section>
    </div>
  );
}
