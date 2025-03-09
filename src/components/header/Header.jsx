import React from "react";
import CV from "../cv/TB-CV.pdf";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <br /> <em>Temuri Bukhaidze</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href={CV} className="btn" target="_blank" rel="noreferrer" download>
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
