import Carousel from "better-react-carousel";
import { Link } from "react-router-dom";

import Db from "../../images/HeoresDbCover.jpeg";
import DbH from "../../images/HeroesCover2.jpg";
import "./styles.css";

export default function HeroesCarousel() {
  return (
    <div className="container flex flex-col items-center mt-9 w-screen">
      <div className="container md:bg-gray-700 flex p-2 flex-row justify-between items-center w-screen border-gray-700 md:rounded-t-lg">
        <h1 className="text-2xl text-white md:text-4xl ml-4">Heroes</h1>
        <Link
          className="mr-4 md:mr-10 text-white chrome bg-orange-400 rounded md:py-1 px-1 md:px-2 transition-colors hover:bg-orange-600 font-bold"
          to="/dbheroes"
        >
          Ver Mais
        </Link>
      </div>
      <div className="carouselDb md:p-5 text-center font-bold mb-5 container md:text-gray-700 md:border-2 w-full md:rounded-b-lg md:bg-gray-300 md:border-gray-700">
        <Carousel cols={5} rows={1} gap={10} loop>
          <Carousel.Item>
            <Link
              to="/video/Goku Vs. Goku! Uma Batalha Transcendente Começa No Planeta Da Prisão/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img src={Db} />
              <p>Goku Vs. Goku! Uma Batalha ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/Goku Fica Furioso! A Fúria do Mal Saião!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbH} />
              <p>Goku Fica Furioso! ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/O Esplendor Mais Poderoso! Vegetto Blue Explode Kaio-Ken!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Db} />
              <p>O Esplendor Mais Poderoso! ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/Raiva! O Super Fu Aparece!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbH} />
              <p>Raiva! O Super Fu Aparece!</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/O Guerreiro Mais Poderoso! Vegetto Super Saiyajin 4!!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Db} />
              <p>O Guerreiro Mais Poderoso! ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/videoEu Vou Resolver Isso! Ativar! Instinto Superior!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbH} />
              <p>Eu Vou Resolver Isso! Ativar...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/Zamasu Revivido!? Começa a Saga do Conflito Universal!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Db} />
              <p>Zamasu Revivido!? Começa a...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/A Invasão dos Guerreiros mais Fortes! O Sexto Universo é Destruído!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbH} />
              <p>A Invasão dos Guerreiros ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/A Ressurreição de Goku!! Clash Entre o Mais Forte e o Mais Forte!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={Db} />
              <p>A Ressurreição de ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/Contra Ataque! Ataque Feroz! Goku e Vegeta!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbH} />
              <p>Contra Ataque! Goku e ...</p>
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
