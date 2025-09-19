import React,{useState} from "react";
import "./Medical.css";
import { FaCheckCircle } from "react-icons/fa"; // ✅ for healthcare plan icons
import { FiPlus, FiMinus } from "react-icons/fi"; // ✅ for FAQ toggle
import neurology from "../../assets/laboratory/neuro.png";
import cardiology from "../../assets/laboratory/cardio.png";
import pulmonology from "../../assets/laboratory/pulmo.png";
import nephrology from "../../assets/laboratory/nephro.png";
import generalmedi from "../../assets/laboratory/general.png";
import Medicalteam from "../../assets/medical/medical.jpeg";
import { FaHeartbeat } from "react-icons/fa";
import modern from "../../assets/medical/medic3.jpg";
import { GiMicroscope, GiBabyBottle } from "react-icons/gi";
import { MdScience } from "react-icons/md";
import { FaStethoscope, FaBrain } from "react-icons/fa";
// import HealthCare from "../../Components/Healthcare/Healthcare";

const medfaqs = [
  {
    question: "How schedule appointment?",
    answer:
      "You can schedule an appointment online through our booking portal or by calling our reception desk. We also accept walk-ins for urgent cases.",
  },
  {
    question: "What are your clinic hours?",
    answer:
      "Our clinics are open Monday to Saturday, 8:00 AM – 8:00 PM. Emergency services are available 24/7.",
  },
  {
    question: "Accept payment methods?",
    answer:
      "We accept all major credit/debit cards, digital wallets, bank transfers, and cash. Insurance claims are also supported.",
  },
  {
    question: "Do you provide emergency care?",
    answer:
      "Yes, our emergency department operates 24/7 with on-call doctors and advanced life-saving equipment.",
  },
  {
    question: "Are consultations available online?",
    answer:
      "Absolutely. We offer online video consultations with our specialists so you can receive care from the comfort of your home.",
  },
];


const services = [
  { id: 1, name: "Cardiology Clinic", icon: <FaHeartbeat /> },
  { id: 2, name: "Pathology Clinic", icon: <GiMicroscope /> },
  { id: 3, name: "Laboratory Analysis", icon: <MdScience /> },
  { id: 4, name: "Pediatric Clinic", icon: <GiBabyBottle /> },
  { id: 5, name: "Cardiac Clinic", icon: <FaStethoscope /> },
  { id: 6, name: "Neurology Clinic", icon: <FaBrain /> },
];
const MedicalDepartment = () => {
     const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="medical-page">
      {/* Hero Section */}
      <section className="medical-hero">
        <h1>Medical Department</h1>
        <p>
          At Golden Hospital, we provide world-class medical care with highly
          specialized departments including Neurology, Cardiology, Pulmonology,
          Nephrology, and General Medicine. Our expert doctors work with modern
          technology to ensure the best outcomes for our patients.
        </p>
      </section>
      <section className="medical-service-section">
      <div className="medical-service-container">
        {/* Left: Image + Description */}
        <div className="medical-left">
          <div className="image-box">
            <img
              src={Medicalteam}
              alt="Medical Team"
            />
            {/* <div className="play-button">&#9658;</div> */}
          </div>
          <p>
            At our Pathology Clinic, we are dedicated to providing accurate and
            timely diagnostic services to support your healthcare needs. Our
            team of highly skilled pathologists and laboratory technicians work
            diligently to deliver reliable results that aid in early detection,
            diagnosis, and treatment of various medical conditions.
          </p>
        </div>

        {/* Right: Services List */}
        <div className="medical-right">
          <h2>Medical Service</h2>
          <div className="service-list">
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <span className="service-icon">{service.icon}</span>
                <span>{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="healthcare-faq-section">
  <div className="healthcare-container">
    {/* Health Care Plans */}
    <div className="healthcare-plans">
      <h2>Health Care Plans.</h2>
      <ul>
            {[
              "Mental Health Solutions",
              "Medical Advices & Check Ups",
              "Rapid Patient Improvement",
              "Trusted Medical Treatment",
              "World Class Treatment",
              "Emergency Help Available 24/7",
              "Medical Research Professionals",
            ].map((plan, i) => (
              <li key={i}>
                <FaCheckCircle className="plan-icon" /> {plan}
              </li>
            ))}
          </ul>
          {/* <button className="get-started-btn">Get Started ➜</button> */}
        </div>

    {/* FAQ / Key Benefits */}
     <div className="faq-section">
          <h2>Key Benefits.</h2>
          {medfaqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? (
                  <FiMinus className="faq-icon" />
                ) : (
                  <FiPlus className="faq-icon" />
                )}
              </div>
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Department Cards */}
      <section className="department-section">
        <h2>Our Specialties</h2>
        <div className="department-grid">
          <div className="department-card">
            <img src={neurology} alt="Neurology" />
            <h3>Neurology</h3>
            <p>Expert care for brain, spine, and nervous system disorders.</p>
          </div>

          <div className="department-card">
            <img src={cardiology} alt="Cardiology" />
            <h3>Cardiology</h3>
            <p>Advanced heart care and minimally invasive procedures.</p>
          </div>

          <div className="department-card">
            <img src={pulmonology} alt="Pulmonology" />
            <h3>Pulmonology</h3>
            <p>Comprehensive treatment for lung and respiratory issues.</p>
          </div>

          <div className="department-card">
            <img src={nephrology} alt="Nephrology" />
            <h3>Nephrology</h3>
            <p>Kidney health, dialysis, and transplant support services.</p>
          </div>

          <div className="department-card">
            <img src={generalmedi} alt="General Medicine" />
            <h3>General Medicine</h3>
            <p>Primary care for everyday health concerns and check-ups.</p>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="about-medical">
        <div className="about-image">
          <img src={modern} alt="Medical Care" />
        </div>
        <div className="about-text">
          <h2>Compassionate & Modern Care</h2>
          <p>
            Our medical department is equipped with cutting-edge facilities and
            a compassionate team to provide quality treatment. From diagnosis to
            recovery, we ensure patient comfort and well-being at every step.
          </p>
        </div>
      </section>

      {/* Unique Why Choose Us Section */}
      {/* <section className="why-choose">
        <h2>Why Choose Golden Hospital?</h2>
        <div className="choose-grid">
          <div className="choose-card">
            <h3>24/7 Availability</h3>
            <p>Round-the-clock emergency and inpatient care.</p>
          </div>
          <div className="choose-card">
            <h3>Modern Equipment</h3>
            <p>Latest technology for accurate diagnosis and treatment.</p>
          </div>
          <div className="choose-card">
            <h3>Expert Doctors</h3>
            <p>Highly experienced specialists across all departments.</p>
          </div>
        </div>
      </section> */}
      
    </div>
  );
};

export default MedicalDepartment;
