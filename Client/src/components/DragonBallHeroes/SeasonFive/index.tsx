import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonFiveHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Criação do Universo</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="33" url1="1leWmzCnjKAwzDbivYRtck-ATyh6Y44Ew" name1={`Nova Guerra Espaço-Tempo! A Batalha Feroz Final Começa!`}
          num2="34" url2="1ldc5ocB9zkMU3RqN4zQvSZkDrms1XvMQ" name2={`O Guerreiro de Preto Aparece! Uma Nova Aventura Começa!`}
          num3="35" url3="1l_ElThwrvdZuDWL99awjCS31M39VIPcx" name3={`O Orgulho Da Raça Guerreira! Vegeta, Despertando!!`}
          num4="36" url4="1lXcD2fXcOzgbYvPCo28JQBI2az_QTigf" name4={`Super Saiyan Rosé Vs. Ultra Instinct! Um Grande Duelo Que Abala O Planeta!`}
          num5="37" url5="1lSrZJKHOiiyT7JqIChxoOm_jUnOH1dQ-" name5={`Guerreiro De Preto Vs. Goku Preto! O Enredo Sombrio Se Torna Claro!`}
          num6="38" url6="1lSLINDZNWhVNNK3tahAWXgEVz91DRhNd" name6={`A Batalha Final No Universo Falso! Confronto De Azul E Escarlate`}
        />
        <section className="episodeButtons">
          <SectionLinks
            num="39"
            url="1lS5HvESEyzok_W-LXfyRj3laHZGbrMy-"
          />
          <SectionLinks
            num="40"
            url="1liykwjBh92PI4gRUCap9MbGjJw9Cw1AP"
          />
        </section>
      </section>
    </div>
  );
}
