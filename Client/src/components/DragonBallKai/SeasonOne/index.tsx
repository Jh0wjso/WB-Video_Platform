import "../styles.css";
import { DBKSeasonOneData } from "../../../data/DBK/DBKSeasonOne.data";
import NewSectionLinksAlternative from "../../NewSectionLinksAlternative";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonOneKai() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Saiyajin</h1>
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
