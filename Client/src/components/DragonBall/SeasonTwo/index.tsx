import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonTwo() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga do Tenkaichi Budokai</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="14" url1={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name1={`O rival de Goku`}
          num2="15" url2={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name2={`A misteriosa garota Lanch`}
          num3="16" url3={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name3={`Caça às pedras`}
          num4="17" url4={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name4={`Os entregadores de leite`}
          num5="18" url5={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name5={`Treinamento ao Estilo de Mestre Kame`}
          num6="19" url6={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name6={`O Grande torneio de artes marciais`}
        />
        <SectionButtons 
          num1="20" url1={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name1={`O Árduo Treinamento Poderá Ser Posto em Prática`}
          num2="21" url2={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name2={`Cuidado, Kuririn`}
          num3="22" url3={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name3={`Yamcha contra Jackie Chun`}
          num4="23" url4={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name4={`O Terrível Giran`}
          num5="24" url5={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name5={`O Ataque Furioso de Kuririn`}
          num6="25" url6={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name6={`O Terrível Ataque Aéreo de Nam`}
        />

        <section className="episodeButtons">
          <SectionLinks num="26" url={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name={`A força do Kame-Hame-Ha`} />
          <SectionLinks num="27" url={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name={`Goku em sérios apuros`} />
          <SectionLinks num="28" url={`1DXOes0Uc2sCOTEQtbKl5e0GRmDG1ZysH`} name={`O desaparecimento de Goku`} />
        </section>
      </section>
    </div>
  );
}
