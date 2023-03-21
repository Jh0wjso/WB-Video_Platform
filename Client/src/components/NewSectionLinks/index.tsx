import { Link } from "react-router-dom";
import "./styles.css"

interface LinksDB {
  name: string;
  number: string;
  obj:object;
}

export default function NewSectionLinks(obj: {name: string, num: string }) {
  return (
    <Link
      to={`/video2/${obj.name}/${obj.num}`}
      className="linkToEpisode"
    >
      Episodio {parseInt(obj.num) < 10 ? "0"+obj.num : obj.num}
    </Link>
  );
}
