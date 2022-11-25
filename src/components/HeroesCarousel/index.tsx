import Carousel from "better-react-carousel";
import { Link } from "react-router-dom";

import Db from "../../images/Db.jpg";
import "./styles.css"

export default function HeroesCarousel() {
  return (
    <div className="container flex flex-col items-center mt-9 w-screen">
      <div className="container border-b-2 flex flex-row justify-between items-center w-screen mb-2">
        <h1 className="text-2xl md:text-4xl ml-4">Dragon Ball Heroes</h1>
        <Link
          className="mr-4 md:mr-10 text-white chrome bg-gray-700 rounded md:py-1 px-1 md:px-2 transition-colors hover:bg-gray-400 hover:text-gray-700"
          to="/Heroes"
        >
          Ver Mais
        </Link>
      </div>
      <div className="carouselDb mt-3 mb-5 container">
        <Carousel cols={5} rows={1} gap={10} loop>
          <Carousel.Item>
            <img className="rounded imgDB" src={Db} />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="rounded imgDB" src={Db} />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="rounded imgDB" src={Db} />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="rounded imgDB" src={Db} />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="rounded imgDB" src={Db} />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="rounded imgDB" src={Db} />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="rounded imgDB" src={Db} />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="rounded imgDB" src={Db} />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="rounded imgDB" src={Db} />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="rounded imgDB" src={Db} />
            <p className="text-center">Ep XX: Nome do Episodio</p>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="dbEps mt-3 mb-5 container">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center">
            <Link to="/">
              <img className="rounded imgDB mx-7" src={Db} />
              <p className="text-center">Ep XX: Nome do Episodio</p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/">
              <img className="rounded imgDB mx-7" src={Db} />
              <p className="text-center">Ep XX: Nome do Episodio</p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/">
              <img className="rounded imgDB mx-7" src={Db} />
              <p className="text-center">Ep XX: Nome do Episodio</p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/">
              <img className="rounded imgDB mx-7" src={Db} />
              <p className="text-center">Ep XX: Nome do Episodio</p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/">
              <img className="rounded imgDB mx-7" src={Db} />
              <p className="text-center">Ep XX: Nome do Episodio</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
