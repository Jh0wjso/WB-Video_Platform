import { Link } from "react-router-dom";

import { SpecialData } from "../../data/Movies/Special.data";
import { IoIosPlayCircle } from "react-icons/io";
import Header from "../../components/Header";

export default function SpecialScreen() {
  return (
    <>
      <Header />
      <div className="containerContent">
        <div className="cardsContainer">
          {SpecialData.map((item) => (
            <Link className="contentContainer" to={`${item.path}`}>
              <img
                className="coverImage opacity-60"
                src={item.poster}
                style={{ width: 300, height: 500 }}
                alt={item.tittle}
              />
              <p className="nameBox">
                <p className="flex items-center font-bold">
                  <IoIosPlayCircle className="mr-2" size={20} /> {item.tittle}
                </p>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
