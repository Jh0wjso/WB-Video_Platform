import "./styles.css";
import { DBDesc } from "../../../data/Classic/DBZdesc.data";
import Header from "../../Header";

export default function DBSerie() {
  return (
    <>
      <div className="box h-screen flex flex-col items-center justify-between pb-32">
        <Header />
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
            <p className="descriptionClass">{DBDesc.description}</p>
          </section>
        </section>
      </div>
    </>
  );
}
