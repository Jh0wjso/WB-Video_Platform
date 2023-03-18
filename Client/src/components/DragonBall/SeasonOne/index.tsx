import "../styles.css";
import NewSectionButtons from "../../NewSectionButtons";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonOne() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga de Pilaf</h1>
      <section className="mt-8 flex flex-col items-center">
        <section className="episodeButtons">
        <NewSectionButtons 
          num1="1" name1={`dragon-ball-dublado`}
          num2="2" name2={`dragon-ball-dublado`}
          num3="3" name3={`dragon-ball-dublado`}
          num4="4" name4={`dragon-ball-dublado`}
          num5="5" name5={`dragon-ball-dublado`}
          num6="6" name6={`dragon-ball-dublado`}
        />
        </section>
        <section className="episodeButtons">
        <NewSectionButtons 
          num1="7" name1={`dragon-ball-dublado`}
          num2="8" name2={`dragon-ball-dublado`}
          num3="9" name3={`dragon-ball-dublado`}
          num4="10" name4={`dragon-ball-dublado`}
          num5="11" name5={`dragon-ball-dublado`}
          num6="12" name6={`dragon-ball-dublado`}
        />
        </section>
        <NewSectionLinks num="13" name={`dragon-ball-dublado`} />
      </section>
    </div>
  );
}
