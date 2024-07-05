import { Link, useParams } from "react-router-dom";
import "./styles.css";
import NewVideoContent from "../../components/NewVideoContent";
import Header from "../../components/Header";

export default function Video2() {
  const name = useParams();
  const Ep = name.number;
  const Url = name.url;

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center m-2 md:m-5">
        <NewVideoContent
          number={Ep ? Ep?.toString() : ""}
          url={Url ? Url?.toString() : ""}
        />
        <section className="btnContainer">
          <Link to="/" className="btnhref">
            Inicio
          </Link>
          <Link to="/animes" className="btnhref">
            Catálogo
          </Link>
        </section>
      </div>
    </>
  );
}
