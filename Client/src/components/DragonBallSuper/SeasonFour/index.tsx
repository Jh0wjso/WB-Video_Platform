import "../styles.css";
import { DBSSeasonFourData } from "../../../data/DBS/DBSSeasonFour.data";
import SectionLinks from "../../SectionLinks";

export default function SeasonFourSuper() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Trunks do Futuro</h1>
      <section className="episodeButtonsZ">
        {DBSSeasonFourData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
