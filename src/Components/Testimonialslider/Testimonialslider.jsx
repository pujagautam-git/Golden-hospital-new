import React, {useEffect, useRef} from "react";
import "./Testimonialslider.css";
import { FaMale, FaFemale } from "react-icons/fa";
import Slider from "react-slick";

const testimonialslider = [
  {
    id: 1,
    name: "Ram Basnet",
    role: "CEO of Digital Marketing",
    // image: "https://via.placeholder.com/80x80.png?text=Emily",
    text: "Highly skilled doctors and compassionate healthcare with a patient-centered approach. I felt truly cared for during my visit.",
  },
  {
    id: 2,
    name: "Sujan Niraula",
    role: "Student",
    // image: "https://via.placeholder.com/80x80.png?text=Mary",
    text: "Great experience! Caring doctors, modern facilities, and a welcoming staff. I received excellent treatment and guidance.",
  },
  {
    id: 3,
    name: "Sandya Sharma ",
    role: "Entrepreneur",
    // image: "https://via.placeholder.com/80x80.png?text=John",
    text: "Golden Hospital provides world-class service. The doctors were professional and compassionate. Highly recommend!",
  },
  {
    id: 4,
    name: "Anzela Shrestha",
    role: "Teacher",
    // image: "https://via.placeholder.com/80x80.png?text=Sophia",
    text: "From check-in to discharge, everything was smooth and professional. Excellent care!",
  },
  {
    id: 5,
    name: "Saroj Mandal",
    role: "Software Engineer",
    // image: "https://via.placeholder.com/80x80.png?text=Michael",
    text: "State-of-the-art facilities and caring staff made my treatment experience very comfortable.",
  },
  {
    id: 6,
    name: "Ajay Shah",
    role: "Artist",
    // image: "https://via.placeholder.com/80x80.png?text=Ava",
    text: "Golden Hospital truly puts patients first. Doctors listened and explained everything clearly.",
  },
];

const TestimonialSlider = () => {
    const sliderRef = useRef(null);

     const getSlidesToShow = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode:true,centerPadding:"0px", }, }
    ]
  };
  
 useEffect(() => {
    // Trigger resize so Slick recalculates widths correctly
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }, []);
   const isFemale = (name) => {
    const femaleNames = ["Sandya", "Anzela"]; // add more if needed
    return femaleNames.some((n) => name.toLowerCase().includes(n.toLowerCase()));
  };


  return (
     <div className="slider-section">
      <div className="slider-container">
        <p className="slider-subtitle">TESTIMONIAL</p>
        <h2 className="slider-title">What Patients Say About Us.</h2>
        <Slider  ref={sliderRef}  {...settings}>
          {testimonialslider.map((t, id) => (
            <div className="slider-card" key={id}>
              <div className="slider-profile">
                 <div className="gender-icon">
                  {isFemale(t.name) ? (
                    <FaFemale size={50} color="#e91e63" />
                  ) : (
                    <FaMale size={50} color="#2196f3" />
                  )}
                </div>
                {/* <img src={t.image} alt={t.name} /> */}
                <div>
                  <h4 className="slider-head">{t.name}</h4>
                  <p className="slider-role">{t.role}</p>
                </div>
              </div>
              <p className="slider-text">{t.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;