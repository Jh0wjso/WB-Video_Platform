import { Link } from "react-router-dom";

import Um from "../../../images/Ovas/1.jpeg";
import Dois from "../../../images/Ovas/2.jpeg";
import Tres from "../../../images/Ovas/3.jpeg";
import Quatro from "../../../images/Ovas/4.jpeg";

export default function OvaRowOne() {
  return (
    <div className="cardsContainer">
      <div className="cardAnime">
        <img src={Um} width={250} className="imageCard" />
        <p className="font-bold">Segurança no trânsito</p>
        <div className="btnContent">
          <Link
            to="/video/Segurança no trânsito/1WKQ4j_18wcNOJjrqU8L7l9eSTb9NGeJo"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime">
        <img src={Dois} width={250} className="imageCard" />
        <p className="font-bold">O Corpo de Bombeiros de Goku</p>
        <div className="btnContent">
          <Link
            to="/video/O Corpo de Bombeiros de Goku/1cUGipvHu9vGjorpenSdIDO0XcnzB3anB"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime">
        <img src={Tres} width={250} className="imageCard" />
        <p className="font-bold">Junte-se a nós! O Mundo de Goku</p>
        <div className="btnContent">
          <Link
            to="/video/Junte-se a nós! O Mundo de Goku/1IxGJwpk8bmEiloVsXSkReqtkpBYZwFri"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime">
        <img src={Quatro} width={250} className="imageCard" />
        <p className="font-bold">O Plano Para Erradicar os Saiyajins</p>
        <div className="btnContent">
          <Link
            to="/video/O Plano Para Erradicar os Saiyajins/1BCWfFWHzdTJlVZKj9nyOhOw0W_y62Mwx"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>
    </div>
  );
}
