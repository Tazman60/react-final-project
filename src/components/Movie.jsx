import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const [img, setImg] = useState();
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = movie.poster;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      mountedRef.current = false;
    };
  }, [movie.poster]);

  return;
  <div className="movie-card">
    {!img ? (
      <>
      <div className="movie-card--skeleton"></div>
      <div className="movie-card__container--skeleton"></div>
      <div className="poster__img--skeleton"></div>
      <div className="movie__title--skeleton"></div>
      </>
    ) : (
      <>
        <div class="movie-card">
          <div class="movie-card__container">
            <Link to={`/movies/${movie.imdbID}`}>
              <figure class="movie__image--wrapper flex justify-center align-center">
                <img src={img.src} alt="" className="poster__img" />
              </figure>
            </Link>
            <div className="movie__title">
              <Link
                to={`/movies/${movie.imdbID}`}
                className="movie__title--link"
              >
                {movie.Title}
              </Link>
            </div>
            <p>
              <b>Year:</b> ${movie.Year}
            </p>
            <p>
              <b>Movie ID:</b> ${movie.imdbID}
            </p>
          </div>
        </div>
      </>
    )}
  </div>;
};

export default Movie;
