import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ film }) => {
  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < film.genre_ids.length; i++) {
      switch (film.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(film.id.toString())) {
      storedData.push(film.id);
    }
    window.localStorage.movies = storedData;
  };

  const undoStorage = () => {
    let storedData = window.localStorage.movies.split(",");

    let newData = storedData.filter((id) => id != film.id);
    window.localStorage.movies = newData;
  };

  return (
    <li className="card">
      <img
        src={
          film.poster_path
            ? "https://image.tmdb.org/t/p/original" + film.poster_path
            : "../../public/img/poster.jpg"
        }
        alt={film.original_title}
      />
      <h2>{film.title}</h2>
      {film.release_date ? <h5>{film.release_date}</h5> : null}
      <h4>
        {film.vote_average}{" "}
        <span>
          {" "}
          <FontAwesomeIcon icon={faStar} />
        </span>
      </h4>
      <ul>
        {film.genre_ids
          ? genreFinder()
          : film.genres.map((genre) => <li key={genre}>{genre.name}</li>)}
      </ul>
      {film.overview ? <p>{film.overview}</p> : ""}

      {film.genre_ids ? (
        <input
          type="button"
          className="btn"
          value="J'adore"
          onClick={() => {
            addStorage();
          }}
        />
      ) : (
        <input
          type="button"
          className="btn"
          value="Retirer de la liste"
          onClick={() => {
            undoStorage();
            window.location.reload();
          }}
        />
      )}
    </li>
  );
};

export default Card;
