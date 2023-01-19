import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonOne() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga de Pilaf</h1>
      <section className="mt-8 flex flex-col items-center">
        <section className="episodeButtons">
        <SectionButtons 
          num1="1" url1={`1V-tvJDuEVrEc8ovXPKJMVgOVZBsVD_BG`} name1={`O segredo das Esferas do Dragão!`}
          num2="2" url2={`1WK1NgTZzm0BxbyW2VcjTnm4oV1FvKYrJ`} name2="A busca do imperador"
          num3="3" url3={`1YfOaAtXsogO5XI8NgToZUuewgSfCjQXr`} name3="A nuvem voadora do Kame"
          num4="4" url4={`1Tfdqj_kYJ4MBlo285c6ngkfkbqxjsxkk`} name4="Oolong, o sequestrador de garotas"
          num5="5" url5={`1CxOWNAmP_F0ZH0mBUqAlQ_q5st6OlUTs`} name5="O forte e malvado Yamcha vive no dese"
          num6="6" url6={`1D5yb86_LXhrj1hCsxlOrp-8ViRyqAMfP`} name6="Vigie as Esferas do Dragão"
        />
        </section>
        <section className="episodeButtons">
        <SectionButtons 
          num1="7" url1={`1DdCkkcdMkJjFknVvFP0rVClsCuGNnjTZ`} name1="O rei Cutelo na montanha do fogo"
          num2="8" url2={`1Djhd5aP-hVHniS4eieVZ78qY72n8jweX`} name2="Uma transformação por causa da lua"
          num3="9" url3={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name3="O truque especial do chefe Coelho"
          num4="10" url4={`1DbAGUnpP1YftYiq8_4jRPPhNY95urkAE`} name4="As Esferas do Dragão são roubadas"
          num5="11" url5={`1DpZ3lYUS5iYdpSraix_oG3wTGkvuvuiI`} name5="O Dragão é chamado"
          num6="12" url6={`1DpzyZC_B9orGD4fylblQWmZqg6b0V7CL`} name6="Um pedido feito ao Deus Dragão"
        />
        </section>
        <SectionLinks num="13" url={`1Dm8-mRk-KQNzu622eIOOe4d8YXiAng5Q`} name="A transformação de Goku" />
      </section>
    </div>
  );
}
