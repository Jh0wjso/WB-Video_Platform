import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonTwoSuper() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Freeza Dourado</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="15" url1="1CxroNiaA1P9VbQOXYit26tgIK_wYLsak"
          num2="16" url2="1CnQADcLsUeJTW-Bsvs4c7bR4CctSVOhk"
          num3="17" url3="1D2L-gmZvNMaLjO7FrAovxRLvcDkS6nR5"
          num4="18" url4="1D1DaNYeSkuimtg9tLFwyNW7y8-wjPEjS"
          num5="19" url5="1D7W3QblFoJLGx50DTtxpa9sF0AUx-Obu"
          num6="20" url6="1DAJa6X9kqzctOaT6ecuA3fDZOnBANQbk"
        />
        <SectionButtons 
          num1="21" url1="1Dbt71AYdAQcMx_VVZOIXXgDnWVdNaQ3m"
          num2="22" url2="1DWqlY3vhWoAJi3Mss4dpU-eFSEumwp-Y"
          num3="23" url3="1Di-QsPeAmezPWqMABaCZRG8oL7-tZDML"
          num4="24" url4="1DduVAShAbpHX8ns19avOrLjUS9qZQHBe"
          num5="25" url5="1DKiok6AW4Ifj1LXNhR1ZYGBreaUY2nfl"
          num6="26" url6="1DJILPGnZnwIOburDJewKoc6uyo5eOyLv"
        />
        <section className="episodeButtons">
          <SectionLinks num="27" url="1DT4AlXhzKge0afj9LilTHlCgaOZhOVdT" />
        </section>
      </section>
    </div>
  );
}
