import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonThreeSuper() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Universo 6</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="28" url1="1E0X98FP88k2rPlgMd5knJGX4GwYQA1CT" name1={`O Deus da Destruição do Universo Seis! Seu Nome é Champa`}
          num2="29" url2="1E8RjOQVKIX89hEd4HkloHCyb4bgdSqrp" name2={`Um Novo Torneio de Artes Marciais! O Capitão do Time é Mais Forte Que o Goku`}
          num3="30" url3="1E6XHprWnKK3XMO_62EWcX2tVYn7cowIY" name3={`Treino Antes do Torneio. Quem Serão os Dois Últimos Participantes`}
          num4="31" url4="1Dxj0yPgv4XWc0dPTIgevScGKUr-0sKm-" name4="À Procura do Senhor Zuno! Vamos Descobrir Onde Estão as Super Esferas do Dragão"
          num5="32" url5="1EC2go5Fkx6PZ3B2VD9wOMfphY9fdlgeC" name5={`Começa o Torneio! Todos Para o "Planeta Sem Nome"`}
          num6="33" url6="1EAy_pzyBKNG_iFz9T0zsWvToso3SYLfi" name6={`Cuidado, Universo Seis! Este é o Super Saiyajin Son Goku!`}
        />
        <SectionButtons 
          num1="34" url1="1EC9ewu7vVf8w0FTBi5YlNpcn6w5AtzLg" name1={`Cuidado, Universo Seis! Este é o Super Saiyajin Son Goku!`}
          num2="35" url2="1EQB8C5eO9GNgb4xR3M885ydvPekHir4W" name2={`O Ódio Se Torna Força! Vegeta Vai Para o Tudo ou Nada! `}
          num3="36" url3="1EhPAFcVF0Y3Mgoa35odkbRcC5LvBOkeX" name3={`Uma Inesperada Luta Complicada! A Explosão de Raiva de Vegeta!`}
          num4="37" url4="1Eh3EZL6LkibCReNPRXjDKYr2zF-TqLJR" name4={`Não Se Esqueça do Orgulho dos Saiyajins! Vegeta vs. o Saiyajin do Universo Seis!`}
          num5="38" url5="1EJJ8DC1dgnuOx13cyMI1DkWHIdVBUrm1" name5={`O Mais Forte Lutador do Universo Seis! O Assassino Hit!`}
          num6="39" url6="1EF21H_NCMChfUvnRxsF9DXUTzUuiJF-g" name6={`O Contra-Ataque do "Salto Temporal Antecipado"!? A Nova Técnica de Goku!`}
        />
        <SectionButtons 
          num1="40" url1="1EypDF-VR3tbeMNMEMBA-g_fB3Z6NWxsa" name1={`O Desfecho! Quem Venceu: Bills ou Champa?`}
          num2="41" url2="1Ew_oAydseDR0FCgN_sXDgVI0PvIZK4uh" name2={`Apareça Dragão dos Deuses! E Conceda o Meu Humilde Desejo, Por Favorzinho!`}
          num3="42" url3="1EvnnuiHQZfwXLTg9hanjl9borj7ZEMis" name3={`A Caótica Festa de Comemoração! O Confronto Entre Monaka e Son Goku!`}
          num4="43" url4="1EyG90qgv8ZSLX7f6NuYmVU7B7iBz9393" name4={`O Ki de Goku Está Fora de Controle? Cuidar da Pan Não é Brinquedo!`}
          num5="44" url5="1FC6GUj7U1VgxECzf2HL_FOjRmyIsoDtF" name5={`O Selo do Planeta Potôfu! O Segredo da "Água Sobre-Humana"!`}
          num6="45" url6="1F33JaM0DPHnHeELqwHXkD_A0syhKSqtd" name6={`Reviravolta Total! A Ameaça do Falso Vegeta!`}
        />
        <section className="episodeButtons">
          <SectionLinks num="46" url="1FCNLK5qORSzkbmvBukQiKBn1eR2KPeLK" name={`Goku vs. o Falso Vegeta! Quem Vai Vencer?!`} />
        </section>
      </section>
    </div>
  );
}
