import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Movieinfo = () => {
  //   useEffect(() => {
  // const movieInfoEl = document.querySelector(".movie__selected");
  // const api = "https://www.omdbapi.com/?apikey=c1438081&i=";
  // const imdbId = "tt2015381";
  const { id } = useParams();
  // const movie = movies.find((movie) => +movie.imdbId === +id);

  // function Main() {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const loadMovie = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=c1438081&i=${id}`,
      );
      setMovie(response.data);
      setLoading(false);
    };
    loadMovie();
  }, [id]);

  // if (loading) {
  //   return <h4>Loading...</h4>;
  // }

  if (!movie) {
    return null;
  }

  return (
    <div id="movies__body">
      <main id="movies__main">
        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top">
              <Link to="/movies" className="movie__link">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
              <Link to="/movies" className="movie__link">
                <h2 className="movie__selected--tittle--top">Movies</h2>
              </Link>
            </div>
            {loading ? (
              <>
                <div className="movie__selected--img--skeleton"></div>
              </>
            ) : (
              <div className="movie__selected">
                <figure className="movie__selected--figure">
                  <img
                    className="movie__selected--img"
                    src={movie.Poster}
                    alt=""
                  />
                </figure>
                <div className="movie__selected--description">
                  <h2 className="movie__selected--title">{movie.Title}</h2>
                  <p className="movie__selected--info">
                    <b>Year</b> {movie.Year}
                  </p>
                  <p className="movie__selected--info">
                    <b>Rated</b> {movie.Rated}
                  </p>
                  <div className="movie__summary">
                    <h3 className="movie__summary--title">Plot</h3>
                    {/* imdbID.Plot */}
                    <p className="movie__summary--para">{movie.Plot}</p>
                    <h3 className="movie__summary--title">Actors</h3>
                    {/* imdbID.Actors */}
                    <p className="movie__summary--para">{movie.Actors}</p>
                    <h3 className="movie__summary--title">Writer</h3>
                    {/* imdbID.Writer */}
                    <p className="movie__summary--para">{movie.Writer}</p>
                    <h3 className="movie__summary--title">Awards</h3>
                    {/* imdbID.Awards */}
                    <p className="movie__summary--para">{movie.Awards}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Movieinfo;
