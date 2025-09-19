
import React, {useState} from 'react';
import './Home.css';
import Appointbook from '../../Components/Appointbook/Appointbook';
// import TestimonialSection from '../../Components/Testimonial/Testimonial';
import Views from '../../Components/Views/Views';
import { useNavigate } from 'react-router-dom';
// import HomeProcessSection from '../../Components/Workprocess/Workprocess';
import FacebookPage from '../../Components/FacebookPage/FacebookPage';
import PatientStats from "../../Components/PatientStats/PatientStats"
import AnimationSection from '../../Components/Animation/Animation';
// import HospitalTiming from '../../Components/HospitalTiming/HospitalTiming';
import { Link } from "react-router-dom";
import Data from '../../Components/Data/Data';
import Team from '../../Components/Team/Team';
import Testimonialslider from '../../Components/Testimonialslider/Testimonialslider';
import Reversible from '../../Components/Reversible/Reversible';
import { FaBed, FaUserMd, FaUserNurse, FaUsers, FaCheckCircle } from "react-icons/fa"
import DepartmentCarousel from '../../Components/DepartmentCarousel/DepartmentCarousel';
const Home = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
    const trendingDiseases = [
        "Diabetes",
        "Hypertension",
        "Asthma", 
        "Heart Disease",
        "Arthritis",
        "Depression",
        "Obesity",
        "Allergies",
        "Cancer",
        "Flu and Cold",
        "Eye Infections",
        "Skin Conditions",
        "Back Pain",
        "Thyroid Disorders",
        "Gastrointestinal Issues",
        "Migraine",
        "Osteoporosis",
        "Chronic Kidney Disease",
      ];

      const datas = [
        { label: "Total Beds", count: "+50", icon: <FaBed className="ic" /> },
        { label: "Total Doctors", count: "+7", icon: <FaUserMd className="ic" /> },
        { label: "Total Nurses", count: "+15", icon: <FaUserNurse className="ic" /> },
        { label: "Total Staffs", count: "+130", icon: <FaUsers className="ic" /> },
         
      ];

        const pageRoutes = {
    services: '/services',
    doctors: '/doctors',
    contactus: '/contact',
    aboutus:'/about',
    gallery: '/gallery',
  };
  const handleSearch = () => {
    const lowerQuery = query.trim().toLowerCase();

    if (lowerQuery in pageRoutes) {
      navigate(pageRoutes[lowerQuery]);
    } else {
      alert('sorry, we could not find the page you are looking for');
      // Or navigate to a 404 page: navigate('/not-found');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
    return (
    <>
      <AnimationSection/>
       
<Team/>
 

<div className="trending-topics-container">
      <h1 className="trending-heading">Trending Topics</h1>
      <div className="buttons-container">
        {trendingDiseases.map((disease, index) => (
          <button key={index} className="disease-button">
            {disease}
          </button>
        ))}
      </div>
    </div>
  
       
           <PatientStats/>
           <Data/>
           <Testimonialslider/>
            <Views/>
           
             <FacebookPage/>
            
            
           <DepartmentCarousel/>
         <Appointbook/>
            <Reversible/>
 
 
           

        </>
       
    );
};

export default Home;