import "./styles.css";

import Home from "../../components/Home";
import Sidebar from "../../components/SideBar";
import Header from "../../components/Header";

export default function Inicio() {
  return (
    <div className="home flex-col w-full flex-1 min-h-screen">
      <Header />
      <div className="homeContent">
        <Home />
      </div>
    </div>
  );
}
