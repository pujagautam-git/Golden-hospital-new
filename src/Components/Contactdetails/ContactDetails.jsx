 import React from 'react'
  import { FaEnvelope,  FaMapMarkerAlt,FaPhoneAlt} from "react-icons/fa";
import "./ContactDetails.css";

 const ContactDetails = () => {
   return (
     <section className="contact-section">
          <div className="contact-box phone-box">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>
                  <a href="tel:+61424652500" className="contact-link">021-511809, 021-574817</a></p>
            </div>
          </div>
    
          <div className="contact-box email-box">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>
                  <a href="mailto:Michaeltruecolours@gmail.com" className="contact-link">Info@goldenhospital.com.np</a></p>
            </div>
          </div>
    
          <div className="contact-box address-box">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Address</h3>
              <p>
                 <a 
          href="https://www.google.com/maps?q=Unit+507,+15+Chatham+Road,+West+Ryde,+NSW+2114" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link">
          Janpath Tole, Biratnagar-11, Nepal</a></p>
            </div>
          </div>
        </section>
   )
 }
 
 export default ContactDetails;