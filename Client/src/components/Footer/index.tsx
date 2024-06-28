import { Link } from "react-router-dom";
import "./styles.css";
import { HeaderContent } from "../../data/Header/HeaderContent.data";

export default function Footer() {
  return (
    <footer className="p-4 flex flex-col justify-center items-center bg-gray-700 shadow md:px-6 md:py-8">
      <div className="footerContent container md:flex items-center md:flex-row md:items-center justify-center md:justify-between">
        <Link to="/" className="flex flex-row items-center">
          <h1 className="pageTittle">WATCHBALL</h1>
        </Link>
        <ul className="navbarLinksContainer">
          {HeaderContent.map((e) => (
            <li className="hover:text-gray-500">
              <Link to={e.link}>{e.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
