import "../styles.css";
import { DBKSeasonThreeData } from "../../../data/DBK/DBKSeasonThree.data";
import NewSectionLinksAlternative from "../../NewSectionLinksAlternative";

export default function SeasonThreeKai() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Cell</h1>
      <section className="episodeButtonsZ">
        {DBKSeasonThreeData.map((item) => (
          <NewSectionLinksAlternative
            num={`${item.num}`}
            name={`${item.name}`}
          />
        ))}
      </section>
    </div>
  );
}
