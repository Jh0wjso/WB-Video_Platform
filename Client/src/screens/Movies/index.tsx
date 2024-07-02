import Header from "../../components/Header";
import MovieRow from "../../components/MoviesRowComponents/MovieRow";
import "./styles.css";


export default function Movies() {
  return (
    <div className="containerContent">
      <Header />
      <MovieRow />
    </div>
  );
}
