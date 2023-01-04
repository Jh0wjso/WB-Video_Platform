import { Link } from "react-router-dom";

import Um from "../../../images/Ovas/1.jpeg";
import Dois from "../../../images/Ovas/2.jpeg";
import Tres from "../../../images/Ovas/3.jpeg";
import Quatro from "../../../images/Ovas/4.jpeg";

export default function OvaRowOne() {
  return (
    <div className="cardsContainer items-center justify-between flex md:flex-row flex-col">
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Um} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Segurança no trânsito</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center justify-center">
          <Link
            to="/assistir/Segurança no trânsito/1C624UGEH3nAfd6W7XxqbsBFEPPCkWD9-"
            className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Dois} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">O Corpo de Bombeiros de Goku</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center justify-center">
          <Link
            to="/assistir/O Corpo de Bombeiros de Goku/11pX0JMBmNVvMS8xvF01QA-s78X3UTH7w"
            className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Tres} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Junte-se a nós! O Mundo de Goku</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center justify-center">
          <Link
            to="/assistir/Junte-se a nós! O Mundo de Goku/1aYH-8R8TIkBiIJhz0UfUp6A8XfQEbaoC"
            className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Quatro} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">O Plano Para Erradicar os Saiyajins</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center justify-center">
          <Link
            to="/assistir/O Plano Para Erradicar os Saiyajins/1-DXvCLJKSeaS4QB2BttDRh1hgQ5RgOKI"
            className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
          >
            Assistir
          </Link>
        </div>
      </div>
    </div>
  );
}
