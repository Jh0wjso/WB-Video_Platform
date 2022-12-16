import { Link } from "react-router-dom";

import Treze from "../../images/MoviesImages/13.jpg";
import Quatorze from "../../images/MoviesImages/14.jpg";
import Quinze from "../../images/MoviesImages/15.jpg";
import Dezesseis from "../../images/MoviesImages/16.jpg";

export default function MovieRowFour() {
  return (
    <div className="md:mb-14 cardsContainer items-center justify-between flex md:flex-row flex-col">
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Treze} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">O Retorno de Broly</p>
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
        <img src={Quatorze} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Renascimento Da Fusão</p>
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
        <img src={Quinze} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Combate Final Bio-Broly</p>
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
        <img src={Dezesseis} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">O Ataque do Dragão</p>
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
