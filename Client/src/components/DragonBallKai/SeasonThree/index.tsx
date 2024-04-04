import "../styles.css";
import { DBKSeasonThreeData } from "../../../data/DBK/DBKSeasonThree.data";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonThreeKai() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Cell</h1>
      <section className="episodeButtonsZ">
        {DBKSeasonThreeData.map((item) => (
          <NewSectionLinks
            num={`${item.num}`}
            name={`${item.name}`}
          />
        ))}
      </section>
    </div>
  );
}
