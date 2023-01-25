import "../styles.css";
import SectionLinks from "../../SectionLinks";
import SectionButtons from "../../SectionButtons";

export default function SeasonFour() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga de Tenshinhan</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="79" url1={`1TcwasgkfVP8sjCZMJljU1jsJboqTeNDh`} name1={`Ouro, prata e uma garrafa que engole pessoas`}
          num2="80" url2={`1TckSBueOUMsA-O80NGoVVH4_FE5aq0yw`} name2={`Na presença do rei, Goku enfrenta Ten Ron`}
          num3="81" url3={`1TaM9-A9BEoUwv_ekYtwA8tLENZxOcQTy`} name3={`Goku chega à terra do demônio`}
          num4="82" url4={`1TXnweCkg9drzoCgD2Fh6ck2eElEQ5ZCI`} name4={`Um monstro violento chamado Javaleta`}
          num5="83" url5={`1TUe4eo3KD_Qjs8vqoccMdLOlDINpYrWX`} name5={`Rápido Goku! O Torneio do de Artes Marciais está chegando`}
          num6="84" url6={`1TUU8WxYq9LzrY7axkLql4QYwiZzTu53j`} name6={`Quem é o melhor lutador de artes marciais`}
        />

        <SectionButtons 
          num1="85" url1={``} name1={`Temos que vencer! Quem passará nas preliminares`}
          num2="86" url2={``} name2={`Os oito finalistas`}
          num3="87" url3={``} name3={`Yamcha contra Tenshinhan`}
          num4="88" url4={``} name4={`Cuidado Yamcha! O terrível Tenshinhan é muito perigoso`}
          num5="89" url5={``} name5={`Terror! O mistério da Lua cheia`}
          num6="90" url6={``} name6={`Ahn? Como? O quê? Dodonpa`}
        />

        <SectionButtons 
          num1="91" url1={``} name1={`A situação mudou! O plano estratégico de Kuririn`}
          num2="92" url2={``} name2={`Finalmente chegou a vez de Goku`}
          num3="93" url3={``} name3={`Uma luta muito difícil! Tenshinhan contra Jackie-Chun`}
          num4="94" url4={``} name4={`Taiyoken, a técnica do Mestre Tsuru`}
          num5="95" url5={``} name5={`Chegou a hora! Goku enfrenta Kuririn`}
          num6="96" url6={``} name6={`A surpresa de Goku e o plano de Kuririn`}
        />

        <section className="episodeButtons">
          <SectionLinks num="97" url={``} name={`O último combate! Quem será o melhor lutador de artes marciais`} />
          <SectionLinks num="98" url={``} name={`O segredo da técnica Tayioken contra o poder de combate`} />
          <SectionLinks num="99" url={``} name={`A angústia de Tenshinhan`} />
          <SectionLinks num="100" url={``} name={`Viver ou morrer! A última alternativa`} />
          <SectionLinks num="100" url={``} name={`Sera que o torneio de artes marciais chegou ao fim`} />
        </section>
      </section>
    </div>
  );
}
