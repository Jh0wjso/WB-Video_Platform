import "./styles.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <span className="nameNews">
        Novidades
      </span>

      <div className="flex flex-col gap-8 items-center">
        <Link
          to={`video/O Terrível Rei das Trevas Ataca! A terrível Batalha Começa!/1-DhO14a8INhEIwti05IgjpeH90SRAKM3`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 46</p>
        </Link>
        <Link
          to={`video/A Batalha Decisiva no Reino dos Deuses! O Poder do Tempo se Aproxima!/1-9qY8jyia8r_pE4znXiH4uNB8FwO7-0R`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 45</p>
        </Link>
        <Link
          to={`video/Goku vs O Guerreiro de Preto! Lutando pelos seus Próprios Destinos!/1-BHedmMLqObIc8WVE95vPUTFEJbdTYzN`}
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
          to={`video/Uma Batalha Feroz que Transcende o Tempo! A Ameaça dos Guerreiros de Preto!/1-5oPWzBhTuJR43oBfy6eURyFeB8vQZkr`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 43</p>
        </Link>
        <Link
          to={`video/Goku vs O Guerreiro de Preto! Lutando pelos seus Próprios Destinos!/1-7JJ5tUojK98bco-ldpPY6pF_dWZmEhS`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 42</p>
        </Link>
        <Link
          to={`video/Plano Em Ação! Os Guerreiros Mais Poderosos de Todo o Espaço-Tempo se Reúnem!/1-LoIjbSORoTxxwNKpYqNbVpagvVxvLAq`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 41</p>
        </Link>
        <Link
          to={`video/O Último Poder Total! Batalha Feroz Pelo Futuro, Finalmente Resolvida!/1liykwjBh92PI4gRUCap9MbGjJw9Cw1AP`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 40</p>
        </Link>
        <Link
          to={`video/A Ameaça Obstrutiva De Fu! O Nascimento Do Milagrosamente Forte Combi!/1lS5HvESEyzok_W-LXfyRj3laHZGbrMy-`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 39</p>
        </Link>
        <Link
          to={`video/A Batalha Final No Universo Falso! Confronto De Azul E Escarlate/1lSLINDZNWhVNNK3tahAWXgEVz91DRhNd`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 38</p>
        </Link>
        <Link
          to={`video/Guerreiro De Preto Vs. Goku Preto! O Enredo Sombrio Se Torna Claro!/1lSrZJKHOiiyT7JqIChxoOm_jUnOH1dQ-`}
          className="cardNew"
        >
          <p className="newsTittle">Dragon Ball Heroes <br/>Episódio 37</p>
        </Link>
      </div>
    </aside>
  );
}
