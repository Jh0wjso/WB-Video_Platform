import "../styles.css";
import SectionLinks from "../../SectionLinks";
import { DBSSeasonOneData } from "../../../data/DBS/DBSSeasonOne.data";

export default function SeasonOneSuper() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Deus da Destruição Bills</h1>
      <section className="episodeButtonsZ">
        {DBSSeasonOneData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
