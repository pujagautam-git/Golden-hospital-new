import React from 'react'
import Total from '../../Components/Total/Total'
import about1 from "../../assets/About/about1.jpg";
import about2 from "../../assets/About/aabout2.jpg";
import { Link } from "react-router-dom";
import lab from "../../assets/laboratory/lab2.jpeg"
import { FaCheck } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { MdLocalHospital } from "react-icons/md";
import { CiDesktop } from "react-icons/ci";
 import { FaAmbulance } from 'react-icons/fa';
import "./About.css";
const About = () => {
  return (
    <>
     {/* <div className="department-page"> */}
      {/* Breadcrumb Section */}
      <section className="about-breadcrumb" style={{ backgroundImage: `url(${about1})` }}>
        <div className="breadcrumb-overlay">
          <div className="breadcrumb-container">
            <p>
              <Link to="/">Home</Link> » <span>About Us</span>
            </p>
            <h1>About Us</h1>
          </div>
        </div>
      </section>

 <section className="solution-section">
              <div className="solution-container">
                {/* Left Column */}
                <div className="solution-left">
                     <img src={about2} alt="hospital image" />
                  
                </div>
                {/* Right Image */}
                <div className="solution-right">
                  <p className="solution-subtitle"></p>
                  <h1 className="solution-title">Why Choose Golden Hospital?</h1>
                  <p className="solution-description">
                   At Golden Hospital, we believe healthcare should be accessible, comprehensive, and compassionate. With a team of experienced specialists, state-of-the-art technology, and a full range of medical, surgical, and diagnostic services under one roof, we provide complete care tailored to every patient’s needs. Our commitment goes
                    beyond treatment—we focus on comfort, safety, and personalized attention, ensuring that each patient receives the highest standard of medical excellence. Whether it’s routine care or complex treatment, 
                   Golden Hospital is your trusted partner in health.
                  </p>
        
                
                </div>
              </div>
            </section>
           
     <section className="overview-section">
      <div className="overview-container">
        {/* Left Column */}
        <div className="overview-left">
          <p className="overview-subtitle">HIGHEST QUALITY CARE</p>
          <h1 className="overview-title">Dedicated to your health and Well-Being</h1>
          <p className="overview-description">
           Medical solutions rank amongst the most exciting and interesting ways healthcare providers leverage digital technology to improve medical care. They have the potential to transform healthcare 
           provision as we know it, improving access, clinical outcomes and engagement with services.
          </p>

          <ul className="overview-checklist">
            <li><FaCheck className="icon" /> All medical, surgical, and diagnostic services under one roof.</li>
            <li><FaCheck className="icon" /> Dedicated team of doctors providing trusted healthcare.</li>
            <li><FaCheck className="icon" /> Compassionate treatment with advanced technology.</li>
          </ul>

         {/* <a href="/package"> <button className="overview-btn">Check Prices</button></a> */}
        </div>
        {/* Right Image */}
        <div className="about-overview-right">
          {/* <img src={""} alt="image of machine" /> */}
           <iframe
    className="about-overview-video"
    src="https://www.youtube.com/embed/Q1bBMMjNQNw?autoplay=1&mute=1&loop=1&playlist=Q1bBMMjNQNw"
    title="World Class Medical Equipment"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
  ></iframe>

        </div>
      </div>
    </section>

    <section className="manage-section">
            <div className="manage-container">
              {/* Left content */}
              <div className="manage-left">
                {/* <p className="manage-subtitle">Modern Technology</p> */}
                <h1 className="manage-title">
                  World Class Medical Equipments
                </h1>
                <p className="manage-description">
                 At Golden Hospital, we are equipped with world-class medical technology to ensure precision, safety, and efficiency in every treatment. From advanced diagnostic imaging and modern surgical systems to cutting-edge laboratory facilities, our equipment meets international standards of healthcare excellence. This allows our medical team to deliver accurate diagnoses, effective treatments, and improved outcomes, giving patients the 
                 confidence that they are receiving the very best care.</p>
                {/* <a href="#prices"> <button className="manage-btn">Check Prices</button> </a> */}
    
              </div>
    
              {/* Right side video */}
              <div className="manage-right">
                       <img src={lab} alt="image of machine" />
                 {/* <iframe
    className="manage-video"
    src="https://www.youtube.com/embed/Q1bBMMjNQNw?autoplay=1&mute=1&loop=1&playlist=Q1bBMMjNQNw"
    title="World Class Medical Equipment"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
  ></iframe> */}
              </div>
            </div> 
            
          </section>
  <Total/>
  <section className="performance-section">
          <div className="performance-content">
            <div className="performance-left">
              <h1 className="performance-title">Opening Hours</h1>
              <p className="performance-description">
              Major services are round the clock services at our hospital. OPD and other free counselling has handpicked hours mentioned below.</p> 
              <ul className="performance-hours">
                <li>Sunday - Friday: 8:00 AM - 5:00 PM</li>
                <li>Emergency: 24 Hours  </li> 
                </ul>
             <a href="/contact"> <button className="performance-button">Contact Us</button></a>
            </div>
    
            <div className="performance-cards">
              <div className="performance-card">
                <AiOutlineTeam className="card-icon" />
                <h3>Professional Team</h3>
                <p>Our team consists of highly qualified doctors, surgeons, and healthcare professionals, each with years of expertise in their respective fields.</p>
              </div>
              <div className="performance-card">
                <MdLocalHospital className="card-icon" />
                <h3>Premium Care</h3>
                <p>Our premium care services are designed to provide patients with the highest level of comfort, safety, and personalized attention. </p>
              </div>
              <div className="performance-card">
                <FaAmbulance className="card-icon" />
                <h3>Emergency Care</h3>
                <p>Our 24/7 emergency care unit is equipped with advanced technology and a highly trained medical team to handle critical situations with speed and precision.</p>
              </div>
              <div className="performance-card">
                <CiDesktop className="card-icon" />
                <h3>Modern Equipment</h3>
                <p>With the latest medical equipment and technology, we make sure you receive accurate, safe, and reliable care. </p>
              </div>
            </div>
          </div>
        </section>
  </>
  )
}

export default About