import VPlayer from "react-vplayer";

interface InfoVideo {
  number: string;
  url: string;
}

export default function NewVideoContent({ number, url }: InfoVideo) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="epName">Episodio: {" " + url}</h1>
      <VPlayer
        source={`https://mangas.cloud/Animes/Letra-D/${number}/${url}.mp4`}
      />
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
    </div>
  );
}
