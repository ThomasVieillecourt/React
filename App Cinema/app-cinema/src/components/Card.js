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

  return (
    <li className="card">
      <img
        src={"https://image.tmdb.org/t/p/original/" + film.poster_path}
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
      <ul>{film.genre_ids ? genreFinder() : null}</ul>
      {film.overview ? <p>{film.overview}</p> : null}
      <input type="button" className="btn" value="J'adore" />
    </li>
  );
};

export default Card;
