import "../styles.css";
import SectionLinks from "../../SectionLinks";
import { DBSSeasonThreeData } from "../../../data/DBS/DBSSeasonThree.data";

export default function SeasonThreeSuper() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Universo 6</h1>
      <section className="episodeButtonsZ">
        {DBSSeasonThreeData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
