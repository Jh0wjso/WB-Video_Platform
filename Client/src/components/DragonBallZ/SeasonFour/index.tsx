import "../styles.css";
import NewSectionButtons from "../../NewSectionButtons";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonFourBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Galik Jr.</h1>
      <section className="mt-8 flex flex-col items-center">
        <NewSectionButtons 
          num1="108" name1="df6c385ab0a46533"
          num2="109" name2="d7f7eb5f25fe944e"
          num3="110" name3="248be7304dc9ebff"
          num4="111" name4="04ef3f5402caf42d"
          num5="112" name5="421cb227869f13fa"
          num6="113" name6="d785e6220b0289a6"
        />
        <section className="episodeButtons">
          <NewSectionLinks num="114" name="c15ba0147ae8c4f0" />
          <NewSectionLinks num="115" name="589f55fa62f7a33d" />
          <NewSectionLinks num="116" name="0af13f9e059d6e45" />
          <NewSectionLinks num="117" name="65469aed52042690" />
        </section>
      </section>
    </div>
  );
}