import { Link } from "react-router-dom";
import { IoIosPlayCircle } from "react-icons/io";
import { DbzEpData } from "../../../data/Carousel/DragonballZEps.data";

export default function DragonBallZEpCarousel() {
  return (
    <div className="containerHomeEp flex flex-col">
      <div className="flex flex-wrap justify-center">
        {DbzEpData.map((item: any) => (
          <Link
            to={`/${item.url}`}
            className="contentContainer"
          >
            <img
              className="coverImage opacity-60"
              src={item.image}
              style={{ width: 300, height: 500 }}
              alt={item.name}
            />
            <p className="nameBox">
              <p className="font-bold">{item.name}</p>
              <p className="flex items-center text-xs">
                <IoIosPlayCircle className="mr-2" size={20} /> {item.ep}
              </p>
            </p>
          </Link>
        ))}
      </div>
      <div className="buttonsContainer">
        <Link to="/animes" className="mainButtonHome m-2">
          Animes
        </Link>
        <Link to="/filmes" className="mainButtonHome m-2">
          Filmes
        </Link>
      </div>
    </div>
  );
}
