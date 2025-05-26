import { Link } from "react-router-dom";

import "./styles.css";
import Header from "../../components/Header";
import { AnimeSData } from "../../data/AnimesData/AnimeSType.data";
import { IoIosPlayCircle } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

export default function Animes() {
  return (
    <>
      <Header />
      <div className="containerContent">
      <div className="container hover:opacity-75">
        <Link className="flex items-center" to={"/"}>
          <IoArrowBack size={25} />{" "}Inicio
        </Link>
      </div>
        <div className="cardsContainer space-x-4 space-y-2">
          {AnimeSData.map((item) => (
            <Link
              to={`/${item.url}`}
              className="contentContainer"
            >
              <img
                className="coverImage opacity-60"
                src={item.image}
                style={{ width: 300, height: 500 }}
                alt={item.name}
              />
              <p className="nameBox">
                <p className="font-bold">{item.name}</p>
                <p className="flex items-center text-xs">
                  <IoIosPlayCircle className="mr-2" size={20} /> {item.ep}
                </p>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
