import React from "react";

import Header from "../components/header/Header";
import { icons } from "../helpers/icons";

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
                  <img src={icons.html} alt="Link" />
                  <p>HTML</p>
                </li>
                <li className="social__item">
                  <img src={icons.css} alt="Link" />
                  <p>CSS/SCSS</p>
                </li>
                <li className="social__item" style={{ marginRight: "5px" }}>
                  <img src={icons.bootstrap} alt="Link" />
                  <p>Bootstrap</p>
                </li>
                <li className="social__item">
                  <img src={icons.tailwind} alt="Link" />
                  <p>Tailwind</p>
                </li>
              </ul>
              <ul className="social">
                <li className="social__item" style={{ marginRight: "5px" }}>
                  <img src={icons.git} alt="Link" />
                  <p>Git</p>
                </li>
                <li className="social__item" style={{ marginRight: "10px" }}>
                  <img src={icons.js} alt="Link" />
                  <p>JS</p>
                </li>
                <li className="social__item" style={{ marginRight: "5px" }}>
                  <img src={icons.ts} alt="Link" />
                  <p>TS</p>
                </li>
                <li className="social__item">
                  <img src={icons.react} alt="Link" />
                  <p>ReactJS</p>
                </li>
              </ul>
              <ul
                className="social"
                style={{ justifyContent: "center", marginTop: "20px" }}
              >
                <li className="social__item">
                  <img src={icons.redux} alt="Link" />
                  <p>Redux-toolkit</p>
                </li>
                <li className="social__item" style={{ marginRight: "15px" }}>
                  <img src={icons.next} alt="Link" />
                  <p>Next.js</p>
                </li>
                <li className="social__item" style={{ marginRight: "15px" }}>
                  <img src={icons.mongoDB} alt="Link" />
                  <p>MongoDB</p>
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
