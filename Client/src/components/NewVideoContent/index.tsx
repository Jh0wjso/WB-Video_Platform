interface InfoVideo {
  number: string;
  url: string;
}

export default function NewVideoContent({ number, url }: InfoVideo) {
  return (
    <>
      <h1 className="epName">Episodio: {" " + url}</h1>
      <video
        src={`https://mangas.cloud/Animes/Letra-D/${number}/${url}.mp4`}
        height="100%"
        width="100%"
        className="videoPlayer"
        controls={true}
        poster={
          "https://i.pinimg.com/736x/76/7b/61/767b61bd84f46d3c458d94ad15a6796d.jpg"
        }
      ></video>
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
