import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";
import { DBSSeasonTwoData } from "../../../data/DBS/DBSSeasonTwo.data";

export default function SeasonTwoSuper() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Freeza Dourado</h1>
      <section className="episodeButtonsZ">
        {DBSSeasonTwoData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
