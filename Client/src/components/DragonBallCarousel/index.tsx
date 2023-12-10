import { Link } from "react-router-dom";
import Carousel from "better-react-carousel";
import { DBSCarouselData } from "../../data/Carousel/DBZCarousel.data";

export default function DragonBallCarousel() {
  return (
    <div className="container flex flex-col items-center mt-9">
      <div className="conteinerZmovies">
        <h1 className="carouselTittle">Super</h1>
        <Link
          className="mr-4 md:mr-10 text-white chrome bg-orange-600 rounded md:py-1 px-1 md:px-2 transition-colors hover:bg-orange-400 font-bold"
          to="/dbsuper"
        >
          Ver Mais
        </Link>
      </div>
      <div className="carouselDb text-center">
        <Carousel cols={5} rows={1} gap={10} loop>
          {DBSCarouselData.map((item) => (
            <Carousel.Item>
              <Link
                to={`/video/${item.ep}/${item.url}`}
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
