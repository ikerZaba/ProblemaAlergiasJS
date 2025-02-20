import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const alergias = [
    "los huevos",
    " los cacahuetes",
    "el marisco",
    "las fresas",
    " los tomates",
    "el chocolate",
    "el polen",
    "los gatos",
  ];
  const [inputValue, setInputValue] = useState("");
  const [resultado, setResultado] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    var alergiasCalculadas = "Eres alérgico a";
    var scoreAlergias = inputValue % 256;
    if (scoreAlergias == 0) {
      alergiasCalculadas = "No tienes alergias";
    } else {
      var i = 0;
      while (scoreAlergias > 0) {
        if (scoreAlergias % 2 == 1) {
          if (i == 0) {
            alergiasCalculadas = alergiasCalculadas.concat(": ", alergias[i]);
          } else {
            alergiasCalculadas = alergiasCalculadas.concat(", ", alergias[i]);
          }
        }
        scoreAlergias = parseInt(scoreAlergias / 2);
        i++;
      }
    }
    setResultado(alergiasCalculadas);
  };
  return (
    <div className="App">
      <h1 class="titulo">Calculador de alergias</h1>
      <div>
        <input
          class="inputScore"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Introduce un valor"
        />
      </div>
      <button class="botonCalcular" onClick={handleSubmit}>
        Calcular
      </button>
      {<p class="parrafoResultado">{resultado}</p>}
    </div>
  );
}
