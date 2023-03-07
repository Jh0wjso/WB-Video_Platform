import "./styles.css";
import video from "../../videos/1.mp4";

type InfoVideo = {
  number: string;
  url: string;
};

export default function VideoTexte({ number, url }: InfoVideo) {
  return (
    <>
      <h1 className="epName">
        Episodio de Hoje: <br /> {number}
      </h1>
      <video
        controls
        className="videoContent"
      >
        <source src={video} type="video/mp4"></source>
      </video>
    </>
  );
}
