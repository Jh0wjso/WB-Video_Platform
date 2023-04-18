import "../styles.css";
import SectionButtons from "../../SectionButtons";

export default function SeasonSixHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">
        Saga da Missão Ultra Deus
      </h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons
          num1="41" url1="1-LoIjbSORoTxxwNKpYqNbVpagvVxvLAq"
          num2="42" url2="1-7JJ5tUojK98bco-ldpPY6pF_dWZmEhS"
          num3="43" url3="1-5oPWzBhTuJR43oBfy6eURyFeB8vQZkr"
          num4="44" url4="1-BHedmMLqObIc8WVE95vPUTFEJbdTYzN"
          num5="45" url5="1-9qY8jyia8r_pE4znXiH4uNB8FwO7-0R"
          num6="46" url6="1-DhO14a8INhEIwti05IgjpeH90SRAKM3"
        /> 
      </section>
    </div>
  );
}
