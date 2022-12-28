import { Link } from "react-router-dom";
import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonOneBbz() {
  return (
    <div className="flex flex-col border rounded p-5">
      <h1 className="text-center text-4xl font-bold">Saga dos Sayajins</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="1" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Surge um mini Goku! Seu nome é Gohan"
          num2="2" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="Um guerreiro muito poderoso com antecedentes"
          num3="3" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="A combinação mais forte deste mundo"
          num4="4" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Piccolo usa sua melhor estratégia! Gohan é um garoto"
          num5="5" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Goku morre! Só existe uma chance"
          num6="6" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Enma Samá também se surpreende! Terá que lutar"
        />

        <SectionButtons 
          num1="7" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Terá que sobreviver aos dinossauros! O difícil"
          num2="8" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="Uma transformação por causa da lua"
          num3="9" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Perdão Sr. Robô! Lágrimas que desaparecem no deserto"
          num4="10" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Não chore Gohan! É a primeira batalha"
          num5="11" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Os guerreiros mais fortes do universo"
          num6="12" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Um pequeno descanso! Goku cai do caminho da serpente"
        />

        <SectionButtons 
          num1="13" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Não toque nisso! A fruta secreta de Enma Sama"
          num2="14" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="Uma doce tentação! A hospitalidade da princesa serpente"
          num3="15" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Fugindo de Piccolo! Gohan enfrenta uma tempestade"
          num4="16" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Corre Gohan! Chi-Chi o espera na Montanha Paozu"
          num5="17" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Uma cidade sem futuro! Um longo caminho até a vitória"
          num6="18" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="O final do caminho da serpente! É o Sr. Kaio"
        />

        <SectionButtons 
          num1="19" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Domine a força da gravidade! Agarre Bubb"
          num2="20" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="A lenda revive! Os antepassados de Goku"
          num3="21" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Sai daí Shen-Long! Os Sayajins chegaram à terra"
          num4="22" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="Impossível! Saibaimans nascidos da terra"
          num5="23" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Yamcha morre! Os temíveis Saibaimans"
          num6="24" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Adeus Ten-Shin! A arte do sacrifício de Chaos"
        />

        <SectionButtons 
          num1="25" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="O sacrifício de Tenshinhan! O último Kikiuhouda"
          num2="26" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="Só restam três horas de vida na terra! Apresse-se Goku"
          num3="27" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="Explode a fúria de Gohan"
          num4="28" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="O ataque dos Sayajins! Kami-Sama e Piccolo morrem"
          num5="29" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="Papai você é incrível! Uma técnica mortal chamada Kaioken"
          num6="30" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Uma luta além dos limites! Goku contra Vegeta"
        />

        <section className="episodeButtons">
          <SectionLinks num="31" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Arrisque a vida Goku! A última opção" />
          <SectionLinks num="32" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Seu poder de luta aumentou dez vezes" />
          <SectionLinks num="33" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Não morra pai!! O poder oculto de Gohan" />
          <SectionLinks num="34" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Pegue-o Kuririn! Uma Genki-Dama cheia de esperança" />
          <SectionLinks num="35" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name="Ocorre um milagre! A transformação de Gohan" />
        </section>
      </section>
    </div>
  );
}
