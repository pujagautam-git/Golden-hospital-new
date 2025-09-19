 import React from 'react';
import { useNavigate } from 'react-router-dom';
// import doctorimage from "../../assets/doctor-image.jpg";
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    const handleButtonClick = () => {
        navigate('/about');
    };

    return (
        <section className="hero-container">
            <div className="hero-overlay"></div>
            <div className="hero-content">
            <h1 className="hero-heading">Experience Doctor Team</h1>
            
            <p className="hero-description">
                "At Birat Eye Hospital we take pride in our experienced and highly skilled team of doctors dedicated to providing the best possible care to our patients. Each doctor brings years of expertise and specialization in their respective fields, ensuring that every patient receives the highest medical attention.
                 Our doctors are professionals with advanced medical knowledge and compassionate caregivers who prioritize patient well-being. Whether you need routine check-ups, specialized treatments, or emergency care, our team is committed to your health and recovery, offering personalized care with the latest medical advancements.
                At Birat Eye Hospital, we take pride in our experienced and highly skilled team of doctors dedicated to providing the best possible care to our patients."
            </p>
            <button onClick={handleButtonClick} className="hero-button">Learn more</button>
        </div>
        <div className="hero-image-container">
                <img 
                    src={""}
                    alt="Experienced Doctor Team" 
                    className="hero-image"
                />
            </div>
            </section>
    );
};

export default Hero;