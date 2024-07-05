import "../styles.css";
import NewSectionLinksAlternative from "../../NewSectionLinksAlternative";
import { GTSeasonOneData } from "../../../data/GT/GTSeasonOne.data";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonOneGT() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Viagem Pelo Universo</h1>
      <section className="episodeButtonsZ">
        {GTSeasonOneData.map((item) => (
          <NewSectionLinks num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}