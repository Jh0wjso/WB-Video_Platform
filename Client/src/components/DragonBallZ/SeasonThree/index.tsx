import "../styles.css";
import NewSectionLinks from "../../NewSectionLinks";
import { DBZSeasonThreeData } from "../../../data/DBZ/DragonBallZSeasonThree.data";

export default function SeasonThreeBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Eu sou o filho de Goku</h1>
      <section className="episodeButtonsZ">
        {DBZSeasonThreeData.map((item) => (
          <NewSectionLinks num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
