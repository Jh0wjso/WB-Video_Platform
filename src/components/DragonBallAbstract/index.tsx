import Cover from "../../images/capaDB.jpeg";

export default function DragonBallAbstract(){
    return(
        <section className="flex flex-col md:flex-row justify-between h-fit items-center mt-10 md:m-10 border-b p-5">
        <img src={Cover} width={400} alt="Dragon Ball cover" className="rounded"/>
        <p className="w-[90%] md:w-[40%] md:text-start text-justify pt-5 md:pt-0 md:ml-5 text-xl">
          A série segue as aventuras do protagonista, Son Goku, desde sua
          infância até a idade adulta enquanto ele treina artes marciais e
          explora o mundo em busca de sete esferas conhecidas como as Esferas do
          Dragão, que convocam um dragão que concede um desejo quando reunidas.
        </p>
      </section>
    );
}