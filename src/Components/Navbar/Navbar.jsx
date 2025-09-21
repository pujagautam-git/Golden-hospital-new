import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/Home/logopic.png";

import "./Navbar.css";
// import logo from "../../assets/Home/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [showServices, setShowServices] = useState(false);

  const [showServices, setShowServices] = useState(false);
  const [showDepartment, setShowDepartment] = useState(false);

  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="top-row">
          {/* Left: Logo */}
          <div className="nav-left">
            <Link to="/">
              <img src={logo} alt="Logo" className="nav-logo" />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className={`nav-center ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/" className="nav-button"  onClick={() => setIsMenuOpen(false)}>HOME</Link>
              </li>
       
               {/* <li>
                <Link to="/service" className="nav-button"  onClick={() => setIsMenuOpen(false)}>
                  OUR SERVICES </Link>
                  </li> */}

                   {/* OUR SERVICES Dropdown */}
              <li
                className="dropdown"
               onClick={() => setShowServices(!showServices)} // click toggle for mobile
  onMouseEnter={() => window.innerWidth > 768 && setShowServices(true)} // hover only on desktop
  onMouseLeave={() => window.innerWidth > 768 && setShowServices(false)}
  >
                <Link to="/services" className="nav-button">
                  OUR SERVICES <FaChevronDown className="chevron" />
                </Link>
                {showServices && (
                  <ul className="dropdown-menu services-menu">
                    <li><Link to="/outpatient">OutPatient Services</Link></li>
                    <li><Link to="/inpatient">InPatient Services</Link></li>
                    <li><Link to="/emergency">Emergency Services</Link></li>
                    <li><Link to="/pharmacy">Pharmacy Services</Link></li>
                    <li><Link to="/Laboratory">Laboratory Services</Link></li>
                    {/* <li><Link to="/diagnostic">Diagnostic Services</Link></li> */}
                    <li><Link to="/healthcamp">Specialized Health Camps</Link></li>
                    <li><Link to="/familyplanning">Family Planning Services</Link></li>
                    {/* <li><Link to="/safemother">Safe Motherhood Services</Link></li> */}
                  </ul>
                )}
              </li>
            
            {/* <li>
                <Link to="/department" className="nav-button" onClick={() => setIsMenuOpen(false)}>DEPARTMENT</Link>
              </li> */}

              {/* DEPARTMENT Dropdown */}
              <li
                className="dropdown"
               onClick={() => setShowDepartment(!showDepartment)}
  onMouseEnter={() => window.innerWidth > 768 && setShowDepartment(true)}
  onMouseLeave={() => window.innerWidth > 768 && setShowDepartment(false)}
              >
                <Link to="/department"className="nav-button">
                  DEPARTMENT <FaChevronDown className="chevron" />
                </Link>
                {showDepartment && (
                  <ul className="dropdown-menu">
                    <li><Link to="/surgical">Surgical Department</Link></li>
                    <li><Link to="/medical">Medical Department </Link></li>
                  <li><Link to="/diagnostic">Diagnostic Department</Link></li>
                  </ul>
                )}
              </li>

             <li>
                <Link to="/doctors" className="nav-button"  onClick={() => setIsMenuOpen(false)}>DOCTORS</Link>
              </li>

              {/* OUR SERVICES with dropdown */}
             
              <li>
                <Link to="/about" className="nav-button" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
              </li>
              
              <li>
                <Link to="/contact" className="nav-button" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
              </li>
              {/* Mobile-only CALL US button */}
              {/* <li className="mobile-call">
                <a href="tel:+61424652500">
                  <button className="nav-btn callus" >
                    CALL US: 042 465 2500
                  </button>
                </a>
              </li> */}

              <li className="mobile-whatsapp">
  <a
    href="https://wa.me/9852070381"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="nav-btn whatsapp-btn">
      <FaWhatsapp className="whatsapp-icon" /> WhatsApp
    </button>
  </a>
</li>
            </ul>
          </div>

          {/* Right: Call button + Hamburger */}
          <div className="nav-right">
             {/* <div className="contact-actions">
            <a href="tel:+61424652500" className="desktop-call">
              <button className="nav-btn callus">CALL US: 042 465 2500</button>
            </a> */}
            
               <a
      href="https://wa.me/9852070381"
      target="_blank"
      rel="noopener noreferrer"
      className="desktop-whatsapp"
    >
      <button className="nav-btn whatsapp-btn">
        <FaWhatsapp className="whatsapp-icon" /> 
      </button>
    </a>
  </div>
            <button className="hamburger" onClick={toggleMenu}>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default Navbar;
