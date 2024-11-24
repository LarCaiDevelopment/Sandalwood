import "./Services.scss";

function Services() {
  return (
    <div className="services">
      <div className="services__wrapper">
        <div className="services__wrapper_first">
        <p className="services__title">Our Services</p>
        <span className="line__style__services"></span>
        <p className="services__description">
          We specialise in bespoke joinery manufacture and installation for
          medium to large projects. We have years of collated experience across
          residential & commercial projects.
        </p>
        </div>

        <div className="services__images">
          <div className="services__image">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder 1"
            />
          </div>
          <div className="services__image">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder 2"
            />
          </div>
          <div className="services__image">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder 3"
            />
          </div>
          <div className="services__image">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder 4"
            />
          </div>
          <div className="services__image">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder 5"
            />
          </div>
          <div className="services__image">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
