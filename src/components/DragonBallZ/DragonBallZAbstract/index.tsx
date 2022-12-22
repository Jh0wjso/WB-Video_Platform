import Cover from "../../../images/capaDBZ.jpeg";

export default function DragonBallZAbstract() {
  return (
    <section className="flex flex-col md:flex-row justify-between h-fit items-center mt-10 md:m-10 border-b p-5">
      <img
        src={Cover}
        width={400}
        alt="Dragon Ball cover"
        className="rounded"
      />
      <p className="w-[90%] md:w-[40%] md:text-start text-justify pt-5 md:pt-0 md:ml-5 text-xl">
        A popular série Dragon Ball começou nos mangás e logo passou também aos
        animes da TV e cinema. Criada por Akira Toryiama, a franquia conta a
        história de Son Goku, guerreiro que descobre ser parte de um legado de
        poderosos conquistadores alienígenas - e passa a defender seu planeta
        adotivo, a Terra, de outros seres igualmente superfortes e capazes de
        feitos descomunais.
      </p>
    </section>
  );
}
