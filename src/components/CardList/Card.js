import React from "react";

const Card = ({ recipe }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <h3>{recipe.name}</h3>
      <p>
        Recipe type: {recipe.type}
      </p>
      <p>
        Author: {recipe.author}
      </p>
      <a href="{recipe.link}"><p>Recipe Link</p></a>
      <hr />
    </div>
  );
};

export default Card;
