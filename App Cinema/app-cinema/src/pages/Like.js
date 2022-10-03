import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";

const Like = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let filmArray = [];
    let filmsId = window.localStorage.movies
      ? window.localStorage.movies.split(",") // .split() permet de séparer des éléments par une virgule et de créer un tableau
      : [];

    for (let i = 0; i < filmsId.length; i++) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            filmsId[i] +
            "?api_key=0fd1886a37cbb0e6634bebf211def7ec&language=fr-FR"
        )
        .then((res) => setListData((listData) => [...listData, res.data])); // Pour ne pas écraser data à chaque itération
    }
  }, []);

  return (
    <div>
      <Navigation />
      <div className="result">
        {listData.length > 0 ? (
          listData.map((film) => <Card film={film} key={film.id} />)
        ) : (
          <h2>
            {" "}
            Ajoutez des coups de coeur pour les afficher dans votre liste
          </h2>
        )}
      </div>
    </div>
  );
};

export default Like;
