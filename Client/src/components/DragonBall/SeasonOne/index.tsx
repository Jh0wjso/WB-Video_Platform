import "../styles.css";
import { DBSeasonOneData } from "../../../data/Classic/DBSeasonOne.data";
import NewSectionLinks from "../../NewSectionLinks";
import SectionLinks from "../../SectionLinks";

export default function SeasonOne() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga de Pilaf</h1>
      <section className="episodeButtonsZ">
        {DBSeasonOneData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}