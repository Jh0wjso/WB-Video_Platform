import { Routes, Route } from "react-router-dom";

import Inicio from "./screens/Inicio";
import Animes from "./screens/Animes";
import Movies from "./screens/Movies";
import Video from "./screens/Video";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/animes" element={<Animes />} />
      <Route path="/filmes" element={<Movies />} />
      <Route path="/video">
        <Route path=":number/:url" element={<Video />} />
      </Route>
    </Routes>
  );
}
