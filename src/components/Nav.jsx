import React from "react";
import MovieLogo from "../assets/cinema-tickets-with-pop-corn-drink-amd-glasses_11720979.png";

const Nav = () => {
  return (
    <section id="landing">
      <div className="flex flex-col" style={{ display: "flex", flex: "1 1 0%" }}>
        <div className="navbar flex">
          <div
            className="flex content-wrapper justify-between align-center"
            style={{ flexDirection: "row" }}
          >
            <div className="logo">
              <img className="logo" src={MovieLogo} alt="" />
            </div>
            <div className="links flex align-center justify-between">
              <a
                href="/"
                className="link nav__link--anchor link__hover-effect router-link-active"
              >
                Home
              </a>
              <a
                href="/movies"
                className="link nav__link--anchor link__hover-effect router-link-exact-active router-link-active"
              >
                Find your movie
              </a>
              <a href="mailto:mlorenzo@msn.com" className="btn-contact">
                Contact
              </a>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
