import "../styles.css";

import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonThreeBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Eu sou o filho de Goku</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="100" url1="1lcvd64uvvBNWW-CNEzEQ67QYgHO_MSHp" name1="Eu sou o filho de Goku"
          num2="101" url2="1lG_KIJbRYZc4UONULZIP86T3-0Cq2QcW" name2="O ultimo desejo"
          num3="102" url3="1HVHCg_ZVE3lC4p-I6sX2sAo7W1_NJh0h" name3="Uma batalha extraordinária"
          num4="103" url4="14AHbhqR2dSxOlKSWZ9Z7PqP0kybxLMWA" name4="O desespero de Freeza"
          num5="104" url5="17KHuy5V9HX3p7gPtrdbroIKKXR4ASGTB" name5="A auto-destruição de Freeza"
          num6="105" url6="1BFsh-xBuG82N5JL9VLEiveuutqvW0ywN" name6="Freeza perde a luta"
        />
        <section className="episodeButtons">
          <SectionLinks num="106" url="16hQCTtBuGTZ-Cf4my-YDje0_zjZMANRP" name="Namekusei Explode" />
          <SectionLinks num="107" url="19-HQmsfR82EPGGuSgmnzs5gLxSwZ8vVN" name="Os guerreiros Z ressuscitam" />
        </section>
      </section>
    </div>
  );
}
