import "../styles.css";
import NewSectionLinks from "../../NewSectionLinks";
import NewSectionButtons from "../../NewSectionButtons";
  
export default function SeasonFiveBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga dos Androides</h1>
      <section className="mt-8 flex flex-col items-center">
        <NewSectionButtons 
          num1="118" name1="46202bfe17dc379e"
          num2="119" name2="2358d74d9163bca1"
          num3="120" name3="77bbac27578c5938"
          num4="121" name4="1b741241013d5c6c"
          num5="122" name5="1036868993085cec"
          num6="123" name6="53ddaa1d8b289a32"
        />
        <NewSectionButtons 
          num1="124" name1="90347a86ae80e925"
          num2="125" name2="963d62bdcfbc950f"
          num3="126" name3="844f5c14fe02020a"
          num4="127" name4="947fc58b1fd67b51"
          num5="128" name5="ee72d2fd3c5a0210"
          num6="129" name6="8baa6bacca261126"
        />
        <NewSectionButtons 
          num1="130" name1="823846e5f769f26a"
          num2="131" name2="badd98d2b1c3c22d"
          num3="132" name3="a6a37e83d8618d42"
          num4="133" name4="b408f5460ccb65de"
          num5="134" name5="cb25f831cfb7dcf0"
          num6="135" name6="8703df3036ecfb26"
        />
        <section className="episodeButtons"> 
          <NewSectionLinks num={"136"} name={"7f83c1496fc6bfdf"}  /> 
          <NewSectionLinks num={"137"} name={"a59f952663ee4f4b"}  /> 
          <NewSectionLinks num={"138"} name={"f53db7720e8817ef"}  /> 
          <NewSectionLinks num={"139"} name={"766cd54c41518c21"}  /> 
        </section>
      </section>
    </div>
  );
}