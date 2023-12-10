import Carousel from "better-react-carousel";
import { Link } from "react-router-dom";
import DbH from "../../../images/capaDBH.jpg";
import "./styles.css";
import { HeroesCarouselData } from "../../../data/Carousel/HeroesCarousel.data";

export default function HeroesCarousel() {
  return (
    <div className="container border-black rounded flex flex-col items-center mt-9">
      <div className="container flex p-2 flex-row justify-between items-center">
        <h1 className="carouselTittle">Heroes</h1>
        <Link
          className="mr-4 md:mr-10 text-white chrome bg-orange-600 rounded md:py-1 px-1 md:px-2 transition-colors hover:bg-orange-400 font-bold"
          to="/dbheroes"
        >
          Ver Mais
        </Link>
      </div>
      <div className="carouselDb">
        <Carousel cols={5} rows={1} gap={10} loop>
          {HeroesCarouselData.map((item) => (
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
