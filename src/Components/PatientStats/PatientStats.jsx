 import React from "react";
import { FaHospitalAlt, FaAmbulance, FaUserInjured, FaCheckCircle } from "react-icons/fa";
// import CountUp from "react-countup";
import "./PatientStats.css";

const stats = [
  {
    icon: <FaUserInjured className="pstat-icon" />,
    label: "Experts Doctors and Nurses",
  },
  {
    icon: <FaAmbulance className="pstat-icon" />,
    label: "24/7 Emergency Response Team",
  },
  {
    icon: <FaHospitalAlt className="pstat-icon" />,
    label: "Trusted by Hundreds of Patients Daily",
  },
  {
    icon: <FaCheckCircle className="pstat-icon" />,
    label: "Working Together for your Well being",
  },
];
const PatientStats = () => {
  return (
    <section className="patient-stats-section">
      <div className="container">
        <div className="stats-row">
          {stats.map((item, index) => (
            <div className="stat-box" key={index}>
              {item.icon}
              <h4 className="stat-label">{item.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientStats;