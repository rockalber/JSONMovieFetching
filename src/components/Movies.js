import React from "react";
import "./Movies.css";

export const Movies = (props) => {
  return (
    <div className="movie">
      <div>
          <img
            src={props.img}
            alt=""
          />
        <p>{props.title}</p>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export default Movies;
