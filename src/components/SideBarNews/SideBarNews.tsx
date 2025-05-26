import { NewsTestData } from "../../data/News/Test/NewsTest.data";
import "../SideBar/styles.css";

export default function SidebarNews() {
  return (
    <aside className="sidebar">
      <span className="nameNews">Novidades</span>
      <div className="flex flex-col gap-8 items-center">
        {NewsTestData.map((item) => (
          <a target="_blank" href={item.urlLink} className="cardNew">
            <p className="newsTittle">{item.title}</p>
          </a>
        ))}
      </div>
    </aside>
  );
}
