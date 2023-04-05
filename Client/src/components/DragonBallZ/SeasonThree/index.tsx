import "../styles.css";

import NewSectionButtons from "../../NewSectionButtons";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonThreeBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Eu sou o filho de Goku</h1>
      <section className="mt-8 flex flex-col items-center">
        <NewSectionButtons 
          num1="100" name1="06be55e2d189460c"
          num2="101" name2="bf318523fe90cb94"
          num3="102" name3="30f3ea7c91643b38"
          num4="103" name4="b28b5ddaed08dcc2"
          num5="104" name5="2d5ff5b16fad89f4"
          num6="105" name6="29c3b8d016eaa964"
        />
        <section className="episodeButtons">
          <NewSectionLinks num="106" name="c48cd6288daba104" />
          <NewSectionLinks num="107" name="b842df51dd154912" />
        </section>
      </section>
    </div>
  );
}