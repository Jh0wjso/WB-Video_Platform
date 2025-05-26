import "./styles.css";
import NewSectionLinksAlternative from "../NewSectionLinksAlternative";

export default function NewSectionButtonsAlternative(obj: {
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
        <NewSectionLinksAlternative name={obj.name1} num={obj.num1} />
        <NewSectionLinksAlternative name={obj.name2} num={obj.num2} />
        <NewSectionLinksAlternative name={obj.name3} num={obj.num3} />
        <NewSectionLinksAlternative name={obj.name4} num={obj.num4} />
        <NewSectionLinksAlternative name={obj.name5} num={obj.num5} />
        <NewSectionLinksAlternative name={obj.name6} num={obj.num6} />
      </section>
    </section>
  );
}
