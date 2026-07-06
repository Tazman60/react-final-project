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
              href="#"
              target="_blank"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Github
            </a>
            <a
              href="#"
              target="_blank"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              className="footer__social--link link__hover-effect link__hover-effect--white"
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
