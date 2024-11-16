import "./Contact.scss";
import ContactImage from '../../Assets/Images/image_1.png'

function Contact() {
  return (
    <>
    <div className="contact">
        <div className="contact__image_wrapper">
        <img className="contact__image" src={ContactImage} alt="ContactImage" />
        </div>
        <div className="contact__form_wrapper">
            <div className="contact__form">
                <p className="contact__title">Get In touch!</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default Contact;
