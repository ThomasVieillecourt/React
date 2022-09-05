import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Countries = () => {
  // La seule facon de modifier la variable data c'est de passer par setData et le useState, c'est donc à setData qu'on va attribuer le res.data
  const [data, setData] = useState([]);

  // Le useEffect se joue lorsque le composant est monté(quand on l'appell)
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul>
        {data.map((country, index) => (
          <Cards key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
