 import React from 'react';
import { FaCalendarAlt, FaStethoscope,FaEye, FaClock } from 'react-icons/fa'; // Importing icons from React Icons
import './HospitalTiming.css';
const HospitalTiming = () => {
  return (
    <div className="time">
    <div className="hospital-timing-container">
      <h1 >Our  
         Services</h1>
        <h5>"Your Health, Our Priority – All Specialties, One Place.</h5>
      <div className="service-sections">
        <div className="service-section">
            <div className="content-services">
          <h2> <FaCalendarAlt className="icon"/>OPD services</h2>
         
          <p> Please book your appointment with our Appointment Booking System
         Sunday -Saturday<br/>
         OPD: 8 am to 5 pm<br/>
          Emergency: 24*7</p>
          </div>
        
          </div>

         <div className="service-section">
          <h2><FaClock className="icon" /> 24 Hours Service</h2>
          <p>
           Golden Hospital operates 24/7, providing emergency and critical care services, ensuring immediate and high-quality medical attention whenever you need it.
          </p>
        </div>

        <div className="service-section">
          <h2><FaStethoscope className="icon" /> Regular Checkup</h2>
          <p>
          We offer thorough regular check-ups to monitor your health, detect any potential issues early, and help maintain your overall well-being for the long term need.
          </p>
        </div>

        <div className="service-section">
          <h2><FaEye className="icon" />Neurosurgeon</h2>
          <p>
          Our experienced neurosurgeons provide advanced care for brain, spine, and neurological conditions, offering precise treatment for optimal recovery.</p>
        </div>
      </div>
    </div>
    </div>

  );
};

export default HospitalTiming;