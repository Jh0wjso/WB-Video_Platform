import { Link } from "react-router-dom";
import { DBZDesc } from "../../data/DBZ/DBZdesc.data";
import "./styles.css";

export default function MainSerie() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <section className="bg-transparent flex flex-col items-start justify-center px-10">
          <section className="flex flex-col">
            <div className="mb-5">
              <h1 className="text-7xl font-extrabold mb-3">{DBZDesc.name}</h1>
              <ul className="categoriesClass">
                {DBZDesc.categories.map((item) => (
                  <li className="m-2 text-lg font-bold border-2 border-white rounded p-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="descriptionClass">
              {DBZDesc.description}
            </p>
            <Link to={DBZDesc.link} className="mainButtonHome">
              Watch Now
            </Link>
          </section>
        </section>
      </div>
    </>
  );
}
