import "../styles.css";
import SectionLinks from "../../SectionLinks";
import SectionButtons from "../../SectionButtons";
  
export default function SeasonFiveBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga dos Androides</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          name1="Este é o planeta Terra papai" num1="118" url1="1UwGi2U8ME8VTMw9gOBV7Wfs_qRlE-isJ"
          name2="Eu me encarregarei de vencer Freeza" num2="119" url2="1cK3DrzTO4o8yfCpkcTqNqP7XAuEVQcF6"
          name3="O fim de Freeza" num3="120" url3="1yvvgXkhc0WazH7pZ9_T1e4s9vo1z0gJx"
          name4="Goku voltou" num4="121" url4="11ud-hawDkzMA_qbQ8ejb23IehTPxLacE"
          name5="A identidade do jovem misterioso" num5="122" url5="1cyP_cx9d-4vvXwQeOZlD0_Ma4VBZ2DD1"
          name6="A técnica especial de Goku" num6="123" url6="1nc5qi2iM5BXDDNRiuSBYQqWFkhrnYV9K"
        />
        <SectionButtons 
          name1="Vou superar Goku" num1="124" url1="1XZSylJ2t5RKEWOyZ620iAp14TqM4OE1i"
          name2="Uma prova muito difícil para Goku" num2="125" url2="1mUbuMUBSZ951Wmq7plIr12MXexzIY8cB"
          name3="Quem são os androides" num3="126" url3="1sSqvTJaR2Yfy9szvYZCP7nwpodlYMG71"
          name4="Os terríveis androides Nº 19 e 20" num4="127" url4="129kvGizslwY13BlqGrzCXnHJFmr3BJxB"
          name5="Goku tem dois problemas" num5="128" url5="1_qOfqzGrXLcCmBeLS-gwDa8VrxqEawhv"
          name6="Vegeta se transforma num super Saiyajin" num6="129" url6="1X23HTtK19CzYpdpFiciJTwxyDqM6s43I"
        />
        <SectionButtons 
          name1="O segredo do Dr. Maki" num1="130" url1="1O5DtWu04rHXhM7TyPV8trNGUh20C8lzf"
          name2="A realidade é muito pior do que o futuro" num2="131" url2="1we0KnovQBRaq2au0xugTtHxXglTrdOr0"
          name3="É preciso encontrar o laboratório do Dr. Maki" num3="132" url3="1LPLd_i3o8vR_xmgikMjXUp4pm3bExXW4"
          name4="Os androides nº 17 e 18 despertam" num4="133" url4="1Qq1FfO7nxDHUgnGfbhNwvDQPKEaj3Jw9"
          name5="O exército encarregado de matar Goku" num5="134" url5="18zKQoxjDREvYZGobfPEmv6wkYlXk8JBJ"
          name6="As habilidade do androide nº 18" num6="135" url6="1e7OHD6ApRxMk3cy1NC94Trh6Ik0Zrw3t"
        />
        <section className="episodeButtons">
          <SectionLinks name={"Será este o fim dos guerreiros Z"} url={"1KvZqUazWqkE6J_R3B_o2r58TCk7nZu9D"} num={"136"} />
          <SectionLinks name={"A decisão de Piccolo"} url={"18F_TRk1dAEIjovaplduEP1p4CHD2E4u-"} num={"137"}  />
          <SectionLinks name={"Os androides destruidores"} url={"12YwOmJ1S3O9VFyOS89EwO4l8OZlgZeg5"} num={"138"}  />
          <SectionLinks name={"Bulma descobre um grande mistério"} url={"1GcQRB9FDV0UszGgbkIJa9Zrkkn8usI9w"} num={"139"}  />
        </section>
      </section>
    </div>
  );
}