import { Link } from "react-router-dom";
import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonOne() {
  return (
    <div className="flex flex-col border rounded p-5">
      <h1 className="text-center text-4xl font-bold">Saga de Pilaf</h1>
      <section className="mt-8 flex flex-col items-center">
        <section className="episodeButtons">
        <SectionButtons 
          num1="1" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="O segredo das Esferas do Dragão"
          num2="2" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="A busca do imperador"
          num3="3" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="A nuvem voadora do Kame"
          num4="4" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Oolong, o sequestrador de garotas"
          num5="5" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="O forte e malvado Yamcha vive no dese"
          num6="6" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Vigie as Esferas do Dragão"
        />
        </section>
        <section className="episodeButtons">
        <SectionButtons 
          num1="7" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="O rei Cutelo na montanha do fogo"
          num2="8" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="Uma transformação por causa da lua"
          num3="9" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="O truque especial do chefe Coelho"
          num4="10" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="As Esferas do Dragão são roubadas"
          num5="11" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="O Dragão é chamado"
          num6="12" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Um pedido feito ao Deus Dragão"
        />
        </section>
        <SectionLinks num="13" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="A transformação de Goku" />
      </section>
    </div>
  );
}
