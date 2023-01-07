import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonTwoGT() {
  return (
    <div className="flex flex-col border rounded p-5 mt-8 text-center">
      <h1 className="text-center text-4xl font-bold">Saga do Baby</h1>
      <section className="flex flex-col items-center">
        <SectionButtons 
          num1="23" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Um Jovem Misterioso"
          num2="24" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="O Contra-Ataque de Baby"
          num3="25" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Droga, Baby Esta na Terra"
          num4="26" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Gohan & Goten, Uma Luta Entre Irmãos"
          num5="27" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Vegeta é Possuído"
          num6="28" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Goku Volta, Todos São Inimigos"
        />
        <SectionButtons 
          num1="29" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="O Poder do Super Saiyajin 3 é Derrotado"
          num2="30" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="Goku Desaparece"
          num3="31" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="A Destruição de Goku"
          num4="32" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Volte Goku, Uub O Furioso Lutador"
          num5="33" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="O raio mortal de Oob"
          num6="34" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Goku Fracassa Em Sua Transformação"
        />
        <SectionButtons 
          num1="35" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="O Poder Máximo, Goku Se Transforma no Super Sayajin 4 "
          num2="36" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="Baby se Transforma em um Macaco Gigante"
          num3="37" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Baby Possui o Dobro de Ki de Goku"
          num4="38" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="O Renascimento do Super Sayajin 4"
          num5="39" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="A morte de Baby"
          num6="40" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="A Terra Explode! A Importante Decisão de Piccolo"
        />

        <SectionLinks num="41" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Quem Será o Novo Sucessor de MR. Satan" />
      </section>
    </div>
  );
}
