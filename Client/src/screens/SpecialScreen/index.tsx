import { Link } from "react-router-dom";

import Um from "../../images/Special/1.jpeg";
import Dois from "../../images/Special/2.jpeg";
import Tres from "../../images/Special/3.jpeg";

export default function SpecialScreen() {
  return (
    <div className="min-h-screen text-white text-xl md:text-base flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-10">
        Todos os Ovas disponíveis
      </h1>
      <div className="cardsContainer items-center justify-between flex md:flex-row flex-col">
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Um} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">A Batalha de Freeza Contra o Pai de Goku</p>
          <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center justify-center">
            <Link
              to="/assistir/A Batalha de Freeza Contra o Pai de Goku/wWkPs1R8z3wKP_ogXP2lRJRpd"
              className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Assistir
            </Link>
          </div>
        </div>
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Dois} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Gohan e Trunks, os Guerreiros do Futuro</p>
          <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center justify-center">
            <Link
              to="/assistir/Gohan e Trunks, os Guerreiros do Futuro/1qMGg4cfSfAuhmAVFeQ2umS-kQtUE87Va"
              className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Assistir
            </Link>
          </div>
        </div>
        <div className="cardAnime text-center flex flex-col items-center h-full p-7 m-5 bg-[transparent] border rounded">
          <img src={Tres} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Toriko X One piece X DBZ</p>
          <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center justify-center">
            <Link
              to="/assistir/Toriko X One piece X DBZ/1qLRSpvcSUmT7FMAi6oQCRrW6F6m_dGPe"
              className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
            >
              Assistir
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
