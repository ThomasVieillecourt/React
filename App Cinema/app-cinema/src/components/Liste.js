import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import {
  faArrowUp,
  faArrowDown,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Liste = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("marvel");
  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=0fd1886a37cbb0e6634bebf211def7ec&query=" +
          search +
          "&language=fr-FR"
      )
      .then((res) => setData(res.data.results));
  }, [search]);

  return (
    <div>
      <div className="form-component">
        <div className="form-container">
          <form action="">
            <input
              type="text"
              placeholder="Entrez le titre d'un film"
              id="searchInput"
              onChange={(e) => setSearch(e.target.value)}
            />
            <input type="submit" value={"Rechercher"} />
          </form>
        </div>
        <div className="btn-sort-container">
          <button
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <button
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            <FontAwesomeIcon icon={faArrowDown} />
            Flop
          </button>
          <button
            className="btn-reset"
            id="reset"
            type="submit"
            onClick={() => setSortGoodBad("dateToDate")}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        </div>
      </div>
      <div>
        <ul className="card-container">
          {data
            .sort((a, b) => {
              if (sortGoodBad === "goodToBad") {
                return b.vote_average - a.vote_average;
              } else if (sortGoodBad === "badToGood") {
                return a.vote_average - b.vote_average;
              } else if (sortGoodBad === "dateToDate") {
                return new Date(b.release_date) - new Date(a.release_date);
              }
            })
            .map((film, index) => (
              <Card key={index} film={film} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Liste;
