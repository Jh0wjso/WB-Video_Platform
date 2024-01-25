import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Ball from "../../images/Dragonball.png";
import { HeaderContent } from "../../data/Header/HeaderContent.data";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="containerHeader">
      <div className="navbarContent">
        <div>
          <div className="navBarView">
            <Link to="/" className="flex flex-row items-center">
              <img src={Ball} width={75} className="mr-2" />
              <h1 className="pageTittle">WATCHBALL</h1>
            </Link>
            <div className="md:hidden">
              <button
                className="navbarButton"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="navbarLinksContainer">
              {HeaderContent.map((e) => (
                <li className="navLink">
                  <Link to={e.link}>{e.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="navbarContent w-[60%]">
      <div className="subHeader">
        <Link className="animeH" to={"classic"}>DB</Link>
        <Link className="animeH" to={"dbz"}>DBZ</Link>
        <Link className="animeH" to={"dbkai"}>DBK</Link>
        <Link className="animeH" to={"dbsuper"}>DBS</Link>
        <Link className="animeH" to={"dbheroes"}>DBH</Link>
      </div>
      </div>
    </nav>
  );
}
