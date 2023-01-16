import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonTwoSuper() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Freeza Dourado</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="15" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Realize Um Milagre, Grande Herói Mr. Satan! Um Desafio Vindo do Espaço"
          num2="16" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="Vegeta Se Torna um Aprendiz?! Convencendo Whis"
          num3="17" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="A Pan Nasceu! E Goku Vai Viajar Para Treinar"
          num4="18" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Eu Também Cheguei! Começa o Treinamento no Planeta de Bills"
          num5="19" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="O Desespero Volta! O Renascimento de Freeza, o Imperador do Mal"
          num6="20" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="O Aviso de Jaco! Freeza e Suas Tropas de Mil Homens Se Aproximam"
        />
        <SectionButtons 
          num1="21" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="O Início da Vingança! O Exército do Mal Ataca Gohan"
          num2="22" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="Troca de Corpos! Um Retorno Inesperado! O Seu Nome é Ginyu"
          num3="23" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="A Terra e Gohan Estão em Grande Perigo! Volte Depressa, Son Goku"
          num4="24" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Combate Mortal! Freeza Versus Son Goku! Este é o Resultado do Meu Treino"
          num5="25" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="É Tudo ou Nada! A Vingança do Freeza Dourado"
          num6="26" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Um Vislumbre de Esperança! É Hora de Revidar, Son Goku"
        />
        <section className="episodeButtons">
          <SectionLinks num="27" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="A Terra Explodiu?! O Kame Hame Ha Decisivo" />
        </section>
      </section>
    </div>
  );
}
