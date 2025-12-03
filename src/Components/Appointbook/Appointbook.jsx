import React from "react";
import "./Appointbook.css";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";

const Appointment = () => {
  return (
    <section className="appoint-section">
      <div className="appoint-container">
        {/* Left side with icon & text */}
        <div className="appoint-left">
          <div className="appoint-icon">
            <FaRegCalendarAlt />
          </div>
          <div className="appoint-text">
            <h1>Open For Appointments</h1>
            <p>
              We are delighted to announce that our doors are open, and we are
              now accepting appointments to serve you better.
            </p>
          </div>
        </div>

        {/* Right side button */}
        <div className="appoint-right">
       <Link to="/appointment" className="appoint-btn">
            Book Appointment <FaRegCalendarAlt className="btn-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
