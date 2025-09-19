 import React from "react";
import "./Laboratory.css";
import labo from "../../assets/laboratory/lab2.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import bio from "../../assets/laboratory/biochemi.png";
import micro from "../../assets/laboratory/microbio.png";
import immuno from "../../assets/laboratory/immunochemi.png";
import histo from "../../assets/laboratory/histo.png";
import sero from "../../assets/laboratory/serolo.png";
import haema from "../../assets/laboratory/haemoto.png";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaMicroscope, FaUserCheck, FaVials, FaClipboardList } from "react-icons/fa";

const labbenefits = [
  {
    icon: <FaMicroscope />,
    text: "Advanced laboratory equipment ensuring accurate test results",
  },
  {
    icon: <FaUserCheck />,
    text: "Qualified lab technicians providing precise and timely reporting",
  },
  {
    icon: <FaVials />,
    text: "Wide range of diagnostic tests for comprehensive health analysis",
  },
  {
    icon: <FaClipboardList />,
    text: "Supports doctors in creating effective treatment plans",
  },
   {
    icon: <FaUserCheck />,
    text: "Qualified lab technicians providing precise and timely reporting",
  },
   {
    icon: <FaUserCheck />,
    text: "Qualified lab technicians providing precise and timely reporting",
  },

];

const labServices = [
  { title: "BIOCHEMISTRY", image: bio },
  { title: "MICROBIOLOGY", image: micro },
  { title: "IMMUNOCHEMISTRY", image: immuno },
  { title: "SEROLOGY", image: sero },
  { title: "HAEMATOLOGY", image: haema},
  { title: "HISTO-CYTO PATHOLOGY", image: histo },
];

const Laboratory = () => {
  return (
    <>
     <section className="lab-over-section">
         <div className="lab-over-container">
           <div className="lab-over-text">
             <h2>OVERVIEW</h2>
             <p>
             At Golden Hospital, our state-of-the-art laboratory plays a vital role in delivering accurate and timely diagnostic services. Equipped with advanced 
             technology and operated by highly skilled laboratory professionals, we provide a comprehensive range of tests including biochemistry, microbiology, immunochemistry, serology, haematology, and histo-cyto pathology. Our commitment to precision ensures that every test result supports our doctors in diagnosing conditions effectively and planning personalized treatments. We prioritize quality, efficiency, and patient safety, making our laboratory an essential part of comprehensive healthcare at Golden Hospital.
             </p>
             
           </div>
           <div className="lab-over-image">
             <img src={labo} alt="Painting service" />
           </div>
         </div>
       </section>
    <section className="lab-benefits-section">
      <h2 className="lab-benefits-title">Benefits</h2>
         <Swiper
         modules={[Navigation]}
           slidesPerView={1}
           spaceBetween={20}
           navigation={{ clickable:true}}
           breakpoints={{
             640: { slidesPerView: 1 },
             768: { slidesPerView: 2 },
             1024: { slidesPerView: 3 },
             1280: { slidesPerView: 4 },
           }}
           // modules={[Navigation]}
           className="lab-benefits-swiper"
         >
              {labbenefits.map((benefit, index) => (
                <SwiperSlide key={index}>
          <div className="lab-benefit-card">
            <div className="lab-icon">{benefit.icon}</div>
            <div className="lab-benefit-title">{benefit.text}</div>
          </div>
           </SwiperSlide>
        ))}
         </Swiper>
    </section>
     <section className="lab-services-section">
      <p className="lab-services-intro">
        The laboratory services are available in the following areas:
      </p>
      <div className="lab-services-grid">
        {labServices.map((service, index) => (
          <div className="lab-service-card" key={index}>
            <img src={service.image} alt={service.title} className="lab-service-img" />
            <div className="lab-service-overlay">
              <p className="lab-service-subtitle">LABORATORY SERVICES</p>
              <h3 className="lab-service-title">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Laboratory;
