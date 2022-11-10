// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals from "./data.js";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  model: hondaModel,
  coloursByPopularity: [hondaTopColour, hondaColor2],
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty }
} = honda;

const {
  model: teslaModel,
  coloursByPopularity: [teslaTopColour, teslaColor2],
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty }
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{teslaModel}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{hondaModel}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
