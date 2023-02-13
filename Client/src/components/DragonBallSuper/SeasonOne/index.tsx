import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonOneSuper() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Deus da Destruição Bills</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="1" url1="1AfK-agZj5AmSdT7-_luJhNN6j46vn6yj" name1="O Prêmio da Paz! Quem vai ficar com os 100 Milhões de Zenis"
          num2="2" url2="1AixDc3jH1mM4CJJ1FvKhhHBUuQkGqKQG" name2="As Férias Prometidas! O Vegeta Viaja com a Família"
          num3="3" url3="1Aj-qAkMZPkwJDNfJFcmtBTEOUYfa1dwO" name3="Cadê o Resto do Meu Sonho?! Em Busca do Deus Super Saiyajin"
          num4="4" url4="1AzRiHMwzr8baOpOkKvWu47BMvBJnvqG9" name4="Em Busca das Esferas do Dragão! O Grande Plano de Pilaf"
          num5="5" url5="1AIxGio6_UzVUkSbyI7Gy5u1eQdZmsWd0" name5="Grande Luta no Planeta do Senhor Kaioh! Goku vs. Bills"
          num6="6" url6="1AP7HKYNlXWpxWfQiDcUIg7YPb3obEnoN" name6="Não Irritem o Deus da Destruição! Uma Festa de Aniversário Animada"
        />
        <SectionButtons 
          num1="7" url1="1BI7iPLga32D7hs0uUg6j3YTO-FiwhfVZ" name1="Como Ousa Bater na Minha Bulma? Vegeta Fica Furioso de Repente"
          num2="8" url2="1BL9YlBBWZmShBEuWkbyzLu2Q0rJ292wG" name2="Goku Aparece! Bills Nos Dá Uma Última Chance"
          num3="9" url3="1B5W2Ye2oL_qlh97D0pBWWaEeKXg5OgW6" name3="Desculpe a Demora, Senhor Bills! Finalmente Nasce o Deus"
          num4="10" url4="1BBovwQiXC890WCpagLe2JGIw1O3EFn_f" name4="Mostre a Ele, Goku! O Poder do Deus Super Saiyajin"
          num5="11" url5="1BDTDTkvUmOZLu3xPxApaqlOwT08et9nG" name5="Vamos Continuar, Senhor Bills! A Batalha dos Deuses"
          num6="12" url6="1BQv88bwUbtvT1bAbcbP3Z5qqfy7gylVh" name6="O Universo Vai Ser Destruído?! O Deus da Destruição vs. O Deus Super"
        />
        <section className="episodeButtons">
          <SectionLinks num="13" url="1BfZ6utr0UYu2JK-GIhvAa7ow-YfrEi-N" name="Goku! Ultrapasse os Limites do Deus Super Saiyajin" />
          <SectionLinks num="14" url="1BhCQweQ9eLU6XROxr4gh34u36ZQzdXqC" name="Este é Todo o Poder Que Possuo! O Desfecho da Batalha dos Deuses" />
        </section>
      </section>
    </div>
  );
}
