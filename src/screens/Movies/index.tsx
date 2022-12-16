import "./styles.css";
import MovieRowOne from "../../components/MovieRowOne";
import MovieRowTwo from "../../components/MovieRowTwo";
import MovieRowThree from "../../components/MovieRowThree";
import MovieRowFour from "../../components/MovieRowFour";
import MovieRowFive from "../../components/MovieRowFive";
import MovieRowSix from "../../components/MovieRowSix";

export default function Movies() {
  return (
    <div className="min-h-screen text-white text-xl md:text-base flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-10">
        Todos os filmes disponíveis
      </h1>
      <MovieRowOne />
      <MovieRowTwo />
      <MovieRowThree />
      <MovieRowFour />
      <MovieRowFive />
      <MovieRowSix />
    </div>
  );
}
