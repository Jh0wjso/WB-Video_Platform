import { Link } from "react-router-dom";
import { MovieData } from "../../../data/Movies/Movies.data";

export default function MovieRowOne() {
  return (
    <div className="cardsContainer">
      {MovieData.map((item) => (
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
