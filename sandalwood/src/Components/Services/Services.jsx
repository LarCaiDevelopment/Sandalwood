import "./Services.scss";
import bathroom from '../../Assets/Images/GalleryImages/bathroom8.JPG';
import door from '../../Assets/Images/GalleryImages/doorway3.JPG';
import kitchen from '../../Assets/Images/GalleryImages/kitchen2.JPG';
import living from '../../Assets/Images/GalleryImages/living5.JPG';
import fence from '../../Assets/Images/GalleryImages/fence8.JPG';
import storage from '../../Assets/Images/GalleryImages/storage3.JPG';

function Services() {
  return (
    <div className="services">
      <div className="services__wrapper">
        <div className="services__wrapper_first">
        <h2 className="services__title">Our Services</h2>
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
              src={bathroom}
              alt="Bathroom"
            />
            <p className="services__text">Bathrooms</p>
          </div>
          <div className="services__image">
            <img
              src={door}
              alt="Door"
            />
            <p className="services__text">Doorways</p>
          </div>
          <div className="services__image">
            <img
               src={kitchen}
              alt="Kitchen"
            />
            <p className="services__text">Kitchens</p>
          </div>
          <div className="services__image">
            <img
               src={living}
              alt="Staircase living area"
            />
            <p className="services__text">Living Areas</p>
          </div>
          <div className="services__image">
            <img
               src={fence}
              alt="Fence"
            />
            <p className="services__text">Fencing</p>
          </div>
          <div className="services__image">
            <img
               src={storage}
              alt="Storage unit"
            />
            <p className="services__text">Storage Units</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
