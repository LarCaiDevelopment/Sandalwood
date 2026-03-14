import "./Hero.scss";

function Hero() {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector(".contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="hero">
      <div className="hero__background"></div>
      <div className="hero__text--cont">
        <p className="hero__eyebrow">Carpentry that transforms everyday spaces</p>
        <h1 className="hero__text">Built by hand, designed for life.</h1>
        <p className="hero__subtext">Browse recent projects and send a quick message to get your own quote.</p>

        <div className="hero__actions">
          <button className="hero__cta hero__cta--primary" onClick={scrollToGallery}>
            View Work
          </button>
          <button className="hero__cta hero__cta--secondary" onClick={scrollToContact}>
            Message Us
          </button>
        </div>

        <div className="hero__proof">
          <span>Built to last</span>
          <span>Clean installs</span>
          <span>Bespoke finishes</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
