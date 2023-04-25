import "../styles.css";
import { DBKSeasonOneData } from "../../../data/DBK/DBKSeasonOne.data";
import NewSectionLinksAlternative from "../../NewSectionLinksAlternative";

export default function SeasonOneKai() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Saiyajin</h1>
      <section className="episodeButtonsZ">
        {DBKSeasonOneData.map((item) => (
          <NewSectionLinksAlternative
            name={`${item.name}`}
            num={`${item.num}`}
          />
        ))}
      </section>
    </div>
  );
}
