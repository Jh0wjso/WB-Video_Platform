import "../styles.css";
import NewSectionButtons from "../../NewSectionButtons";
import NewSectionLinks from "../../NewSectionLinks";

export default function SeasonOneBbz() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga dos Sayajins</h1>
      <section className="mt-8 flex flex-col items-center">
        <NewSectionButtons 
          num1="1"  name1="850598be5727e69f"        
          num2="2"  name2="fee9188d76a91589"
          num3="3"  name3="78b47c3e7fe8d4f1"
          num4="4"  name4="9064b9d45c8508bc"
          num5="5"  name5="d0e18cb36c85a3a8"
          num6="6"  name6="3c47745a250b4f5f"
        />
        <NewSectionButtons 
          num1="7"  name1="07943d610003edaf"
          num2="8"  name2="20ce0c2ebfe76e02"
          num3="9"  name3="066225268c8e8d10"
          num4="10" name4="eb5a4d62cc6542c0"
          num5="11" name5="107f034dbbb98aeb"
          num6="12" name6="79b815f3e9aba286"
        />
        <NewSectionButtons 
          num1="13" name1="d4fb5e9b4a007f2a"
          num2="14"  name2="e833fe05c518aff4"
          num3="15"  name3="3eae5fb1a8d32d14"
          num4="16"  name4="ca60ec195e9d754c"
          num5="17"  name5="bd5f56feaab835bd"
          num6="18"  name6="45c3534d7312eb2a"
        />
        <NewSectionButtons 
          num1="19"  name1="0ff13384cba8857a"
          num2="20" name2="647d7ade4fb90858"
          num3="21"  name3="2329e47def3c1042"
          num4="22"  name4="a4936e539cc8acdd"
          num5="23"  name5="d03534e323f1aeb4"
          num6="24"  name6="c0f0748df4f2a083"
        />

        <NewSectionButtons 
          num1="25"  name1="712266c2d119d590"
          num2="26"  name2="65972446cd92f880"
          num3="27"  name3="82e41c8b7c739fdd"
          num4="28"  name4="8f50448903f82bed"
          num5="29"  name5="4dec0710695dd28f"
          num6="30"  name6="8038dad709eb3f5a"
        />
        <section className="episodeButtons">
          <NewSectionLinks num="31"  name="7ce07d97dcbbe4fe" />
          <NewSectionLinks num="32"  name="c18c26a7116f14c5" />
          <NewSectionLinks num="33"  name="12de049556c6e751" />
          <NewSectionLinks num="34"  name="b52b26e39b4c20c4" />
          <NewSectionLinks num="35"  name="daa1e14c9463ff52" />
        </section>
      </section>
    </div>
  );
}