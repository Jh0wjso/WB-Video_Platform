import React from "react";
import { Link } from "react-router-dom";

import Db from "../../images/Db.jpg";

import "./styles.css"

export default function Animes() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="md:my-14 cardsContainer items-center justify-between flex md:flex-row flex-col">
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 mx-5">
          <Link to="/">
            <img
              src={Db}
              width={250}
              className="mb-5 rounded-lg hover:opacity-50"
            />
          </Link>
          <p className="text-white font-bold uppercase text-2xl">Dragon Ball</p>
        </div>
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 mx-5">
          <Link to="/">
            <img
              src={Db}
              width={250}
              className="mb-5 rounded-lg hover:opacity-50"
            />
          </Link>
          <p className="text-white font-bold uppercase text-2xl">Dragon Ball Z</p>
        </div>

        <div className="cardAnime text-center flex flex-col items-center h-full p-4 mx-5">
          <Link to="/">
            <img
              src={Db}
              width={250}
              className="mb-5 rounded-lg hover:opacity-50"
            />
          </Link>
          <p className="text-white font-bold uppercase text-2xl">Dragon Ball Z KAI</p>
        </div>
      </div>
      <div className="md:mb-14 cardsContainer items-center justify-between flex md:flex-row flex-col">
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 mx-5">
          <Link to="/">
            <img
              src={Db}
              width={250}
              className="mb-5 rounded-lg hover:opacity-50"
            />
          </Link>
          <p className="text-white font-bold uppercase text-2xl">Dragon Ball Super</p>
        </div>
        <div className="cardAnime text-center flex flex-col items-center h-full p-4 mx-5">
          <Link to="/">
            <img
              src={Db}
              width={250}
              className="mb-5 rounded-lg hover:opacity-50"
            />
          </Link>
          <p className="text-white font-bold uppercase text-2xl">Dragon Ball GT</p>
        </div>

        <div className="cardAnime text-center flex flex-col items-center h-full p-4 mx-5">
          <Link to="/">
            <img
              src={Db}
              width={250}
              className="mb-5 rounded-lg hover:opacity-50"
            />
          </Link>
          <p className="text-white font-bold uppercase text-2xl">Dragon Ball Heroes</p>
        </div>
      </div>
    </div>
  );
}
