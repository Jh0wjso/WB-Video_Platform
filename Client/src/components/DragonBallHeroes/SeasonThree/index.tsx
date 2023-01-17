import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonThreeHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Criação do Universo</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="20" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1={`Batalha Decisiva!`}
          num2="21" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2={`O inicio de uma nova batalha!`}
          num3="22" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3={`A ameaça da Terrível Arvore do Universo!`}
          num4="23" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4={`A Revanche dos Adversários Poderosos!`}
          num5="24" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5={`Uma Sobra Se Aproxima o Homem Misterioso, Dr.W!`}
          num6="25" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6={`Uma Batalha Decisiva no Inferno! Um Novo Janemba!`}
        />
        <section className="episodeButtons">
          <SectionLinks num="26" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name={`A Explosão do Punho do Dragão! O Poder Completo do SSJ4 Quebrando Limites!`} />
          <SectionLinks num="27" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name={`Terror Violento! O Retorno da Aura Maligna!`} />
          <SectionLinks num="28" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name={`Batalha Feroz no Espaço-Tempo! Vegetto vs Super Fu`} />
        </section>
        <h1 className="text-center text-4xl font-bold">Especial</h1>
        <section className="episodeButtons">
          <SectionLinks num="29" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name={`Avance Para os Heróis Dragon Ball do Campo de Batalha!`} />
        </section>
      </section>
    </div>
  );
}
