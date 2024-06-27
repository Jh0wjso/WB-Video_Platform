import { Link } from "react-router-dom";
import { IoIosPlayCircle } from "react-icons/io";
import { DbzEpData } from "../../../data/Carousel/DragonballZEps.data";

export default function DragonBallZEpCarousel() {
  return (
    <div className="containerHomeEp">
      <div className="container flex items-center justify-center py-4">
        <p className="mx-6 text-xl text-gray-400">All</p>
        <p className="mx-6 text-xl">Anime</p>
        <p className="mx-6 text-xl">Movies</p>
        <p className="mx-6 text-xl">Mangas</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {DbzEpData.map((item) => (
          <Link
            to={`/${item.url}`}
            className="relative m-3 flex flex-col items-center transition-all duration-300 ease-in-out"
            style={{ width: 200 }}
          >
            <img
              className="coverImage opacity-60"
              src={item.image}
              style={{ width: 200, height: 400 }}
              alt={item.name}
            />
            <p className="text-white flex flex-col absolute bottom-0 bg-black bg-opacity-50 w-full text-start p-2">
              <p className="font-bold">{item.name}</p>
              <p className="flex items-center text-xs">
                <IoIosPlayCircle className="mr-2" size={20} /> {item.ep}
              </p>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
