import { socialLinks } from "../../helpers/socialLinks";

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
