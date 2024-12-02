import "./Contact.scss";
import ContactImage from "../../Assets/Images/GalleryImages/storage4.JPG";
import { IoIosSend } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoPencil } from "react-icons/go";


function Contact() {
  return (
    <div className="contact">
      <div className="contact__image_wrapper">
        {/* //<img className="contact__image" src={ContactImage} alt="ContactImage" /> */}
        <div className="contact__wrapper">
          <p className="contact__right_TopText">Contact us</p>
          <h2 className="contact__right_title">
            Have questions?<br></br>Get in touch!
          </h2>
          <p className="contact__right_text">Whether you need assistance, have inquiries about our services, or want to explore the best solutions for your tasks, feel free to reach out to us. Our team is always ready to provide the information and support you need.</p>
          <div>
            <p className="contact__right_options">
              <FaLocationDot />
              Highbridge Estates, Brambridge, Eastleigh, SO50 6HS
            </p>
            <p className="contact__right_options">
              <IoMdCall /> <a href="tel:01962717627">0196 271 7627</a>
            </p>
            <p className="contact__right_options">
              <MdOutlineMail />
              <a href="mailto:Sandalwoodcc@outlook.com">Sandalwoodcc@outlook.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="contact__form_wrapper">
        <div className="contact__form">
          <form action="https://formspree.io/f/xjkvoyay" method="POST" className="contact__form_fields">
            <div className="contact__form_row">
              <div className="contact__form_group">
                <label htmlFor="first-name">
                 <CgProfile /> Name<span className="contact__required">*</span>
                </label>
                <input type="text" id="first-name" name="firstName" required />
              </div>
              <div className="contact__form_group">
                <label htmlFor="last-name">
                  Last Name<span className="contact__required">*</span>
                </label>
                <input type="text" id="last-name" name="lastName" required />
              </div>
            </div>
            <div className="contact__form_row">
              <div className="contact__form_group">
                <label htmlFor="email">
                <MdOutlineMail /> Email<span className="contact__required">*</span>
                </label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="contact__form_group">
                <label htmlFor="phone">
                <IoMdCall /> Phone<span className="contact__required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                  required
                />
              </div>
            </div>
            <div className="contact__form_group_message">
              <label htmlFor="message">
                <GoPencil /> Message<span className="contact__required">*</span>
              </label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="contact__submit_button">
              SUBMIT{" "}
              <span className="contact__submit_icon">
                <IoIosSend />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
