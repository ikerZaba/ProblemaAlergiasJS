import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const alergias = [
    "los Huevos",
    "los Cacahuetes",
    "el Marisco",
    "las Fresas",
    "los Tomates",
    "el Chocolate",
    "el Polen",
    "los Gatos",
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
          if (alergiasCalculadas.localeCompare("Eres alérgico a") == 0) {
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
      <div class="listaAlergias">
        <table class="tablaAlergias">
          <thead>
            <tr>
              <th>Alérgeno</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {alergias.map((alergia) => {
              return (
                <tr>
                  <td>{alergia.split(" ")[1]}</td>
                  <td>{2 ** alergias.indexOf(alergia)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
