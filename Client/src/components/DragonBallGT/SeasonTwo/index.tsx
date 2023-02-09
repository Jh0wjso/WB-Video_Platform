import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonTwoGT() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga do Baby</h1>
      <section className="flex flex-col items-center">
        <SectionButtons 
          num1="23" url1="13Xcam_rSSmyFsOaDn1Ei8pYBu04p5baG" name1="Um Jovem Misterioso"
          num2="24" url2="13_r05ElFu5iZJ79lf7KJYgQB2dsIEVtj" name2="O Contra-Ataque de Baby"
          num3="25" url3="13OsnUShj2CYp0YeyWTdUFIR6SJXgwcGh" name3="Droga, Baby Esta na Terra"
          num4="26" url4="13WatLKF5v7YaEJHROt7ah09pGSVECONx" name4="Gohan & Goten, Uma Luta Entre Irmãos"
          num5="27" url5="13gD841h1F0hbOTSYbfHE9X2iQl_MEYA4" name5="Vegeta é Possuído"
          num6="28" url6="13kDSTLhaBGE2v94XWc5uKK2qLn6gA_bB" name6="Goku Volta, Todos São Inimigos"
        />
        <SectionButtons 
          num1="29" url1="14-RORC1qDxq50X90O_97BuAlJNqli7Zd" name1="O Poder do Super Saiyajin 3 é Derrotado"
          num2="30" url2="141IByMMP-__QiRacWmSsZDTWSrtERNi-" name2="Goku Desaparece"
          num3="31" url3="148Eog9vI_S5ekMb96dCYJIi579GFfEGq" name3="A Destruição de Goku"
          num4="32" url4="14A8xUfBmaBQniiu6nP-OaxLKCQqeFvSU" name4="Volte Goku, Uub O Furioso Lutador"
          num5="33" url5="13vm3zadbMdZm3h2nB6aEdSPVoigrpQpb" name5="O raio mortal de Oob"
          num6="34" url6="13yMzkHyz_wilOoVPxc81TSZsuY6QrZii" name6="Goku Fracassa Em Sua Transformação"
        />
        <SectionButtons 
          num1="35" url1="14FLT-QxKb7DuLpFani3TYnToh7y5-6dZ" name1="O Poder Máximo, Goku Se Transforma no Super Sayajin 4 "
          num2="36" url2="14Ikr5vtyPzryoCovl21McDRgx1A3SGsl" name2="Baby se Transforma em um Macaco Gigante"
          num3="37" url3="14Ohk6G86AlRHzghQfQFGFXm_Lnlrv27v" name3="Baby Possui o Dobro de Ki de Goku"
          num4="38" url4="14SGEsj5900nCe_z7vC6kLIILQwzCwlla" name4="O Renascimento do Super Sayajin 4"
          num5="39" url5="14IoYrZd85sQM3F9rXEGzkUxczS8hlB1W" name5="A morte de Baby"
          num6="40" url6="14NpTRKfTGf7aeTnGlzpjtpZRAEAQAeG4" name6="A Terra Explode! A Importante Decisão de Piccolo"
        />
        <SectionLinks num="41" url="14UM37rCwo_TCc1KROYbSuEe4hryXsl2C" name="Quem Será o Novo Sucessor de MR. Satan" />
      </section>
    </div>
  );
}
