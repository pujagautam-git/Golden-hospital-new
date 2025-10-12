import React, { useState } from "react";
import "./Appointment.css";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
    department: "",
    doctor: "",
    problem: "",
    date: "",
    time: "",
  });

   const [submitted, setSubmitted] = useState(false); 

  const departments = ["General", "Neurosurgery","Orthopedic","Obs & Gynaecology","GI Surgery","Cardiology","Pulmonology","Nephrology", "ENT", "Dental"];
  const doctors = ["Dr. Shyam kumar", "Dr. Ramesh kumar", "Dr. Sanjiv kumar", "Dr. Bibek Vaidya", "Dr. Ashish Yadav", "Dr. Ajay Mahato", "Dr. Saroj Rajbanshi", "Dr. Manish Agrawal", "Dr. Prakiti Acharya", "Dr. Santosh Kumar", "Dr. Shrijana Yadav", "Dr. Ajay Dhakal"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.age || !formData.phone || !formData.department || !formData.doctor || !formData.problem || !formData.date || !formData.time) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Appointment Data:", formData);
    // alert("Appointment booked successfully!");

    setSubmitted(true); // Set submitted to true on successful submission
    setFormData({
      name: "",
      age: "",
      address: "",
      phone: "",
      department: "",
      doctor: "",
      problem: "",
      date: "",
      time: "",
    });

     setTimeout(() => setSubmitted(false), 5000);

  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>
        {submitted && (
        <div className="thank-you-message">
          ✅ Thank you! Your appointment has been booked successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label>Patient Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Age *</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Department *</label>
          <select name="department" value={formData.department} onChange={handleChange} required>
            <option value="">Select Department</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Doctor *</label>
          <select name="doctor" value={formData.doctor} onChange={handleChange} required>
            <option value="">Select Doctor</option>
            {doctors.map((doc, index) => (
              <option key={index} value={doc}>{doc}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Problem (in detail) *</label>
          <textarea name="problem" rows="3" value={formData.problem} onChange={handleChange} required></textarea>
        </div>

        <div className="form-group">
          <label>Date *</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Time *</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default BookAppointment;
