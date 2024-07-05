import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Header from "../../components/Header";
import MovieRow from "../../components/MoviesRowComponents/MovieRow";
import "./styles.css";


export default function Movies() {
  return (
    <div className="containerContent">
      <Header />
      <div className="container hover:opacity-75">
        <Link className="flex items-center" to={"/"}>
          <IoArrowBack size={25} />{" "}Inicio
        </Link>
      </div>
      <MovieRow />
    </div>
  );
}
