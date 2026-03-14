import "./Services.scss";
import bathroom from "../../Assets/Images/GalleryImages/bathroom8.JPG";
import door from "../../Assets/Images/GalleryImages/doorway3.JPG";
import kitchen from "../../Assets/Images/GalleryImages/kitchen2.JPG";
import living from "../../Assets/Images/GalleryImages/living5.JPG";
import fence from "../../Assets/Images/GalleryImages/fence8.JPG";
import storage from "../../Assets/Images/GalleryImages/storage3.JPG";

function Services() {
  const services = [
    {
      title: "Bathrooms",
      description: "Custom vanities and shelving that make daily routines cleaner and easier.",
      image: bathroom,
      alt: "Bespoke bathroom joinery",
    },
    {
      title: "Doors",
      description: "Precision-fitted doors that elevate finish quality across your home.",
      image: door,
      alt: "Bespoke interior door installation",
    },
    {
      title: "Kitchens",
      description: "Built-to-fit cabinets, islands, and storage designed around your workflow.",
      image: kitchen,
      alt: "Custom kitchen carpentry",
    },
    {
      title: "Living Areas",
      description: "Bespoke carpentry features that improve comfort, layout, and style.",
      image: living,
      alt: "Carpentry for living area",
    },
    {
      title: "Fencing",
      description: "Strong, tidy fencing that protects your property and sharpens curb appeal.",
      image: fence,
      alt: "Timber garden fencing",
    },
    {
      title: "Storage Units",
      description: "Smart storage solutions tailored to your space and day-to-day use.",
      image: storage,
      alt: "Bespoke storage unit joinery",
    },
  ];

  return (
    <div className="services">
      <div className="services__wrapper">
        <div className="services__wrapper_first">
          <h2 className="services__title">Our Services</h2>
          <span className="line__style__services"></span>
          <p className="services__description">We deliver bespoke joinery manufacture and installation for residential and commercial projects, with practical craftsmanship from planning through finish.</p>
        </div>

        <div className="services__images">
          {services.map((service) => (
            <article className="services__image" key={service.title}>
              <img src={service.image} alt={service.alt} loading="lazy" />
              <div className="services__textcont">
                <p className="services__toptext">{service.title}</p>
                <p className="services__bottext">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
