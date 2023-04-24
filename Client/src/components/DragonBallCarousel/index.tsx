import { Link } from "react-router-dom";
import Carousel from "better-react-carousel";

import DbS from "../../images/super.jpeg";
import { DBZCarouselData } from "../../data/Carousel/DBZCarousel.data";

export default function DragonBallCarousel() {
  return (
    <div className="container flex flex-col items-center mt-9 w-screen">
      <div className="container bg-gray-700 flex p-2 flex-row justify-between items-center w-screen border-gray-700 rounded-t-lg">
        <h1 className="text-2xl text-white md:text-4xl ml-4">Super</h1>
        <Link
          className="mr-4 md:mr-10 text-white chrome bg-orange-600 rounded md:py-1 px-1 md:px-2 transition-colors hover:bg-orange-400 font-bold"
          to="/dbsuper"
        >
          Ver Mais
        </Link>
      </div>
      <div className="carouselDb p-5 text-center font-bold mb-5 container text-gray-700 border-2 w-full rounded-b-lg bg-gray-300 md:border-gray-700">
        <Carousel cols={5} rows={1} gap={10} loop>
          {DBZCarouselData.map((item) => (
            <Carousel.Item>
              <Link
                to={`/video/${item.ep}/${item.url}`}
                className="imageCarousel"
              >
                <img className="coverImage" src={DbS} />
                <p>{`${item.name}`}</p>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
