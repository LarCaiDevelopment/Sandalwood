import "./Footer.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from "../../Assets/Icons/logo.png";

function Footer() {

  const scrollToHead = () => {
    const headSection = document.querySelector(".header");
    if (headSection) {
      headSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer">
      <a className="footer__logo desktop">
        <img src={Logo} alt="LarCai Logo" onClick={scrollToHead}/>
      </a>
      <div className="footer__content">
        <div className="footer__section_wrapper">
          <div className="footer__content_wrapper">
            <img className="footer__logo mobile" src={Logo} alt="LarCai Logo" onClick={scrollToHead}/>
            <div className="footer__section">
              <h3 className="footer__section_title">Working hours</h3>
              <span className="line__style"></span>
              <div className="footer__section_wrapper desktop">
                <p>Mon-Friday - 7am - 5pm</p>
                <p>Saturday - Closed</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>

          <div className="footer__section">
            <h3 className="footer__section_title">Office</h3>
            <span className="line__style"></span>
            <div className="footer__section_wrapper desktop">
              <p>Waterlooville, United Kingdom</p>
            </div>
          </div>

          <div className="footer__section icons">
            <h3 className="footer__section_title">Get in touch</h3>
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
              <a href="https://www.facebook.com/SandalwoodCustomCarpentry/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/sandalwood_custom_carpentry/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
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
