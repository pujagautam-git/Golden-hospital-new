import React from 'react';
import './DoctorDetails.css';
import loc from "../../assets/doctor/location.png";
import dep from "../../assets/doctor/departments.png";
import qua from "../../assets/doctor/qualifications.png";
import hours from "../../assets/doctor/hours.png";

const DoctorDetails = ({ doctor, onBack }) => {
  return (
    <div>
        <div className="header">
      <button onClick={onBack} className="back-button">Back to Doctors</button>
      </div>
      <div className="doctor-detail">
        {/* Doctor Header */}
        <div className="doctor-header">
          <div className="name-department">
            <h1>{doctor.heading1}</h1>
            <div className="vertical-divider"></div>
            <h2>{doctor.department}</h2>
          </div>
          <img src={doctor.image} alt={`${doctor.heading1}`} className="doctor-image" />
        </div>

      
        <div className="main-contents">
    {/* Left Column: Qualification & Shifts */}
    <div className="doctor-qualification-shifts">
        <div className="doctor-qualification">
            <div className="section-header">
                <img src={qua} alt="Qualification Icon" className="locate" />
                <h3>Qualification</h3>
            </div>
            <p><strong>Education:</strong> {doctor.heading3}</p>
            <p><strong>Association:</strong> {doctor.heading4}</p>
        </div>

        <div className="doctor-shifts">
            <div className="section-header">
                <img src={hours} alt="Shifts Icon" className="locate"/>
                <h3>Shifts</h3>
            </div>
            <div className="shift-timings">
                {Object.entries(doctor.shiftTimings).map(([day, timing]) => (
                    <p key={day}>
                        <strong>{day}:</strong> {timing}
                    </p>
                ))}
            </div>
        </div>
    </div>

    {/* Right Column: Area of Focus & Location */}
    <div className="doctor-focus-location">
        <div className="doctor-focus">
            <div className="section-header">
                <img src={dep} alt="Department Icon" className="locate"/>
                <h3>Area of Focus</h3>
            </div>
            <p>{doctor.heading2}</p>
        </div>

        <div className="doctor-location">
            <div className="section-header">
                <img src={loc} alt="Location Icon" className="locate" />
                <h3>Location</h3>
            </div>
            <p>{doctor.location}</p>
        </div>
    </div>
</div>

          </div>
        </div>
  );
};

export default DoctorDetails;