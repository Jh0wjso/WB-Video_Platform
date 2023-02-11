import { Link } from "react-router-dom";

import Treze from "../../../images/MoviesImages/13.jpg";
import Quatorze from "../../../images/MoviesImages/14.jpg";
import Quinze from "../../../images/MoviesImages/15.jpg";
import Dezesseis from "../../../images/MoviesImages/16.jpg";

export default function MovieRowFour() {
  return (
    <div className="cardsContainer">
      <div className="cardAnime">
        <img src={Treze} width={250} className="imageCard" />
        <p className="font-bold">O Retorno de Broly</p>
        <div className="btnContent">
          <Link
            to="/assistir/O Retorno de Broly/1gleAXntyC7pK-lxBbh6SXpWaXvQsRaj"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime">
        <img src={Quatorze} width={250} className="imageCard" />
        <p className="font-bold">Renascimento Da Fusão</p>
        <div className="btnContent">
          <Link
            to="/assistir/Renascimento Da Fusão/1glo0fH3a3M5JMZBCmbPbspzFucMYjCdF"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>

      <div className="cardAnime">
        <img src={Quinze} width={250} className="imageCard" />
        <p className="font-bold">Combate Final Bio-Broly</p>
        <div className="btnContent">
          <Link
            to="/assistir/Combate Final Bio-Broly/1gjHJU5loy6iqNRN6SqHzsTuNGZ8yxafy"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime">
        <img src={Dezesseis} width={250} className="imageCard" />
        <p className="font-bold">O Ataque do Dragão</p>
        <div className="btnContent">
          <Link
            to="/assistir/O Ataque do Dragão/1gr5LNLLjpzkA4zPnv4bA984k-nIZDtJu"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>
    </div>
  );
}
