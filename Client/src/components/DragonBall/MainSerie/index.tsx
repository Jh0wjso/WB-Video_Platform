import { Link } from "react-router-dom";
import "./styles.css";
import { DBDesc } from "../../../data/Classic/DBZdesc.data";

export default function DBSerie() {
  return (
    <>
      <div className="box h-screen flex items-center justify-center">
        <section className="bg-transparent flex flex-col items-start justify-center px-10">
          <section className="flex flex-col">
            <div className="mb-5">
              <h1 className="text-7xl font-extrabold mb-3">{DBDesc.name}</h1>
              <ul className="categoriesClass">
                {DBDesc.categories.map((item) => (
                  <li className="m-2 text-lg font-bold border-2 border-white rounded p-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="descriptionClass">
              {DBDesc.description}
            </p>
            <Link to={DBDesc.link} className="mainButtonHome">
              Assistir
            </Link>
          </section>
        </section>
      </div>
    </>
  );
}
