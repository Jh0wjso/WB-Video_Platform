interface InfoVideo{
    name: string,
    url: string
}

export default function MovieContent({name, url}:InfoVideo) {
  return (
    <>
      <h1 className="text-2xl md:text-5xl mb-8 text-center">
        {name}
      </h1>
      <iframe
        src={`https://drive.google.com/file/d/1C624UGEH3nAfd6W7XxqbsBFEPPCkWD9-/view?usp=sharing`}
        allow="autoplay"
        className="h-[250px] md:h-[600px] md:h[650px] w-[100%] md:w-[60%] rounded"
        allowFullScreen
      ></iframe>
    </>
  );
}