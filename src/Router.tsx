import { Routes, Route } from "react-router-dom";
import Inicio from "./screens/Inicio";
import Animes from "./screens/Animes";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/animes" element={<Animes />} />
        </Routes>
    );
}