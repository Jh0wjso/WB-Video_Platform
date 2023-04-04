import "../styles.css";
import NewSectionButtons from "../../NewSectionButtons";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonFourBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Galik Jr.</h1>
      <section className="mt-8 flex flex-col items-center">
        <NewSectionButtons 
          num1="108" name1="dragon-ball-z-dublado"
          num2="109" name2="dragon-ball-z-dublado"
          num3="110" name3="dragon-ball-z-dublado"
          num4="111" name4="dragon-ball-z-dublado"
          num5="112" name5="dragon-ball-z-dublado"
          num6="113" name6="dragon-ball-z-dublado"
        />
        <section className="episodeButtons">
          <NewSectionLinks num="114" name="dragon-ball-z-dublado" />
          <NewSectionLinks num="115" name="dragon-ball-z-dublado" />
          <NewSectionLinks num="116" name="dragon-ball-z-dublado" />
          <NewSectionLinks num="117" name="dragon-ball-z-dublado" />
        </section>
      </section>
    </div>
  );
}