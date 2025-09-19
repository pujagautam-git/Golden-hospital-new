import React, { useState } from "react";
import "./Reversible.css";
 import doctormain from "../../assets/doctormain.jpeg";
import neuro from "../../assets/laboratory/neuro.png";
 import lab from "../../assets/laboratory/lab3.png";
import cardio from "../../assets/laboratory/cardio.png";
import out from "../../assets/health/spec5.jpg";

const ReverseData = [
  {
    id: 1,
    title: "Neurology",
    description:
      "Our Neurology Service offers comprehensive care for disorders of the brain, spine, and nervous system. Our expert neurologists use advanced diagnostics and treatments to manage conditions such as stroke, epilepsy, multiple sclerosis, and Parkinson's disease.",
    image:neuro,
  },
  {
    id: 2,
    title: "Laboratory Services",
    description:
      "Our laboratory is equipped with modern technology to provide quick and accurate test results. We support diagnosis and treatment decisions with precision.",
    image: lab,
  },
  {
    id: 3,
    title: "Cardiac Clinic",
    description:
      "Our Cardiac Clinic specializes in heart health, offering preventive care, diagnostics, and treatment for various heart conditions with expert cardiologists.",
    image: cardio,
  },
  {
    id: 4,
    title: "Outpatient Department",
    description:
      "Our OPD offers accessible, high-quality care for non-emergency cases. Consult with top specialists for quick diagnosis and treatment plans.",
    image: out,
  },
];

const Reversible = () => {
 const [selected, setSelected] = useState(ReverseData[0]);

  return (
    <div className="reverse-services">
      {/* Main Two-Column Layout */}
      <div className="reverse-main">
        {/* LEFT IMAGE (ALWAYS CONSTANT) */}
        <div className="reverse-left">
          <img src={doctormain} alt="Doctor" />
          <div className="overlay-text">
            <p>
              As a tertiary referral ICU we provide state-of-the-art care with
              the help of highly skilled professionals and world-class
              infrastructure.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (CHANGES WHEN CLICKING THUMBNAIL) */}
        <div className="reverse-right">
          <h2 className="section-heading">Our Best Services</h2>
          <h3 className="reverse-title">{selected.title}</h3>
          <p className="reverse-description">{selected.description}</p>
          <img
            src={selected.image}
            alt={selected.title}
            className="right-side-image"
          />
          <button className="read-more-btn">READ MORE</button>
        </div>
      </div>

      {/* BOTTOM THUMBNAILS (SAME IMAGE AS RIGHT SIDE) */}
      <div className="reverses-thumbnails">
        {ReverseData.map((service) => (
          <div
            key={service.id}
            className={`reverse-card ${
              selected.id === service.id ? "active" : ""
            }`}
            onClick={() => setSelected(service)}
          >
            <img src={service.image} alt={service.title} />
            <h4>{service.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
  

export default Reversible;
