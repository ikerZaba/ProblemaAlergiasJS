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
            <tr>
              <td>{alergias[0].split(" ")[1]}</td>
              <td>{2 ** 0}</td>
            </tr>
            <tr>
              <td>{alergias[1].split(" ")[1]}</td>
              <td>{2 ** 1}</td>
            </tr>
            <tr>
              <td>{alergias[2].split(" ")[1]}</td>
              <td>{2 ** 2}</td>
            </tr>
            <tr>
              <td>{alergias[3].split(" ")[1]}</td>
              <td>{2 ** 3}</td>
            </tr>
            <tr>
              <td>{alergias[4].split(" ")[1]}</td>
              <td>{2 ** 4}</td>
            </tr>
            <tr>
              <td>{alergias[5].split(" ")[1]}</td>
              <td>{2 ** 5}</td>
            </tr>
            <tr>
              <td>{alergias[6].split(" ")[1]}</td>
              <td>{2 ** 6}</td>
            </tr>
            <tr>
              <td>{alergias[7].split(" ")[1]}</td>
              <td>{2 ** 7}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
