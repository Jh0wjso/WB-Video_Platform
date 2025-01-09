import { Link } from "react-router-dom";
import "./styles.css"

export default function NewSectionLinksAlternative(obj: {name: string, num: string }) {
  return (
    <Link
      to={`/video3/${obj.name}/${obj.num}`}
      className="linkToEpisode"
    >
      Episodio {obj.num}
    </Link>
  );
}
