import { Link } from "react-router-dom";

import Vinteum from "../../../images/MoviesImages/21.jpg";
import Vintedois from "../../../images/MoviesImages/22.jpg";

export default function MovieRowSix() {
  return (
    <div className="cardsContainer">
      <Link to={"/assistir/Dragon Ball Evolution/1n6DkQBzN8_rTXgIFeviNIPm7aqdwKtIO"} className="cardAnime">
        <img src={Vinteum} width={250} className="coverImage" />
        <p className="textCard">Dragon Ball Evolution</p>
      </Link>
      <Link to={"/assistir/Super Hero/1n4byzVSVcTeWcbzC9soMx4XfrGKm1YuG"} className="cardAnime">
        <img src={Vintedois} width={250} className="coverImage" />
        <p className="textCard">Super Hero</p>
      </Link>
    </div>
  );
}
