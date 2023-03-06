import React from "react";
import Movies from "./Movies";
import "./Main.css";
import MovieApi from "../movie.json";
export const Main = () => {
  return (
    <div className="main">
      {MovieApi.map((element, index) => {
        return (
          <Movies
            title={element.Title}
            year={element.Year}
            img={element.Poster}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Main;
