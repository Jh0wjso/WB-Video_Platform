import "./styles.css";

import Home from "../../components/Home";
import Sidebar from "../../components/SideBar";

export default function Inicio() {
  return (
    <div className="flex w-full justify-between flex-1 min-h-screen">
      <div className="homeContent">
        <Home />
      </div>
      <Sidebar />
    </div>
  );
}
