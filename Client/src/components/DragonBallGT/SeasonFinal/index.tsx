import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonFinalGT() {
  return (
    <div className="my-8 flex flex-col border rounded p-5">
      <h1 className="text-center text-4xl font-bold">Saga dos Dragões Malignos</h1>
      <section className="flex flex-col items-center">
        <SectionButtons 
          num1="48" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Shenlong é Nosso Inimigo"
          num2="49" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="A Força do Poderoso Dragão"
          num3="50" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="O Guerreiro Elétrico Uh Shenlong"
          num4="51" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="O Ataque do Redemoinho"
          num5="52" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Pan Tome Cuidado Para Não Ser Possuída Por Chi Shenlong"
          num6="53" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="As Lágrimas de um Kame Hame Ha"
        />
        <SectionButtons 
          num1="54" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="O Guerreiro do Sol"
          num2="55" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="O Plano de Vegeta e Bulma"
          num3="56" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Os Irmãos do Fogo e Do Gelo"
          num4="57" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="O Dragão Mais Poderoso"
          num5="58" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Goku Supera Os Poderes do Super Saiyajin 4"
          num6="59" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Vegeta Se Transforma Num Macaco Gigante"
        />
        <section className="episodeButtons">
          <SectionLinks num="60" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Fusão, O Incrível Super Gogeta" />
          <SectionLinks num="61" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Goku Se Alimenta Da Esfera de Quatro Estrelas" />
          <SectionLinks num="62" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Aparece Um Novo Aliado" />
          <SectionLinks num="63" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="A Milagrosa Vitória, Goku Pede Ajuda a Galaxia" />
          <SectionLinks num="64" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Adeus Goku… Até Um Dia" />
        </section>
      </section>
    </div>
  );
}
