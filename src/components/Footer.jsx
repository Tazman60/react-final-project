import React from "react";
import Logo from "../assets/ML-monogram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure>
            <img id="personal-logo" src={Logo} alt="" />
          </figure>
          <div className="footer__social--list">
            <a
              href="https://github.com/Tazman60"
              target="_blank" rel="noreferrer"
              className="footer__social--link link__hover-effect"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/manny-lorenzo"
              target="_blank" rel="noreferrer"
              className="footer__social--link link__hover-effect"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mlorenzo@msn.com" 
              target="_blank" rel="noreferrer"
              className="footer__social--link link__hover-effect"
            >
              Contact
            </a>
          </div>
          <div className="footer__copyright">
            <p>Copyright &copy; 2026 Manuel Lorenzo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
