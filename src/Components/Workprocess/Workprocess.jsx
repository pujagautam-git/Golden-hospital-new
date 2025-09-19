import React from "react";
import "./Workprocess.css";
// import patientIcon from "./icons/patient.png"; 
// import doctorIcon from "./icons/doctor.png";
// import careIcon from "./icons/care.png";
// import followupIcon from "./icons/followup.png";


const processSteps = [
  {
    id: "01",
    title: "Patient Registration",
    description: "Register patients and assign identifiers.",
    icon: "",
  },
  {
    id: "02",
    title: "Medical Assessment",
    description: "Diagnose and create treatment plans.",
    icon: "",
  },
  {
    id: "03",
    title: "Treatment And Care",
    description: "Administer treatment and monitor patients.",
    icon: "",
  },
  {
    id: "04",
    title: "Discharge And Follow-Up",
    description: "Provide instructions and arrange post-discharge care.",
    icon: "",
  },
];

const HomeProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-header">
        <p className="process-subtitle">OUR STEP</p>
        <h2 className="process-title">Our Working Best Process</h2>
      </div>
      <div className="process-steps">
        {processSteps.map((step) => (
          <div className="process-step" key={step.id}>
            <div className="step-icon">
              <img src={step.icon} alt={step.title} />
              <span className="step-number">{step.id}</span>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProcessSection;