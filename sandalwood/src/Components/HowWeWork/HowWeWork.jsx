import "./HowWeWork.scss";
import { HiMiniArrowLongDown } from "react-icons/hi2";


function HowWeWork() {
  return (
    <div className="howWework">
        <div className="howWework__wrapper">
            <h2 className="howWework__title">How we Work</h2>
            <span className="line__style__work"></span>
            <p className="howWework__sub">We want to make this process as simple as possible for everyone involved.</p>
            <div className="howWework__sections_wrapper">
            <div className="howWework__section">
                    <p className="howWework__step">Step 1</p>
                    <p className="howWework__description">
                        Begin with an in-depth consultation to discuss your project requirements, including the desired scope of work and timeframe. Following this discussion, a detailed quotation will be provided, and a mutually agreeable start date will be confirmed.
                    </p>
                </div>
                <HiMiniArrowLongDown size={60} />
                <div className="howWework__section">
                    <p className="howWework__step">Step 2</p>
                    <p className="howWework__description">
                        The project commences on the agreed date. Throughout the process, flexibility is maintained to accommodate minor adjustments or design refinements as needed.
                    </p>
                </div>
                <HiMiniArrowLongDown size={60} />
                <div className="howWework__section">
                    <p className="howWework__step">Step 3</p>
                    <p className="howWework__description">
                        The project is completed on or before the agreed deadline, ensuring all deliverables meet your expectations and standards.
                    </p>
            </div>

            </div>
        </div>
    </div>
  );
}

export default HowWeWork;
