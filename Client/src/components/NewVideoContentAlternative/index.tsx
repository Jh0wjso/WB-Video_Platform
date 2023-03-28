import Cover from "../../images/DB_case.jpg";

interface InfoVideo{
    number: string,
    url: string
}

export default function VideoContentAlternative({number, url}:InfoVideo) {
  return (
    <>
      <h1 className="epName">
        Episodio: <br/> {url}
      </h1>
      <video controls className="videoContent" poster={Cover}>
        <source src={`https://ns565646.ip-51-79-16.net/Uploads/Animes/D/${number}/${url}.MP4`} type="video/mp4" />
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