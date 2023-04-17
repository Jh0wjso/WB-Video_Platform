import "../styles.css";
import SectionLinks from "../../SectionLinks";
import { DBSeasonFourData } from "../../../data/Classic/DBSeasonFour.data";

export default function SeasonFour() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga de Tenshinhan</h1>
      <section className="episodeButtonsZ">
        {DBSeasonFourData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}