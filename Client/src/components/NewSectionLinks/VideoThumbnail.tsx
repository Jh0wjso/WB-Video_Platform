import { useRef, useEffect } from "react";

export default function VideoThumbnail() {
  const videoUrl =
    "https://mangas.cloud/Animes/Letra-D/Dragon%20Ball%20Classico/001.mp4";
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTime = Math.floor(Math.random() * 50);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", () => {
        video.currentTime = targetTime;
      });
      video.addEventListener("timeupdate", () => {
        if (video.currentTime >= targetTime) {
          video.pause();
        }
      });
    }
  }, [targetTime]);

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      className="rounded hover:rounded-3xl transition-all duration-300"
      controls={false}
      muted
      width="300"
      preload="metadata"
    >
      Your browser does not support the video tag.
    </video>
  );
}
