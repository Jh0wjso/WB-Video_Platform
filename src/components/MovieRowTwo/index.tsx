import { Link } from "react-router-dom";

import Cinco from "../../images/MoviesImages/5.jpg";
import Seis from "../../images/MoviesImages/6.jpg";
import Sete from "../../images/MoviesImages/7.jpg";
import Oito from "../../images/MoviesImages/8.jpg";

export default function MovieRowTwo() {
  return (
    <div className="md:mb-14 cardsContainer items-center justify-between flex md:flex-row flex-col">
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Cinco} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">O Homem Mais Forte do Mundo</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
          <Link
            to="/assistir/O Homem Mais Forte do Mundo/1TG-0p34ILl5OmxRcMJ-tscz0keqxYT6N"
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
        <img src={Seis} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">A Árvore do Poder</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
          <Link
            to="/assistir/A Arvore do Poder/1y-GYI3pinbls3CraedGWneolO-IFoioE"
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
        <img src={Sete} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Goku o Super Sayajin</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
          <Link
            to="/assistir/Goku o Super Sayajin/1TiAM1jZDNScj9Q0MmzWe3XDIzlldQdfX"
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
        <img src={Oito} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Uma vingança para Freeza</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
          <Link
            to="/assistir/Uma vingança para Freeza/1TqoPudcj99YoVkiR6fZOU4Odqu3Pijqu"
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
