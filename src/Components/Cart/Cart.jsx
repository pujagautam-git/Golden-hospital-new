 import React from "react";
 import out from "../../assets/opd/opd1.png";
 import int from "../../assets/ipd/ipd1.jpeg";
 import Labor from "../../assets/service/lab.jpeg";
 import emer from "../../assets/emergency/emer.jpg";
 import camp from "../../assets/service/camp.jpeg";
 import phar from "../../assets/pharmacy/phar2.jpg";
 import family from "../../assets/service/famo.jpeg";
import { Link } from "react-router-dom";
import "./Cart.css";

const services = [
  {
    title: "Out Patient Service",
    image: out,
    link: "/outpatient"
  },
  {
    title: "Inpatient Services",
    image: int,
    link: "/Inpatient"
  },
  {
    title: "Laboratory Services",
    image: Labor,
    link: "/laboratory"
  },
  {
    title: "Emergency Services",
    image: emer,
    link: "/emergency"
  },
  {
    title: "Pharmacy Services",
    image: phar,
    link: "/pharmacy"
  },
  {
    title: "Specialized Health Camp",
    image: camp,
    link: "/healthcamp"
  },
  {
    title: "Family Planning Services",
    image: family,
    link: "/familyplanning"
  },
  // {
  //   title: "Governmental Services",
  //   image: "/images/pharmacy.jpg",
  //   link: "/governmental"
  // },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-title">{service.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
