import "../styles.css";
import SectionLinks from "../../SectionLinks";
import SectionButtons from "../../SectionButtons";
  
export default function SeasonFiveBbz() {
  return (
    <div className="flex flex-col border mt-5 rounded p-5">
      <h1 className="text-center text-4xl font-bold">Saga dos Androides</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          name1="Este é o planeta Terra papai" num1="118" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name2="Eu me encarregarei de vencer Freeza" num2="119" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name3="O fim de Freeza" num3="120" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name4="Goku voltou" num4="121" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name5="A identidade do jovem misterioso" num5="122" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name6="A técnica especial de Goku" num6="123" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
        />
        <SectionButtons 
          name1="Vou superar Goku" num1="124" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name2="Uma prova muito difícil para Goku" num2="125" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name3="Quem são os androides" num3="126" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name4="Os terríveis androides Nº 19 e 20" num4="127" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name5="Goku tem dois problemas" num5="128" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name6="Vegeta se transforma num super Saiyajin" num6="129" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
        />
        <SectionButtons 
          name1="O segredo do Dr. Maki" num1="130" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name2="A realidade é muito pior do que o futuro" num2="131" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name3="É preciso encontrar o laboratório do Dr. Maki" num3="132" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name4="Os androides nº 17 e 18 despertam" num4="133" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name5="O exército encarregado de matar Goku" num5="134" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name6="As habilidade do androide nº 18" num6="135" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
        />
        <section className="episodeButtons">
          <SectionLinks name={"Será este o fim dos guerreiros Z"} url={"1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"} num={"136"} />
          <SectionLinks name={"A decisão de Piccolo"} url={"1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"} num={"137"}  />
          <SectionLinks name={"Os androides destruidores"} url={"1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"} num={"138"}  />
          <SectionLinks name={"Bulma descobre um grande mistério"} url={"1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"} num={"139"}  />
        </section>
      </section>
    </div>
  );
}
