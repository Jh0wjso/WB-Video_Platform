import { Link } from "react-router-dom";

import Vinteum from "../../images/MoviesImages/21.jpg";
import Vintedois from "../../images/MoviesImages/22.jpg";

export default function MovieRowSix() {
  return (
    <div className="cardsContainer">
      <div className="cardAnime">
        <img src={Vinteum} width={250} className="imageCard" />
        <p className="font-bold">Dragon Ball Evolution</p>
        <div className="btnContent">
          <Link
            to="/assistir/Dragon Ball Evolution/1n6DkQBzN8_rTXgIFeviNIPm7aqdwKtIO"
            className="btnWatch"
          >
            Dublado
          </Link>
        </div>
      </div>
      <div className="cardAnime">
        <img src={Vintedois} width={250} className="imageCard" />
        <p className="font-bold">Super Hero</p>
        <div className="btnContent">
          <Link
            to="/assistir/Super Hero/1n4byzVSVcTeWcbzC9soMx4XfrGKm1YuG"
            className="btnWatch"
          >
            Dublado
          </Link>
        </div>
      </div>
    </div>
  );
}
