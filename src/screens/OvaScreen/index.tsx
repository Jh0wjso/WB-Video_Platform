import OvaRowOne from "../../components/Ovas/OvaRowOne";

export default function OvaScreen() {
  return (
    <div className="min-h-screen text-white text-xl md:text-base flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-10">
        Todos os Ovas disponíveis
      </h1>
      <OvaRowOne />
    </div>
  );
}
