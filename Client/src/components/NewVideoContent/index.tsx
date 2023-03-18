import "./styles.css";

interface InfoVideo {
  number: string;
  url: string;
}

export default function NewVideoContent({ number, url }: InfoVideo) {
  return (
    <>
      <h1 className="epName">
        Episodio: {url}
      </h1>
      <video controls className="videoContent">
        <source src={`https://lightspeedst.net/s2/mp4/${number}/sd/${url}.mp4`} type="video/mp4" />
      </video>
    </>
  );
}
