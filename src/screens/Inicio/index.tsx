import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Carousel from 'better-react-carousel';

export default function Inicio() {
  return (
    <section className="flex flex-col mt-7 items-center">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop
        className="mySwiper container"
      >
        <SwiperSlide>
          <img
            className="object-fill w-full h-96 rounded"
            src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-96 rounded"
            src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-96 rounded"
            src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
            alt="image slide 3"
          />
        </SwiperSlide>
      </Swiper>
      <div className="container flex flex-col items-center mt-9">
        <div className="border-b-2 rounded w-full">
          <h1 className="text-4xl ml-3 md:ml-9">Dragon Ball Heroes</h1>
        </div>
        <div className="mt-3 mb-5">
          <Carousel cols={5} rows={1} gap={10} loop>
            <Carousel.Item>
              <img width="100%" className="rounded" src="https://picsum.photos/300/400?random=1" />
              <p className="text-center">Ep XX: Nome do Episodio</p>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" className="rounded" src="https://picsum.photos/300/400?random=2" />
              <p className="text-center">Ep XX: Nome do Episodio</p>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" className="rounded" src="https://picsum.photos/300/400?random=3" />
              <p className="text-center">Ep XX: Nome do Episodio</p>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" className="rounded" src="https://picsum.photos/300/400?random=4" />
                <p className="text-center">Ep XX: Nome do Episodio</p>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" className="rounded" src="https://picsum.photos/300/400?random=5" />
                <p className="text-center">Ep XX: Nome do Episodio</p>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" className="rounded" src="https://picsum.photos/300/400?random=6" />
                <p className="text-center">Ep XX: Nome do Episodio</p>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" className="rounded" src="https://picsum.photos/300/400?random=7" />
                <p className="text-center">Ep XX: Nome do Episodio</p>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" className="rounded" src="https://picsum.photos/300/400?random=8" />
                <p className="text-center">Ep XX: Nome do Episodio</p>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" className="rounded" src="https://picsum.photos/300/400?random=9" />
                <p className="text-center">Ep XX: Nome do Episodio</p>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" className="rounded" src="https://picsum.photos/300/400?random=1" />
                <p className="text-center">Ep XX: Nome do Episodio</p>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
