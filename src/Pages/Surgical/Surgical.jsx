import React from "react";
import { Link } from "react-router-dom";
import "./Surgical.css";
import { Stethoscope, HeartPulse, Bone, Scissors, Users, CalendarCheck } from "lucide-react";

const specialties = [
  { icon: <HeartPulse size={40} />, title: "Cardiac Surgery" },
  { icon: <Bone size={40} />, title: "Orthopedic Surgery" },
  { icon: <Scissors size={40} />, title: "General Surgery" },
  { icon: <Stethoscope size={40} />, title: "Neuro Surgery" },
];

const benefits = [
  "Advanced surgical techniques with modern equipment",
  "Highly experienced and specialized surgical team",
  "Comprehensive pre- and post-operative care",
  "Minimally invasive procedures for faster recovery",
];

const SurgicalDepartment = () => {
  return (
    <div className="surgical-page">
      {/* Hero Section */}
      <section className="surgical-hero">
        <h1> Surgical Department </h1>
        <p>
          Providing world-class surgical care with advanced techniques and compassionate support for every patient.
        </p>
      </section>

      {/* About Section */}
      <section className="surgical-about">
        <h2>About Our Surgical Department</h2>
        <p>
          Golden Hospital’s Surgical Department offers a wide range of surgical services,
          from routine procedures to complex operations. Our state-of-the-art operating
          theaters are equipped with the latest technology to ensure safe and effective
          treatment. We focus on patient-centered care, ensuring a smooth journey
          before, during, and after surgery.
        </p>
      </section>

      {/* Specialties Section */}
      <section className="surgical-specialties">
        <h2>Our Surgical Specialties</h2>
        <div className="specialty-grid">
          {specialties.map((item, index) => (
            <div className="specialty-card" key={index}>
              <div className="specialty-icon">{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="surgical-benefits">
        <h2>Why Choose Our Surgical Department</h2>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="surgical-cta">
        <h2>Need Surgical Consultation?</h2>
        <p>
          Our expert surgeons are ready to help you. Book an appointment today and take the first step toward recovery.
        </p>
        <Link to="/contact">
     <button className="appointment-btn">
          <CalendarCheck size={20} /> Request Appointment
        </button>
        </Link>
      </section>
    </div>
  );
};

export default SurgicalDepartment;
