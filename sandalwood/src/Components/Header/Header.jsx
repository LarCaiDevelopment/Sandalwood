import "./Header.scss";
import Logo from "../../Assets/Icons/logo.png";

function Header() {
  const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    scrollToSection(".contact");
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__left">
          <button type="button" className="header__logo_button" aria-label="Go to top of page" onClick={scrollToTop}>
            <img className="header__logo" src={Logo} alt="Sandalwood Carpentry logo" />
          </button>
        </div>

        <nav className="header__nav" aria-label="Primary navigation">
          <button type="button" className="header__nav_link" onClick={() => scrollToSection("#gallery")}>
            Work
          </button>
          <button type="button" className="header__nav_link" onClick={() => scrollToSection(".services")}>
            Services
          </button>
          <button type="button" className="header__nav_link" onClick={() => scrollToSection(".reviews")}>
            Reviews
          </button>
        </nav>

        <div className="header__right">
          <a className="header__num" href="tel:+447825838552" aria-label="Call Sandalwood Carpentry at +44 7825 838552">
            +44 7825 838552
          </a>
          <button className="header__button" aria-label="Send us a message to request a quote" onClick={scrollToContact}>
            Get a Quote
          </button>
        </div>
      </div>
      <span className="line__style" role="presentation" aria-hidden="true"></span>
    </header>
  );
}

export default Header;
