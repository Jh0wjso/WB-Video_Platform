import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonTwoSuper() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Freeza Dourado</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="15" url1="1CxroNiaA1P9VbQOXYit26tgIK_wYLsak" name1="Realize Um Milagre, Grande Herói Mr. Satan! Um Desafio Vindo do Espaço"
          num2="16" url2="1CnQADcLsUeJTW-Bsvs4c7bR4CctSVOhk" name2="Vegeta Se Torna um Aprendiz?! Convencendo Whis"
          num3="17" url3="1D2L-gmZvNMaLjO7FrAovxRLvcDkS6nR5" name3="A Pan Nasceu! E Goku Vai Viajar Para Treinar"
          num4="18" url4="1D1DaNYeSkuimtg9tLFwyNW7y8-wjPEjS" name4="Eu Também Cheguei! Começa o Treinamento no Planeta de Bills"
          num5="19" url5="1D7W3QblFoJLGx50DTtxpa9sF0AUx-Obu" name5="O Desespero Volta! O Renascimento de Freeza, o Imperador do Mal"
          num6="20" url6="1DAJa6X9kqzctOaT6ecuA3fDZOnBANQbk" name6="O Aviso de Jaco! Freeza e Suas Tropas de Mil Homens Se Aproximam"
        />
        <SectionButtons 
          num1="21" url1="1Dbt71AYdAQcMx_VVZOIXXgDnWVdNaQ3m" name1="O Início da Vingança! O Exército do Mal Ataca Gohan"
          num2="22" url2="1DWqlY3vhWoAJi3Mss4dpU-eFSEumwp-Y" name2="Troca de Corpos! Um Retorno Inesperado! O Seu Nome é Ginyu"
          num3="23" url3="1Di-QsPeAmezPWqMABaCZRG8oL7-tZDML" name3="A Terra e Gohan Estão em Grande Perigo! Volte Depressa, Son Goku"
          num4="24" url4="1DduVAShAbpHX8ns19avOrLjUS9qZQHBe" name4="Combate Mortal! Freeza Versus Son Goku! Este é o Resultado do Meu Treino"
          num5="25" url5="1DKiok6AW4Ifj1LXNhR1ZYGBreaUY2nfl" name5="É Tudo ou Nada! A Vingança do Freeza Dourado"
          num6="26" url6="1DJILPGnZnwIOburDJewKoc6uyo5eOyLv" name6="Um Vislumbre de Esperança! É Hora de Revidar, Son Goku"
        />
        <section className="episodeButtons">
          <SectionLinks num="27" url="1DT4AlXhzKge0afj9LilTHlCgaOZhOVdT" name="A Terra Explodiu?! O Kame Hame Ha Decisivo" />
        </section>
      </section>
    </div>
  );
}
