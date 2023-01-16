import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonFourBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Galik Jr.</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="108" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Problemas no templo sagrado"
          num2="109" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="A neblina do mal"
          num3="110" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Piccolo se torna parte da família do mal"
          num4="111" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Piccolo enfrenta Gohan"
          num5="112" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="O plano de Piccolo"
          num6="113" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Kami-Sama e o Sr. Popo vão ao local sagrado"
        />
        <section className="episodeButtons">
          <SectionLinks num="114" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="A vida de Kami-Sama está em perigo" />
          <SectionLinks num="115" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="A água ultra sagrada salva o mundo" />
          <SectionLinks num="116" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Gohan destrói o planeta maligno" />
          <SectionLinks num="117" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Kuririn pede Maron em casamento" />
        </section>
      </section>
    </div>
  );
}
