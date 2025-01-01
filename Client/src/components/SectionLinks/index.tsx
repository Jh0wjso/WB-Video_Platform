import { Link } from "react-router-dom";
import "./styles.css";
import VideoThumbnail from "../NewSectionLinks/VideoThumbnail";

interface LinksDB {
  url: string;
  number: string;
  obj: object;
}

export default function SectionLinks(obj: { num: string; url: string }) {
  return (
    <Link to={`/video/${obj.num}/${obj.url}`} className="linkToEpisode">
      <VideoThumbnail />
      Episodio {parseInt(obj.num) < 10 ? "0" + obj.num : obj.num}
    </Link>
  );
}
