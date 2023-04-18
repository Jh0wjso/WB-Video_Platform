import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonTwoHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Conflito Universal</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="7" url1="1gQik47Ywt8jPOUVd635eRl65BZg3KwB8"
          num2="8" url2="1g6_MpfrNXzQEKX2emgd6495Blue3YDyn"
          num3="9" url3="1gB98181hbyi37RNhujrXHShdtTzApUA8"
          num4="10" url4="1gDvZaBSGpidzmToKA5Kr3N-lMnxofvqJ"
          num5="11" url5="1gGpElNUnB3xS_spqEDFOc8bIdfWE8doE"
          num6="12" url6="1g45T576-OsfmbdhWcXpKeq83mJUoIXPn"
        />
        <SectionButtons 
          num1="13" url1="1g5NlkLwB86ADpSSFXslC2dj9pHLzRhV9"
          num2="14" url2="1gYhKe7ewh5h5sGQiIb9OllX9C_FiycOF"
          num3="15" url3="1gO26ZKfzQerroQmqHwaBBcnZKPZBzPlp"
          num4="16" url4="1gODikousyyxFrLsYlT8CHHlkYyQ6qO_W"
          num5="17" url5="1gQ_NtFggSkVcfABzWVMohCD46QQq4rAb"
          num6="18" url6="1gU1I-mB_2jtpNIcLh7dMaD6u1lxikZKz"
        />
        <SectionLinks num="19" url="1g7XEVJ1gbqFjAofFi-BKG8oGWH-l2C5h" />
      </section>
    </div>
  );
}
