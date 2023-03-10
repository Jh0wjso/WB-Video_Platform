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
              to="/video/O Prêmio da Paz! Quem vai ficar com os 100 Milhões de Zenis/1fz0GqbpP4fInBjHV_Yy0Z6fadMoRdPqv"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img src={DbS} />
              <p>O Prêmio da Paz! Quem vai ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/As Férias Prometidas! O Vegeta Viaja com a Família/1fg4xCXI8PHx9R3xvR-GRVZdSowYE7oy8"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS1} />
              <p>As Férias Prometidas! O Vegeta ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/Cadê o Resto do Meu Sonho?! Em Busca do Deus Super Saiyajin/1fvAIZqfwbGJQ57qyW4Cpqre6TPgPw6iP"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS2} />
              <p>Cadê o Resto do Meu ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/Em Busca das Esferas do Dragão! O Grande Plano de Pilaf/1flXZsiMZzfgrwlqRmo0S8HAsrCozUwHJ"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS} />
              <p>Em Busca das ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/Grande Luta no Planeta do Senhor Kaioh! Goku vs. Bills/1fqIp8Z9kq1J_QQURhk2HZDuEPRD2LK3z"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS1} />
              <p>Grande Luta no Planeta ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/Não Irritem o Deus da Destruição! Uma Festa de Aniversário Animada/1fsTfVgVlflgjtr6GcHsaEnTS9M2AmX99"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS2} />
              <p>Não Irritem o ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/Como Ousa Bater na Minha Bulma? Vegeta Fica Furioso de Repente/1gQik47Ywt8jPOUVd635eRl65BZg3KwB8"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS} />
              <p>Como Ousa Bater na Minha ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/Goku Aparece! Bills Nos Dá Uma Última Chance/1g6_MpfrNXzQEKX2emgd6495Blue3YDyn"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS1} />
              <p>Goku Aparece! Bills...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/Desculpe a Demora, Senhor Bills! Finalmente Nasce o Deus/1gB98181hbyi37RNhujrXHShdtTzApUA8"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS2} />
              <p>Desculpe a Demora, Senhor Bills! ...</p>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              to="/video/Mostre a Ele, Goku! O Poder do Deus Super Saiyajin/1gDvZaBSGpidzmToKA5Kr3N-lMnxofvqJ"
              className="rounded hover:opacity-50 hover:underline"
            >
              <img className="rounded hover:opacity-50" src={DbS} />
              <p>Mostre a Ele, ...</p>
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
