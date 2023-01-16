import "../styles.css";

import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonThreeBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Eu sou o filho de Goku</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="100" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Eu sou o filho de Goku"
          num2="101" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="O ultimo desejo"
          num3="102" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Uma batalha extraordinária"
          num4="103" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="O desespero de Freeza"
          num5="104" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="A auto-destruição de Freeza"
          num6="105" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Freeza perde a luta"
        />
        <section className="episodeButtons">
          <SectionLinks num="114" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Namekusei Explode" />
          <SectionLinks num="115" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Os guerreiros Z ressuscitam" />
        </section>
      </section>
    </div>
  );
}
