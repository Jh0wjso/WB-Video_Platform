import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonOneGT() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Viagem Pelo Universo</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="1" url1="10zySHfByT8tDVDkBuMqDypEJ8vmS63PE" name1="Surge Umas Misteriosas Esferas Do Dragão"
          num2="2" url2="10yIGnvEDQw5OIRomydqr3uXG_whMwK_j" name2="Pan Viaja Na Nave Espacial"
          num3="3" url3="118J17bNwpEMXa4X2oY9cfSe5Vhu3Sq-8" name3="Os Comerciantes Do Planeta Imega"
          num4="4" url4="11-eYE2yaKTexGapidHA4ISG5EogsoemT" name4="Goku e os outros se tornam criminosos"
          num5="5" url5="11GdI-Ukt9sxpnv1rwr1xey6jABW39pbH" name5="O Poderoso Rejick"
          num6="6" url6="11Eeffc6MAtIyIicP1yZqCtAz2JRDsKj1" name6="O Dentista Goku"
        />
        <SectionButtons 
          num1="7" url1="11oyRmPBzqKu99RFJqE94zuQJu5TnJqEK" name1="Trunks se Veste de Noiva"
          num2="8" url2="11r6Fes6vK_N6Q4riW9yURFvc3ASIrxWv" name2="O Bigode de Zunama"
          num3="9" url3="11qVEc1zwYQNSo_bbcaceQDRkmNmTPu7M" name3="O Planeta Perigoso"
          num4="10" url4="11nRuHu9Y_sNaobDhzpwYlTChUQtCZHoh" name4="A Dança de Bom-Pa-Ra"
          num5="11" url5="11gm9iwfw5bWe8vboimF3HkXe2EnMA6qS" name5="Pan é Transformada Em Boneca"
          num6="12" url6="11n_iIwsL8kVLNWP34ErXh0zVUIFiuxET" name6="O Despertar de Ludo"
        />
        <SectionButtons 
          num1="13" url1="12rCb_RFyRzIw--_TtqfvmPGhw6ddG8xB" name1="O Misteriosos Cientista Chamado Mil"
          num2="14" url2="12hbP4h3A258Nugb5tlSW6BXrSjc6IPwf" name2="A Destruição de Ludo"
          num3="15" url3="12iOVQKPs87PnJ4A4qPAa8u2oMUwlBtpN" name3="Pan Consegue Fugir"
          num4="16" url4="12VJ1LWgCQmgrfxNSWWEF9TgLyxX4ikx4" name4="O Planeta das Maquinas M2"
          num5="17" url5="12_Klsrt_sTdsUnd9BpEJ0HQE7fC9XDef" name5="A Operação Para Resgatar Goku"
          num6="18" url6="12p5yaBrS94QsNTfhLFJoEitp2NNd7ML5" name6="A Determinação de Goku"
        />
        <section className="episodeButtons">
          <SectionLinks num="19" url="12sGibZSNG28TC59V9jBdfYdVCLZsx70K" name="O Poderoso Mutante Rild" />
          <SectionLinks num="20" url="139VZpgIo2KVEyGD_Dlq9puxc-7_Jzjav" name="Surpresa! Goku é atacado por uma tempestade de metal" />
          <SectionLinks num="21" url="12w7Nek3Zz4eDZMT6wdqyvwcPzelm51mI" name="O Que é isso?? Goku Se Transforma Em Metal" />
          <SectionLinks num="22" url="138USvkZJ2x8GZnHX7PLuDh5wOXktIunW" name="Baby o Ser Maligno" />
        </section>
      </section>
    </div>
  );
}
