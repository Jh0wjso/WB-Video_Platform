import { Link } from "react-router-dom";
import Carousel from "better-react-carousel";

import DbS from "../../images/super.jpeg";
import DbS1 from "../../images/super1.jpg";
import DbS2 from "../../images/supertwo.jpg";

export default function DragonBallCarousel() {
  return (
    <div className="container flex flex-col items-center mt-9 w-screen">
      <div className="container md:bg-gray-700 flex p-2 flex-row justify-between items-center w-screen border-gray-700 md:rounded-t-lg">
        <h1 className="text-2xl text-white md:text-4xl ml-4">Super</h1>
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
              to="/video/1/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img src={DbS} />
              <p>Ep 01: Nome do Episodio</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/2/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS1} />
              <p>Ep 02: Nome do Episodio</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/3/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS2} />
              <p>Ep 02: Nome do Episodio</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/4/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS} />
              <p>Ep 04: Nome do Episodio</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/5/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS1} />
              <p>Ep 05: Nome do Episodio</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/6/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS2} />
              <p>Ep 06: Nome do Episodio</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/7/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS} />
              <p>Ep 07: Nome do Episodio</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/8/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS1} />
              <p>Ep 08: Nome do Episodio</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/8/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS2} />
              <p>Ep 09: Nome do Episodio</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/10/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS} />
              <p>Ep 10: Nome do Episodio</p>
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}