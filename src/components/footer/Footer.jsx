import React from "react";
import { icons } from "../../helpers/icons";

const socialLinks = [
  {
    href: "https://www.facebook.com/buxa.buxa.7/",
    icon: icons.facebook,
    alt: "Facebook",
  },
  {
    href: "https://github.com/TBukhaidze",
    icon: icons.gitHub,
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/temuri-bukhaidze-83728633a/",
    icon: icons.linkedIn,
    alt: "LinkedIn",
  },
];

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <ul className="social">
          {socialLinks.map(({ href, icon, alt }) => (
            <li key={alt} className="social__item">
              <a href={href} target="_blank" rel="noreferrer">
                <img src={icon} alt={alt} />
              </a>
            </li>
          ))}
        </ul>
        <div className="copyright">
          <p>© {year} Temuri Bukhaidze</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
