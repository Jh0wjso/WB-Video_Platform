import { Link } from "react-router-dom";
import { MovieClassicData } from "../../../data/Movies/MovieClassic.data";

export default function MovieRowClassic() {
  return (
    <>
      <p className="font-bold text-5xl mt-6">Filmes da Série</p>
      <div className="cardsContainer">
        {
          MovieClassicData.map((item) => (
            <Link to={`${item.path}`} className="cardAnime">
          <img src={`${item.poster}`} width={250} className="coverImage" />
          <p className="textCard">{item.tittle}</p>
        </Link>
          ))
        }
      </div>
    </>
  );
}
