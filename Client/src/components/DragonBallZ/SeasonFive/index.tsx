import "../styles.css";
import NewSectionLinks from "../../NewSectionLinks";
import { DBZSeasonFiveData } from "../../../data/DBZ/DragonBallZSeasonFive.data";
  
export default function SeasonFiveBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga dos Androides</h1>
      <section className="episodeButtonsZ">
        {DBZSeasonFiveData.map((item) => (
          <NewSectionLinks num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}