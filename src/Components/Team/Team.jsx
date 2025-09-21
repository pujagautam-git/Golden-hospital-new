import React from "react";
import Arti from "../../assets/Home/Mam.jpg";
import shyamsir from "../../assets/Home/shyam.png";
import sanatan from "../../assets/Home/sanatan.png";
import jiyahul from "../../assets/Home/jiyahul1.png";
import "./Team.css";

const teamMembers = [
  {
    name: "Arati Aanand Rouniyar",
    role: "Chairperson",
    image: Arti,
    description:
      "As Chairperson of Golden Hospital, my vision is to create a healthcare institution where compassion meets innovation. We are committed to delivering world-class medical services with integrity, dedication, and excellence.",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Dr. Shyam Kumar Rouniyar",
    role: "Managing Director",
    image: shyamsir,
    description:
      "At Golden Hospital, we believe every patient deserves personalized attention and quality treatment. As Managing Director, I am committed to building an environment where medical excellence and patient trust go hand in hand.",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mr.Sanatan Mandal",
    role: "Board of Director",
    image: sanatan,
    description:
      "The Board of Directors works together with our medical and management teams to make sure that every patient receives not only treatment but also trust and comfort. Our mission is to support Golden Hospital in reaching new heights in patient care.",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mr. Jiyahul Haq",
    role: "CEO",
    image: jiyahul,
    description:
      "At Golden Hospital, every life matters. As CEO, I am dedicated to creating an environment where patients feel safe, valued, and cared for while receiving world-class treatment.",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const OurTeam = () => {
  return (
    <section className="lead-section">
      {/* <h2 className="lead-title">Our Leadership lead</h2>
      <p className="lead-subtitle">
        At Golden Hospital, our leadership lead is the driving force behind our commitment to excellence. Guided by experience, vision, and dedication, they ensure that every aspect of our hospital delivers world-class care with compassion and trust.
      </p> */}

      <div className="lead-grid">
        {/* Top Row */}
        <div className="lead-row top-row">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div className="lead-card" key={index}>
              <img src={member.image} alt={member.name} className="lead-image" />
              <h3 className="lead-name">{member.name}</h3>
              <p className="lead-role">{member.role}</p>
              <p className="lead-description">{member.description}</p>
              <div className="lead-socials">
                <a href={member.socials.facebook}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={member.socials.twitter}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={member.socials.instagram}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={member.socials.linkedin}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="lead-row bottom-row">
          {teamMembers.slice(2).map((member, index) => (
            <div className="lead-card" key={index}>
              <img src={member.image} alt={member.name} className="lead-image" />
              <h3 className="lead-name">{member.name}</h3>
              <p className="lead-role">{member.role}</p>
              <p className="lead-description">{member.description}</p>
              <div className="lead-socials">
                <a href={member.socials.facebook}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={member.socials.twitter}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={member.socials.instagram}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={member.socials.linkedin}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
