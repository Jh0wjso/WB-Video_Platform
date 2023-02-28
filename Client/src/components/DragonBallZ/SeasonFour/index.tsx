import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonFourBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Galik Jr.</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="108" url1="1T1a2sjaisb6oiKX24LWu-lyIB30pkfZT" name1="Problemas no templo sagrado"
          num2="109" url2="1CXgJarDt9Vj30PIm8i7nA9ap4B39zWn5" name2="A neblina do mal"
          num3="110" url3="1tYc8zA8mFUy0KmjucJ2KnpQy2i286BqN" name3="Piccolo se torna parte da família do mal"
          num4="111" url4="1hJa-0pa7akDAAjAVxJ_uYxZX0wSkQs80" name4="Piccolo enfrenta Gohan"
          num5="112" url5="1R8ik8fR3qPM5svudSzX7mtMrAwVEZhYC" name5="O plano de Piccolo"
          num6="113" url6="1VXkdkreeDxQwy0spFzSiwoDNw_rl0B3V" name6="Kami-Sama e o Sr. Popo vão ao local sagrado"
        />
        <section className="episodeButtons">
          <SectionLinks num="114" url="1Te2pFTCimckcXMnemMPaBchs7LeIf58H" name="A vida de Kami-Sama está em perigo" />
          <SectionLinks num="115" url="1sgy213Wma-ALLEPbfeqTk7vhLFtHhwtf" name="A água ultra sagrada salva o mundo" />
          <SectionLinks num="116" url="1cir7LiJjPgqwwRIRDYAEnofCUhkgh4a-" name="Gohan destrói o planeta maligno" />
          <SectionLinks num="117" url="1qY1nCBampdQogQYuvuQkjNZTyLBn0EvU" name="Kuririn pede Maron em casamento" />
        </section>
      </section>
    </div>
  );
}
