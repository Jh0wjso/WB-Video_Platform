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
        Assista a todos os episódios
      </h1>
      <div className="cardsContainer items-center justify-between flex md:flex-row flex-col">
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Dragon Ball</p>
          <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
            <Link
              to="/classic"
              className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Dublado
            </Link>
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs w-[75%] md:w-auto hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Legendado
            </Link>
          </div>
        </div>
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbz} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Dragon Ball Z</p>
          <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
            <Link
              to="/dbz"
              className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Dublado
            </Link>
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs w-[75%] md:w-auto hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Legendado
            </Link>
          </div>
        </div>

        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbkai} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Dragon Ball Z Kai</p>
          <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Dublado
            </Link>
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs w-[75%] md:w-auto hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Legendado
            </Link>
          </div>
        </div>
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbs} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Dragon Ball Super</p>
          <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Dublado
            </Link>
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs w-[75%] md:w-auto hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Legendado
            </Link>
          </div>
        </div>
      </div>
      <div className="md:mb-14 cardsContainer items-center justify-between flex md:flex-row flex-col">
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbgt} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Dragon Ball GT</p>
          <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Dublado
            </Link>
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs w-[75%] md:w-auto hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Legendado
            </Link>
          </div>
        </div>
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbh} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Heores</p>
          <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Dublado
            </Link>
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs w-[75%] md:w-auto hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Legendado
            </Link>
          </div>
        </div>

        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbova} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Dragon Ball OVAs</p>
          <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Dublado
            </Link>
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs w-[75%] md:w-auto hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Legendado
            </Link>
          </div>
        </div>
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dbes} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Especiais</p>
          <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Dublado
            </Link>
            <Link
              to="/"
              className="text-center bg-orange-400 text-xl md:text-xs w-[75%] md:w-auto hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Legendado
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
