import { Link } from "react-router-dom";
import { DbzEpData } from "../../data/Carousel/DragonballZEps.data";
import "./styles.css"

export default function HomeEp() {
  return (
    <div className="container flex flex-col items-center mt-9">
      <div className="flex flex-wrap justify-center">
        {DbzEpData.map((item) => (
          <Link to={`/video2/${item.url}/${item.ep}`} className="hover:underline m-3">
            <img className="coverImage" src={`${item.image}`} width={350} />
            <Link to={"/dbz"}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2mNo8Fu5JQ0wdx_D-QyjLOvplfWWPT66Pg&usqp=CAU" className="rounded-full" height={50} width={50} />
            </Link>
            <p className="text-white mt-5">{`${item.name}`}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
