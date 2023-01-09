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
        Dragon Ball Z, feito para seu 20º aniversário. . Ele estreou na Fuji TV
        em 5 de abril de 2009, às 9h, pouco antes de One Piece e terminou
        inicialmente em 27 de março de 2011, com 97 episódios (um 98º episódio
        foi lançado posteriormente direto para o vídeo), e os dois shows foram
        comercializados juntos como "Dream 9", que se refere à hora em que ambos
        foram ao ar. A classificação média da série foi de 9,4%, sendo a máxima
        de 12,3% (Episódio 47) e a mínima de 6,4% (Episódio 18). Dragon Ball Kai
        voltou à TV japonesa em 6 de abril de 2014, com a Saga Majin Buu, e
        terminou sua exibição pela segunda e última vez em 28 de junho de 2015,
        com 61 episódios, enquanto a versão original internacional sem cortes
        teria 69. episódios (elevando a contagem total de episódios da série
        para 159 para a transmissão japonesa original e 167 para a transmissão
        internacional estendida).
      </p>
    </section>
  );
}
