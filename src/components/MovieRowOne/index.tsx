import { Link } from "react-router-dom";

import Um from "../../images/MoviesImages/1.jpg";
import Dois from "../../images/MoviesImages/2.jpg";
import Tres from "../../images/MoviesImages/3.jpg";
import Quatro from "../../images/MoviesImages/4.jpg";

export default function MovieRowOne() {
  return (
    <div className="cardsContainer items-center justify-between flex md:flex-row flex-col">
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Um} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">A Lenda de Shenlong</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
          <Link
            to="/assistir/A Lenda de Shenlong/1C624UGEH3nAfd6W7XxqbsBFEPPCkWD9-"
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
        <img src={Dois} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">O Castelo do Diabo</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
          <Link
            to="/assistir/O Castelo do Diabo/11pX0JMBmNVvMS8xvF01QA-s78X3UTH7w"
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
        <img src={Tres} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Uma Aventura Mística</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
          <Link
            to="/assistir/Uma Aventura Mistica/1aYH-8R8TIkBiIJhz0UfUp6A8XfQEbaoC"
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
        <img src={Quatro} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Devolva-me Gohan</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center">
          <Link
            to="/assistir/Devolva-me Gohan/1-DXvCLJKSeaS4QB2BttDRh1hgQ5RgOKI"
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
