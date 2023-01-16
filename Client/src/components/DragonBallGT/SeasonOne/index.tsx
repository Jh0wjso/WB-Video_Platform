import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonOneGT() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Viagem Pelo Universo</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="1" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Surge Umas Misteriosas Esferas Do Dragão"
          num2="2" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="Pan Viaja Na Nave Espacial"
          num3="3" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Os Comerciantes Do Planeta Imega"
          num4="4" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Goku e os outros se tornam criminosos"
          num5="5" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="O Poderoso Rejick"
          num6="6" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="O Dentista Goku"
        />
        <SectionButtons 
          num1="7" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Trunks se Veste de Noiva"
          num2="8" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="O Bigode de Zunama"
          num3="9" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="O Planeta Perigoso"
          num4="10" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="A Dança de Bom-Pa-Ra"
          num5="11" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Pan é Transformada Em Boneca"
          num6="12" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="O Despertar de Ludo"
        />
        <SectionButtons 
          num1="13" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="O Misteriosos Cientista Chamado Mil"
          num2="14" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="A Destruição de Ludo"
          num3="15" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Pan Consegue Fugir"
          num4="16" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="O Planeta das Maquinas M2"
          num5="17" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="A Operação Para Resgatar Goku"
          num6="18" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="A Determinação de Goku"
        />
        <section className="episodeButtons">
          <SectionLinks num="19" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="O Poderoso Mutante Rild" />
          <SectionLinks num="20" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Surpresa! Goku é atacado por uma tempestade de metal" />
          <SectionLinks num="21" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="O Que é isso?? Goku Se Transforma Em Metal" />
          <SectionLinks num="22" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Baby o Ser Maligno" />
        </section>
      </section>
    </div>
  );
}
