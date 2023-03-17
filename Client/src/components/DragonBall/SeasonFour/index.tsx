import "../styles.css";
import SectionLinks from "../../SectionLinks";
import SectionButtons from "../../SectionButtons";

export default function SeasonFour() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga de Tenshinhan</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="79" name1={`dragon-ball-dublado`}
          num2="80" name2={`dragon-ball-dublado`}
          num3="81" name3={`dragon-ball-dublado`}
          num4="82" name4={`dragon-ball-dublado`}
          num5="83" name5={`dragon-ball-dublado`}
          num6="84" name6={`dragon-ball-dublado`}
        />

        <SectionButtons 
          num1="85" name1={`dragon-ball-dublado`}
          num2="86" name2={`dragon-ball-dublado`}
          num3="87" name3={`dragon-ball-dublado`}
          num4="88" name4={`dragon-ball-dublado`}
          num5="89" name5={`dragon-ball-dublado`}
          num6="90" name6={`dragon-ball-dublado`}
        />

        <SectionButtons 
          num1="91" name1={`dragon-ball-dublado`}
          num2="92" name2={`dragon-ball-dublado`}
          num3="93" name3={`dragon-ball-dublado`}
          num4="94" name4={`dragon-ball-dublado`}
          num5="95" name5={`dragon-ball-dublado`}
          num6="96" name6={`dragon-ball-dublado`}
        />
        <section className="episodeButtons">
          <SectionLinks num="97" name={`dragon-ball-dublado`} />
          <SectionLinks num="98" name={`dragon-ball-dublado`} />
          <SectionLinks num="99" name={`dragon-ball-dublado`} />
          <SectionLinks num="100" name={`dragon-ball-dublado`} />
          <SectionLinks num="101" name={`dragon-ball-dublado`} />
        </section>
      </section>
    </div>
  );
}
