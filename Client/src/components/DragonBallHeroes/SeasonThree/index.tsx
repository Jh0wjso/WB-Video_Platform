import "../styles.css";
import SectionLinks from "../../SectionLinks";
import { DBHSeasonThreeData } from "../../../data/DBH/DBHSeasonThree.data";

export default function SeasonThreeHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Criação do Universo</h1>
      <section className="episodeButtonsZ">
        {DBHSeasonThreeData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
