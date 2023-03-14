import { Link } from "react-router-dom";

import Dezessete from "../../../images/MoviesImages/17.jpg";
import Dezoito from "../../../images/MoviesImages/18.jpg";
import Dezenove from "../../../images/MoviesImages/19.jpg";
import Vinte from "../../../images/MoviesImages/20.jpg";

export default function MovieRowFive() {
  return (
    <div className="cardsContainer">
      <Link to={"/assistir/Em Busca Do Poder/1kAOoS0X9FAkxRk4GSsgpLebwP6iecvh_"} className="cardAnime">
        <img src={Dezessete} width={250} className="coverImage" />
        <p className="textCard">Em Busca Do Poder</p>
      </Link>
      <Link to={"/assistir/batalha dos Deuses/1k3__SaqihW9lFiBQeEFJ3rLFblp4sLbL"} className="cardAnime">
        <img src={Dezoito} width={250} className="coverImage" />
        <p className="textCard">Batalha dos Deuses</p>
      </Link>

      <Link to={"/assistir/O Renascimento de Freeza/1kMkntsimdLRlSsAUOa0_FL1jGi-Uvyf6"} className="cardAnime">
        <img src={Dezenove} width={250} className="coverImage" />
        <p className="textCard">O Renascimento de Freeza</p>
      </Link>
      <Link to={"/assistir/Dragon Ball Super Broly/1kOJ6kXYB7YKRjqj7c1xJ15-rBNqgG8LS"} className="cardAnime">
        <img src={Vinte} width={250} className="coverImage" />
        <p className="textCard">Dragon Ball Super Broly</p>
      </Link>
    </div>
  );
}
