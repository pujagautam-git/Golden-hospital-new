import React,{useState} from "react";
import "./Pharmacy.css";
import pharmacy from "../../assets/pharmacy/phar1.jpg";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import ContactDetails from "../../Components/Contactdetails/ContactDetails";

const Pharmacy = () => {

  const faqData = [
    {
      question: "Qualified Pharmacists",
      answer: "Our pharmacy is staffed with highly qualified and licensed pharmacists to ensure you receive accurate medications and guidance."
    },
    {
      question: "Wide Range of Medications",
      answer: "We provide a comprehensive selection of prescription and over-the-counter medications to meet your healthcare needs."
    },
    {
      question: "Medication Counseling",
      answer: "Our pharmacists offer counseling on medication usage, side effects, and interactions for your safety and awareness."
    },
    {
      question: "Prescription Refill Services",
      answer: "Easily refill your prescriptions with our convenient in-house system, reducing wait times and ensuring continuity of care."
    },
    {
      question: "In-House Pharmacy",
      answer: "Our in-house pharmacy ensures that you can get your prescribed medicines immediately after your consultation."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <section className="pharmacy-section">
      <div className="pharmacy-container">
        <div className="pharmacy-text">
          <h2>OVERVIEW</h2>
          <p>
           The Pharmacy at Golden Hospital is dedicated to ensuring safe, reliable, and timely access to medications for all patients. Our facility is equipped with a wide range of prescription and over-the-counter medicines, managed by qualified pharmacists who provide
            expert guidance and counseling. We prioritize accuracy, patient safety, and convenience through efficient prescription refills, in-house dispensing, and personalized medication counseling. With a commitment to quality care, our pharmacy supports your treatment journey and helps you manage your health effectively.
          </p>
          
        </div>
        <div className="pharmacy-image">
          <img src={pharmacy} alt="Painting service" />
        </div>
      </div>
    </section>
    <section className="key-section">
      <div className="key-left">
        <span className="key-subtitle">PHARMACY</span>
        <h2 className="key-title">Key Features</h2>
      </div>

       <div className="key-faq-right">
        {faqData.map((item, index) => (
          <div key={index} className="key-faq-item">
            <div className="key-faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              {activeIndex === index ? (
                <FaChevronDown className="faq-icon" />
              ) : (
                <FaChevronRight className="faq-icon" />
              )}
            </div>
            {activeIndex === index && (
              <div className="key-faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    <ContactDetails/>
    </>
  );
};

export default Pharmacy;
