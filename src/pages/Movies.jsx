import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Movies = () => {
  useEffect(() => {
    const movieListEl = document.querySelector(".movie-list");
    const searchResultEl = document.querySelector("#filter");
    const api = "https://www.omdbapi.com/?apikey=c1438081&s=";
    const input = document.getElementById("movieKeyword");
    const button = document.getElementById("submit");

    async function filteredMovies(event) {
      const movies = await fetch(api + input.value);
      const movieData = await movies.json();

      if (!movieData.Search) {
        movieListEl.innerHTML = `<p>No movies found. Try another title.</p>`;
        return;
      }

      let sortedMovies = [];
      if (event.target.value === "OLDER_TO_NEWER") {
        sortedMovies = movieData.Search.sort((a, b) => a.Year - b.Year);
      } else if (event.target.value === "NEWER_TO_OLDER") {
        sortedMovies = movieData.Search.sort((a, b) => b.Year - a.Year);
      }
      movieListEl.innerHTML = sortedMovies
        .slice(0, 6)
        .map((movie) => movieHTML(movie))
        .join("");
    }

    async function main() {
      searchResultEl.innerHTML = searchHTML(input.value);

      const yearFilter = document.getElementById("yearFilter");
      yearFilter.addEventListener("change", filteredMovies);

      const movies = await fetch(api + input.value);
      const movieData = await movies.json();

      if (!movieData.Search) {
        movieListEl.innerHTML = `<p>No movies found. Try another title.</p>`;
        return;
      }
      
      movieListEl.innerHTML = movieData.Search.slice(0, 6)
        .map((movie) => movieHTML(movie))
        .join("");
    }

    function movieHTML(movie) {
      return `<a href="/movies/${movie.imdbID}" class="movie-card">
        <div class="movie-card__container">
          <figure class="movie__image--wrapper flex justify-center align-center">
            <img src="${movie.Poster}" alt="" class="poster__img" />
          </figure>
          <div class="movie__title">
            ${movie.Title}
          </div>
                <p><b>Year:</b> ${movie.Year}</p>
            </div>
        </a>`;
    }

    function searchHTML() {
      return `<h1 class="search-info">
           <span class="black-txt">Search results for:</span>
           <span style="text-transform: capitalize;">${input.value}</span>
         </h1>
           <select id="yearFilter" defaultValue={"DEFAULT"}>
             <option value="DEFAULT" disabled>Sort by Year</option>
             <option value="OLDER_TO_NEWER">Year: Oldest to Newest</option>
             <option value="NEWER_TO_OLDER">Year: Newest to Oldest</option>
           </select>`;
    }

    button.addEventListener("click", main);
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") main();
    });
  }, []);

  return (
    <section id="search">
      <div
        className="content-wrapper flex-col align-center"
        style={{ marginTop: "20px" }}
      >
        <h1>Browse our movies</h1>
        <div className="input-wrap">
          <input
            id="movieKeyword"
            type="text"
            placeholder="Search by Title or Keyword"
            defaultValue=""
          />
          <div className="search-wrapper flex justify-center align-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} id="submit" />
          </div>
        </div>
      </div>
      <div id="filter" className="content-wrapper justify-between">
        <h1 className="search-info">
          <span className="black-txt">Search results:</span>
        </h1>
        <select id="yearFilter" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            Sort by Year
          </option>
          <option value="OLDER_TO_NEWER">Year: Oldest to Newest</option>
          <option value="NEWER_TO_OLDER">Year: Newest to Oldest</option>
        </select>
      </div>
      <div className="content-wrapper">
        <div className="movie-list">
        </div>
      </div>
    </section>
  );
};

export default Movies;
