import MovieRow from "../../components/MoviesRowComponents/MovieRow";
import "./styles.css";


export default function Movies() {
  return (
    <div className="min-h-screen text-white text-xl md:text-base flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-10">
        Todos os filmes disponíveis
      </h1>
      <MovieRow />
    </div>
  );
}
