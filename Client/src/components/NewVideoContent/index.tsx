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
      <iframe
        src={`https://ns558972.ip-54-39-50.net/Animes/D/${number}/${url}.MP4?nocache`}
        height="100%"
        width="100%"
        allowFullScreen
        className="videoContent"
      ></iframe>
      <div className="containerHelp">
        <h3 className="helpText">Algum problema com o vídeo?</h3>
        <a
          href={`https://ns558972.ip-54-39-50.net/Animes/D//${url}.MP4?nocache`}
          target="_blank"
          className="btnHelp"
        >
          Clique Aqui
        </a>
      </div>
    </>
  );
}
