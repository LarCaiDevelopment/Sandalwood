import "./Contact.scss";
import ContactImage from "../../Assets/Images/image_1.png";
import { IoIosSend } from "react-icons/io";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__image_wrapper">
        <img className="contact__image" src={ContactImage} alt="ContactImage" />
      </div>
      <div className="contact__form_wrapper">
        <div className="contact__form">
          <p className="contact__title">Get In Touch!</p>
          <form
            action="https://formspree.io/f/xjkvoyay"
            method="POST"
            className="contact__form_fields"
          >
            <div className="contact__form_row">
              <div className="contact__form_group">
                <label htmlFor="first-name">Name<span className="contact__required">*</span></label>
                <input type="text" id="first-name" name="firstName" required />
              </div>
              <div className="contact__form_group">
                <label htmlFor="last-name">Last Name<span className="contact__required">*</span></label>
                <input type="text" id="last-name" name="lastName" required />
              </div>
            </div>
            <div className="contact__form_row">
              <div className="contact__form_group">
                <label htmlFor="email">Email<span className="contact__required">*</span></label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="contact__form_group">
                <label htmlFor="phone">Phone<span className="contact__required">*</span></label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                  }}
                  required 
                />
              </div>
            </div>
            <div className="contact__form_group_message">
              <label htmlFor="message">Message<span className="contact__required">*</span></label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="contact__submit_button">
              SUBMIT <span className="contact__submit_icon"><IoIosSend/></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
