import "./Header.scss";
import Logo from "../../Assets/Icons/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className = "heder__left">
          <img className="header__logo" src={Logo} alt="Logo" />
        </div>
        <div className="header__right">
          <a className = "header__num" href="tel:+447825838552">+44 7825 838552</a>
          <button className="header__button">Contact Us</button>
        </div>
       </div>
    </header>
  );
}

export default Header;
