import { Link } from "react-router-dom";
import Carousel from "better-react-carousel";
import DbS from "../../../images/capaDBZ.jpeg";
import { DbzEpData } from "../../../data/Carousel/DragonballZEps.data";

export default function DragonBallZEpCarousel() {
  return (
    <div className="container flex flex-col items-center mt-9">
      <div className="container flex p-2 flex-row justify-between items-center rounded-t-lg">
        <h1 className="carouselTittle">DBZ</h1>
        <Link
          className="mr-4 md:mr-10 text-white chrome bg-orange-600 rounded md:py-1 px-1 md:px-2 transition-colors hover:bg-orange-400 font-bold"
          to="/dbz"
        >
          Ver Mais
        </Link>
      </div>
      <div className="carouselDb p-5 text-center font-bold mb-5 container text-gray-700 rounded-b-lg">
        <Carousel cols={5} rows={1} gap={10} loop>
          {DbzEpData.map((item) => (
            <Carousel.Item>
              <Link
                to={`/video2/${item.url}/${item.ep}`}
                className="imageCarousel"
              >
                <img className="coverImage" src={`${item.image}`} />
                <p className="text-white mt-5">{`${item.name}`}</p>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
