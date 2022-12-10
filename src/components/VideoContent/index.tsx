interface InfoVideo{
    number: string,
    url: string
}

export default function VideoContent({number, url}:InfoVideo) {
  return (
    <>
      <h1 className="text-2xl md:text-5xl mb-8 text-center">
        Episodio {number}
      </h1>
      <iframe
        src={`https://drive.google.com/file/d/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm/preview`}
        allow="autoplay"
        className="h-[250px] md:h-[600px] md:h[650px] w-[100%] md:w-[60%] rounded"
        allowFullScreen
      ></iframe>
    </>
  );
}
