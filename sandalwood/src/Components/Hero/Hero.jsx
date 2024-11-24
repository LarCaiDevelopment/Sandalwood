import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
        <div className="hero__background"></div>
        <div className="hero__text--cont">
            <p className="hero__text">Built by hand, designed for life.</p>
            <a href="#gallery"><button className="hero__cta">View My Work</button></a>
        </div>
          
    </div>
  );
}

export default Hero;
