import React from "react";

import { icons } from "../../helpers/icons";

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
                <img src={icons.facebook} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/TBukhaidze"
                target="_blank"
                without
                rel="noreferrer"
              >
                <img src={icons.gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/temuri-bukhaidze-83728633a/"
                target="_blank"
                without
                rel="noreferrer"
              >
                <img src={icons.linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2025 Temuri Bukhaidze</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
