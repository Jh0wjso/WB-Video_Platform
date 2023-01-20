import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonTwo() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga do Tenkaichi Budokai</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="14" url1={`1GfmtM47AcNg6J9ev3Dkd35SjO0dn1YpO`} name1={`O rival de Goku`}
          num2="15" url2={`1GvdkJdlGfqqUikpx_nliohTjDbxMM5Nh`} name2={`A misteriosa garota Lanch`}
          num3="16" url3={`1H0leD9hwYjdPjuXHWYv4C_6z5Rv2WagD`} name3={`Caça às pedras`}
          num4="17" url4={`1H51mqli-kKo7wjxigUGDRI7s1nJgJP4p`} name4={`Os entregadores de leite`}
          num5="18" url5={`1HG_p2e8rZi31pTSpgzuyOp_X7_ZASJA7`} name5={`Treinamento ao Estilo de Mestre Kame`}
          num6="19" url6={`1HJRzU5CPOnPTSy9T1J1OHa2dZt8V2Wfc`} name6={`O Grande torneio de artes marciais`}
        />
        <SectionButtons 
          num1="20" url1={`1HKPRb6IDa3d5tROA9BSnyhEAzSus3dcE`} name1={`O Árduo Treinamento Poderá Ser Posto em Prática`}
          num2="21" url2={`1HOKU7uOl2AeGe2tQqTe18dKEuy6Wqf4U`} name2={`Cuidado, Kuririn`}
          num3="22" url3={`1HTUM0UIwYMMsUPzhStw1tj_XzmTJv26A`} name3={`Yamcha contra Jackie Chun`}
          num4="23" url4={`1HW197LGHe5TPSHAywhUS_8PUwsUczWBr`} name4={`O Terrível Giran`}
          num5="24" url5={`1HZVW8XvG99fHe_Soyvb3X1dVWVY-BS7b`} name5={`O Ataque Furioso de Kuririn`}
          num6="25" url6={`1HZxGVJ9Pz6d3rvx7oXD2CvXMrlrivQMB`} name6={`O Terrível Ataque Aéreo de Nam`}
        />

        <section className="episodeButtons">
          <SectionLinks num="26" url={`1HffqCFYRHRz2MF6blMj9HzhlHG-tQf-P`} name={`A força do Kame-Hame-Ha`} />
          <SectionLinks num="27" url={`1Hk98iiGUo4cmU-IcUJR5mB12UukVBILz`} name={`Goku em sérios apuros`} />
          <SectionLinks num="28" url={`1Hlep8zsmNnA7l-s0WjAZIHnRFYpBLjO_`} name={`O desaparecimento de Goku`} />
        </section>
      </section>
    </div>
  );
}
