import { Link } from "react-router-dom";

import Db from "../../images/DB_case.jpg";
import Um from "../../images/MoviesImages/1.jpg";
import Dois from "../../images/MoviesImages/2.jpg";
import Tres from "../../images/MoviesImages/3.jpg";
import Quatro from "../../images/MoviesImages/4.jpg";
import Cinco from "../../images/MoviesImages/5.jpg";
import Seis from "../../images/MoviesImages/6.jpg";
import Sete from "../../images/MoviesImages/7.jpg";
import Oito from "../../images/MoviesImages/8.jpg";
import Nove from "../../images/MoviesImages/9.jpg";
import Dez from "../../images/MoviesImages/10.jpg";
import Onze from "../../images/MoviesImages/11.jpg";
import Doze from "../../images/MoviesImages/12.jpg";
import Treze from "../../images/MoviesImages/13.jpg";
import Quatorze from "../../images/MoviesImages/14.jpg";
import Quinze from "../../images/MoviesImages/15.jpg";
import Dezesseis from "../../images/MoviesImages/16.jpg";
import Dezessete from "../../images/MoviesImages/17.jpg";
import Dezoito from "../../images/MoviesImages/18.jpg";
import Dezenove from "../../images/MoviesImages/19.jpg";
import Vinte from "../../images/MoviesImages/20.jpg";
import Vinteum from "../../images/MoviesImages/21.jpg";
import Vintedois from "../../images/MoviesImages/22.jpg";

import "./styles.css";

export default function Movies() {
  return (
    <div className="min-h-screen text-white text-xl md:text-base flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-10">
        Todos os filmes disponíveis
      </h1>
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
          <img src={Cinco} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">O Homem Mais Forte do Mundo</p>
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
          <img src={Seis} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">A Árvore do Poder</p>
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
          <img src={Sete} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Goku o Super Sayajin</p>
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
          <img src={Oito} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Uma vingança para Freeza</p>
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
      <div className="md:mb-14 cardsContainer items-center justify-between flex md:flex-row flex-col">
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Vinteum} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Dragon Ball Evolution</p>
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
          <img src={Vintedois} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold">Super Hero</p>
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
