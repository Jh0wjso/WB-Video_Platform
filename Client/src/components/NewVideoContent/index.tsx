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
        src={`https://mangas.cloud/Animes/Letra-D/${number}/${url}.mp4`}
        height="100%"
        width="100%"
        allowFullScreen
        className="videoContent"
      ></iframe>
      <div className="containerHelp">
        <h3 className="helpText">Algum problema com o vídeo?</h3>
        <a
          href={`https://mangas.cloud/Animes/Letra-D/${number}/${url}.mp4`}
          target="_blank"
          className="btnHelp"
        >
          Clique Aqui
        </a>
      </div>
    </>
  );
}
