import { Link } from "react-router-dom";
import "../styles.css";

export default function SeasonOne() {
  return (
    <div className="flex flex-col border rounded p-5">
      <h1 className="text-center text-4xl font-bold">Saga de Pilaf</h1>
      <section className="mt-8 flex flex-col items-center">
        <section className="flex flex-row my-5">
          <Link
            to="/video/1/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 1
          </Link>
          <Link
            to="/video/2/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 2
          </Link>
          <Link
            to="/video/3/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 3
          </Link>
          <Link
            to="/video/4/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 4
          </Link>
          <Link
            to="/video/5/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 5
          </Link>
          <Link
            to="/video/6/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 6
          </Link>
        </section>
        <section className="flex flex-row my-5">
          <Link
            to="/video/7/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 7
          </Link>
          <Link
            to="/video/8/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 8
          </Link>
          <Link
            to="/video/9/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 9
          </Link>
          <Link
            to="/video/10/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 10
          </Link>
          <Link
            to="/video/11/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 11
          </Link>
          <Link
            to="/video/12/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 12
          </Link>
        </section>
        <Link
            to="/video/13/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
            className="linkToEpisode"
          >
            Episodio 13
          </Link>
      </section>
    </div>
  );
}
