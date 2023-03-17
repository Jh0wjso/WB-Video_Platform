import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonTwo() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga do Tenkaichi Budokai</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="14" name1={`dragon-ball-dublado`}
          num2="15" name2={`dragon-ball-dublado`}
          num3="16" name3={`dragon-ball-dublado`}
          num4="17" name4={`dragon-ball-dublado`}
          num5="18" name5={`dragon-ball-dublado`}
          num6="19" name6={`dragon-ball-dublado`}
        />
        <SectionButtons 
          num1="20" name1={`dragon-ball-dublado`}
          num2="21" name2={`dragon-ball-dublado`}
          num3="22" name3={`dragon-ball-dublado`}
          num4="23" name4={`dragon-ball-dublado`}
          num5="24" name5={`dragon-ball-dublado`}
          num6="25" name6={`dragon-ball-dublado`}
        />

        <section className="episodeButtons">
          <SectionLinks num="26" name={`dragon-ball-dublado`} />
          <SectionLinks num="27" name={`dragon-ball-dublado`} />
          <SectionLinks num="28" name={`dragon-ball-dublado`} />
        </section>
      </section>
    </div>
  );
}
