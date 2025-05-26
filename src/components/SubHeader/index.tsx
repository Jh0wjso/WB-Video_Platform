import { Link } from "react-router-dom";
import { SubHeaderContent } from "../../data/Header/SubHeader/SubHeader.data";

export default function SubHeader() {
  return (
    <div className="navbarContent w-[60%]">
      <div className="subHeader">
        {SubHeaderContent.map((item) => {
          return (
            <Link className="animeH" to={`${item.link}`}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
