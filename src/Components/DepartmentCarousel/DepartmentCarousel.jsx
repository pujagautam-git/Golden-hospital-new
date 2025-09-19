import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GiStethoscope, GiKidneys, GiBrain } from "react-icons/gi";
import { FaUserNurse } from "react-icons/fa";
import "./DepartmentCarousel.css";

// Department data (you can expand with all your departments)
const departments = [
  {
    name: "GYNECOLOGY",
    icon: <FaUserNurse className="dept-icon" />,
     description: "Gynaecology or gynecology is the area of medicine concerned with conditions affecting the female reproductive system. It is often paired with the field of obstetrics.",
  },
  {
    name: "NEPHROLOGY",
    icon: <GiKidneys className="dept-icon" />,
    description:
      "It comprises both medicine as well as surgical fields. While many of the illnesses need hormonal and other pharmacological management, cancers, fibroids etc.",
  },
  {
    name: "NEUROLOGY",
     icon: <GiBrain className="dept-icon" />,
    description:
      "The branch of medicine concerned with the study and treatment of disorders of the nervous system. It is a complex system that regulates and coordinates body activities.",
  },
  {
    name: "NEUROSURGERY",
   icon: <GiStethoscope className="dept-icon" />,
    description:
      "The branch of medicine concerned with the study and treatment of disorders of the nervous system. It is a complex system that regulates and coordinates body activities.",
  },
  // ➝ Add more department objects here
];

const DepartmentCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500, // spins every 2.5 seconds
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="department-carousel">
      <h2 className="carousel-title">Optimum Caring</h2>
      <Slider {...settings}>
  {departments.map((dept, index) => (
    <div key={index}>
      <div className="dept-card">
        {dept.icon}
        <h3>{dept.name}</h3>
        <p>{dept.description}</p>
      </div>
    </div>
  ))}
</Slider>
    </section>
  );
};

export default DepartmentCarousel;
