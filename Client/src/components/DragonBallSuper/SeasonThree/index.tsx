import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonThreeSuper() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Universo 6</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="28" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1={`O Deus da Destruição do Universo Seis! Seu Nome é Champa`}
          num2="29" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2={`Um Novo Torneio de Artes Marciais! O Capitão do Time é Mais Forte Que o Goku`}
          num3="30" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3={`Treino Antes do Torneio. Quem Serão os Dois Últimos Participantes`}
          num4="31" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="À Procura do Senhor Zuno! Vamos Descobrir Onde Estão as Super Esferas do Dragão"
          num5="32" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5={`Começa o Torneio! Todos Para o "Planeta Sem Nome"`}
          num6="33" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6={`Cuidado, Universo Seis! Este é o Super Saiyajin Son Goku!`}
        />
        <SectionButtons 
          num1="34" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1={`Cuidado, Universo Seis! Este é o Super Saiyajin Son Goku!`}
          num2="35" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2={`O Ódio Se Torna Força! Vegeta Vai Para o Tudo ou Nada! `}
          num3="36" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3={`Uma Inesperada Luta Complicada! A Explosão de Raiva de Vegeta!`}
          num4="37" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4={`Não Se Esqueça do Orgulho dos Saiyajins! Vegeta vs. o Saiyajin do Universo Seis!`}
          num5="38" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5={`O Mais Forte Lutador do Universo Seis! O Assassino Hit!`}
          num6="39" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6={`O Contra-Ataque do "Salto Temporal Antecipado"!? A Nova Técnica de Goku!`}
        />
        <SectionButtons 
          num1="40" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1={`O Desfecho! Quem Venceu: Bills ou Champa?`}
          num2="41" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2={`Apareça Dragão dos Deuses! E Conceda o Meu Humilde Desejo, Por Favorzinho!`}
          num3="42" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3={`A Caótica Festa de Comemoração! O Confronto Entre Monaka e Son Goku!`}
          num4="43" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4={`O Ki de Goku Está Fora de Controle? Cuidar da Pan Não é Brinquedo!`}
          num5="44" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5={`O Selo do Planeta Potôfu! O Segredo da "Água Sobre-Humana"!`}
          num6="45" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6={`Reviravolta Total! A Ameaça do Falso Vegeta!`}
        />
        <section className="episodeButtons">
          <SectionLinks num="46" url="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name={`Goku vs. o Falso Vegeta! Quem Vai Vencer?!`} />
        </section>
      </section>
    </div>
  );
}
