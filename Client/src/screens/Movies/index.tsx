import MovieRowFive from "../../components/MoviesRowComponents/MovieRowFive";
import MovieRowOne from "../../components/MoviesRowComponents/MovieRowOne";
import MovieRowSix from "../../components/MoviesRowComponents/MovieRowSix";
import "./styles.css";


export default function Movies() {
  return (
    <div className="min-h-screen text-white text-xl md:text-base flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-10">
        Todos os filmes disponíveis
      </h1>
      <MovieRowOne />
      <MovieRowFive />
      <MovieRowSix />
    </div>
  );
}
