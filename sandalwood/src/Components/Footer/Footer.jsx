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
      <a href="#top" className="footer__logo desktop" onClick={scrollToTop}>
        <img src={Logo} alt="LarCai Logo" />
      </a>
      <div className="footer__content">
        <div className="footer__section_wrapper">
          <div className="footer__content_wrapper">
            <img className="footer__logo mobile" src={Logo} alt="LarCai Logo" />
            <div className="footer__section">
              <h2 className="footer__section_title">Working hours</h2>
              <span className="line__style"></span>
              <div className="footer__section_wrapper desktop">
                <p>Mon-Friday - 7am - 5pm</p>
                <p>Saturday - Closed</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>

          <div className="footer__section">
            <h2 className="footer__section_title">Office</h2>
            <span className="line__style"></span>
            <div className="footer__section_wrapper desktop">
              <p>Waterlooville, United Kingdom</p>
            </div>
          </div>

          <div className="footer__section icons">
            <h2 className="footer__section_title">Get in touch</h2>
            <span className="line__style"></span>
            <div className="footer__section_wrapper desktop">
              <p>
                <a href="mailto:Sandalwoodcc@outlook.com">Sandalwoodcc@outlook.com</a>
              </p>
              <p>
                <a href="tel:+447825838552">+44 7825 838552</a>
              </p>
            </div>
            <div className="footer__section_wrapper icon">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <span className="line__style__footer"></span>
        <p className="footer__rights">LarCai © 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
