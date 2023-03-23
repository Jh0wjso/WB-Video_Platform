import { Link } from "react-router-dom";
import Carousel from "better-react-carousel";

import DbS from "../../images/super.jpeg";
import DbS1 from "../../images/super1.jpg";
import DbS2 from "../../images/supertwo.jpg";

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
          <Carousel.Item>
            <Link
              to="/video/1/1AfK-agZj5AmSdT7-_luJhNN6j46vn6yj"
              className="imageCarousel"
            >
              <img className="coverImage" src={DbS} />
              <p>O Prêmio da Paz! Quem vai ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/2/1AixDc3jH1mM4CJJ1FvKhhHBUuQkGqKQG"
              className="imageCarousel"
            >
              <img className="coverImage" src={DbS1} />
              <p>As Férias Prometidas! O Vegeta ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/3/1Aj-qAkMZPkwJDNfJFcmtBTEOUYfa1dwO"
              className="imageCarousel"
            >
              <img className="coverImage" src={DbS2} />
              <p>Cadê o Resto do Meu ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/4/1AzRiHMwzr8baOpOkKvWu47BMvBJnvqG9"
              className="imageCarousel"
            >
              <img className="coverImage" src={DbS} />
              <p>Em Busca das ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/5/1AIxGio6_UzVUkSbyI7Gy5u1eQdZmsWd0"
              className="imageCarousel"
            >
              <img className="coverImage" src={DbS1} />
              <p>Grande Luta no Planeta ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/6/1AP7HKYNlXWpxWfQiDcUIg7YPb3obEnoN"
              className="imageCarousel"
            >
              <img className="coverImage" src={DbS2} />
              <p>Não Irritem o ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/7/1BI7iPLga32D7hs0uUg6j3YTO-FiwhfVZ"
              className="imageCarousel"
            >
              <img className="coverImage" src={DbS} />
              <p>Como Ousa Bater na Minha ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/8/1BL9YlBBWZmShBEuWkbyzLu2Q0rJ292wG"
              className="imageCarousel"
            >
              <img className="coverImage" src={DbS1} />
              <p>Goku Aparece! Bills...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/9/1B5W2Ye2oL_qlh97D0pBWWaEeKXg5OgW6"
              className="imageCarousel"
            >
              <img className="coverImage" src={DbS2} />
              <p>Desculpe a Demora, Senhor Bills! ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/10/1BBovwQiXC890WCpagLe2JGIw1O3EFn_f"
              className="imageCarousel"
            >
              <img className="coverImage" src={DbS} />
              <p>Mostre a Ele, ...</p>
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
