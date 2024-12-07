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
            <div className="services__textcont">
              <p className="services__toptext">Bathrooms</p>
              <p className="services__bottext">Upgrade your bathroom with stylish, custom vanities and shelving.</p>
            </div>
          </div>
          <div className="services__image">
            <img
              src={door}
              alt="Door"
            />
            <div className="services__textcont">
              <p className="services__toptext">Doors</p>
              <p className="services__bottext">Doors can make a huge difference to a home and really upgrade the quality of a room</p>
            </div>
          </div>
          <div className="services__image">
            <img
               src={kitchen}
              alt="Kitchen"
            />
            <div className="services__textcont">
              <p className="services__toptext">Kitchens</p>
              <p className="services__bottext">Transform your kitchen with custom cabinets, islands, and smart storage solutions.</p>
            </div>
          </div>
          <div className="services__image">
            <img
               src={living}
              alt="Staircase living area"
            />
            <div className="services__textcont">
              <p className="services__toptext">Living Areas</p>
              <p className="services__bottext">Enhance your living space with bespoke carpentry that adds comfort and style.</p>
            </div> 
          </div>
          <div className="services__image">
            <img
               src={fence}
              alt="Fence"
            />
            <div className="services__textcont">
               <p className="services__toptext">Fencing</p>
               <p className="services__bottext">Durable, stylish fencing that protects and enhances your property.</p>
            </div>
          </div>
          <div className="services__image">
            <img
               src={storage}
              alt="Storage unit"
            />
            <div className="services__textcont">
                <p className="services__toptext">Storage Units</p>
                <p className="services__bottext">Efficient, attractive storage solutions tailored to your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
