import { Link } from "react-router-dom";
import "./styles.css"

interface LinksDB {
  url: string;
  name: string;
  number: string;
  obj:object;
}

export default function SectionLinks(obj: {name: string, num: string, url: string }) {
  return (
    <Link
      to={`/video/${obj.name}/${obj.url}`}
      className="linkToEpisode"
    >
      Episodio {parseInt(obj.num) < 10 ? "0"+obj.num : obj.num}
    </Link>
  );
}