 import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaPhoneAlt,FaShareAlt, FaLocationArrow } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube, FaLocationDot} from "react-icons/fa6";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // replace with EmailJS service ID
        "your_template_id", // replace with EmailJS template ID
        form.current,
        "your_public_key"   // replace with EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <>
    <div className="form-container">
      <h2 className="contact-title">CONTACT US</h2>
      <p className="contact-subtitle">
        We would love to hear from you! Please fill in the required details and
        our team will get in touch with you.
      </p>

      <div className="contact-wrapper">
        {/* Contact Details */}
        <div className="contact-details">
          <h3>Contact Details</h3>
          <div className="form-box">
            <FaPhoneAlt className="form-icon" />
            <div>
              <p><b>Phone Number</b></p>
              <p>Mob: +977-9852070381</p>
              <p>Call: 021-511809 ,021-574817</p>
            </div>
          </div>

          <div className="form-box">
            <FaLocationDot className="form-icon" />
            <div>
              <p><b>Address</b></p>
              <p>Janpath Tole</p>
              <p>Biratnagar 11, Nepal</p>
              <p><b>Email:</b>info@goldenhospital.com.np</p>
            </div>
          </div>

          <div className="form-box">
            <FaShareAlt className="form-icon" />
            <div>
              <p><b>Follow Us</b></p>
              <div className="social-icons">
                <a 
        href="https://www.facebook.com/goldenhospital.brt/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
       <a 
        href="https://www.instagram.com/YourProfileName" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>

      <a 
        href="https://www.youtube.com/@goldenhospitalpvtltd8225" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaYoutube />
      </a>
              
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="contact-form">
          <h3>Feedback</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label>Name *</label>
              <input type="text" name="user_name" required placeholder="Enter Your Name" />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" name="user_email" required placeholder="Enter Your E-mail" />
            </div>
            <div className="form-group">
              <label>Mobile Number *</label>
              <input type="text" name="user_phone" required placeholder="Enter Your Phone Number" />
            </div>
            <div className="form-group">
              <label>Your Message *</label>
              <textarea name="message" required placeholder="Enter your Message here"></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <section className="contact-map-section">
  <div className="map-container">
    <iframe
      title="Yes Business Tower Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.0431663935647!2d87.27053447520778!3d26.454337476923317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef75fef4a096a1%3A0xf5003a8d878142d6!2sGolden%20Hospital%20Pvt%20Ltd%20(New%20Building)!5e0!3m2!1sen!2snp!4v1757230611977!5m2!1sen!2snp" 
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>
</>
  );
};

export default Contact;
