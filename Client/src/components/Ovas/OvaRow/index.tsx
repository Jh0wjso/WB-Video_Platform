import { Link } from "react-router-dom";
import { OvasData } from "../../../data/Movies/Ovas.data";

export default function OvaRow() {
  return (
    <div className="cardsContainer">
      {OvasData.map((item) => (
        <Link
          className="cardAnime"
          to={`${item.path}`}
        >
          <img src={`${item.poster}`} width={250} className="coverImage" />
          <p className="textCard">{`${item.tittle}`}</p>
        </Link>
      ))}
    </div>
  );
}
