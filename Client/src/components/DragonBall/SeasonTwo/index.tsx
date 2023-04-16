import "../styles.css";
import SectionLinks from "../../SectionLinks";
import { DBSeasonTwoData } from "../../../data/Classic/DBSeasonTwo.data";

export default function SeasonTwo() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga do Tenkaichi Budokai</h1>
      <section className="episodeButtonsZ">
        {DBSeasonTwoData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}