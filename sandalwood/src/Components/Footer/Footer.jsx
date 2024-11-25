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
              <div className="footer__section_wrapper desktop">
                <p>Mon-Friday - 7am - 5pm</p>
                <p>Saturday - Closed</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>

          <div className="footer__section">
            <p className="footer__section_title">Office</p>
            <span className="line__style"></span>
            <div className="footer__section_wrapper desktop">
              <p>Waterlooville, United Kingdom</p>
            </div>
          </div>

          <div className="footer__section icons">
            <p className="footer__section_title">Get in touch</p>
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
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
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
