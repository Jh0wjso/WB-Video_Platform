import { Link, useParams } from "react-router-dom";
import "./styles.css";
import MovieContent from "../../components/MovieComponent";

export default function MovieWatch() {
  const name = useParams();
  const Ep = name.number;
  const Url = name.url;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center m-2 md:m-5">
      <MovieContent name={Ep ? Ep?.toString() : ""} url={Url ? Url?.toString() : ""} />
      <section className="flex flex-col items-center">
        <Link to="/" className="btnhref">
          Página inicial
        </Link>
        <Link to="/filmes" className="btnhref">
          Catalogo de animes
        </Link>
      </section>
    </div>
  );
}
