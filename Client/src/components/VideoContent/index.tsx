import "./styles.css"

interface InfoVideo{
    number: string,
    url: string
}

export default function VideoContent({number, url}:InfoVideo) {
  return (
    <>
      <h1 className="epName">
        Episodio de Hoje: <br/> {number}
      </h1>
      <iframe
        src={`https://drive.google.com/file/d/${url}/preview`}
        allow="autoplay"
        className="videoContent"
        allowFullScreen
      ></iframe>
    </>
  );
}
