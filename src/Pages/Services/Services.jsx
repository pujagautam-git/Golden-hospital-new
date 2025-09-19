  import React, { useEffect } from "react";
 import {Link} from "react-router-dom";
 import Cart from "../../Components/Cart/Cart";
// import Quickpaint from "../../Components/Quickpaint/Quickpaint";
import ContactDetails from "../../Components/Contactdetails/ContactDetails";
import "./Services.css";

const Services = () => {
  useEffect(() => {
    const intro = document.querySelector(".intro");
    const cards = document.querySelectorAll(".service-card");

    const options = { threshold: 0.2 };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (intro) revealOnScroll.observe(intro);
    cards.forEach((card) => revealOnScroll.observe(card));

    return () => revealOnScroll.disconnect();
  }, []);

  return (
    <>
    <section id="services" className="services">
      {/* Intro Section */}
      <div className="intro">
        <h2>Our Specialized Services for Your Health</h2>
        <p>
At Golden Hospital Biratnagar, we provide a complete range of medical, surgical, and diagnostic services under one roof. From emergency care and outpatient consultations to advanced inpatient treatments, our hospital is equipped with modern facilities and staffed by highly qualified specialists. Each department is dedicated to 
delivering safe, effective, and compassionate care 
tailored to every patient’s unique needs.
        </p>
      </div>
      </section>
<Cart/>
     {/* <Quickpaint/> */}
     <ContactDetails/> 
     </>
  );
};

export default Services;
