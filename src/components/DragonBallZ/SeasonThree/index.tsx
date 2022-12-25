import { Link } from "react-router-dom";
import "../styles.css";

export default function SeasonThreeBbz() {
  return (
    <div className="flex flex-col border rounded p-5 my-5">
      <h1 className="text-center text-4xl font-bold">Eu sou o filho de Goku</h1>
      <section className="mt-8 flex flex-col items-center">
        <section className="episodeButtons">
          <Link
            to="/video/Eu sou o filho de Goku/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 100
          </Link>
          <Link
            to="/video/O ultimo desejo/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 101
          </Link>
          <Link
            to="/video/Uma batalha extraodinaria/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 102
          </Link>
          <Link
            to="/video/O desespero de Freeza/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 103
          </Link>
          <Link
            to="/video/A auto-destruição de Freeza/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 104
          </Link>
          <Link
            to="/video/Freeza perde a luta/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 105
          </Link>
        </section>
        <section className="episodeButtons">
          <Link
            to="/video/Namekusei Explode/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 106
          </Link>
          <Link
            to="/video/Os guerreiros Z ressuscitam/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 107
          </Link>
        </section>
      </section>
    </div>
  );
}
