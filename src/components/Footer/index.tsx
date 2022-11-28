import React from "react";

import { Link } from "react-router-dom";

import Ball from "../../images/Dragonball.png";

export default function Footer() {
  return (
    <footer className="p-4 flex flex-col items-center bg-gray-700 shadow md:px-6 md:py-8">
      <div className="container sm:flex sm:items-center sm:justify-between">
        <Link
          to="/"
          className="flex items-center mx-3 mb-2 sm:mb-0"
        >
          <img src={Ball} width={35} className="mr-2" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            WatchBall
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
          <li>
            <Link to="/" className="mr-4 hover:text-gray-500 md:mr-6 ">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/" className="mr-4 hover:text-gray-500 md:mr-6">
              Animes
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:text-gray-500 md:mr-6 ">
              Filmes
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-500">
              Notícias
            </Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <span className="block text-sm sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link to="/" className="hover:underline hover:text-gray-500">
            WatchBall
          </Link>
        </span>
      </div>
    </footer>
  );
}
