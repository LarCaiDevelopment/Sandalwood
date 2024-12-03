import React, { useState, useEffect } from "react";
import "./AboutUs.scss";

function AboutUs() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update `isMobile` when the window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="about">
      <h2 className="about__heading">Sandalwood Carpentry</h2>
      <span class="line__style__work"></span>
      <p className="about__text">
        At Sandalwood Carpentry, we take pride in offering high-quality carpentry services to the South Coast of the UK with 17 years of experience.
      </p>

      {isMobile ? (
        <>
          {isExpanded ? (
            <>
              <p className="about__text">
                Our services cater to a wide range of clients, from homeowners and landlords to commercial projects. Whether you're collaborating with builders, architects, or project managers, we’re here to bring your vision to life.
              </p>

              <p className="about__text">
                We handle all aspects of carpentry, including kitchen installations, custom shelving, doors, architraves, skirting boards, picture rails, window seats, flooring, loft conversions, Velux and dormer windows, staircases, and full property renovations. Additionally, we specialize in stud walls, plasterboarding, commercial second-fix carpentry, shop fittings, and outdoor projects like decking and fencing to transform your garden space.
              </p>

              <p className="about__text">
                We strive to be creative, attentive, and committed to helping you achieve your goals, offering our expertise and inspiration along the way. Browse our portfolio to see examples of our recent work, and be sure to follow us on Facebook for updates and ideas inspired by our happy customers.
              </p>

              <p className="about__text">
              Take a look at our galleries below to see how we can help you create the perfect kitchen, maximize your home’s storage with bespoke designs, or update your interior with stylish new doors. Let us help bring your ideas to life!
              </p>
            </>
          ) : (
            <p className="about__text">
              We offer high-quality carpentry services for homeowners, landlords, and commercial projects. Explore our expertise in kitchens, storage, loft conversions, and more...
            </p>
          )}
          <button className="about__toggle" onClick={toggleExpand}>
            {isExpanded ? "See less" : "See more"}
          </button>
        </>
      ) : (
        // Desktop: Always show full content
        <>
          <p className="about__text">
            Our services cater to a wide range of clients, from homeowners and landlords to commercial projects. Whether you're collaborating with builders, architects, or project managers, we’re here to bring your vision to life.
          </p>

          <p className="about__text">
            We handle all aspects of carpentry, including kitchen installations, custom shelving, doors, architraves, skirting boards, picture rails, window seats, flooring, loft conversions, Velux and dormer windows, staircases, and full property renovations. Additionally, we specialize in stud walls, plasterboarding, commercial second-fix carpentry, shop fittings, and outdoor projects like decking and fencing to transform your garden space.
          </p>

          <p className="about__text">
            We strive to be creative, attentive, and committed to helping you achieve your goals, offering our expertise and inspiration along the way. Browse our portfolio to see examples of our recent work, and be sure to follow us on Facebook for updates and ideas inspired by our happy customers.
          </p>

          <p className="about__text">
            Take a look at our galleries below to see how we can help you create the perfect kitchen, maximize your home’s storage with bespoke designs, or update your interior with stylish new doors. Let us help bring your ideas to life!
          </p>
        </>
      )}
    </div>
  );
}

export default AboutUs;
