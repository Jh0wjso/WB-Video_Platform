import { Link } from "react-router-dom";
import { DbzEpData } from "../../data/Carousel/DragonballZEps.data";
import "./styles.css";
import { DBSCarouselData } from "../../data/Carousel/DBZCarousel.data";

export default function HomeEp() {
  return (
    <div className="containerHomeEp">
      {DBSCarouselData.map((item) => (
        <Link
          to={`/video/${item.ep}/${item.url}`}
          className="hover:underline m-3"
        >
          <img className="coverImage" src={`${item.image}`} width={350} />
          <div className="flex flex-row items-center">
            {
              /*
              <Link to={"/dbsuper"}>
              <img
                src="https://art.pixilart.com/9f2029fa1515b8a.png"
                className="rounded-full mr-2 mt-2"
                width={40}
              />
            </Link>
            */
            }
            <p className="text-white mt-5">{`${item.name}`}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
