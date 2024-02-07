import { Link } from "react-router-dom";

import Ball from "../../images/Dragonball.png";
import "./styles.css";
import { HeaderContent } from "../../data/Header/HeaderContent.data";

export default function Footer() {
  return (
    <footer className="p-4 flex flex-col justify-center items-center bg-gray-700 shadow md:px-6 md:py-8">
      <div className="footerContent container md:flex items-center md:flex-row md:items-center justify-center md:justify-between">
        <Link to="/" className="flex items-center mx-3 mb-2 sm:mb-0">
          <img src={Ball} width={35} className="mr-2" />
          <span className="self-center text-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            WatchBall
          </span>
        </Link>
        <ul className="navbarLinksContainer">
          {HeaderContent.map((e) => (
            <li className="hover:text-gray-500">
              <Link to={e.link}>{e.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="/" className="hover:underline hover:text-gray-500">
            WatchBall
          </Link>
        </span>
      </div>
    </footer>
  );
}
