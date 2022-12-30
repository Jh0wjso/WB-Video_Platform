import { Link } from "react-router-dom";
import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonTwo() {
  return (
    <div className="flex flex-col border rounded my-5 p-5">
      <h1 className="text-center text-4xl font-bold">Saga do Tenkaichi Budokai</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="14" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="O rival de Goku"
          num2="15" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="A misteriosa garota Lanch"
          num3="16" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Caça às pedras"
          num4="17" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Os entregadores de leite"
          num5="18" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Treinamento ao Estilo de Mestre Kame"
          num6="19" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="O Grande torneio de artes marciais"
        />
        <SectionButtons 
          num1="20" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="O rival de Goku"
          num2="21" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="A misteriosa garota Lanch"
          num3="22" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Caça às pedras"
          num4="23" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Os entregadores de leite"
          num5="24" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Treinamento ao Estilo de Mestre Kame"
          num6="25" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="O Grande torneio de artes marciais"
        />

        <section className="episodeButtons">
          <SectionLinks num="26" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="A força do Kame-Hame-Ha" />
          <SectionLinks num="27" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Goku em sérios apuros" />
          <SectionLinks num="28" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="O desaparecimento de Goku" />
        </section>
      </section>
    </div>
  );
}
