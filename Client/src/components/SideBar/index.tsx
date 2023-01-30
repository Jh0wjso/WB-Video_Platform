import "./styles.css";

import Img from "../../images/dbReduced.jpg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar w-[15%] h-[75vh] bg-zinc-900 p-6 border-l border-gray-600 my-[15vh]">
      <span className="font-bold text-center text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Novidades Db Heroes
      </span>

      <div className="flex flex-col gap-8 items-center">
        <Link
          to="video/O%20Terrível%20Rei%20das%20Trevas%20Ataca!%20A%20terrível%20Batalha%20Começa!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          className="cardNew"
        >
          <img src={Img} width={50} className="imgCardNew" />
          <p className="font-bold text-white">Episódio 46</p>
        </Link>
        <Link
          to="video/O%20Terrível%20Rei%20das%20Trevas%20Ataca!%20A%20terrível%20Batalha%20Começa!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          className="cardNew"
        >
          <img src={Img} width={50} className="imgCardNew" />
          <p className="font-bold text-white">Episódio 45</p>
        </Link>
        <Link
          to="video/O%20Terrível%20Rei%20das%20Trevas%20Ataca!%20A%20terrível%20Batalha%20Começa!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          className="cardNew"
        >
          <img src={Img} width={50} className="imgCardNew" />
          <p className="font-bold text-white">Episódio 44</p>
        </Link>
        <Link
          to="video/O%20Terrível%20Rei%20das%20Trevas%20Ataca!%20A%20terrível%20Batalha%20Começa!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          className="cardNew"
        >
          <img src={Img} width={50} className="imgCardNew" />
          <p className="font-bold text-white">Episódio 43</p>
        </Link>
        <Link
          to="video/O%20Terrível%20Rei%20das%20Trevas%20Ataca!%20A%20terrível%20Batalha%20Começa!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm"
          className="cardNew"
        >
          <img src={Img} width={50} className="imgCardNew" />
          <p className="font-bold text-white">Episódio 42</p>
        </Link>
      </div>
    </aside>
  );
}
