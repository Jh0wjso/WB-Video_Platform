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
            url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            name={`O Renascimento Sombrio Do Dark King Fu!`}
          />
          <SectionLinks
            num="31"
            url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            name={`A Pior Quebra de Limite! Broly Reviveu!`}
          />
          <SectionLinks
            num="32"
            url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            name={`Fim da Criação do Universo: O Nascimento de Um Novo Mundo!`}
          />
        </section>
      </section>
    </div>
  );
}
