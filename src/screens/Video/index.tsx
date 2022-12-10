import "./styles.css";

export default function Video() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center m-2 md:m-5">
      <h1 className="text-2xl md:text-5xl mb-8 text-center">Dragon Ball Super: Super Hero</h1>
      <iframe
        src="https://drive.google.com/file/d/1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm/preview"
        allow="autoplay"
        className="h-[250px] md:h-[600px] md:h[650px] w-[100%] md:w-[60%] rounded"
        allowFullScreen
      ></iframe>
    </div>
  );
}
