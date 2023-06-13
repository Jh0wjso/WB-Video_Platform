import { HotTopicData } from "../../data/News/HotTopic.data";
import "./styles.css"

export default function HotTopicComponent() {
  return (
    <section className="hotTopicContainer">
      <h1 className="hotTopicTittle">Direto do Forno</h1>
      {HotTopicData.map((item) => (
        <div className="imageTittleContainer">
          <a
            href={item.newsLink}
            target="_blank"
            className="newsImage"
          >
            <img src={item.imageLink} className="rounded" />
          </a>
          <p className="newsText">{item.text}</p>
        </div>
      ))}
    </section>
  );
}
