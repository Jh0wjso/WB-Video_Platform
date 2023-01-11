import { Link } from "react-router-dom";

import Vinte from "../../../images/MoviesImages/20.jpg";
import VinteDois from "../../../images/MoviesImages/22.jpg";

export default function MovieRowSuper() {
  return (
    <>
      <p className="font-bold text-5xl mt-6">Filmes da Série</p>
      <div className="cardsContainer">
        <div className="cardAnime">
          <img src={VinteDois} width={250} className="imageCard" />
          <p className="font-bold">Super Hero</p>
          <div className="btnContent">
            <Link
              to="/assistir/Super Hero/1n4byzVSVcTeWcbzC9soMx4XfrGKm1YuG"
              className="btnWatch"
            >
              Assistir
            </Link>
          </div>
        </div>
        <div className="cardAnime">
          <img src={Vinte} width={250} className="imageCard" />
          <p className="font-bold">Dragon Ball Super Broly</p>
          <div className="btnContent">
            <Link
              to="/assistir/Dragon Ball Super Broly/1kOJ6kXYB7YKRjqj7c1xJ15-rBNqgG8LS"
              className="btnWatch"
            >
              Assistir
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
