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
    <div className="min-h-screen text-white text-xl md:text-base flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-10">
        Assista a todos os animes
      </h1>
      <div className="cardsContainer items-center justify-between flex md:flex-row flex-col">
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Db} width={250} className="mb-5 rounded-lg " />
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
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbz} width={250} className="mb-5 rounded-lg " />
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

        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbkai} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Dragon Ball Z Kai</p>
          <div className="btnContent">
            <Link
              to="/"
              className="btnWatch"
            >
              Assistir
            </Link>
          </div>
        </div>
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbs} width={250} className="mb-5 rounded-lg " />
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
      <div className="md:mb-14 cardsContainer items-center justify-between flex md:flex-row flex-col">
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbgt} width={250} className="mb-5 rounded-lg " />
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
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbh} width={250} className="mb-5 rounded-lg " />
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

        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbova} width={250} className="mb-5 rounded-lg " />
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
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbes} width={250} className="mb-5 rounded-lg " />
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
