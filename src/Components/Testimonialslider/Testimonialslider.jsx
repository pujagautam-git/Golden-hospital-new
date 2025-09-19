import React from "react";
import "./Testimonialslider.css";
import Slider from "react-slick";

const testimonialslider = [
  {
    id: 1,
    name: "Ram Basnet",
    role: "CEO of Digital Marketing",
    image: "https://via.placeholder.com/80x80.png?text=Emily",
    text: "Highly skilled doctors and compassionate healthcare with a patient-centered approach. I felt truly cared for during my visit.",
  },
  {
    id: 2,
    name: "Sujan Niraula",
    role: "Student",
    image: "https://via.placeholder.com/80x80.png?text=Mary",
    text: "Great experience! Caring doctors, modern facilities, and a welcoming staff. I received excellent treatment and guidance.",
  },
  {
    id: 3,
    name: "Sandya Sharma ",
    role: "Entrepreneur",
    image: "https://via.placeholder.com/80x80.png?text=John",
    text: "Golden Hospital provides world-class service. The doctors were professional and compassionate. Highly recommend!",
  },
  {
    id: 4,
    name: "Anzela Shrestha",
    role: "Teacher",
    image: "https://via.placeholder.com/80x80.png?text=Sophia",
    text: "From check-in to discharge, everything was smooth and professional. Excellent care!",
  },
  {
    id: 5,
    name: "Saroj Mandal",
    role: "Software Engineer",
    image: "https://via.placeholder.com/80x80.png?text=Michael",
    text: "State-of-the-art facilities and caring staff made my treatment experience very comfortable.",
  },
  {
    id: 6,
    name: "Ajay Shah",
    role: "Artist",
    image: "https://via.placeholder.com/80x80.png?text=Ava",
    text: "Golden Hospital truly puts patients first. Doctors listened and explained everything clearly.",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const totalSlides = Math.ceil(testimonialslider.length / 3);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % totalSlides);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [totalSlides]);

  // const handleDotClick = (index) => {
  //   setCurrentSlide(index);
  // };

  return (
     <div className="slider-section">
      <div className="slider-container">
        <p className="slider-subtitle">TESTIMONIAL</p>
        <h2 className="slider-title">What Patients Say About Us.</h2>
        <Slider {...settings}>
          {testimonialslider.map((t, index) => (
            <div className="slider-card" key={index}>
              <div className="slider-profile">
                <img src={t.img} alt={t.name} />
                <div>
                  <h4 className="slider-head">{t.name}</h4>
                  <p className="slider-role">{t.title}</p>
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