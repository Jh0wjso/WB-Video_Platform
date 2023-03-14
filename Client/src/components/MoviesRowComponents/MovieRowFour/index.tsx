import { Link } from "react-router-dom";

import Treze from "../../../images/MoviesImages/13.jpg";
import Quatorze from "../../../images/MoviesImages/14.jpg";
import Quinze from "../../../images/MoviesImages/15.jpg";
import Dezesseis from "../../../images/MoviesImages/16.jpg";

export default function MovieRowFour() {
  return (
    <div className="cardsContainer">
      <Link to={"/assistir/O Retorno de Broly/1gleAXntyC7pK-lxBbh6SXpWaXvQsRaj"} className="cardAnime">
        <img src={Treze} width={250} className="coverImage" />
        <p className="textCard">O Retorno de Broly</p>
      </Link>
      <Link to={"/assistir/Renascimento Da Fusão/1glo0fH3a3M5JMZBCmbPbspzFucMYjCdF"} className="cardAnime">
        <img src={Quatorze} width={250} className="coverImage" />
        <p className="textCard">Renascimento Da Fusão</p>
      </Link>

      <Link to={"/assistir/Combate Final Bio-Broly/1gjHJU5loy6iqNRN6SqHzsTuNGZ8yxafy"} className="cardAnime">
        <img src={Quinze} width={250} className="coverImage" />
        <p className="textCard">Combate Final Bio-Broly</p>
      </Link>
      <Link to={"/assistir/O Ataque do Dragão/1gr5LNLLjpzkA4zPnv4bA984k-nIZDtJu"} className="cardAnime">
        <img src={Dezesseis} width={250} className="coverImage" />
        <p className="textCard">O Ataque do Dragão</p>
      </Link>
    </div>
  );
}
