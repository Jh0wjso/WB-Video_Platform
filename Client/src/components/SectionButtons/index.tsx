import "./styles.css";
import SectionLinks from "../SectionLinks";

export default function SectionButtons(obj: {
  name1: string;
  num1: string;

  name2: string;
  num2: string;

  name3: string;
  num3: string;

  name4: string;
  num4: string;

  name5: string;
  num5: string;

  name6: string;
  num6: string;
}) {
  return (
    <section className="flex flex-col items-center">
      <section className="episodeButtons">
        <SectionLinks name={obj.name1} num={obj.num1} />
        <SectionLinks name={obj.name2} num={obj.num2} />
        <SectionLinks name={obj.name3} num={obj.num3} />
        <SectionLinks name={obj.name4} num={obj.num4} />
        <SectionLinks name={obj.name5} num={obj.num5} />
        <SectionLinks name={obj.name6} num={obj.num6} />
      </section>
    </section>
  );
}
