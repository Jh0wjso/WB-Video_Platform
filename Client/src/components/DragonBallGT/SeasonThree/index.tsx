import "../styles.css";
import { GTSeasonThreeData } from "../../../data/GT/GTSeasonThree.data";
import NewSectionLinksAlternative from "../../NewSectionLinksAlternative";

export default function SeasonThreeGT() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga do Super 17</h1>
      <section className="episodeButtonsZ">
        {GTSeasonThreeData.map((item) => (
          <NewSectionLinksAlternative num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
