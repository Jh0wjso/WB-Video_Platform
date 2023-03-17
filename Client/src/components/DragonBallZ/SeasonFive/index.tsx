import "../styles.css";
import SectionLinks from "../../SectionLinks";
import SectionButtons from "../../SectionButtons";
  
export default function SeasonFiveBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga dos Androides</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="118" name1="dragon-ball-z-dublado"
          num2="119" name2="dragon-ball-z-dublado"
          num3="120" name3="dragon-ball-z-dublado"
          num4="121" name4="dragon-ball-z-dublado"
          num5="122" name5="dragon-ball-z-dublado"
          num6="123" name6="dragon-ball-z-dublado"
        />
        <SectionButtons 
          num1="124" name1="dragon-ball-z-dublado"
          num2="125" name2="dragon-ball-z-dublado"
          num3="126" name3="dragon-ball-z-dublado"
          num4="127" name4="dragon-ball-z-dublado"
          num5="128" name5="dragon-ball-z-dublado"
          num6="129" name6="dragon-ball-z-dublado"
        />
        <SectionButtons 
          num1="130" name1="dragon-ball-z-dublado"
          num2="131" name2="dragon-ball-z-dublado"
          num3="132" name3="dragon-ball-z-dublado"
          num4="133" name4="dragon-ball-z-dublado"
          num5="134" name5="dragon-ball-z-dublado"
          num6="135" name6="dragon-ball-z-dublado"
        />
        <section className="episodeButtons"> 
          <SectionLinks num={"136"} name={"dragon-ball-z-dublado"}  /> 
          <SectionLinks num={"137"} name={"dragon-ball-z-dublado"}  /> 
          <SectionLinks num={"138"} name={"dragon-ball-z-dublado"}  /> 
          <SectionLinks num={"139"} name={"dragon-ball-z-dublado"}  /> 
        </section>
      </section>
    </div>
  );
}
