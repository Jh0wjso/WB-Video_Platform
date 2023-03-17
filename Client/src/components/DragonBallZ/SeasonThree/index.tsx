import "../styles.css";

import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonThreeBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Eu sou o filho de Goku</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="100" name1="dragon-ball-z-dublado"
          num2="101" name2="dragon-ball-z-dublado"
          num3="102" name3="dragon-ball-z-dublado"
          num4="103" name4="dragon-ball-z-dublado"
          num5="104" name5="dragon-ball-z-dublado"
          num6="105" name6="dragon-ball-z-dublado"
        />
        <section className="episodeButtons">
          <SectionLinks num="106" name="dragon-ball-z-dublado" />
          <SectionLinks num="107" name="dragon-ball-z-dublado" />
        </section>
      </section>
    </div>
  );
}
