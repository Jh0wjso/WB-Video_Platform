import { Link } from "react-router-dom";

import Nove from "../../../images/MoviesImages/9.jpg";
import Dez from "../../../images/MoviesImages/10.jpg";
import Onze from "../../../images/MoviesImages/11.jpg";
import Doze from "../../../images/MoviesImages/12.jpg";

export default function MovieRowThree() {
  return (
    <div className="cardsContainer">
      <div className="cardAnime">
        <img src={Nove} width={250} className="imageCard" />
        <p className="font-bold">O Retorno de Cooler</p>
        <div className="btnContent">
          <Link
            to="/assistir/O retorno de Cooler/1XmsxNt8rmwCXB3gzJATwY50pGOeDBQsD"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime">
        <img src={Dez} width={250} className="imageCard" />
        <p className="font-bold">O Retorno dos Androides</p>
        <div className="btnContent">
          <Link
            to="/assistir/O Retorno dos Androides/1YD09OLCgsie8euaSCmAMB79mj8Z_gjn2"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>

      <div className="cardAnime">
        <img src={Onze} width={250} className="imageCard" />
        <p className="font-bold">O Lendário Super Saiyajin</p>
        <div className="btnContent">
          <Link
            to="/assistir/O lendário super Saiyajin/1Xfe79rEjTt-iyxtmn905_jJ9BtnrkWIC"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime">
        <img src={Doze} width={250} className="imageCard" />
        <p className="font-bold">Batalha nos Dois Mundos</p>
        <div className="btnContent">
          <Link
            to="/assistir/Batalha nos Dois Mundos/18God08mQPM6MK1bnvrLipFnf2wnjDp3X"
            className="btnWatch"
          >
            Assistir
          </Link>
        </div>
      </div>
    </div>
  );
}
