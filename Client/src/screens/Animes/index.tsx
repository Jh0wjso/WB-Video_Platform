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
import Header from "../../components/Header";

export default function Animes() {
  return (
    <>
      <Header />
      <div className="containerContent">
        <h1 className="secondContainer">Assista a todos os animes</h1>
        <div className="cardsContainer">
          <Link to={"/classic"} className="cardAnime">
            <img src={Db} width={250} className="coverImage" />
            <p className="textCard">Dragon Ball</p>
          </Link>
          <Link to={"/dbz"} className="cardAnime">
            <img src={Dbz} width={250} className="coverImage" />
            <p className="textCard">Dragon Ball Z</p>
          </Link>

          <Link to={"/dbkai"} className="cardAnime">
            <img src={Dbkai} width={250} className="coverImage" />
            <p className="textCard">Dragon Ball Z Kai</p>
          </Link>
          <Link to={"/dbsuper"} className="cardAnime">
            <img src={Dbs} width={250} className="coverImage" />
            <p className="textCard">Dragon Ball Super</p>
          </Link>
        </div>
        <div className="cardsContainer">
          <Link to={"/dbgt"} className="cardAnime">
            <img src={Dbgt} width={250} className="coverImage" />
            <p className="textCard">Dragon Ball GT</p>
          </Link>
          <Link to={"/dbheroes"} className="cardAnime">
            <img src={Dbh} width={250} className="coverImage" />
            <p className="textCard">Heroes</p>
          </Link>
          <Link to={"/ova"} className="cardAnime">
            <img src={Dbova} width={250} className="coverImage" />
            <p className="textCard">Dragon Ball OVAs</p>
          </Link>
          <Link to={"/special"} className="cardAnime">
            <img src={Dbes} width={250} className="coverImage" />
            <p className="textCard">Especiais</p>
          </Link>
        </div>
      </div>
    </>
  );
}
