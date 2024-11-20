import React from "react";

import Header from "../components/header/Header";

import html from "../img/icons/html.svg";
import css from "../img/icons/css.svg";
import bootstrap from "../img/icons/bootstrap.svg";
import npm from "../img/icons/npm.svg";
import webpack from "../img/icons/webpack.svg";
import js from "../img/icons/js.svg";
import react from "../img/icons/react.svg";
import redux from "../img/icons/redux.svg";
import node from "../img/icons/node.svg";
import mysql from "../img/icons/mysql.svg";

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
                  <p>CSS,SCSS</p>
                </li>
                <li className="social__item">
                  <img src={bootstrap} alt="Link" />
                  <p>Bootstrap</p>
                </li>
                <li className="social__item">
                  <img src={npm} alt="Link" />
                  <p>NPM</p>
                </li>
              </ul>
              <ul className="social">
                <li className="social__item">
                  <img src={webpack} alt="Link" />
                  <p>Webpack</p>
                </li>
                <li className="social__item">
                  <img src={js} alt="Link" />
                  <p>JS</p>
                </li>
                <li className="social__item">
                  <img src={react} alt="Link" />
                  <p>ReactJS</p>
                </li>
                <li className="social__item">
                  <img src={redux} alt="Link" />
                  <p>Redux-toolkit</p>
                </li>
              </ul>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <ul className="social">
                <li className="social__item">
                  <img src={node} alt="Link" />
                  <p>NodeJS</p>
                </li>
                <li className="social__item">
                  <img src={mysql} alt="Link" />
                  <p>MySQL</p>
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
