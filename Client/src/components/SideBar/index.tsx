import { SideBarData } from "../../data/Sidebar/Sidebar.data";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <span className="nameNews">Novidades</span>
      <div className="flex flex-col gap-8 items-center">
        {SideBarData.map((item) => (
          <Link to={`assistir/${item.name}/${item.url}`} className="cardNew">
            <p className="newsTittle">{item.name}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
