import { Link, useParams } from "react-router-dom";
import "./styles.css";
import VideoContentAlternative from "../../components/NewVideoContentAlternative";

export default function VideoAlternative() {
  const name = useParams();
  const Ep = name.number;
  const Url = name.url;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center m-2 md:m-5">
      <VideoContentAlternative number={Ep ? Ep?.toString() : ""} url={Url ? Url?.toString() : ""} />
      <section className="btnContainer">
        <Link to="/" className="btnhref">
          Inicio
        </Link>
        <Link to="/animes" className="btnhref">
          Catálogo
        </Link>
      </section>
    </div>
  );
}
