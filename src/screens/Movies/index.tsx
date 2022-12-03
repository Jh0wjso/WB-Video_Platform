import { Link } from "react-router-dom";

import Db from "../../images/DB_case.jpg";

import "./styles.css";

export default function Movies() {
  return (
    <div className="min-h-screen text-white text-xl md:text-base flex flex-col items-center justify-center">
      <div className="md:my-14 cardsContainer items-center justify-between flex md:flex-row flex-col">
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 m-5 bg-[transparent] border rounded">
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">A Lenda de Shenlong</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">O Castelo do Diabo</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Uma Aventura Mística</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Devolva-me Gohan</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">O Homem Mais Forte do Mundo</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">A Árvore do Poder</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Goku o Super Sayajin</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Uma vingança para Freeza</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">O Retorno de Cooler</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Super Android 13</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">O Lendário Super Sayajin</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Batalha nos Dois Mundos</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">O Retorno de Broly</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Renascimento Da Fusão</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Combate Final Bio-Broly</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">O Ataque do Dragão</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Em Busca Do Poder</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Batalha dos Deuses</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">O Renascimento de Freeza</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Dragon Ball Super Broly</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Dragon Ball Evolution</p>
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
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase">Super Hero</p>
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
