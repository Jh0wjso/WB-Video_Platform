import Sidebar from "../../components/SideBar";
import { NewsTestData } from "../../data/News/Test/NewsTest.data";
import main from "../../images/DB_case.jpg";

export default function News() {
  return (
    <div className="flex w-full justify-between flex-1 min-h-screen">
      <Sidebar />
      <div className="min-h-screen flex flex-col container justify-center">
        <section className="flex flex-col container items-center mt-[5vh]">
          <div className="w-[90%] text-5xl font-bold mb-7">Hot topics</div>
          <div className="flex w-[90%]  justify-between items-center">
            <img src={main} className="w-[70%] rounded" />
            <p className="w-[25%] text-xl">
              Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
              adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
              vivamus pharetra. Velit, dui, egestas nisi, elementum mattis
              mauris, magnis. Massa tortor nibh nulla condimentum imperdiet
              scelerisque... read more
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center ">
          <div className="w-[90%] text-4xl font-bold mt-16 mb-7">
            Latests News
          </div>
          <section className="flex flex-wrap justify-center items-center w-[100%]">
            {NewsTestData.map((item) => (
              <a target="_blank" href={item.urlLink} className="justify-between items-center m-5 w-[20%]">
                <img src={main} width={300} className="rounded" />
                <p className="text-ellipsis whitespace-nowrap overflow-hidden">{item.title}</p>
                <div className="flex justify-between w-[70%] mt-3 opacity-80">
                  <p>Posted {item.date}</p>
                  <p>{item.category}</p>
                </div>
              </a>
            ))}
          </section>
        </section>
      </div>
    </div>
  );
}
