import Carousel, { Item } from "better-react-carousel";
import { Link } from "react-router-dom";
import "./styles.css";
import { MovieZData } from "../../../data/Movies/MovieZcontent.data";

export default function MovieContentZ() {
  return (
    <div className="containerCarousel">
      <div className="conteinerZmovies">
        <h1 className="carouselTittle">Filmes</h1>
        <Link
          className="mr-4 md:mr-10 text-white chrome bg-orange-600 rounded md:py-1 px-1 md:px-2 transition-colors hover:bg-orange-400 font-bold"
          to="/filmes"
        >
          Ver Mais
        </Link>
      </div>
      <div className="carouselDb">
        <Carousel cols={5} rows={1} gap={10} loop>
          {MovieZData.map((item) => (
            <Carousel.Item>
              <Link to={`${item.path}`} className="imageCarousel">
                <img className="coverImage" src={`${item.poster}`} />
                <p>{`${item.tittle}`}</p>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
