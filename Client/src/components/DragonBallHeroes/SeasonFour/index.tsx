import "../styles.css";
import SectionLinks from "../../SectionLinks";

export default function SeasonFourHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Prisão Planetária</h1>
      <section className="mt-8 flex flex-col items-center">
        <section className="episodeButtons">
          <SectionLinks
            num="30"
            url="1kWeWkoHUYZZV0cObhP6I9ptEyQZL5yg9"
            name={`O Renascimento Sombrio Do Dark King Fu!`}
          />
          <SectionLinks
            num="31"
            url="1kbKXTvfVnMaaothPRlUIaGQc1SMWBazm"
            name={`A Pior Quebra de Limite! Broly Reviveu!`}
          />
          <SectionLinks
            num="32"
            url="1kr2M3JvJxtEYwplIaice-LCfVgLzOBDW"
            name={`Fim da Criação do Universo: O Nascimento de Um Novo Mundo!`}
          />
        </section>
      </section>
    </div>
  );
}
