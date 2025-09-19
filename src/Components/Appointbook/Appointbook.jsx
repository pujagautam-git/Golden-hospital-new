import React from "react";
import "./Appointbook.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const Appointment = () => {
  return (
    <section className="appointment-section">
      <div className="appointment-container">
        {/* Left side with icon & text */}
        <div className="appointment-left">
          <div className="appointment-icon">
            <FaRegCalendarAlt />
          </div>
          <div className="appointment-text">
            <h1>Open For Appointments</h1>
            <p>
              We are delighted to announce that our doors are open, and we are
              now accepting appointments to serve you better.
            </p>
          </div>
        </div>

        {/* Right side button */}
        <div className="appointment-right">
          <button className="appoint-btn">
            Book Appointment <FaRegCalendarAlt className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
