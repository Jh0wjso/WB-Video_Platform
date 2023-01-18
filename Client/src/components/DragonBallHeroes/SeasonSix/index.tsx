import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonSixHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">
        Saga da Missão Ultra Deus
      </h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons
          num1="33"
          url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name1={`Nova Guerra Espaço-Tempo! A Batalha Feroz Final Começa!`}
          num2="34"
          url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name2={`O Guerreiro de Preto Aparece! Uma Nova Aventura Começa!`}
          num3="35"
          url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name3={`O Orgulho Da Raça Guerreira! Vegeta, Despertando!!`}
          num4="36"
          url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name4={`Super Saiyajin Rosé Vs. Ultra Instinct! Um Grande Duelo Que Abala O Planeta!`}
          num5="37"
          url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name5={`Guerreiro De Preto Vs. Goku Preto! O Enredo Sombrio Se Torna Claro!`}
          num6="38"
          url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          name6={`A Batalha Final No Universo Falso! Confronto De Azul E Escarlate`}
        /> 
      </section>
    </div>
  );
}
