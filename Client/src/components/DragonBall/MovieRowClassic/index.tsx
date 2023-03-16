import { Link } from "react-router-dom";

import Um from "../../../images/MoviesImages/1.jpg";
import Dois from "../../../images/MoviesImages/2.jpg";
import Tres from "../../../images/MoviesImages/3.jpg";
import Quatro from "../../../images/MoviesImages/17.jpg";

export default function MovieRowClassic() {
  return (
    <>
      <p className="font-bold text-5xl mt-6">Filmes da Série</p>
      <div className="cardsContainer">
        <Link to={"/assistir/A Lenda de Shenlong/1C624UGEH3nAfd6W7XxqbsBFEPPCkWD9-"} className="cardAnime">
          <img src={Um} width={250} className="coverImage" />
          <p className="textCard">A Lenda de Shenlong</p>
        </Link>
        <Link to={"/assistir/O Castelo do Diabo/11pX0JMBmNVvMS8xvF01QA-s78X3UTH7w"} className="cardAnime">
          <img src={Dois} width={250} className="coverImage" />
          <p className="textCard">O Castelo do Diabo</p>
        </Link>
        <Link to={"/assistir/Uma Aventura Mistica/1aYH-8R8TIkBiIJhz0UfUp6A8XfQEbaoC"} className="cardAnime">
          <img src={Tres} width={250} className="coverImage" />
          <p className="textCard">Uma Aventura Mística</p>
        </Link>
        <Link to={"/assistir/Em busca do poder/1-DXvCLJKSeaS4QB2BttDRh1hgQ5RgOKI"} className="cardAnime">
          <img src={Quatro} width={250} className="coverImage" />
          <p className="textCard">Em busca do poder</p>
        </Link>
      </div>
    </>
  );
}
