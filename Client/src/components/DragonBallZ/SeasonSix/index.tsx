import { DBZSeasonSixData } from "../../../data/DBZ/DragonBallZSeasonSix.data";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonSixDbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Cell</h1>
      <section className="episodeButtonsZ">
        {DBZSeasonSixData.map((item) => (
          <NewSectionLinks num={`${item.num}`} name={`${item.name}`} />
        ))}
      </section>
    </div>
  );
}
