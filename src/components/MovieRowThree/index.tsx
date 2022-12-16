import { Link } from "react-router-dom";

import Nove from "../../images/MoviesImages/9.jpg";
import Dez from "../../images/MoviesImages/10.jpg";
import Onze from "../../images/MoviesImages/11.jpg";
import Doze from "../../images/MoviesImages/12.jpg";

export default function MovieRowThree() {
  return (
    <div className="md:mb-14 cardsContainer items-center justify-between flex md:flex-row flex-col">
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Nove} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">O Retorno de Cooler</p>
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
        <img src={Dez} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Super Android 13</p>
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
        <img src={Onze} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">O Lendário Super Sayajin</p>
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
        <img src={Doze} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Batalha nos Dois Mundos</p>
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