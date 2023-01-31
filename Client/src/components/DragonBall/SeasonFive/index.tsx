import "../styles.css";
import SectionLinks from "../../SectionLinks";
import SectionButtons from "../../SectionButtons";

export default function SeasonFive() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga de Piccolo Daimaoh e Piccolo Jr.</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="102" url1="1aTOfesePLij1Oe1WC2WnmLbVinsFK5OZ" name1={`A morte de Kuririn foi um complô`}
          num2="103" url2="1aeQybhOihciHpRbIkYmXYnUBdSF67pXd" name2={`O temido Piccolo Daimaoh`}
          num3="104" url3="1aYSPS4Ae7T3blboMs_8dxFzfYPw39VRU" name3={`A volta de Goku`}
          num4="105" url4="1aYPCnSk3MTBgBkVzKhM1_5LPUiLp7IK9" name4={`O grande Yajirobe`}
          num5="106" url5="1aTKigDpF_pBSKoVvmRbWRseuPxfp5Dht" name5={`O malvado Tamborin se aproxima`}
          num6="107" url6="1aSCkNg664o1iHx7Gr6Bu5vDIJ0KbuSPp" name6={`Goku fica muto bravo`}
        />

        {
          /*
          
          https://drive.google.com/file/d//view?usp=sharing, 
          https://drive.google.com/file/d//view?usp=sharing, 
          https://drive.google.com/file/d//view?usp=sharing, 
          https://drive.google.com/file/d//view?usp=sharing, 
          https://drive.google.com/file/d//view?usp=sharing, 
          https://drive.google.com/file/d//view?usp=sharing

          */
        }

        <SectionButtons 
          num1="108" url1="" name1={`A aparição de Piccolo Daimaoh`}
          num2="109" url2="" name2={`Goku enfrenta Piccolo Daimaoh`}
          num3="110" url3="" name3={`Vai que é tua Goku`}
          num4="111" url4="" name4={`O último Mafuba do Mestre K`}
          num5="112" url5="" name5={`Será que Piccolo Daimaoh vai recuperar sua juventude`}
          num6="113" url6="" name6={`Ataque ao castelo real`}
        />

        <SectionButtons 
          num1="114" url1="" name1={`A esperança de Goku`}
          num2="115" url2="" name2={`Em busca da misteriosa Água dos Deuses`}
          num3="116" url3="" name3={`Mestre Kame está vivo`}
          num4="117" url4="" name4={`Goku volta a si`}
          num5="118" url5="" name5={`A decisão de Tenshinhan`}
          num6="119" url6="" name6={`O famoso golpe Mafuba`}
        />

        <SectionButtons 
          num1="120" url1="" name1={`Goku fica irado`}
          num2="121" url2="" name2={`O momento crucial de Goku`}
          num3="122" url3="" name3={`O último esforço`}
          num4="123" url4="" name4={`O segredo do Bastão Mágico`}
          num5="124" url5="" name5={`Goku chega à Plataforma Celeste`}
          num6="125" url6="" name6={`A aparição de Kami-Sama`}
        />

        <SectionButtons 
          num1="126" url1="" name1={`ShenLong volta a viver`}
          num2="127" url2="" name2={`Mais rápido que um relâmpago`}
          num3="128" url3="" name3={`Tranquilo como o céu`}
          num4="129" url4="" name4={`Goku faz uma viagem no tempo`}
          num5="130" url5="" name5={`O adversário de Goku é Goku`}
          num6="131" url6="" name6={`Cada um segue um caminho diferente`}
        />

        <SectionButtons 
          num1="132" url1="" name1={`Mais quente que a lava`}
          num2="133" url2="" name2={`Um reencontro depois da tormenta`}
          num3="134" url3="" name3={`O Torneio de Artes Marciais já começou`}
          num4="135" url4="" name4={`Os oito lutadores`}
          num5="136" url5="" name5={`O contra-ataque do assassino Tao Pai Pai`}
          num6="137" url6="" name6={`A promessa de Goku`}
        />

        <SectionButtons 
          num1="138" url1="" name1={`O misterioso homem chamado Sheng`}
          num2="139" url2="" name2={`Mais uma luta violenta: Goku contra Tenshinhan`}
          num3="140" url3="" name3={`O verdadeiro poder`}
          num4="141" url4="" name4={`Quatro Tenshinhans`}
          num5="142" url5="" name5={`Quem será o mais forte? Kami-Sama enfrenta Piccolo Daimaoh`}
          num6="143" url6="" name6={`O destino do mundo corre perigo`}
        />

        <SectionButtons 
          num1="144" url1="" name1={`O super Kame-Hame-Ha`}
          num2="145" url2="" name2={`O gigante Piccolo Daimaoh`}
          num3="146" url3="" name3={`O truque de Goku`}
          num4="147" url4="" name4={`Tudo está perdido`}
          num5="148" url5="" name5={`O homem mais forte do mundo`}
          num6="149" url6="" name6={`O vestido de noiva cercado de chamas`}
        />

        <section className="episodeButtons">
          <SectionLinks num="150" url="" name={`A ave engole-fogo`} />
          <SectionLinks num="151" url="" name={`Chi-Chi treina muito para ser uma boa esposa`} />
          <SectionLinks num="152" url="" name={`Depressa Goku! O mistério da Montanha dos Cinco Elem`} />
          <SectionLinks num="153" url="" name={`A montanha Fry-Pan está em chamas`} />
        </section>
      </section>
    </div>
  );
}
