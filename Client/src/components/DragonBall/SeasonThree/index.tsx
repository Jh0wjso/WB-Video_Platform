import "../styles.css";
import SectionLinks from "../../SectionLinks";
import { DBSeasonThreeData } from "../../../data/Classic/DBSeasonThree.data";

export default function SeasonThree() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga da Red Ribbon</h1>
      <section className="episodeButtonsZ">
        {DBSeasonThreeData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}