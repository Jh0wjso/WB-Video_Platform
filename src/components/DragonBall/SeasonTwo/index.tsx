import { Link } from "react-router-dom";
import "../styles.css";

export default function SeasonTwo() {
  return (
    <div className="flex flex-col border rounded my-5 p-5">
      <h1 className="text-center text-4xl font-bold">Saga de Pilaf</h1>
      <section className="mt-8 flex flex-col items-center">
        <section className="episodeButtons">
          <Link
            to="/video/O rival de Goku/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 14
          </Link>
          <Link
            to="/video/A misteriosa garota Lanch/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 15
          </Link>
          <Link
            to="/video/Caça às pedras/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 16
          </Link>
          <Link
            to="/video/OS entregadores de leite/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 17
          </Link>
          <Link
            to="/video/Treinamento ao Estilo de Mestre Kame/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 18
          </Link>
          <Link
            to="/video/O Grande torneio de artes marciais/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 19
          </Link>
        </section>
        <section className="episodeButtons">
          <Link
            to="/video/O Arduo Treinamento podera ser posto em pratica/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 20
          </Link>
          <Link
            to="/video/Cuidado, Kuririn/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 21
          </Link>
          <Link
            to="/video/Yamcha contra Jackie Chun/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 22
          </Link>
          <Link
            to="/video/O terrivel Giran/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 23
          </Link>
          <Link
            to="/video/O ataque furioso de Kuririn/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 24
          </Link>
          <Link
            to="/video/O terrivel ataque aéreo de Nam/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 25
          </Link>
        </section>
        <section className="episodeButtons">
          <Link
            to="/video/A força do Kame-Hame-Ha/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 26
          </Link>
          <Link
            to="/video/Goku em sérios apuros/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 27
          </Link>
          <Link
            to="/video/O desaparecimento de Goku/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 28
          </Link>
        </section>
      </section>
    </div>
  );
}
