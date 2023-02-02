import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonTwoHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Conflito Universal</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="7" url1="1gQik47Ywt8jPOUVd635eRl65BZg3KwB8" name1={`Zamasu Revivido!? Começa a Saga do Conflito Universal!`}
          num2="8" url2="1g6_MpfrNXzQEKX2emgd6495Blue3YDyn" name2={`A Invasão dos Guerreiros mais Fortes! O Sexto Universo é Destruído!`}
          num3="9" url3="1gB98181hbyi37RNhujrXHShdtTzApUA8" name3={`A Ressurreição de Goku!! Clash Entre o Mais Forte e o Mais Forte!`}
          num4="10" url4="1gDvZaBSGpidzmToKA5Kr3N-lMnxofvqJ" name4={`Contra Ataque! Ataque Feroz! Goku e Vegeta!`}
          num5="11" url5="1gGpElNUnB3xS_spqEDFOc8bIdfWE8doE" name5={`A Batalha Decisiva No Universo 11`}
          num6="12" url6="1g45T576-OsfmbdhWcXpKeq83mJUoIXPn" name6={`Super Guerreiros Se Reúnem! Batalha Decisiva do Universo 7! `}
        />
        <SectionButtons 
          num1="13" url1="1g5NlkLwB86ADpSSFXslC2dj9pHLzRhV9" name1={`Super Hearts Junta-se à Luta! Uma Batalha Terrível!`}
          num2="14" url2="1gYhKe7ewh5h5sGQiIb9OllX9C_FiycOF" name2={`Goku Revela Seu Verdadeiro Poder Na Batalha Contra Hatsu`}
          num3="15" url3="1gO26ZKfzQerroQmqHwaBBcnZKPZBzPlp" name3={`Voe para longe Kamioren! O Incrível Instinto Superior!`}
          num4="16" url4="1gODikousyyxFrLsYlT8CHHlkYyQ6qO_W" name4={`Zamasu vs Universo 7! Um Final Ambicioso!`}
          num5="17" url5="1gQ_NtFggSkVcfABzWVMohCD46QQq4rAb" name5={`O Deus Divino Final! Hearts Nasce!`}
          num6="18" url6="1gU1I-mB_2jtpNIcLh7dMaD6u1lxikZKz" name6={`Batalha Super Decisiva! Gogeta vs. Hearts!`}
        />
        <SectionLinks num="19" url="1g7XEVJ1gbqFjAofFi-BKG8oGWH-l2C5h" name={`Conclusão Final! O Conflito Universal Termina!`} />
      </section>
    </div>
  );
}
