import "./styles.css";

import Img from "../../images/dbReduced.jpg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <span className="nameNews">
        Novidades
      </span>

      <div className="flex flex-col gap-8 items-center">
        <Link
          to={`video/O Terrível Rei das Trevas Ataca! A terrível Batalha Começa!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 46</p>
        </Link>
        <Link
          to={`video/A Batalha Decisiva no Reino dos Deuses! O Poder do Tempo se Aproxima!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 45</p>
        </Link>
        <Link
          to={`video/Goku vs O Guerreiro de Preto! Lutando pelos seus Próprios Destinos!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 44</p>
        </Link>
        <Link
          to={`assistir/Super Hero/1n4byzVSVcTeWcbzC9soMx4XfrGKm1YuG`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Super<br/>Super Hero</p>
        </Link>
        <Link
          to={`video/Uma Batalha Feroz que Transcende o Tempo! A Ameaça dos Guerreiros de Preto!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 43</p>
        </Link>
        <Link
          to={`video/Goku vs O Guerreiro de Preto! Lutando pelos seus Próprios Destinos!/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 42</p>
        </Link>
      </div>
    </aside>
  );
}
