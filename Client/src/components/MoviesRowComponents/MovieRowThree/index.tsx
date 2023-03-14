import { Link } from "react-router-dom";

import Nove from "../../../images/MoviesImages/9.jpg";
import Dez from "../../../images/MoviesImages/10.jpg";
import Onze from "../../../images/MoviesImages/11.jpg";
import Doze from "../../../images/MoviesImages/12.jpg";

export default function MovieRowThree() {
  return (
    <div className="cardsContainer">
      <Link to={"/assistir/O retorno de Cooler/1XmsxNt8rmwCXB3gzJATwY50pGOeDBQsD"} className="cardAnime">
        <img src={Nove} width={250} className="coverImage" />
        <p className="textCard">O Retorno de Cooler</p>
      </Link>
      <Link to={"/assistir/O Retorno dos Androides/1YD09OLCgsie8euaSCmAMB79mj8Z_gjn2"} className="cardAnime">
        <img src={Dez} width={250} className="coverImage" />
        <p className="textCard">O Retorno dos Androides</p>
      </Link>
      <Link to={"/assistir/O lendário super Saiyajin/1Xfe79rEjTt-iyxtmn905_jJ9BtnrkWIC"} className="cardAnime">
        <img src={Onze} width={250} className="coverImage" />
        <p className="textCard">O Lendário Super Saiyajin</p>
      </Link>
      <Link to={"/assistir/Batalha nos Dois Mundos/18God08mQPM6MK1bnvrLipFnf2wnjDp3X"} className="cardAnime">
        <img src={Doze} width={250} className="coverImage" />
        <p className="textCard">Batalha nos Dois Mundos</p>
      </Link>
    </div>
  );
}
