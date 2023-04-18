import "../styles.css";
import SectionButtons from "../../SectionButtons";
import SectionLinks from "../../SectionLinks";

export default function SeasonThreeSuper() {
  return (
    <div className="containerEps">
      <h1 className="text-center text-4xl font-bold">Universo 6</h1>
      <section className="mt-8 flex flex-col items-center">
        <SectionButtons 
          num1="28" url1="1E0X98FP88k2rPlgMd5knJGX4GwYQA1CT"
          num2="29" url2="1E8RjOQVKIX89hEd4HkloHCyb4bgdSqrp"
          num3="30" url3="1E6XHprWnKK3XMO_62EWcX2tVYn7cowIY"
          num4="31" url4="1Dxj0yPgv4XWc0dPTIgevScGKUr-0sKm-"
          num5="32" url5="1EC2go5Fkx6PZ3B2VD9wOMfphY9fdlgeC"
          num6="33" url6="1EAy_pzyBKNG_iFz9T0zsWvToso3SYLfi"
        />
        <SectionButtons 
          num1="34" url1="1EC9ewu7vVf8w0FTBi5YlNpcn6w5AtzLg"
          num2="35" url2="1EQB8C5eO9GNgb4xR3M885ydvPekHir4W"
          num3="36" url3="1EhPAFcVF0Y3Mgoa35odkbRcC5LvBOkeX"
          num4="37" url4="1Eh3EZL6LkibCReNPRXjDKYr2zF-TqLJR"
          num5="38" url5="1EJJ8DC1dgnuOx13cyMI1DkWHIdVBUrm1"
          num6="39" url6="1EF21H_NCMChfUvnRxsF9DXUTzUuiJF-g"
        />
        <SectionButtons 
          num1="40" url1="1EypDF-VR3tbeMNMEMBA-g_fB3Z6NWxsa"
          num2="41" url2="1Ew_oAydseDR0FCgN_sXDgVI0PvIZK4uh"
          num3="42" url3="1EvnnuiHQZfwXLTg9hanjl9borj7ZEMis"
          num4="43" url4="1EyG90qgv8ZSLX7f6NuYmVU7B7iBz9393"
          num5="44" url5="1FC6GUj7U1VgxECzf2HL_FOjRmyIsoDtF"
          num6="45" url6="1F33JaM0DPHnHeELqwHXkD_A0syhKSqtd"
        />
        <section className="episodeButtons">
          <SectionLinks num="46" url="1FCNLK5qORSzkbmvBukQiKBn1eR2KPeLK" />
        </section>
      </section>
    </div>
  );
}
