import "./HowWeWork.scss";
import { HiMiniArrowLongDown } from "react-icons/hi2";


function HowWeWork() {
  return (
    <div className="howWework">
        <div className="howWework__wrapper">
            <p className="howWework__title">How we Work</p>
            <span className="line__style__work"></span>
            <p className="howWework__description">We want to make this process as simple for everybody involved as possible.</p>
            <div className="howWework__sections_wrapper">
                <div className="howWework__section">
                    <p>Title</p>
                    <p>Begin the WorksOnce all details are confirmed, we can start work on your project. We build everything in-house at our own workshop, so we have complete control of our lead times.</p>
                </div>
                <HiMiniArrowLongDown size={60} />
                <div className="howWework__section">
                    <p>Title</p>
                    <p>Begin the WorksOnce all details are confirmed, we can start work on your project. We build everything in-house at our own workshop, so we have complete control of our lead times.</p>
                </div>
                <HiMiniArrowLongDown size={60} />
                <div className="howWework__section">
                    <p>Title</p>
                    <p>Begin the WorksOnce all details are confirmed, we can start work on your project. We build everything in-house at our own workshop, so we have complete control of our lead times.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HowWeWork;
