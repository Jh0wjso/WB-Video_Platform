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
      <div className="container md:bg-gray-700 flex p-2 flex-row justify-between items-center w-screen border-gray-700 md:rounded-t-lg">
        <h1 className="text-2xl text-white md:text-4xl ml-4">Filmes</h1>
        <Link
          className="mr-4 md:mr-10 text-white chrome bg-orange-400 rounded md:py-1 px-1 md:px-2 transition-colors hover:bg-orange-600 font-bold"
          to="/filmes"
        >
          Ver Mais
        </Link>
      </div>
      <div className="carouselDb md:p-5 text-center font-bold mb-5 container md:text-gray-700 md:border-2 w-full md:rounded-b-lg md:bg-gray-300 md:border-gray-700">
        <Carousel cols={5} rows={1} gap={10} loop>
          <Carousel.Item>
            <Link
              to="/assistir/A Lenda de Shenlong/1C624UGEH3nAfd6W7XxqbsBFEPPCkWD9-"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img src={Quatro} />
              <p>A Lenda de Shenlong</p>
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
              to="/assistir/Goku o Super Sayajin/1TiAM1jZDNScj9Q0MmzWe3XDIzlldQdfX"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Sete} />
              <p>Goku o Super Sayajin</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/5/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Oito} />
              <p>Uma vingança para Freeza</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/6/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Nove} />
              <p>O Retorno de Cooler</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/7/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Dez} />
              <p>Super Android 13</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/8/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Onze} />
              <p>O Lendário Super Sayajin</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/9/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Doze} />
              <p>Batalha nos Dois Mundos</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/10/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Treze} />
              <p>O Retorno de Broly</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/9/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Quatorze} />
              <p>Renascimento Da Fusão</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/10/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Quinze} />
              <p>Combate Final Bio-Broly</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/9/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Dezesseis} />
              <p>O Ataque do Dragão</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/9/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Dezoito} />
              <p>A Batalha dos Deuses</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/10/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
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
