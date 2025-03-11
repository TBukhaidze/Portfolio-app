import React, { useEffect, useState } from "react";
import CV from "../cv/TB-CV.pdf";
import Typewriter from "typewriter-effect";

const Header = () => {
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSecondTypewriter(true);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <br />
            <em>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Temuri Bukhaidze").start();
                }}
                options={{
                  cursor: ".",
                }}
              />
            </em>
          </strong>
          {showSecondTypewriter && (
            <Typewriter
              options={{
                strings: ["Frontend Developer", "React/Next.js Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          )}
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
