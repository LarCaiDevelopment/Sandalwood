import "./Header.scss";
import Logo from "../../Assets/Icons/logo.png";

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This enables smooth scrolling
    });
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__left">
          <img
            className="header__logo"
            src={Logo}
            alt="Company Logo - Click to scroll to top"
            onClick={scrollToTop}
          />
        </div>
        <div className="header__right">
          <a className="header__num" href="tel:+447825838552" aria-label="Call us at +44 7825 838552">
            +44 7825 838552
          </a>
          <button className="header__button" aria-label="Contact us to learn more about our services">
            Contact Us
          </button>
        </div>
      </div>
      <span className="line__style" role="presentation" aria-hidden="true"></span>
    </header>
  );
}

export default Header;
