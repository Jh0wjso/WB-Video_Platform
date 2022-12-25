import { Link } from "react-router-dom";
import "../styles.css";

export default function SeasonFourBbz() {
  return (
    <div className="flex flex-col border rounded p-5">
      <h1 className="text-center text-4xl font-bold">Galik Jr.</h1>
      <section className="mt-8 flex flex-col items-center">
        <section className="episodeButtons">
          <Link
            to="/video/Problemas no templo sagrado/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 108
          </Link>
          <Link
            to="/video/A neblina do mal/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 109
          </Link>
          <Link
            to="/video/Piccolo se torna parte da família do mal/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 110
          </Link>
          <Link
            to="/video/Piccolo enfrenta Gohan/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 111
          </Link>
          <Link
            to="/video/O plano de Piccolo/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 112
          </Link>
          <Link
            to="/video/Kami-Sama e o Sr. Popo vão ao local sagrado/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 113
          </Link>
        </section>
        <section className="episodeButtons">
          <Link
            to="/video/A vida de Kami-Sama está em perigo/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 114
          </Link>
          <Link
            to="/video/A água ultra sagrada salva o mundo/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 115
          </Link>
          <Link
            to="/video/Gohan destrói o planeta malígno/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 116
          </Link>
          <Link
            to="/video/Kuririn pede Maron em casamento/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 117
          </Link>
        </section>
      </section>
    </div>
  );
}
