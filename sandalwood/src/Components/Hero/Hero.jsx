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

  return (
    <div className="hero">
      <div className="hero__background"></div>
      <div className="hero__text--cont">
        <h1 className="hero__text">Built by hand, designed for life.</h1>
        <button className="hero__cta" onClick={scrollToGallery}>
          View My Work
        </button>
      </div>
    </div>
  );
}

export default Hero;
