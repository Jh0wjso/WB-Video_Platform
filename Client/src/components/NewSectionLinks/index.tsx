import { Link } from "react-router-dom";
import "./styles.css";
import VideoThumbnail from "./VideoThumbnail";

export default function NewSectionLinks(obj: { name: string; num: string }) {
  return (
    <Link to={`/video2/${obj.name}/${obj.num}`} className="linkToEpisode">
      <VideoThumbnail />
      Episódio {obj.num}
    </Link>
  );
}
