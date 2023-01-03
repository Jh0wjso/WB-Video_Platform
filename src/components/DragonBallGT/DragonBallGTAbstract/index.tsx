import Cover from "../../../images/capaDBGT.jpeg";

export default function DragonBallGTAbstract() {
  return (
    <section className="flex flex-col md:flex-row justify-between h-fit items-center mt-10 md:m-10 border-b p-5">
      <img
        src={Cover}
        width={400}
        alt="Dragon Ball Gt cover"
        className="rounded"
      />
      <p className="w-[90%] md:w-[40%] md:text-start text-justify pt-5 md:pt-0 md:ml-5 text-xl">
        Dragon Ball GT (ドラゴンボールＧＴジーティー Doragon Bōru Jī Tī, GT
        significa "Grand Tour", comumente abreviado como DBGT) é uma das duas
        sequências de Dragon Ball Z, cujo material é produzido apenas pela Toei
        Animation e não é adaptado de um mangá preexistente. A série Dragon Ball
        GT é a mais curta da série Dragon Ball, consistindo em apenas 64
        episódios, ao contrário de seu antecessor, Dragon Ball Z, que consistia
        em 291 episódios, Dragon Ball, que consistia em 153, e sua série
        sucessora Dragon Ball Super, com 131 episódios. A série durou 64
        episódios e é concluída pelo especial de TV Dragon Ball GT: A Hero's
        Legacy.
      </p>
    </section>
  );
}
