 import React,{useState} from "react";
import "./Emergency.css";
import emer from "../../assets/emergency/emer.jpg";
import { Users, ClipboardCheck,ChevronRight, ShieldAlert, Contact } from "lucide-react";
import ContactDetails from "../../Components/Contactdetails/ContactDetails";

const emergencyBenefits = [
  {
    icon: <Users size={40} />,
    title: "Skilled team trained for trauma and critical cases",
  },
  {
    icon: <ClipboardCheck size={40} />,
    title: "Rapid assessment and stabilization of patients",
  },
//   {
//      icon: <FirstAidKit size={40} />,
//     title: "Equipped to handle a wide range of emergencies",
//   },
  {
    icon: <ShieldAlert size={40} />,
    title: "Reduces risk of complications and improves survival",
  },
];
const faqData = [
  { question: "Are emergency services available 24/7?", answer: "Yes, our emergency department operates 24 hours a day, 7 days a week to handle urgent cases." },
  { question: "What should I bring when coming to the emergency department?", answer: "Please bring any available medical records, a government-issued ID, and insurance documents if you have them." },
  { question: "Do I need an appointment to visit the emergency room?", answer: "No appointment is needed. Our emergency services are available for walk-in patients at any time." },
  { question: "What conditions are treated in the emergency department?", answer: "We treat trauma, accidents, severe pain, breathing difficulties, strokes, heart attacks, and other critical conditions." },
  { question: "What if I arrive and it’s not a true emergency?", answer: "Our team will assess your condition and guide you to appropriate care if it's not life-threatening." },
  { question: "Can I call ahead before coming in for an emergency?", answer: "Yes, you may call to inform us, but care will be provided immediately regardless." },
  { question: "Are emergency services covered by insurance?", answer: "Most insurance plans cover emergency services. Please confirm with your provider." },
  { question: "What happens after emergency treatment?", answer: "You may be discharged with instructions or admitted for further treatment based on your condition." },
  { question: "Are pediatric emergencies also handled?", answer: "Yes, our emergency department is equipped to treat children and infants in critical situations." },
  { question: "Will I be seen immediately upon arrival?", answer: "Patients are seen based on the severity of their condition. Critical cases are prioritized." }
];


const Emergency= () => {
     const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
     <section className="emergency-section">
         <div className="emergency-container">
           <div className="emergency-text">
             <h2>OVERVIEW</h2>
             <p>
              Golden Hospital’s Emergency Department provides 24/7 care for patients with urgent and life-threatening conditions. Our highly skilled team is trained to handle trauma, accidents, strokes, heart attacks, and other critical medical emergencies. With state-of-the-art equipment and rapid response protocols, we ensure quick assessment, immediate stabilization, and timely treatment. Our goal is to deliver
               compassionate and efficient care that saves lives and reduces complications, offering reassurance to patients and families during stressful situations.
             </p>
             
           </div>
           <div className="emergency-image">
             <img src={emer} alt="Painting service" />
           </div>
         </div>
       </section>
    <section className="emergency-benefits-section">
      <h2 className="emergency-title">Benefits</h2>
      <div className="benefits-grid">
        {emergencyBenefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <div className="icon">{item.icon}</div>
            <p className="benefit-text">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
     <section className="emergency-faq-section">
      <h2 className="emer-faq-title">FAQ's</h2>
      <div className="emer-faq-grid">
        {faqData.map((item, index) => (
          <div
            className={`emer-faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="emer-faq-question">
              <span>{item.question}</span>
              <ChevronRight className={`emer-faq-icon ${activeIndex === index ? "rotate" : ""}`} />
            </div>
            {activeIndex === index && <p className="emer-faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
    <ContactDetails/>
    </>
  );
};

export default Emergency;
