import { Link } from "react-router-dom";
import "./styles.css"

interface LinksDB {
  name: string;
  number: string;
  obj:object;
}

export default function SectionLinks(obj: {name: string, num: string }) {
  return (
    <Link
      to={`/video/${obj.name}/${obj.num}`}
      className="linkToEpisode"
    >
      Episodio {obj.num}
    </Link>
  );
}
