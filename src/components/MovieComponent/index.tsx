interface InfoVideo{
    name: string,
    url: string
}

export default function MovieContent({name, url}:InfoVideo) {
  return (
    <>
      <h1 className="epName">
        {name}
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