import { useRef, useEffect, useState } from "react";

export default function VideoThumbnail(obj: { url: string }) {
  const videoUrl = obj.url;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [targetTime, setTargetTime] = useState(0);

  useEffect(() => {
    setTargetTime(Math.floor(Math.random() * 500));
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
