import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonTwoHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Conflito Universal</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="7" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1={`Zamasu Revivido!? Começa a Saga do Conflito Universal!`}
          num2="8" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2={`A Invasão dos Guerreiros mais Fortes! O Sexto Universo é Destruído!`}
          num3="9" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3={`A Ressurreição de Goku!! Clash Entre o Mais Forte e o Mais Forte!`}
          num4="10" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4={`Contra Ataque! Ataque Feroz! Goku e Vegeta!`}
          num5="11" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5={`A Batalha Decisiva No Universo 11`}
          num6="12" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6={`Super Guerreiros Se Reúnem! Batalha Decisiva do Universo 7! `}
        />
        <SectionButtons 
          num1="13" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1={`Super Hearts Junta-se à Luta! Uma Batalha Terrível!`}
          num2="14" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2={`Goku Revela Seu Verdadeiro Poder Na Batalha Contra Hatsu`}
          num3="15" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3={`Voe para longe Kamioren! O Incrível Instinto Superior!`}
          num4="16" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4={`Zamasu vs Universo 7! Um Final Ambicioso!`}
          num5="17" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5={`O Deus Divino Final! Hearts Nasce!`}
          num6="18" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6={`Batalha Super Decisiva! Gogeta vs. Hearts!`}
        />
        <SectionLinks num="19" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name={`Conclusão Final! O Conflito Universal Termina!`} />
      </section>
    </div>
  );
}
