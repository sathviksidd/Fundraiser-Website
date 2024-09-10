import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Find everything you need to make your fundraiser a success with FundRaiser, whether you're raising money for 
            personal causes, friends, family, or charitable organizations. With no fees to get started, FundRaiser is your
             trusted crowdfunding solution—supporting everything from community projects and medical emergencies to memorials and 
             nonprofit initiatives. Whenever you're in need, we're here to help you make a difference.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
