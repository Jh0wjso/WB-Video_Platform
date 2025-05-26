import { NewsTestData } from "../../data/News/Test/NewsTest.data";
import MyImage from "../Image/Image";
import "./styles.css";

export default function LastNews() {
  return (
    <section className="lastNewsContainer">
      <h1 className="tittleLastNews">Últimas Notícias</h1>
      <section className="newsContainer">
        {NewsTestData.map((item) => (
          <a
            target="_blank"
            href={item.urlLink}
            className="justify-between items-center m-5 w-[20%]"
          >
            <MyImage imageLink={item.imageLink} />
            <p className="newsTittles">
              {item.title}
            </p>
            <div className="newsInfo">
              <p>Posted {item.date}</p>
              <p>{item.category}</p>
            </div>
          </a>
        ))}
      </section>
    </section>
  );
}
