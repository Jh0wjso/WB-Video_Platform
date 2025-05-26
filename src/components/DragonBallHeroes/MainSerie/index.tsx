import "./styles.css";
import Header from "../../Header";
import { DBHDesc } from "../../../data/DBH/DBHdesc.data";

export default function DBHeroesSerie() {
  return (
    <>
      <div className="boxHeroes h-screen flex flex-col items-center justify-between pb-32">
        <Header />
        <section className="bg-transparent flex flex-col items-start justify-center px-10">
          <section className="flex flex-col">
            <div className="mb-5">
              <h1 className="text-7xl font-extrabold mb-3">{DBHDesc.name}</h1>
              <ul className="categoriesClass">
                {DBHDesc.categories.map((item) => (
                  <li className="m-2 text-lg font-bold border-2 border-white rounded p-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="descriptionClass">
              {DBHDesc.description}
            </p>
          </section>
        </section>
      </div>
    </>
  );
}
