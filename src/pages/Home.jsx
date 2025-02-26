import React from "react";

import Header from "../components/header/Header";

import html from "../img/icons/html.svg";
import css from "../img/icons/css.svg";
import bootstrap from "../img/icons/bootstrap.svg";
import tailwind from "../img/icons/tailwind.svg";
import js from "../img/icons/js.svg";
import ts from "../img/icons/ts.svg";
import react from "../img/icons/react.svg";
import redux from "../img/icons/redux.svg";
import next from "../img/icons/next.svg";
import git from "../img/icons/git.svg";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <ul className="social" style={{ marginBottom: "30px" }}>
                <li className="social__item">
                  <img src={html} alt="Link" />
                  <p>HTML</p>
                </li>
                <li className="social__item">
                  <img src={css} alt="Link" />
                  <p>CSS/SCSS</p>
                </li>
                <li className="social__item" style={{ marginRight: "5px" }}>
                  <img src={bootstrap} alt="Link" />
                  <p>Bootstrap</p>
                </li>
                <li className="social__item">
                  <img src={tailwind} alt="Link" />
                  <p>Tailwind</p>
                </li>
              </ul>
              <ul className="social">
                <li className="social__item" style={{ marginRight: "5px" }}>
                  <img src={git} alt="Link" />
                  <p>Git</p>
                </li>
                <li className="social__item" style={{ marginRight: "10px" }}>
                  <img src={js} alt="Link" />
                  <p>JS</p>
                </li>
                <li className="social__item" style={{ marginRight: "5px" }}>
                  <img src={ts} alt="Link" />
                  <p>TS</p>
                </li>
                <li className="social__item">
                  <img src={react} alt="Link" />
                  <p>ReactJS</p>
                </li>
              </ul>
              <ul
                className="social"
                style={{ justifyContent: "center", marginTop: "20px" }}
              >
                <li className="social__item">
                  <img src={redux} alt="Link" />
                  <p>Redux-toolkit</p>
                </li>
                <li className="social__item" style={{ marginRight: "15px" }}>
                  <img src={next} alt="Link" />
                  <p>Next.js</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
