import "../styles.css";
import SectionLinks from "../../SectionLinks";
import { DBSeasonFiveData } from "../../../data/Classic/DBSeasonFive.data";

export default function SeasonFive() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga de Piccolo Daimaoh e Piccolo Jr.</h1>
      <section className="episodeButtonsZ">
        {DBSeasonFiveData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
