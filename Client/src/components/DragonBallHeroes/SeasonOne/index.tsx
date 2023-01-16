import "../styles.css";
import SectionButtons from "../../SectionButtons";

export default function SeasonOneHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Saiyajin</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="1" url1="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name1={`Goku Vs. Goku! Uma Batalha Transcendente Começa No Planeta Da Prisão`}
          num2="2" url2="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name2={`Goku Fica Furioso! A Fúria do Mal Saião!`}
          num3="3" url3="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name3={`O Esplendor Mais Poderoso! Vegetto Blue Explode Kaio-Ken!`}
          num4="4" url4="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name4={`Raiva! O Super Fu Aparece!`}
          num5="5" url5="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name5={`O Guerreiro Mais Poderoso! Vegetto Super Saiyajin 4!!`}
          num6="6" url6="1lw0zTaPLke9kRB6u4KEkXgaHMKCkuKZm" name6={`Eu Vou Resolver Isso! Ativar! Instinto Superior!`}
        />
      </section>
    </div>
  );
}
