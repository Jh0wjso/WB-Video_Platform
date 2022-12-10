import { useParams } from "react-router-dom";
import "./styles.css";
import VideoContent from "../../components/VideoContent";

export default function Video() {
  const name = useParams();
  const Ep = name.number;
  const Url = name.url;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center m-2 md:m-5">
      <VideoContent number={Ep ? Ep?.toString() : ""} url={Url ? Url?.toString() : ""} />
    </div>
  );
}
