import React from "react";

import facebook from "../../img/icons/facebook.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import gitHub from "../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://www.facebook.com/buxa.buxa.7/"
                target="_blank"
                without
                rel="noreferrer"
              >
                <img src={facebook} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/TBukhaidze"
                target="_blank"
                without
                rel="noreferrer"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/temuri-bukhaidze-83728633a/">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 Temuri Bukhaidze</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
