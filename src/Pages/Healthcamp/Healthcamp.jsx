import React from "react";
import "./Healthcamp.css";
import campImg from "../../assets/service/camp.jpeg";
import camp1 from "../../assets/health/spec1.jpg";
import camp2 from "../../assets/health/spec5.jpg";
import camp3 from "../../assets/health/spec3.jpg";
import camp4 from "../../assets/health/spec4.jpg";
import camp5 from "../../assets/health/spec2.jpg";
import camp6 from "../../assets/health/spec6.jpg";

const HealthCamp = () => {
  return (
    <div className="healthcamp-page">
      
      {/* Overview Section */}
      <section className="healthcamp-overview">
        <div className="overview-left">
          <h2>OVERVIEW</h2>
          <p>
            Golden Hospital regularly organizes specialized health camps to make
            quality healthcare accessible to everyone. These camps are designed
            to provide early diagnosis, health awareness, and free consultations
            from experienced doctors. We aim to serve the community by
            addressing various health needs, from preventive check-ups to
            specialized screenings.
          </p>
        </div>

        <div className="overview-right">
          <img src={campImg} alt="Health Camp" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="healthcamp-gallery">
        <h2>Health Camp Highlights</h2>
        <div className="gallery-grid">
          <img src={camp1} alt="Camp 1" />
          <img src={camp2} alt="Camp 2" />
          <img src={camp3} alt="Camp 3" />
          <img src={camp4} alt="Camp 4" />
          <img src={camp5} alt="Camp 5"/>
           <img src={camp6} alt="Camp 6" />
        </div>
      </section>

    </div>
  );
};

export default HealthCamp;
