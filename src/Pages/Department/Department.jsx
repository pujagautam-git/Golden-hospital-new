  import React from "react";
import "./Department.css";
import { Link } from "react-router-dom";
import Boxcard from "../../Components/Boxcard/Boxcard";
import Depart from "../../assets/Department/depart.jpg";
import Depart1 from "../../assets/Department/depart1.jpeg";
import { FaBrain, FaBone, FaFemale, FaTooth } from "react-icons/fa";
import { GiStomach, GiKidneys, GiCctvCamera } from "react-icons/gi";
import { FaStethoscope, FaHeartbeat, FaLungs, FaVials, FaMicroscope, FaXRay } from "react-icons/fa";
import { FaEarListen } from "react-icons/fa6";

const departmentsData = {
  surgical: [
    { name: "Neurosurgery", icon: FaBrain, features: ["Advanced Brain & Spine Surgery","Expert Neurosurgeons","Modern Technology","Comprehensive Care"] },
    { name: "Orthopedic", icon: FaBone, features: ["Joint Replacement Surgery","Fracture & Trauma Care","Spine & Sports Injury Care"] },
    { name: "Obs & Gynaecology", icon: FaFemale, features: ["Comprehensive Maternity Care","High-Risk Pregnancy Management","Fertility & Reproductive Health","Advanced Gynaecological Surgery"]},
    { name: "GI Surgery", icon: GiStomach, features: ["Advanced GI Procedures","Comprehensive Digestive Care","Expert Surgical Team"] },
    { name: "ENT", icon: FaEarListen, features: ["Advanced Hearing Solutions","Allergy & Sinus Management","Endoscopic & Microscopic Surgery"] },
    { name: "Dental", icon: FaTooth, features: ["Cosmetic Dentistry","Oral & Maxillofacial Surgery","Preventive & Pediatric Dentistry"]},
  ],

  medical: [
    { name: "Neurology", icon: FaBrain, features: ["Comprehensive adult care","Chronic disease management","Preventive health checkups","Personalized treatment plans"]},
    { name: "Cardiology", icon: FaHeartbeat, features: ["Heart disease diagnosis","ECG & Echocardiography","Interventional cardiology","24/7 emergency cardiac care"]},
    { name: "Pulmonology", icon: FaLungs, features: ["Asthma & COPD care","Sleep apnea evaluation","Respiratory infections","Advanced lung function tests"]},
     { name:"Nephrology", icon: GiKidneys, features: ["Kidney disease management","Dialysis & transplant care","Hypertension control","Electrolyte & acid-base disorders"]}, 
     { name:"General Medicine", icon: FaStethoscope, features: ["Comprehensive adult care","Chronic disease management","Preventive health checkups","Personalized treatment plans"] },
    ],

  diagnostic: [
    { name: "Pathology & Lab", icon: FaVials, features: ["Comprehensive blood tests","Biopsy & histopathology","Advanced microbiology","Accurate & timely reports"] },
    { name: "Microbiology", icon: FaMicroscope, features: ["Infection detection","Bacterial culture & sensitivity","Viral & fungal testing","Antibiotic resistance study"] },
    { name: "Radiology", icon: FaXRay, features: ["X-Ray & Ultrasound","CT & MRI scans","Interventional radiology","Accurate imaging reports"] },
  { name:"ECG/ECHO", icon: FaHeartbeat, features: ["Heart disease diagnosis","ECG & Echocardiography","Interventional cardiology","24/7 emergency cardiac care"] },
  {name:"Endoscopy", icon: GiCctvCamera, features: ["Minimally invasive procedures","Gastrointestinal diagnostics","Therapeutic interventions","Expert endoscopists"] },
]
};

const Department = () => {
  return (
    <div className="department-page">
      {/* Breadcrumb Section */}
      <section className="department-breadcrumb" style={{ backgroundImage: `url(${Depart})` }}>
        <div className="breadcrumb-overlay">
          <div className="breadcrumb-container">
            <p>
              <Link to="/">Home</Link> » <span>Our Departments</span>
            </p>
            <h1>Our Departments</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="department-content">
        <div className="department-container">
          {/* Left Image */}
          <div className="department-img">
            <img src={Depart1} alt="Department" />
          </div>

          {/* Right Text */}
          <div className="department-text">
            <h4>Welcome to Golden Hospital - Biratnagar</h4>
            <h2>Complete Medical Solutions in One Place</h2>
            <p>
             Golden Hospital is a well-equipped and state-of-the-art healthcare institution that provides comprehensive medical services with the highest standards of care.
             It offers a wide range of specialties, ensuring quality treatment and compassionate care for every patient.
            </p>
            <p>
             It is committed to excellence in delivering quality healthcare through expert professionals and dedicated teamwork. We provide compassionate and patient-centered care in a modern environment, continuously improving and upgrading technology to ensure maximum satisfaction and the 
             best possible health outcomes for our patients.
            </p>
          </div>
        </div>
      </section>
        <Boxcard title="Surgical Departments" departments={departmentsData.surgical} />
      <Boxcard title="Medical Departments" departments={departmentsData.medical} />
      <Boxcard title="Diagnostic Departments" departments={departmentsData.diagnostic} />
    </div>
  );
};

export default Department;
