import Cover from "../../../images/capaDBS.jpeg";

export default function DBSuperAbstract() {
  return (
    <section className="flex flex-col md:flex-row justify-between h-fit items-center mt-10 md:m-10 border-b p-5">
      <img
        src={Cover}
        width={400}
        alt="Dragon Ball Super cover"
        className="rounded"
      />
      <p className="w-[90%] md:w-[40%] md:text-start text-justify pt-5 md:pt-0 md:ml-5 text-xl">
        Dragon Ball Super (ドラゴンボール超スーパー Doragon Bōru Sūpā?) é uma
        série de anime criada por Akira Toriyama e produzida pela Toei
        Animation, que começou a ser exibida em 5 de julho de 2015 e teve seu
        ultimo episódio exibido em 25 de março de 2018 com um total de 131
        episódios. É também uma série de mangá escrita por Akira Toriyama e
        ilustrada por Toyotarō, serializada na revista de mangás shōnen V Jump
        da Shueisha.
      </p>
    </section>
  );
}
