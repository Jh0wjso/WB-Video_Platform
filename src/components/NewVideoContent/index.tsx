import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import "./styles.css"; // novo arquivo de estilos

interface InfoVideo {
  number: string;
  url: string;
}

export default function CustomVideoPlayer({ number, url }: InfoVideo) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoURL = `https://mangas.cloud/Animes/Letra-D/${number}/${url}.mp4`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Se o vídeo for HLS (.m3u8), use o hls.js
    if (videoURL.endsWith(".m3u8") && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoURL);
      hls.attachMedia(video);
    } else {
      video.src = videoURL;
    }
  }, [videoURL]);

  // Atualiza progresso e duração
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      setProgress(video.currentTime);
      setDuration(video.duration || 0);
      setIsPlaying(!video.paused);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", updateProgress);
    video.addEventListener("play", updateProgress);
    video.addEventListener("pause", updateProgress);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", updateProgress);
      video.removeEventListener("play", updateProgress);
      video.removeEventListener("pause", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    const video = videoRef.current;
    if (video) video.volume = vol;
    setVolume(vol);
  };

  const handleProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const value = parseFloat(e.target.value);
    if (video) video.currentTime = value;
    setProgress(value);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!document.fullscreenElement) {
      video.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFullScreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullScreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullScreenChange);
  }, []);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="custom-video-container">
      <h1 className="custom-video-title">Episódio: {url}</h1>

      <div className="custom-video-wrapper">
        <video
          ref={videoRef}
          className="custom-video-element"
          controls={false}
        />

        <div className="custom-video-controls">
          <div className="custom-video-progress-row">
            <span className="custom-video-time">{formatTime(progress)}</span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step="0.1"
              value={progress}
              onChange={handleProgress}
              className="custom-video-progress"
            />
            <span className="custom-video-time">{formatTime(duration)}</span>
          </div>
          <div className="custom-video-actions">
            <button
              onClick={togglePlay}
              className="custom-video-play"
            >
              {isPlaying ? (
                <svg
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <rect x="4" y="4" width="4" height="12" rx="1" />
                  <rect x="12" y="4" width="4" height="12" rx="1" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <polygon points="5,4 15,10 5,16" />
                </svg>
              )}
              {isPlaying ? "Pausar" : "Play"}
            </button>
            <div className="custom-video-volume-wrapper">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="custom-video-volume-icon"
                viewBox="0 0 20 20"
              >
                <path d="M3 8v4h3l4 4V4L6 8H3z" />
              </svg>
              <input
                id="volume"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolume}
                className="custom-video-volume"
              />
            </div>
            <button
              onClick={handleFullscreen}
              className="custom-video-fullscreen"
              title={isFullscreen ? "Sair do Fullscreen" : "Tela cheia"}
            >
              {isFullscreen ? (
                <svg
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 13H5v2h2v2h2v-2H7v-2zm6 0v2h2v-2h-2zm0-6h2V5h-2V3h-2v2h2v2zm-6 0V5H5v2h2v2H7z" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 3H3v4h2V5h2V3zm6 0v2h2v2h2V3h-4zm4 10h-2v2h-2v2h4v-4zm-10 4v-2H5v-2H3v4h4z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="custom-video-help">
        <h3>Algum problema com o vídeo?</h3>
        <a
          href={videoURL}
          target="_blank"
          rel="noopener noreferrer"
          className="custom-video-link"
        >
          Clique aqui
        </a>
      </div>
    </div>
  );
}
