import "../styles.css";
import SectionLinks from "../../SectionLinks";
import { DBHSeasonFiveData } from "../../../data/DBH/DBHSeasonFive.data";

export default function SeasonFiveHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Criação do Universo</h1>
      <section className="episodeButtonsZ">
        {DBHSeasonFiveData.map((item) => (
          <SectionLinks num={`${item.num}`} url={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
