// BenefitsSlider.jsx
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ipd1 from "../../assets/ipd/ipd1.jpeg";
import ipd2 from "../../assets/ipd/ipd2.jpg";
import { Link } from 'react-router-dom';
 import {FaCheck,FaChartBar,FaClock} from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import './Inpatient.css';

import { FaClipboardList, FaHandHoldingMedical, FaHandsHelping } from 'react-icons/fa';
import { MdOutlineHealthAndSafety } from 'react-icons/md';

const benefitsData = [
  {
    icon: <FaClipboardList size={48} />,
    title: 'Personalized treatment plans',
  },
  {
    icon: <FaHandHoldingMedical size={48} />,
    title: 'Access to advanced medical treatments',
  },
  {
    icon: <MdOutlineHealthAndSafety size={48} />,
    title: 'Safe, clean, and supportive environment',
  },
  {
    icon: <FaHandsHelping size={48} />,
    title: 'Multidisciplinary team collaboration',
  },
  {
    icon: <FaClipboardList size={48} />,
    title: 'Personalized treatment plans',
  },
  {
    icon: <FaHandHoldingMedical size={48} />,
    title: 'Access to advanced medical treatments',
  },
];

const faqData = [
  { question: "Daily Monitoring", answer: "Our staff provides round-the-clock monitoring to ensure your safety and recovery." },
  { question: "Patient Communication", answer: "We maintain clear communication with patients and families during the stay." },
  { question: "Emergency Support", answer: "Immediate emergency care is available at all times." },
  { question: "Rehabilitation Services", answer: "Comprehensive rehab support to aid your healing process." },
];

const tabData = {
  "Admission Procedure": [
    "Referral from OPD, Emergency, or another healthcare provider.",
    "Admission advised after physician consultation.",
    "Complete registration at the Admission Desk with ID and medical documents.",
  ],
  "Documents Required": [
    "Valid ID proof (Citizenship/Passport/Driving License).",
    "Previous medical records and prescriptions.",
    "Insurance card (if applicable).",
  ],
  "Insurance Support": [
    "Assistance with insurance claim documentation.",
    "Cashless hospitalization support for partner insurance providers.",
    "Dedicated insurance helpdesk for patient queries.",
  ],
};

const Inpatient = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("Admission Procedure");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };




  return (
    <>
     <section className="patient-section">
      <div className="patient-container">
        <div className="patient-text">
          <h2>OVERVIEW</h2>
          <p>
            At Golden Hospital, we are dedicated to delivering high-quality inpatient care for patients requiring extended medical attention. Our Inpatient Department (IPD) provides a serene and secure environment equipped with modern amenities, ensuring patients receive the best care possible under the supervision of experienced healthcare professionals. We focus on personalized treatment plans, advanced medical
             technologies, and compassionate care to support patients during their recovery.
          </p>
          
        </div>
        <div className="patient-image">
          <img src={ipd1} alt="Painting service" />
        </div>
      </div>
    </section>

    <div className="benefits-container">
      <h2 className="benefits-title">Benefits</h2>
      <Swiper
      modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        navigation={{ clickable:true}}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        // modules={[Navigation]}
        className="benefits-swiper"
      >
        {benefitsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="benefit-card">
              <div className="benefit-icon">{item.icon}</div>
              <div className="benefit-title">{item.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  <section className="inpatient-section">
      {/* Left Side */}
      <div className="inpatient-left">
        <h4 className="inpatient-subtitle">INPATIENT SERVICES (IPD)</h4>
        <h2 className="inpatient-title">
          During <span>You Stay.</span>
        </h2>
      </div>

      {/* Right Side */}
      <div className="inpatient-right">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`inpat-faq-item ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="inpat-faq-question">
              <span>{item.question}</span>
              <span className="inpat-faq-icon">{openIndex === index ? "−" : "›"}</span>
            </div>
            {openIndex === index && <div className="inpat-faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
    <section className="admission-section">
      <h2 className="admission-title">ADMISSION PROCESS</h2>

      {/* Tabs */}
      <div className="admission-tabs">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            className={`admission-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="admission-content">
        <ul>
          {tabData[activeTab].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
       <section className="report-section">
                  <div className="report-container">
                    {/* Left Image */}
                    <div className="report-image">
                      <img src={ipd2} alt="report Management" />
                    </div>
          
                    {/* Right Content */}
                    <div className="report-content">
                      <p className="report-intro">
                       The hospital discharge process is designed to ensure patients leave safely with proper guidance and support. Before discharge, the doctor confirms that the patient is medically fit to go home and provides a detailed summary of treatment, prescribed medications, and follow-up instructions. Patients and families receive clear guidance on diet, activity levels, wound care, and warning signs that may require immediate attention. All billing and insurance formalities are completed, and necessary medical reports are handed over. 
                      </p>
                      <div className="report-feature">
                        <FaClock className="report-icon" />
                        <div>
                          <h3>Discharge Procedure</h3>
                          <p> Doctor’s approval and discharge summary with detailed instructions.</p>
                          <p>Prescription for medications and follow-up appointments.</p>
                          <p>Billing clearance and insurance coordination (if applicable).</p>
                        </div>
                      </div>
          
                      <div className="report-feature">
                        <FaChartBar className="report-icon" />
                        <div>
                          <h3>Post-Discharge Care</h3>
                          <p>
                           OPD follow-up for continued care or further tests.
                          </p>
                          <p>Home care instructions and rehabilitation services if needed.</p>
                          <p>24/7 helpline for any post-discharge concerns or emergencies.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                 <section className="right-section">
        <div className="right-container">
            <h1 className="right-header">NEED EMERGENCY CARE?</h1>
            <p className="right-description"> Our Emergency Department is open 24/7 to provide immediate medical attention. 
        In case of urgent health concerns, you can reach us anytime for rapid and 
        specialized care.</p>
                < Link to="/emergency" className='right-btn'>Emergency Services </Link>
                 </div>
    </section>
    </>
  );
};

export default Inpatient;
