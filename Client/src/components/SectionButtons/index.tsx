import "./styles.css";
import SectionLinks from "../SectionLinks";

export default function SectionButtons(obj: {
  num1: string;
  url1: string;

  num2: string;
  url2: string;

  num3: string;
  url3: string;

  num4: string;
  url4: string;

  num5: string;
  url5: string;

  num6: string;
  url6: string;
}) {
  return (
    <section className="flex flex-col items-center">
      <section className="episodeButtons">
        <SectionLinks url={obj.url1} num={obj.num1} />
        <SectionLinks url={obj.url2} num={obj.num2} />
        <SectionLinks url={obj.url3} num={obj.num3} />
        <SectionLinks url={obj.url4} num={obj.num4} />
        <SectionLinks url={obj.url5} num={obj.num5} />
        <SectionLinks url={obj.url6} num={obj.num6} />
      </section>
    </section>
  );
}