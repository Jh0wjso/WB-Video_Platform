import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonFiveHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Criação do Universo</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="33" url1="1leWmzCnjKAwzDbivYRtck-ATyh6Y44Ew"
          num2="34" url2="1ldc5ocB9zkMU3RqN4zQvSZkDrms1XvMQ"
          num3="35" url3="1l_ElThwrvdZuDWL99awjCS31M39VIPcx"
          num4="36" url4="1lXcD2fXcOzgbYvPCo28JQBI2az_QTigf"
          num5="37" url5="1lSrZJKHOiiyT7JqIChxoOm_jUnOH1dQ-"
          num6="38" url6="1lSLINDZNWhVNNK3tahAWXgEVz91DRhNd"
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
