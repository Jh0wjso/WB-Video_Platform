import { Link } from "react-router-dom";

import Dezessete from "../../../images/MoviesImages/17.jpg";
import Dezoito from "../../../images/MoviesImages/18.jpg";
import Dezenove from "../../../images/MoviesImages/19.jpg";
import Vinte from "../../../images/MoviesImages/20.jpg";

export default function MovieRowFive() {
  return (
    <div className="cardsContainer">
      <div className="cardAnime">
        <img src={Dezessete} width={250} className="imageCard" />
        <p className="font-bold">Em Busca Do Poder</p>
        <div className="btnContent">
          <Link
            to="/assistir/Em Busca Do Poder/1kAOoS0X9FAkxRk4GSsgpLebwP6iecvh_"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime">
        <img src={Dezoito} width={250} className="imageCard" />
        <p className="font-bold">Batalha dos Deuses</p>
        <div className="btnContent">
          <Link
            to="/assistir/batalha dos Deuses/1k3__SaqihW9lFiBQeEFJ3rLFblp4sLbL"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>

      <div className="cardAnime">
        <img src={Dezenove} width={250} className="imageCard" />
        <p className="font-bold">O Renascimento de Freeza</p>
        <div className="btnContent">
          <Link
            to="/assistir/O Renascimento de Freeza/1kMkntsimdLRlSsAUOa0_FL1jGi-Uvyf6"
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
  );
}
