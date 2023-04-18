import "../styles.css";
import SectionButtons from "../../SectionButtons";

export default function SeasonOneHeroes() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Saga Prisão Planetária</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="1" url1="1fz0GqbpP4fInBjHV_Yy0Z6fadMoRdPqv"
          num2="2" url2="1fg4xCXI8PHx9R3xvR-GRVZdSowYE7oy8"
          num3="3" url3="1fvAIZqfwbGJQ57qyW4Cpqre6TPgPw6iP"
          num4="4" url4="1flXZsiMZzfgrwlqRmo0S8HAsrCozUwHJ"
          num5="5" url5="1fqIp8Z9kq1J_QQURhk2HZDuEPRD2LK3z"
          num6="6" url6="1fsTfVgVlflgjtr6GcHsaEnTS9M2AmX99"
        />
      </section>
    </div>
  );
}
