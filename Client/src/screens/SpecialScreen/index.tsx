import { Link } from "react-router-dom";

import Um from "../../images/Special/1.jpeg";
import Dois from "../../images/Special/2.jpeg";
import Tres from "../../images/Special/3.jpeg";

export default function SpecialScreen() {
  return (
    <div className="containerContent">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-10">
        Todos os Ovas disponíveis
      </h1>
      <div className="cardsContainer">
        <Link to={"/video/A Batalha de Freeza Contra o Pai de Goku/1qHRG1U7wWkPs1R8z3wKP_ogXP2lRJRpd"} className="cardAnime">
          <img src={Um} width={250} className="imageCard" />
          <p className="font-bold">A Batalha de Freeza<br/>Contra o Pai de Goku</p>
        </Link>
        <Link to={"/video/Gohan e Trunks, os Guerreiros do Futuro/1qMGg4cfSfAuhmAVFeQ2umS-kQtUE87Va"} className="cardAnime">
          <img src={Dois} width={250} className="imageCard" />
          <p className="font-bold">Gohan e Trunks,<br/>os Guerreiros do Futuro</p>
        </Link>
        <Link to={"/video/Toriko X One piece X DBZ/1qLRSpvcSUmT7FMAi6oQCRrW6F6m_dGPe"} className="cardAnime">
          <img src={Tres} width={250} className="imageCard" />
          <p className="font-bold">Toriko X One piece<br/>X Dragon Ball Z</p>
        </Link>
      </div>
    </div>
  );
}
