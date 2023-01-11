import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonOneSuper() {
  return (
    <div className="flex flex-col border mt-8 rounded p-5">
      <h1 className="text-center text-4xl font-bold">Deus da Destruição Bills</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="1" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="O Prêmio da Paz! Quem vai ficar com os 100 Milhões de Zenis"
          num2="2" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="As Férias Prometidas! O Vegeta Viaja com a Família"
          num3="3" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Cadê o Resto do Meu Sonho?! Em Busca do Deus Super Saiyajin"
          num4="4" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Em Busca das Esferas do Dragão! O Grande Plano de Pilaf"
          num5="5" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Grande Luta no Planeta do Senhor Kaioh! Goku vs. Bills"
          num6="6" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Não Irritem o Deus da Destruição! Uma Festa de Aniversário Animada"
        />
        <SectionButtons 
          num1="7" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Como Ousa Bater na Minha Bulma? Vegeta Fica Furioso de Repente"
          num2="8" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="Goku Aparece! Bills Nos Dá Uma Última Chance"
          num3="9" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Desculpe a Demora, Senhor Bills! Finalmente Nasce o Deus"
          num4="10" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Mostre a Ele, Goku! O Poder do Deus Super Saiyajin"
          num5="11" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Vamos Continuar, Senhor Bills! A Batalha dos Deuses"
          num6="12" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="O Universo Vai Ser Destruído?! O Deus da Destruição vs. O Deus Super"
        />
        <section className="episodeButtons">
          <SectionLinks num="13" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Goku! Ultrapasse os Limites do Deus Super Saiyajin" />
          <SectionLinks num="14" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Este é Todo o Poder Que Possuo! O Desfecho da Batalha dos Deuses" />
        </section>
      </section>
    </div>
  );
}
