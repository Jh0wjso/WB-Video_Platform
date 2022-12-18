import { Link } from "react-router-dom";
import "../styles.css";

export default function SeasonOne() {
  return (
    <div className="flex flex-col border rounded p-5">
      <h1 className="text-center text-4xl font-bold">Saga de Pilaf</h1>
      <section className="mt-8 flex flex-col items-center">
        <section className="episodeButtons">
          <Link
            to="/video/O segredo das Esferas do Dragão/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 1
          </Link>
          <Link
            to="/video/A busca do imperador/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 2
          </Link>
          <Link
            to="/video/A nuvem voadora do Kame/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 3
          </Link>
          <Link
            to="/video/Oolong, o sequestrador de garotas/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 4
          </Link>
          <Link
            to="/video/O forte e malvado Yamcha vive no deserto/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 5
          </Link>
          <Link
            to="/video/Vigie as Esferas do Dragão/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 6
          </Link>
        </section>
        <section className="episodeButtons">
          <Link
            to="/video/O rei Cutelo na montanha do fogo/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 7
          </Link>
          <Link
            to="/video/O Kame-Hame-Ha de Kame/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 8
          </Link>
          <Link
            to="/video/O truque especial do chefe Coelho/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 9
          </Link>
          <Link
            to="/video/As Esferas do Dragão são roubadas/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 10
          </Link>
          <Link
            to="/video/O Dragão é chamado/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 11
          </Link>
          <Link
            to="/video/Um pedido feito ao Deus Dragão/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 12
          </Link>
        </section>
        <Link
            to="/video/A transformação de Goku/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 13
          </Link>
      </section>
    </div>
  );
}
