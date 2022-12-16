import { Link } from "react-router-dom";

import Dezessete from "../../images/MoviesImages/17.jpg";
import Dezoito from "../../images/MoviesImages/18.jpg";
import Dezenove from "../../images/MoviesImages/19.jpg";
import Vinte from "../../images/MoviesImages/20.jpg";

export default function MovieRowFive() {
  return (
    <div className="md:mb-14 cardsContainer items-center justify-between flex md:flex-row flex-col">
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Dezessete} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Em Busca Do Poder</p>
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
        <img src={Dezoito} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Batalha dos Deuses</p>
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
        <img src={Dezenove} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">O Renascimento de Freeza</p>
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
        <img src={Vinte} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Dragon Ball Super Broly</p>
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
  );
}
