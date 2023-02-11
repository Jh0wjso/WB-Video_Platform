import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonFinalGT() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga dos Dragões Malignos</h1>
      <section className="flex flex-col items-center">
        <SectionButtons 
          num1="48" url1="16FKPrPruK0pTmyCTTXuGhHpv5ulH5zVN" name1="Shenlong é Nosso Inimigo"
          num2="49" url2="16TVxkt0Ulua79R-tf4UZAnUhLxcphEhe" name2="A Força do Poderoso Dragão"
          num3="50" url3="16NbKxtwLXTXjCVXEX3BV7cKpjEq69iQm" name3="O Guerreiro Elétrico Uh Shenlong"
          num4="51" url4="16J4rCmm-9rM23Ws6Z0aXIvrRPK7AaGOS" name4="O Ataque do Redemoinho"
          num5="52" url5="16JM-JxeVhh307ykSwv0ePa8PmS7DjkcA" name5="Pan Tome Cuidado Para Não Ser Possuída Por Chi Shenlong"
          num6="53" url6="16fegruYLsDzYgfDXiOU9y_4PUO_ZuFw4" name6="As Lágrimas de um Kame Hame Ha"
        />
        <SectionButtons 
          num1="54" url1="18-OOgRCXKpiAZtULBatrBKQ98327Fhap" name1="O Guerreiro do Sol"
          num2="55" url2="1820WKlhQ1p5lMc2h90tZK_UQy2vcvj8N" name2="O Plano de Vegeta e Bulma"
          num3="56" url3="17zyUfZDZggxXbCGVVRyvaD991rGdkV0O" name3="Os Irmãos do Fogo e Do Gelo"
          num4="57" url4="18-HTpRrW0kg6dkTmbpYXwpvcQMsxfsoh" name4="O Dragão Mais Poderoso"
          num5="58" url5="187eCQAE8yEZlbE_DRQREE24h0gtk0NEc" name5="Goku Supera Os Poderes do Super Saiyajin 4"
          num6="59" url6="189vqudS74hYBiyk8-HICaQRiTRXlHX4m" name6="Vegeta Se Transforma Num Macaco Gigante"
        />
        <section className="episodeButtons">
          <SectionLinks num="60" url="187JwDvbFJXRyoeGMuzHQCMOyEY5UiWlc" name="Fusão, O Incrível Super Gogeta" />
          <SectionLinks num="61" url="17wmtpjqCgwi7XHOyUH3FYHqeB9th4zyb" name="Goku Se Alimenta Da Esfera de Quatro Estrelas" />
          <SectionLinks num="62" url="17zyPg7a1lJxv3-DOaksM04VLTUzFnW4y" name="Aparece Um Novo Aliado" />
          <SectionLinks num="63" url="17iB9wXE1Pk5KkU87I1HJdCf4i3_NBzNz" name="A Milagrosa Vitória, Goku Pede Ajuda a Galaxia" />
          <SectionLinks num="64" url="17jS6gDWSgjYtMijoqmUhDQZoPUggiW9T" name="Adeus Goku… Até Um Dia" />
        </section>
      </section>
    </div>
  );
}
