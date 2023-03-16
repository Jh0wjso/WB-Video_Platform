import { Link } from "react-router-dom";

import Um from "../../../images/Ovas/1.jpeg";
import Dois from "../../../images/Ovas/2.jpeg";
import Tres from "../../../images/Ovas/3.jpeg";
import Quatro from "../../../images/Ovas/4.jpeg";

export default function OvaRowOne() {
  return (
    <div className="cardsContainer">
      <Link to={"/video/Segurança no trânsito/1WKQ4j_18wcNOJjrqU8L7l9eSTb9NGeJo"} className="cardAnime">
        <img src={Um} width={250} className="coverImage" />
        <p className="textCard">Segurança no trânsito</p>
      </Link>
      <Link to={"/video/O Corpo de Bombeiros de Goku/1cUGipvHu9vGjorpenSdIDO0XcnzB3anB"} className="cardAnime">
        <img src={Dois} width={250} className="coverImage" />
        <p className="textCard">O Corpo de Bombeiros de Goku</p>
      </Link>
      <Link to={"/video/Junte-se a nós! O Mundo de Goku/1IxGJwpk8bmEiloVsXSkReqtkpBYZwFri"} className="cardAnime">
        <img src={Tres} width={250} className="coverImage" />
        <p className="textCard">Junte-se a nós! O Mundo de Goku</p>
      </Link>
      <Link to={"/video/O Plano Para Erradicar os Saiyajins/1BCWfFWHzdTJlVZKj9nyOhOw0W_y62Mwx"} className="cardAnime">
        <img src={Quatro} width={250} className="coverImage" />
        <p className="textCard">O Plano Para Erradicar os Saiyajins</p>
      </Link>
    </div>
  );
}
