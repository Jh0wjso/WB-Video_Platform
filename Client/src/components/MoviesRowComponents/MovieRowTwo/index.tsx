import { Link } from "react-router-dom";

import Cinco from "../../../images/MoviesImages/5.jpg";
import Seis from "../../../images/MoviesImages/6.jpg";
import Sete from "../../../images/MoviesImages/7.jpg";
import Oito from "../../../images/MoviesImages/8.jpg";

export default function MovieRowTwo() {
  return (
    <div className="cardsContainer">
      <Link to={"/assistir/O Homem Mais Forte do Mundo/1TG-0p34ILl5OmxRcMJ-tscz0keqxYT6N"} className="cardAnime">
        <img src={Cinco} width={250} className="coverImage" />
        <p className="textCard">O Homem Mais Forte do Mundo</p>
      </Link>
      <Link to={"/assistir/A Arvore do Poder/1y-GYI3pinbls3CraedGWneolO-IFoioE"} className="cardAnime">
        <img src={Seis} width={250} className="coverImage" />
        <p className="textCard">A Árvore do Poder</p>
      </Link>

      <Link to={"/assistir/Goku o Super Saiyajin/1TiAM1jZDNScj9Q0MmzWe3XDIzlldQdfX"} className="cardAnime">
        <img src={Sete} width={250} className="coverImage" />
        <p className="textCard">Goku o Super Saiyajin</p>
      </Link>
      <Link to={"/assistir/Uma vingança para Freeza/1TqoPudcj99YoVkiR6fZOU4Odqu3Pijqu"} className="cardAnime">
        <img src={Oito} width={250} className="coverImage" />
        <p className="textCard">Uma vingança para Freeza</p>
      </Link>
    </div>
  );
}
