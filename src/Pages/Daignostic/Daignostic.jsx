import React from "react";
import "./Daignostic.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaFlask, FaXRay, FaMicroscope, FaFileMedicalAlt, FaUserMd, FaClock } from "react-icons/fa";
import ContactDetails from "../../Components/Contactdetails/ContactDetails";

const Diagnostic = () => {
  return (
    <>
    <div className="diagnostic-page">
      {/* Hero Section */}
      <section className="diagnostic-hero">
        <div className="hero-overlay">
          <h1>Diagnostic Services</h1>
          <p>Advanced technology and expert care for accurate diagnosis</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="diagnostic-overview">
        <h2>Comprehensive Diagnostic Care</h2>
        <p>
          At Golden Hospital, we believe accurate diagnosis is the first step toward successful treatment. 
          Our diagnostic center is equipped with cutting-edge technology, experienced professionals, 
          and a patient-friendly environment to deliver fast and precise results.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="diagnostic-features">
        <div className="diagnostic-card">
          <FaMicroscope className="diagnostic-icon" />
          <h3>Lab Tests</h3>
          <p>From routine blood work to advanced pathology, we provide reliable lab services with precision.</p>
        </div>
        <div className="diagnostic-card">
          <FaXRay className="diagnostic-icon" />
          <h3>Imaging Services</h3>
          <p>Our imaging department offers X-ray, Ultrasound, CT Scan, and MRI for accurate results.</p>
        </div>
        <div className="diagnostic-card">
          <FaFileMedicalAlt className="diagnostic-icon" />
          <h3>Fast Reporting</h3>
          <p>Quick and digital report delivery to ensure timely treatment decisions.</p>
        </div>
        <div className="diagnostic-card">
          <FaUserMd className="diagnostic-icon" />
          <h3>Expert Technologists</h3>
          <p>Trained and certified staff to handle tests safely and accurately.</p>
        </div>
      </section>

      {/* Benefits Slider */}
      <section className="diagnostic-benefits">
        <h2>Why Choose Our Diagnostic Center?</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          className="benefit-slider"
        >
          <SwiperSlide className="benefit-slide">
            <FaClock className="benefit-icon" />
            <h4>24/7 Availability</h4>
            <p>Round-the-clock diagnostic services for emergencies.</p>
          </SwiperSlide>
          <SwiperSlide className="benefit-slide">
            <FaFlask className="benefit-icon" />
            <h4>Cutting-Edge Equipment</h4>
            <p>Modern machines for high accuracy and faster results.</p>
          </SwiperSlide>
          <SwiperSlide className="benefit-slide">
            <FaFileMedicalAlt className="benefit-icon" />
            <h4>Online Report Access</h4>
            <p>View and download your reports from the comfort of home.</p>
          </SwiperSlide>
          <SwiperSlide className="benefit-slide">
            <FaUserMd className="benefit-icon" />
            <h4>Specialist Review</h4>
            <p>Every report is reviewed by experienced radiologists & pathologists.</p>
          </SwiperSlide>
          <SwiperSlide className="benefit-slide">
    <FaMicroscope className="benefit-icon" />
    <h4>Wide Range of Tests</h4>
    <p>From routine blood tests to advanced diagnostics, everything in one place.</p>
  </SwiperSlide>

  <SwiperSlide className="benefit-slide">
    <FaFileMedicalAlt className="benefit-icon" />
    <h4>Digital Records</h4>
    <p>Secure electronic records for easy future reference and continuity of care.</p>
  </SwiperSlide>

  <SwiperSlide className="benefit-slide">
    <FaFlask className="benefit-icon" />
    <h4>Quality Assurance</h4>
    <p>Strict internal quality control to ensure highly reliable results.</p>
  </SwiperSlide>

  <SwiperSlide className="benefit-slide">
    <FaUserMd className="benefit-icon" />
    <h4>Patient Comfort</h4>
    <p>Friendly staff and safe environment to make the process stress-free.</p>
  </SwiperSlide>
</Swiper>
        
      </section>
    </div>
    <ContactDetails/>
    </>
  );
};

export default Diagnostic;
