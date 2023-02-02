import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonThreeHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Criação do Universo</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="20" url1="1gxXbvPiiBoQcQgb1dD7z1fEZ7LP6cqUJ" name1={`Batalha Decisiva!`}
          num2="21" url2="1h36f6ZQfa3agqL8P3MPCPv_4IFliQZ9k" name2={`O inicio de uma nova batalha!`}
          num3="22" url3="1h3VwOWKz31AAb2aiw3C_tvhZkd1rn0sT" name3={`A ameaça da Terrível Arvore do Universo!`}
          num4="23" url4="1gtqWFnWUBtXf0bLgCBMBg86CGVCppU5C" name4={`A Revanche dos Adversários Poderosos!`}
          num5="24" url5="1hEcwF-ohjG3mJXdYFAYXjhu2ackLtDR5" name5={`Uma Sobra Se Aproxima o Homem Misterioso, Dr.W!`}
          num6="25" url6="1hExOBjJBb7fynMFl3rT0klF1qnzvydLC" name6={`Uma Batalha Decisiva no Inferno! Um Novo Janemba!`}
        />
        <section className="episodeButtons">
          <SectionLinks num="26" url="1h3f7C3QSsjqvkSn9P04N45SsMTTXRbSc" name={`A Explosão do Punho do Dragão! O Poder Completo do SSJ4 Quebrando Limites!`} />
          <SectionLinks num="27" url="1h64LuKmAABh9HkoCfpIJ1F1seHdTlxt1" name={`Terror Violento! O Retorno da Aura Maligna!`} />
          <SectionLinks num="28" url="1h6nvucxFUOg5gPWHi-9TIPlomv-KKbrM" name={`Batalha Feroz no Espaço-Tempo! Vegetto vs Super Fu`} />
        </section>
        <h1 className="text-center text-4xl font-bold">Especial</h1>
        <section className="episodeButtons">
          <SectionLinks num="29" url="1hCeQvA_UfwQVIYPitrdAQG-ZgA9DpJpi" name={`Avance Para os Heróis Dragon Ball do Campo de Batalha!`} />
        </section>
      </section>
    </div>
  );
}
