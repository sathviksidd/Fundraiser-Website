import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Inspiring Change, <br />
          One Donation At a Time
        </h1>
        <p>
          Your Contribution can help achive a solution,so give your share to show you care. 
          We believe that every small act of kindness has the power to drive meaningful change.
          Together, we can tackle the most pressing challenges of today by uniting for a common purpose.
          Your donation, no matter the size, helps pave the way toward impactful solutions—one step, one donation at a time.
          Whether it’s supporting education, healthcare, or communities in need, your contribution makes a real difference.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
