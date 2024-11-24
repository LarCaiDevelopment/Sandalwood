import "./Footer.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../../Assets/Icons/logo.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
        <img className="footer__logo desktop" src={Logo} alt="Logo" onClick={scrollToTop} />
      <div className="footer__content">
        <div className="footer__section_wrapper">
        <div className="footer__content_wrapper">
          <img className="footer__logo mobile" src={Logo} alt="Logo" />
          <div className="footer__section">
            <p className="footer__section_title">Working hours</p>
            <span className="line__style"></span>
            <ul className="footer__section_wrapper desktop">
              <li>Mon-Friday - 7am - 5pm</li>
              <li>Saturday - Closed</li>
              <li>Sunday - Closed</li>
            </ul>
          </div>
        </div>

        <div className="footer__section">
          <p className="footer__section_title">Office</p>
          <span className="line__style"></span>
          <ul className="footer__section_wrapper desktop">
            <li>Waterlooville, United Kingdom</li>
          </ul>
        </div>
        <div className="footer__section icons">
          <p className="footer__section_title">Get in touch</p>
          <span className="line__style"></span>
          <ul className="footer__section_wrapper desktop">
            <li>
              <a href="mailto:Sandalwoodcc@outlook.com">Sandalwoodcc@outlook.com</a>
            </li>
            <li>
              <a href="tel:+447825838552">+44 7825 838552</a>
            </li>
          </ul>
          <ul className="footer__section_wrapper icon">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </ul>
        </div>
        </div>
        <span className="line__style__footer"></span>
        <p className="footer__rights">LarCai © 2024. All rights reserved.</p>
        
      </div>
    </footer>
  );
}

export default Footer;
