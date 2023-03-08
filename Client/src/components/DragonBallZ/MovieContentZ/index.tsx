import Carousel from "better-react-carousel";
import { Link } from "react-router-dom";

import Quatro from "../../../images/MoviesImages/4.jpg";
import Cinco from "../../../images/MoviesImages/5.jpg";
import Seis from "../../../images/MoviesImages/6.jpg";
import Sete from "../../../images/MoviesImages/7.jpg";
import Oito from "../../../images/MoviesImages/8.jpg";
import Nove from "../../../images/MoviesImages/9.jpg";
import Dez from "../../../images/MoviesImages/10.jpg";
import Onze from "../../../images/MoviesImages/11.jpg";
import Doze from "../../../images/MoviesImages/12.jpg";
import Treze from "../../../images/MoviesImages/13.jpg";
import Quatorze from "../../../images/MoviesImages/14.jpg";
import Quinze from "../../../images/MoviesImages/15.jpg";
import Dezesseis from "../../../images/MoviesImages/16.jpg";
import Dezoito from "../../../images/MoviesImages/18.jpg";
import Dezenove from "../../../images/MoviesImages/19.jpg";

export default function MovieContentZ() {
  return (
    <div className="container flex flex-col items-center mt-9 w-screen">
      <div className="container bg-gray-700 flex p-2 flex-row justify-between items-center w-screen border-gray-700 rounded-t-lg">
        <h1 className="text-2xl text-white md:text-4xl ml-4">Filmes</h1>
        <Link
          className="mr-4 md:mr-10 text-white chrome bg-orange-600 rounded md:py-1 px-1 md:px-2 transition-colors hover:bg-orange-600 font-bold"
          to="/dbheroes"
        >
          Ver Mais
        </Link>
      </div>
      <div className="carouselDb p-5 text-center font-bold mb-5 container text-gray-700 border-2 w-full rounded-b-lg bg-gray-300 md:border-gray-700">
        <Carousel cols={5} rows={1} gap={10} loop>
          <Carousel.Item>
            <Link
              to="/assistir/A Lenda de Shenlong/1C624UGEH3nAfd6W7XxqbsBFEPPCkWD9-"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img src={Quatro} />
              <p>Devolva me Gohan</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/O Homem Mais Forte do Mundo/1TG-0p34ILl5OmxRcMJ-tscz0keqxYT6N"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Cinco} />
              <p>O Homem Mais Forte do Mundo</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/A Arvore do Poder/1y-GYI3pinbls3CraedGWneolO-IFoioE"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Seis} />
              <p>A Árvore do Poder</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/Goku o Super Saiyajin/1TiAM1jZDNScj9Q0MmzWe3XDIzlldQdfX"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Sete} />
              <p>Goku o Super Saiyajin</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/Uma vingança para Freeza/1TqoPudcj99YoVkiR6fZOU4Odqu3Pijqu"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Oito} />
              <p>Uma vingança para Freeza</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/O Retorno de Cooler/1XmsxNt8rmwCXB3gzJATwY50pGOeDBQsD"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Nove} />
              <p>O Retorno de Cooler</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/O Retorno dos Androides/1YD09OLCgsie8euaSCmAMB79mj8Z_gjn2"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Dez} />
              <p>O Retorno dos Androides</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/O Lendário super Saiyajin/1Xfe79rEjTt-iyxtmn905_jJ9BtnrkWIC"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Onze} />
              <p>O Lendário Super Saiyajin</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/Batalha nos Dois Mundos/18God08mQPM6MK1bnvrLipFnf2wnjDp3X"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Doze} />
              <p>Batalha nos Dois Mundos</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/O Retorno de Broly/1gleAXntyC7pK-lxBbh6SXpWaXvQsRaj"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Treze} />
              <p>O Retorno de Broly</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/Renascimento Da Fusão/1glo0fH3a3M5JMZBCmbPbspzFucMYjCdF"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Quatorze} />
              <p>Renascimento Da Fusão</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/Combate Final Bio-Broly/1gjHJU5loy6iqNRN6SqHzsTuNGZ8yxafy"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Quinze} />
              <p>Combate Final Bio-Broly</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/O Ataque do Dragão/1gr5LNLLjpzkA4zPnv4bA984k-nIZDtJu"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Dezesseis} />
              <p>O Ataque do Dragão</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/batalha dos Deuses/1k3__SaqihW9lFiBQeEFJ3rLFblp4sLbL"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Dezoito} />
              <p>A Batalha dos Deuses</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/assistir/O Renascimento de Freeza/1kMkntsimdLRlSsAUOa0_FL1jGi-Uvyf6"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Dezenove} />
              <p>O Renascimento de Freeza</p>
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}