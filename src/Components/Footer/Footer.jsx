 import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Copyright from '../Copyright/Copyright';
import { Link } from 'react-router-dom';
// import { FaYoutube } from "react-icons/fa";
import Back from '../Back/Back';


const Footer = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(`/home${selectedValue}`); // Redirect to the path based on the value
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
    



        {/* Products Section */}
        <div className="footer-section">
          <h3 className="product">Products</h3>
         <Link to="/home"><p>Home</p></Link>
         <Link to="/appointment"><p>Appointment</p></Link>
         <Link to="/faq"><p>FAQ</p></Link>
        </div>

        {/* Support Section */}
        <div className="footer-section">
        <h3 className="product">Supports</h3>
        <Link to="/doctors"> <p>Doctors</p></Link>
        <Link to="/about"><p>About Us</p></Link>
        <Link to="/contact"><p>Contact Us</p></Link>
         </div>

 {/* Support Section */}
 <div className="footer-section">
  <h3 className="product">Address</h3>
  <p><i className="fas fa-map-marker-alt"></i> Janpath Tole, Biratnagar-11, Nepal</p>
  <p><i className="fas fa-phone-alt"></i> 021-511809 ,021-574817</p>
  <p><i className="fas fa-globe"></i> info@goldenhospital.com.np</p>
</div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="product">Contact Us</h3>
          <div className="social-media">
        <a href="https://www.facebook.com/goldenhospital.brt" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
         <a href="https://www.youtube.com/@goldenhospitalpvtltd8225" target="_blank" rel="noopener noreferrer">
          <i className="<fa-brands fa-youtube"></i>
        </a>
        <a href="https://www.twitter.com/#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
        </div>

 

       <Back/>
       
      </div> 
       <Copyright/>
    </footer>
  );
};

export default Footer;
