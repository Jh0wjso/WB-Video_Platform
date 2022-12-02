import { Link } from "react-router-dom";

import Db from "../../images/Db.jpg";

import "./styles.css";

export default function Animes() {
  return (
    <div className="min-h-scree text-gray-600 flex flex-col items-center justify-center">
      <div className="md:my-14 cardsContainer items-center justify-between flex md:flex-row flex-col">
        <Link
          to="/"
          className="cardAnime hover:opacity-50 hover:text-gray-500 hover:underline text-center flex flex-col items-center h-full p-4 m-5 bg-white rounded"
        >
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase text-2xl">Dragon Ball</p>
        </Link>
        <Link
          to="/"
          className="cardAnime hover:opacity-50 hover:text-gray-500 hover:underline text-center flex flex-col items-center h-full p-4 m-5 bg-white rounded"
        >
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase text-2xl">Dragon Ball Z</p>
        </Link>

        <Link
          to="/"
          className="cardAnime hover:opacity-50 hover:text-gray-500 hover:underline text-center flex flex-col items-center h-full p-4 m-5 bg-white rounded"
        >
          <img src={Db} width={250} className="mb-5 rounded-lg " />
          <p className="font-bold uppercase text-2xl">Dragon Ball Z Kai</p>
        </Link>
      </div>
      <div className="md:mb-14 cardsContainer items-center justify-between flex md:flex-row flex-col">
      <Link
          to="/"
          className="cardAnime hover:opacity-50 hover:text-gray-500 hover:underline text-center flex flex-col items-center h-full p-4 m-5 bg-white rounded"
        >
          <img
            src={Db}
            width={250}
            className="mb-5 rounded-lg "
          />
          <p className="font-bold uppercase text-2xl">Dragon Ball Super</p>
        </Link>
        <Link
          to="/"
          className="cardAnime hover:opacity-50 hover:text-gray-500 hover:underline text-center flex flex-col items-center h-full p-4 m-5 bg-white rounded"
        >
          <img
            src={Db}
            width={250}
            className="mb-5 rounded-lg "
          />
          <p className="font-bold uppercase text-2xl">Dragon Ball GT</p>
        </Link>

        <Link
          to="/"
          className="cardAnime hover:opacity-50 hover:text-gray-500 hover:underline text-center flex flex-col items-center h-full p-4 m-5 bg-white rounded"
        >
          <img
            src={Db}
            width={250}
            className="mb-5 rounded-lg "
          />
          <p className="font-bold uppercase text-2xl">Dragon Ball Heroes</p>
        </Link>
      </div>
    </div>
  );
}
