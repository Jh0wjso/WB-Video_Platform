import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonSixHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">
        Saga da Missão Ultra Deus
      </h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons
          num1="41" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1={`Plano Em Ação! Os Guerreiros Mais Poderosos de Todo o Espaço-Tempo se Reúnem!`}      
          num2="42" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2={`O Ataque dos Guerreiros de Preto! A Batalha Feroz no Super Torneio Espaço-Tempo!`}
          num3="43" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3={`Uma Batalha Feroz que Transcende o Tempo! A Ameaça dos Guerreiros de Preto!`}
          num4="44" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4={`Goku vs O Guerreiro de Preto! Lutando pelos seus Próprios Destinos!`}
          num5="45" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5={`A Batalha Decisiva no Reino dos Deuses! O Poder do Tempo se Aproxima!`}
          num6="46" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6={`O Terrível Rei das Trevas Ataca! A terrível Batalha Começa!`}
        /> 
      </section>
    </div>
  );
}
