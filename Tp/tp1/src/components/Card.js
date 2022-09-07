import React from "react";

const Card = ({ recipe }) => {
  return (
    <li className="cards">
      <h3>{recipe.strMeal}</h3>
      <p>Origin: {recipe.strArea}</p>
      <img src={recipe.strMealThumb} alt="recette de cuisine" />
      <p className="recipes-text">{recipe.strInstructions}</p>
    </li>
  );
};

export default Card;
