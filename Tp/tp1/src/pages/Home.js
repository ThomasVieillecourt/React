import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // https://www.themealdb.com/api/json/v1/1/search.php?s=

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchValue
      )
      .then((res) => setData(res.data.meals));
  }, [searchValue]);

  return (
    <div className="main-container">
      <h1>React Cook</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en Anglais)"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="container">
        <ul className="container-recipes">
          {/* data && permet de vérifier si data est true et donc sil y a du contenu, évite le bug ou rien n'est affiché */}
          {data &&
            data.map((recipe, index) => <Card key={index} recipe={recipe} />)}
          {/* ATTENTION ce sont des () après le .map fleché */}
        </ul>
      </div>
    </div>
  );
};
export default Home;
