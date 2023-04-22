import "../styles.css";
import SectionLinks from "../../SectionLinks";
import { DBSSeasonFiveData } from "../../../data/DBS/DBSSeasonFive.data";

export default function SeasonFinalSuper() {
  return(
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Sobrevivência do Universo</h1>
      <section className="episodeButtonsZ">
        {DBSSeasonFiveData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
