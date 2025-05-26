import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./screens/Inicio";
import Animes from "./screens/Animes";
import ClassicScreen from "./screens/ClassicScreen";
import DBHeroesScreen from "./screens/DBHScreen";
import DBKaiScreen from "./screens/DBKaiScreen";
import DBSuperScreen from "./screens/DBSuperScreen";
import DBZScreen from "./screens/DBZScreen";
import GTScreen from "./screens/GTScreen";
import Movies from "./screens/Movies";
import MovieWatch from "./screens/MovieWatch";
import News from "./screens/News";
import OvaScreen from "./screens/OvaScreen";
import PageNotFound from "./screens/PageNotfound";
import SpecialScreen from "./screens/SpecialScreen";
import Video from "./screens/Video";
import Video2 from "./screens/Video2";
import VideoAlternative from "./screens/Video3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/video">
          <Route path=":number/:url" element={<Video />} />
        </Route>
        <Route path="/video2">
          <Route path=":number/:url" element={<Video2 />} />
        </Route>
        <Route path="/video3">
          <Route path=":number/:url" element={<VideoAlternative />} />
        </Route>
        <Route path="/assistir">
          <Route path=":name/:url" element={<MovieWatch />} />
        </Route>
        <Route path="/classic" element={<ClassicScreen />} />
        <Route path="/dbz" element={<DBZScreen />} />
        <Route path="/dbgt" element={<GTScreen />} />
        <Route path="/ova" element={<OvaScreen />} />
        <Route path="/special" element={<SpecialScreen />} />
        <Route path="/dbkai" element={<DBKaiScreen />} />
        <Route path="/dbsuper" element={<DBSuperScreen />} />
        <Route path="/dbheroes" element={<DBHeroesScreen />} />
        <Route path="/news" element={<News />} />
        <Route path="/news" element={<News />}>
          <Route path=":newsUrl" />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
