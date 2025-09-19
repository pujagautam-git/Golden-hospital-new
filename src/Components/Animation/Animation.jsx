import React from "react"; 
import { motion } from "framer-motion";
import "./Animation.css";
import ambulanceImg from "../../assets/flip.png";
import hospitalImg from "../../assets/Home/building.jpg"; // add a hospital image in assets

const AnimationSection = () => {
  return (
    <div className="animation-container">
      {/* Left side text */}
      <div className="animate-text">
        <h1>Welcome to Golden Hospital</h1>
        <p>Your health is our priority. We provide 24/7 emergency care.Serving the community with excellence and empathy, Golden Hospital has become a trusted name in healthcare. We believe that quality treatment, advanced technology, and kindness
           together create the foundation for a healthier tomorrow.</p>
        <button className="animate-btn">Book Appointment</button>
      </div>

      {/* Right side hospital + ambulance */}
      <div className="scene">
        <img src={hospitalImg} alt="Hospital" className="hospital" />

        <motion.img
          src={ambulanceImg}
          alt="Ambulance"
          className="ambulance"
          initial={{ x: "-150%" }}   // start off-screen left
          animate={{ x: "0%" }}     // drive in and stop
          transition={{
            duration: 6,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default AnimationSection;
