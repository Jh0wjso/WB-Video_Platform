import MovieRow from "../../components/MoviesRowComponents/MovieRow";
import "./styles.css";


export default function Movies() {
  return (
    <div className="containerContent">
      <h1 className="secondContainer">
        Todos os filmes disponíveis
      </h1>
      <MovieRow />
    </div>
  );
}
