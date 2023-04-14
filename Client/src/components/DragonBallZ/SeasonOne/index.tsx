import "../styles.css";
import NewSectionLinks from "../../NewSectionLinks";
import { DBZSeasonOneData } from "../../../data/DBZ/DragonBallZSeasonOne.data";


export default function SeasonOneBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga dos Sayajins</h1>
      <section className="episodeButtonsZ">
        {DBZSeasonOneData.map((item) => (
          <NewSectionLinks num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
