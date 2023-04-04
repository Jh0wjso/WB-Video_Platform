import Cover from "../../images/DB_case.jpg";

interface InfoVideo {
  number: string;
  url: string;
}

export default function NewVideoContent({ number, url }: InfoVideo) {
  return (
    <>
      <h1 className="epName">
        Episodio: <br /> {url}
      </h1>
      <video
        id="my-video_html5_api"
        controls
        poster={Cover}
        className="videoContent"
        preload="auto"
        data-setup="{}"
        data-source="0"
        data-video-src={`https://animefire.net/video/${number}/${url}?tempsubs=0&amp;1680610616`}
      >
        <source
          src={`https://lightspeedst.net/s2/mp4/${number}/sd/${url}.mp4`}
          type="video/mp4"
        />
      </video>
      <div className="containerHelp">
        <h3 className="helpText">Algum problema com o vídeo?</h3>
        <a
          href={`https://ns565646.ip-51-79-16.net/Uploads/Animes/D/${number}/${url}.MP4`}
          target="_blank"
          className="btnHelp"
        >
          Clique Aqui
        </a>
      </div>
    </>
  );
}
