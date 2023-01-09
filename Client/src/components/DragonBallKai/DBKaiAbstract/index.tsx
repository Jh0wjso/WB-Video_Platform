import Cover from "../../../images/capaKai.jpeg";

export default function DBKaiAbstract() {
  return (
    <section className="flex flex-col md:flex-row justify-between h-fit items-center mt-10 md:m-10 border-b p-5">
      <img
        src={Cover}
        width={400}
        alt="Dragon Ball Kai cover"
        className="rounded"
      />
      <p className="w-[90%] md:w-[40%] md:text-start text-justify pt-5 md:pt-0 md:ml-5 text-xl">
        Dragon Ball Z Kai, conhecido no Japão como Dragon Ball Kai
        (ドラゴンボール改カイ Doragon Bōru Kai, lit. Dragon Ball Revised), é uma
        série de anime que é um remasterizado em alta definição e recortado de
        Dragon Ball Z, feito para seu 20º aniversário. Ele estreou na Fuji TV em
        5 de abril de 2009, às 9h.
      </p>
    </section>
  );
}
