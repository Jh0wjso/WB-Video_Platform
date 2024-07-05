import "./styles.css";
import Header from "../../Header";
import { DBKaiDesc } from "../../../data/DBK/DBKaidesc.data";

export default function DBKaiSerie() {
  return (
    <>
      <div className="boxKai h-screen flex flex-col items-center justify-between pb-32">
        <Header />
        <section className="bg-transparent flex flex-col items-start justify-center px-10">
          <section className="flex flex-col">
            <div className="mb-5">
              <h1 className="text-7xl font-extrabold mb-3">{DBKaiDesc.name}</h1>
              <ul className="categoriesClass">
                {DBKaiDesc.categories.map((item) => (
                  <li className="m-2 text-lg font-bold border-2 border-white rounded p-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="descriptionClass">
              {DBKaiDesc.description}
            </p>
          </section>
        </section>
      </div>
    </>
  );
}
