import { Link } from "react-router-dom";

import Db from "../../images/capaDB.jpeg";
import Dbz from "../../images/capaDBZ.jpeg";
import Dbkai from "../../images/capaKai.jpeg";
import Dbs from "../../images/capaDBS.jpeg";
import Dbgt from "../../images/capaDBGT.jpeg";
import Dbh from "../../images/capaDBH.jpg";
import Dbova from "../../images/capaDBO.jpg";
import Dbes from "../../images/capaDBEs.jpeg";

import "./styles.css";

export default function Animes() {
  return (
    <div className="containerContent">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-10">
        Assista a todos os animes
      </h1>
      <div className="cardsContainer">
        <div className="cardAnime">
          <img src={Db} width={250} className="imageCard" />
          <p className="font-bold">Dragon Ball</p>
          <div className="btnContent">
            <Link
              to="/classic"
              className="btnWatch"
            >
              Assistir
            </Link>
          </div>
        </div>
        <div className="cardAnime">
          <img src={Dbz} width={250} className="imageCard" />
          <p className="font-bold">Dragon Ball Z</p>
          <div className="btnContent">
            <Link
              to="/dbz"
              className="btnWatch"
            >
              Assistir
            </Link>
          </div>
        </div>

        <div className="cardAnime">
          <img src={Dbkai} width={250} className="imageCard" />
          <p className="font-bold">Dragon Ball Z Kai</p>
          <div className="btnContent">
            <Link
              to="/dbkai"
              className="btnWatch"
            >
              Assistir
            </Link>
          </div>
        </div>
        <div className="cardAnime">
          <img src={Dbs} width={250} className="imageCard" />
          <p className="font-bold">Dragon Ball Super</p>
          <div className="btnContent">
            <Link
              to="/"
              className="btnWatch"
            >
              Assistir
            </Link>
          </div>
        </div>
      </div>
      <div className="cardsContainer">
        <div className="cardAnime">
          <img src={Dbgt} width={250} className="imageCard" />
          <p className="font-bold">Dragon Ball GT</p>
          <div className="btnContent">
            <Link
              to="/dbgt"
              className="btnWatch"
            >
              Assistir
            </Link>
          </div>
        </div>
        <div className="cardAnime">
          <img src={Dbh} width={250} className="imageCard" />
          <p className="font-bold">Heroes</p>
          <div className="btnContent">
            <Link
              to="/"
              className="btnWatch"
            >
              Assistir
            </Link>
          </div>
        </div>

        <div className="cardAnime">
          <img src={Dbova} width={250} className="imageCard" />
          <p className="font-bold">Dragon Ball OVAs</p>
          <div className="btnContent">
            <Link
              to="/ova"
              className="btnWatch"
            >
              Assistir
            </Link>
          </div>
        </div>
        <div className="cardAnime">
          <img src={Dbes} width={250} className="imageCard" />
          <p className="font-bold">Especiais</p>
          <div className="btnContent">
            <Link
              to="/special"
              className="btnWatch"
            >
              Assistir
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
