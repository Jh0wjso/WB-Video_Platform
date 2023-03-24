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
          num1="85" url1={`1ZKyoRankTrrYtVdK2FxC7L2cSHBzgmbp`} name1={`Temos que vencer! Quem passará nas preliminares`}
          num2="86" url2={`1ZY9ai6r7LcA721mqBLYL_FcPfzamwOum`} name2={`Os oito finalistas`}
          num3="87" url3={`1ZTYvLddicD6h9SmftIBZxaDj4FzOsjhu`} name3={`Yamcha contra Tenshinhan`}
          num4="88" url4={`1ZRaR_zdVGFfrLJB6vR0AwZLJWsJS-RMN`} name4={`Cuidado Yamcha! O terrível Tenshinhan é muito perigoso`}
          num5="89" url5={`1ZRZlfMbiMe1-59ZbNwLm4eclPOqbx3P7`} name5={`Terror! O mistério da Lua cheia`}
          num6="90" url6={`1Zch7OkKcWTAxvaR3X3dlenH1ghYAx-nd`} name6={`Ahn? Como? O quê? Dodonpa`}
        />

        <SectionButtons 
          num1="91" url1={`1_3p4TSMNJov1FAkteRm8YyCQ102rApa7`} name1={`A situação mudou! O plano estratégico de Kuririn`}
          num2="92" url2={`1_3nSCTdlN3GFxmpSwIhY_hNG2FTRb7CM`} name2={`Finalmente chegou a vez de Goku`}
          num3="93" url3={`1_7XdN1MdKWEn3xkx4GFoJCKT3LeDPPiS`} name3={`Uma luta muito difícil! Tenshinhan contra Jackie-Chun`}
          num4="94" url4={`1ZyrMEtWeuFUVDrW0vDoqx9NUOm2S8dTL`} name4={`Taiyoken, a técnica do Mestre Tsuru`}
          num5="95" url5={`1ZlmsqPfMyiAs0uYuzVL-EvF2RJfujNN6`} name5={`Chegou a hora! Goku enfrenta Kuririn`}
          num6="96" url6={`1_3LZ8O8EH7cdy9R2Q-zXNKZ-mT5f7K7e`} name6={`A surpresa de Goku e o plano de Kuririn`}
        />
        <section className="episodeButtons">
          <SectionLinks num="97" url={`1_PFg0k1klstQTRJz4MYo5jjKTx-p9bf9`} name={`O último combate! Quem será o melhor lutador de artes marciais`} />
          <SectionLinks num="98" url={`1_NxYNES11TYVrV7SoQhU6JIiYeRLz7w_`} name={`O segredo da técnica Tayioken contra o poder de combate`} />
          <SectionLinks num="99" url={`1_kizGUkJW7Kqp_wCKEQa3Ynsu1eZbrpL`} name={`A angústia de Tenshinhan`} />
          <SectionLinks num="100" url={`1_kiMaqUOQqSWVOBGNNDSBOKI4tP3MT1V`} name={`Viver ou morrer! A última alternativa`} />
          <SectionLinks num="101" url={`1_QlUeqZTfINdsZCALkJj6y-vRHkMSfbE`} name={`Sera que o torneio de artes marciais chegou ao fim`} />
        </section>
      </section>
    </div>
  );
}