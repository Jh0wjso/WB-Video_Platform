import "./styles.css"

interface InfoVideo{
    number: string,
    url: string
}

export default function VideoContent({number, url}:InfoVideo) {
  return (
    <>
      <h1 className="epName">
        Episodio: <br/> {number}
      </h1>
      <iframe
        aria-controls="none"
        src={`https://drive.google.com/file/d/${url}/preview`}
        allow="autoplay"
        className="videoContent"
        allowFullScreen
      ></iframe>
    </>
  );
}