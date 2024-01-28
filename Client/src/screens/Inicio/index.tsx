import "./styles.css";

import Home from "../../components/Home";
import Sidebar from "../../components/SideBar";

export default function Inicio() {
  return (
    <div className="flex w-full justify-between flex-1 min-h-screen">
      <Sidebar />
      <div className="homeContent">
        <Home />
      </div>
    </div>
  );
}

/*
export default function Inicio() {
  return (
    <div className="homeContent">
      <Home />
    </div>
  );
}
*/