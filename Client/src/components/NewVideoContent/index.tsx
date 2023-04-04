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
        src={`https://assistonlineapi.online/make/check/?list=${number}`}
        height="100%"
        width="100%"
        className="videoContent"
      ></iframe>
      <div className="containerHelp">
        <h3 className="helpText">Algum problema com o vídeo?</h3>
        <a
          href={`https://assistonlineapi.online/make/check/?list=${number}`}
          target="_blank"
          className="btnHelp"
        >
          Clique Aqui
        </a>
      </div>
    </>
  );
}
