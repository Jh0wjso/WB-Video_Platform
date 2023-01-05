import { Link } from "react-router-dom";

import Cinco from "../../../images/Ovas/5.jpeg";
import Seis from "../../../images/Ovas/6.jpeg";
import Sete from "../../../images/Ovas/7.jpeg";
import Oito from "../../../images/Ovas/8.jpeg";

export default function OvaRowTwo() {
  return (
    <div className="cardsContainer items-center justify-between flex md:flex-row flex-col">
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Cinco} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Especial de 2007<br></br>(2007)</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center justify-center">
          <Link
            to="/assistir/Especial de 2007/1QE4zDFW7eQbuOHenuhbTOE6Qu-r_Hfme"
            className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Seis} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Ossu! O retorno de Son Goku <br></br>e seus Companheiros</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center justify-center">
          <Link
            to="/assistir/Ossu! O retorno de Son Goku e seus Companheiros/1HN37TqZ_yLwO5_cZLSkj_VFV1TN3rmoC"
            className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Sete} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Remake - O Plano para Erradicar <br></br> os Super Saiyajins</p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center justify-center">
          <Link
            to="/assistir/Remake - O Plano para Erradicar os Super Saiyajins/1juZpwSDqmDQWNyPur7adNBqNIbkLk9Ri/"
            className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
          >
            Assistir
          </Link>
        </div>
      </div>
      <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
        <img src={Oito} width={250} className="mb-5 rounded-lg " />
        <p className="font-bold">Episódio de Bardock<br></br> (2011) </p>
        <div className="btnContent w-[80%] text-xl md:text-sm my-1 items-center justify-center">
          <Link
            to="/assistir/Episódio de Bardock/1vpkfMuAUvKwBSARQB4Todl_ZYYyMsD3H"
            className="text-center bg-orange-400 text-xl md:text-xs m-2 w-[75%] md:w-auto md:m-2 hover:bg-orange-600 hover:transition-colors text-white p-2 rounded font-bold"
          >
            Assistir
          </Link>
        </div>
      </div>
    </div>
  );
}
