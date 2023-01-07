import { Routes, Route } from "react-router-dom";

import Inicio from "./screens/Inicio";
import Animes from "./screens/Animes";
import Movies from "./screens/Movies";
import Video from "./screens/Video";
import MovieWatch from "./screens/MovieWatch";
import ClassicScreen from "./screens/ClassicScreen";
import DBZScreen from "./screens/DBZScreen";
import GTScreen from "./screens/GTScreen";
import OvaScreen from "./screens/OvaScreen";
import SpecialScreen from "./screens/SpecialScreen";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/animes" element={<Animes />} />
      <Route path="/filmes" element={<Movies />} />
      <Route path="/video">
        <Route path=":number/:url" element={<Video />} />
      </Route>
      <Route path="/assistir">
        <Route path=":name/:url" element={<MovieWatch />} />
      </Route>
      <Route path="/classic" element={<ClassicScreen/> } />
      <Route path="/dbz" element={<DBZScreen />} />
      <Route path="/dbgt" element={<GTScreen />} />
      <Route path="/ova" element={<OvaScreen />} />
      <Route path="/special" element={<SpecialScreen />} />
    </Routes>
  );
}
