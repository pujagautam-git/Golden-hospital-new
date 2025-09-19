import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import family from "../../assets/service/famo.jpeg";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./Familyplanning.css";

import { FaBaby, FaHeartbeat, FaUserShield, FaUsers, FaUserMd } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlinePregnantWoman } from "react-icons/md";
import { GiFamilyHouse, GiHealthPotion } from "react-icons/gi";

// Benefits Data
const fpBenefitsData = [
  {
    icon: <FaBaby size={48} />,
    title: "Healthy Spacing of Pregnancies",
  },
  {
    icon: <MdOutlinePregnantWoman size={48} />,
    title: "Reduced Risk of Maternal & Infant Mortality",
  },
  {
    icon: <FaHeartbeat size={48} />,
    title: "Improved Overall Family Health",
  },
  {
    icon: <FaUsers size={48} />,
    title: "Better Quality of Life for Families",
  },
  {
    icon: <FaUserShield size={48} />,
    title: "Empowerment Through Reproductive Choices",
  },
  {
    icon: <MdHealthAndSafety size={48} />,
    title: "Confidential & Safe Counseling Services",
  },
];

// FAQ Data
const fpFaqData = [
  {
    question: "What Family Planning Methods Are Offered?",
    answer:
      "We provide counseling and services for contraceptives including pills, injections, implants, IUDs, condoms, and permanent methods.",
  },
  {
    question: "Is Family Planning Safe?",
    answer:
      "Yes. All our methods are medically approved, safe, and administered by trained healthcare professionals.",
  },
  {
    question: "Do I Need My Partner’s Consent?",
    answer:
      "Family planning is a personal choice, but we encourage couples to make informed decisions together for mutual understanding and support.",
  },
  {
    question: "Can I Switch My Method Later?",
    answer:
      "Absolutely. Our specialists will guide you if you wish to change or stop your current method at any time.",
  },
];

// Checklist
const checklistData = [
  "Valid ID or Hospital Card",
  "Any relevant medical history",
  "Current medications list (if any)",
  "Partner (optional, but encouraged for counseling)",
];

const FamilyPlanning = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
          {/* Overview Section */}
      <section className="family-section">
        <div className="family-container">
          <div className="family-text">
            <h2>OVERVIEW</h2>
            <p>
              At Golden Hospital, our Family Planning services empower individuals
              and couples to make informed decisions about their reproductive health.
              We offer safe, confidential, and comprehensive counseling along with a
              full range of modern contraceptive methods. Our team of experts ensures
              that every family planning journey is guided with compassion, respect,
              and medical expertise.
            </p>
          </div>
          <div className="family-image">
            <img src={family} alt="Family Planning Service" />
          </div>
        </div>
      </section>

      {/* Benefits Slider */}
      <section className="family-benefits">
        <h2 className="family-benefits-title">Benefits of Family Planning</h2>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="family-benefits-swiper"
        >
          {fpBenefitsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="family-benefit-card">
                <div className="family-benefit-icon">{item.icon}</div>
                <div className="family-benefit-title">{item.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Key Features (FAQ Style) */}
      <section className="family-features">
        <div className="family-features-left">
          <h4 className="family-subtitle">FAMILY PLANNING SERVICES</h4>
          <h2 className="family-title">
            Key <span>Features</span>
          </h2>
        </div>
        <div className="family-features-right">
          {fpFaqData.map((item, index) => (
            <div
              key={index}
              className={`family-faq-item ${
                openIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="family-faq-question">
                <span>{item.question}</span>
                <span className="family-faq-icon">
                  {openIndex === index ? "−" : "›"}
                </span>
              </div>
              {openIndex === index && (
                <div className="family-faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Checklist Section */}
      <section className="family-checklist">
        <div className="family-checklist-container">
          <h2 className="family-checklist-title">
            What to Bring for Family Planning Visit
          </h2>
          <p className="family-checklist-subtext">
            To ensure smooth counseling and safe care, kindly bring the following
            documents when you visit Golden Hospital for family planning services.
          </p>
          <div className="family-checklist-list">
            {checklistData.map((item, index) => (
              <div className="family-checklist-item" key={index}>
                <GiHealthPotion className="family-checklist-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="family-related">
        <div className="family-related-container">
          <h1 className="family-related-header">LOOKING FOR SURGICAL DEPARTMENT?</h1>
          <p className="family-related-description">
           Golden Hospital’s Surgical Department provides advanced surgical care
      with modern facilities, expert surgeons, and dedicated support staff.
      We ensure safe procedures, quick recovery, and compassionate patient care
      for a wide range of surgical needs.</p>
          <Link to="/maternity" className="family-related-btn">
            Surgical Department
          </Link>
        </div>
      </section>
    </>
  );
};

export default FamilyPlanning;
