import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonOneSuper() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Deus da Destruição Bills</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="1" url1="1AfK-agZj5AmSdT7-_luJhNN6j46vn6yj"
          num2="2" url2="1AixDc3jH1mM4CJJ1FvKhhHBUuQkGqKQG"
          num3="3" url3="1Aj-qAkMZPkwJDNfJFcmtBTEOUYfa1dwO"
          num4="4" url4="1AzRiHMwzr8baOpOkKvWu47BMvBJnvqG9"
          num5="5" url5="1AIxGio6_UzVUkSbyI7Gy5u1eQdZmsWd0"
          num6="6" url6="1AP7HKYNlXWpxWfQiDcUIg7YPb3obEnoN"
        />
        <SectionButtons 
          num1="7" url1="1BI7iPLga32D7hs0uUg6j3YTO-FiwhfVZ"
          num2="8" url2="1BL9YlBBWZmShBEuWkbyzLu2Q0rJ292wG"
          num3="9" url3="1B5W2Ye2oL_qlh97D0pBWWaEeKXg5OgW6"
          num4="10" url4="1BBovwQiXC890WCpagLe2JGIw1O3EFn_f"
          num5="11" url5="1BDTDTkvUmOZLu3xPxApaqlOwT08et9nG"
          num6="12" url6="1BQv88bwUbtvT1bAbcbP3Z5qqfy7gylVh"
        />
        <section className="episodeButtons">
          <SectionLinks num="13" url="1BfZ6utr0UYu2JK-GIhvAa7ow-YfrEi-N" />
          <SectionLinks num="14" url="1BhCQweQ9eLU6XROxr4gh34u36ZQzdXqC" />
        </section>
      </section>
    </div>
  );
}
