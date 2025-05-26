import "./styles.css";
import DragonBallZEpCarousel from "../DragonBallZ/DbzEpCarousel/DbzEpCarousel";
import MainSerie from "../MainSerie";

export default function Home() {
  return (
    <section className="homeContent">
      <MainSerie />
      <div className="bg-gray-600 w-full flex justify-center py-10">
        <div className="flex flex-col container">
          <DragonBallZEpCarousel />
        </div>
      </div>
    </section>
  );
}
