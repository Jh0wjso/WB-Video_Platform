import { Routes, Route } from "react-router-dom";

import Inicio from "./screens/Inicio";
import Animes from "./screens/Animes";
import Movies from "./screens/Movies";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/animes" element={<Animes />} />
            <Route path="/filmes" element={<Movies />} />
        </Routes>
    );
}