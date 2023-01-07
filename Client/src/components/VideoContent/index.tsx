interface InfoVideo{
    number: string,
    url: string
}

export default function VideoContent({number, url}:InfoVideo) {
  return (
    <>
      <h1 className="text-2xl md:text-5xl mb-8 text-center font-bold">
        Episodio: {number}
      </h1>
      <iframe
        src={`https://drive.google.com/file/d/${url}/preview`}
        allow="autoplay"
        className="h-[250px] md:h-[700px] md:h[650px] w-[100%] md:w-[60%] rounded border-8 border-orange-400"
        allowFullScreen
      ></iframe>
    </>
  );
}
