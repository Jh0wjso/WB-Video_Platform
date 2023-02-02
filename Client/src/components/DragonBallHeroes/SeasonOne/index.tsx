import "../styles.css";
import SectionButtons from "../../SectionButtons";

export default function SeasonOneHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Prisão Planetária</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="1" url1="1fz0GqbpP4fInBjHV_Yy0Z6fadMoRdPqv" name1={`Goku Vs. Goku! Uma Batalha Transcendente Começa No Planeta Da Prisão`}
          num2="2" url2="1fg4xCXI8PHx9R3xvR-GRVZdSowYE7oy8" name2={`Goku Fica Furioso! A Fúria do Mal Saião!`}
          num3="3" url3="1fvAIZqfwbGJQ57qyW4Cpqre6TPgPw6iP" name3={`O Esplendor Mais Poderoso! Vegetto Blue Explode Kaio-Ken!`}
          num4="4" url4="1flXZsiMZzfgrwlqRmo0S8HAsrCozUwHJ" name4={`Raiva! O Super Fu Aparece!`}
          num5="5" url5="1fqIp8Z9kq1J_QQURhk2HZDuEPRD2LK3z" name5={`O Guerreiro Mais Poderoso! Vegetto Super Saiyajin 4!!`}
          num6="6" url6="1fsTfVgVlflgjtr6GcHsaEnTS9M2AmX99" name6={`Eu Vou Resolver Isso! Ativar! Instinto Superior!`}
        />
      </section>
    </div>
  );
}
