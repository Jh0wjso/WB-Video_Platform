import "../styles.css";
import SectionButtons from "../../SectionButtons";

export default function SeasonThreeGT() {
  return (
    <div className="flex flex-col border rounded p-5 mt-8">
      <h1 className="text-center text-4xl font-bold">Saga do Super 17</h1>
      <section className="flex flex-col items-center">
        <SectionButtons 
          num1="42" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1="Morra Goku! Os Inimigos Mais Fortes Escapam do Inferno"
          num2="43" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2="Volta de Cell e Freeza"
          num3="44" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3="O ultimo Android! O Super 17"
          num4="45" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4="O Plano Para Escapar do Inferno"
          num5="46" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5="O Super Saiyajin 4 Enfrenta o N°17"
          num6="47" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6="Goku e o N°18 Lutam Juntos"
        />
      </section>
    </div>
  );
}
