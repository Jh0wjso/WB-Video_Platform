import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonOneBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga dos Sayajins</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="1"  name1="dragon-ball-z-dublado"        
          num2="2"  name2="dragon-ball-z-dublado"
          num3="3"  name3="dragon-ball-z-dublado"
          num4="4"  name4="dragon-ball-z-dublado"
          num5="5"  name5="dragon-ball-z-dublado"
          num6="6"  name6="dragon-ball-z-dublado"
        />
        <SectionButtons 
          num1="7"  name1="dragon-ball-z-dublado"
          num2="8"  name2="dragon-ball-z-dublado"
          num3="9"  name3="dragon-ball-z-dublado"
          num4="10" name4="dragon-ball-z-dublado"
          num5="11" name5="dragon-ball-z-dublado"
          num6="12" name6="dragon-ball-z-dublado"
        />
        <SectionButtons 
          num1="13" name1="dragon-ball-z-dublado"
          num2="14"  name2="dragon-ball-z-dublado"
          num3="15"  name3="dragon-ball-z-dublado"
          num4="16"  name4="dragon-ball-z-dublado"
          num5="17"  name5="dragon-ball-z-dublado"
          num6="18"  name6="dragon-ball-z-dublado"
        />
        <SectionButtons 
          num1="19"  name1="dragon-ball-z-dublado"
          num2="20" name2="dragon-ball-z-dublado"
          num3="21"  name3="dragon-ball-z-dublado"
          num4="22"  name4="dragon-ball-z-dublado"
          num5="23"  name5="dragon-ball-z-dublado"
          num6="24"  name6="dragon-ball-z-dublado"
        />

        <SectionButtons 
          num1="25"  name1="dragon-ball-z-dublado"
          num2="26"  name2="dragon-ball-z-dublado"
          num3="27"  name3="dragon-ball-z-dublado"
          num4="28"  name4="dragon-ball-z-dublado"
          num5="29"  name5="dragon-ball-z-dublado"
          num6="30"  name6="dragon-ball-z-dublado"
        />
        <section className="episodeButtons">
          <SectionLinks num="31"  name="dragon-ball-z-dublado" />
          <SectionLinks num="32"  name="dragon-ball-z-dublado" />
          <SectionLinks num="33"  name="dragon-ball-z-dublado" />
          <SectionLinks num="34"  name="dragon-ball-z-dublado" />
          <SectionLinks num="35"  name="dragon-ball-z-dublado" />
        </section>
      </section>
    </div>
  );
}
