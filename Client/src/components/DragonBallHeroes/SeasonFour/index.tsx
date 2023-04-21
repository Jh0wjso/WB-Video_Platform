import "../styles.css";
import SectionLinks from "../../SectionLinks";
import { DBHSeasonFourData } from "../../../data/DBH/DBHSeasonFour.data";

export default function SeasonFourHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Prisão Planetária</h1>
      <section className="episodeButtonsZ">
        {DBHSeasonFourData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
