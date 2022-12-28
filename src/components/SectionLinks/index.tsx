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
      Episodio {obj.num}
    </Link>
  );
}
