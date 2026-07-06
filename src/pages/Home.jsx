import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MovieImage from "../assets/undraw_home-cinema_jdm1.svg";

const Home = () => {
  return (
    <section id="home">
      <div
        className="content-wrapper flex-col align-center"
        style={{ marginTop: "40px" }}
      >
        <h1>The best and only platform for movie enthusiasts</h1>
        <h3>Search for your favorite movies</h3>
        <div className="input-wrap">
          <input
            id="movieKeyword"
            type="text"
            placeholder="Search by Title or Keyword"
            value=""
          />
          <div className="search-wrapper flex justify-center align-center">
            {/* <i id="submit" FontAwesomeIcon="fa-solid fa-magnifying-glass"></i> */}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
      <figure className="home__image--wrapper">
        <img src={MovieImage} alt="" />
      </figure>
    </section>
  );
};

export default Home;
