import { Link } from "react-router-dom";
import "./styles.css";
import { DBSCarouselData } from "../../data/Carousel/DBZCarousel.data";

export default function HomeEp() {
  return (
    <div className="containerHomeEp">
      <div className="container flex p-2 flex-row justify-between items-center border-b rounded">
        <h1 className="carouselTittle">Dragon Ball Super</h1>
        <Link
          className="mr-4 md:mr-10 text-white chrome bg-orange-600 rounded md:py-1 px-1 md:px-2 transition-colors hover:bg-orange-400 font-bold"
          to="/dbsuper"
        >
          Ver Mais
        </Link>
      </div>
      {DBSCarouselData.map((item) => (
        <Link
          to={`/video/${item.ep}/${item.url}`}
          className="hover:underline m-1"
        >
          <img className="coverImage" src={`${item.image}`} width={350} />
          <div className="flex flex-row items-center">
            <p className="text-white">{`${item.name}`}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
