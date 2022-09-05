import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Countries = () => {
  // La seule facon de modifier la variable data c'est de passer par setData et le useState, c'est donc à setData qu'on va attribuer le res.data
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radio = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // Le useEffect se joue lorsque le composant est monté(quand on l'appell)
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radio.map((continent, index) => (
          <li key={index}>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      {/* Si selectedRadio est true alors on affiche le bouton  */}

      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio)) // permet de filtrer chaque carte en fonction de leur continent et de les afficher dans le slice
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Cards key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
