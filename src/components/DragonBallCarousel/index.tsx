import React from "react";

import { Link } from "react-router-dom";
import Carousel from "better-react-carousel";

export default function DragonBallCarousel() {
  return (
    <div className="container flex flex-col items-center mt-9">
      <section className="border-b-2 rounded w-full flex justify-between items-center">
        <h1 className="text-4xl ml-3 md:ml-9">Dragon Ball Heroes</h1>
        <Link
          className="mr-3 md:mr-9 text-white chrome bg-gray-700 rounded py-1 px-2 transition-colors hover:bg-gray-400 hover:text-gray-700"
          to="/DbClassic"
        >
          Ver Mais
        </Link>
      </section>
      <section className="mt-3 mb-5">
        <Carousel cols={5} rows={1} gap={10} loop>
          <Carousel.Item>
            <img
              width="100%"
              className="rounded"
              src="https://picsum.photos/300/400?random=1"
            />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              className="rounded"
              src="https://picsum.photos/300/400?random=2"
            />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              className="rounded"
              src="https://picsum.photos/300/400?random=3"
            />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              className="rounded"
              src="https://picsum.photos/300/400?random=4"
            />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              className="rounded"
              src="https://picsum.photos/300/400?random=5"
            />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              className="rounded"
              src="https://picsum.photos/300/400?random=6"
            />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              className="rounded"
              src="https://picsum.photos/300/400?random=7"
            />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              className="rounded"
              src="https://picsum.photos/300/400?random=8"
            />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              className="rounded"
              src="https://picsum.photos/300/400?random=9"
            />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              className="rounded"
              src="https://picsum.photos/300/400?random=1"
            />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
}
