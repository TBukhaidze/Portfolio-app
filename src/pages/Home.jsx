import React from "react";

import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux, Redux-toolkit, HTML,
                CSS, NPM, SCSS, BootStrap, MaterialUI, Yarn, StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS,asdasd MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
