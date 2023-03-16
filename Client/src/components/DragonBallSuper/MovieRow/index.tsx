import { Link } from "react-router-dom";

import Vinte from "../../../images/MoviesImages/20.jpg";
import VinteDois from "../../../images/MoviesImages/22.jpg";

export default function MovieRowSuper() {
  return (
    <>
      <p className="font-bold text-5xl mt-6">Filmes da Série</p>
      <div className="cardsContainer">
        <Link to={"/assistir/Super Hero/1n4byzVSVcTeWcbzC9soMx4XfrGKm1YuG"} className="cardAnime">
          <img src={VinteDois} width={250} className="coverImage" />
          <p className="textCard">Super Hero</p>
        </Link>
        <Link to={"/assistir/Dragon Ball Super Broly/1kOJ6kXYB7YKRjqj7c1xJ15-rBNqgG8LS"} className="cardAnime">
          <img src={Vinte} width={250} className="coverImage" />
          <p className="textCard">Dragon Ball Super Broly</p>
        </Link>
      </div>
    </>
  );
}
