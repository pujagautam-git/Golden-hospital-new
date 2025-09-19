import { useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Services from './Pages/Services/Services';
import Doctors from "./Pages/Doctor/Doctor";
import About from './Pages/Aboutus/About';
import Contact from './Pages/Contactus/Contact';
import Inpatient from './Pages/Inpatient/Inpatient';
import Outpatient from './Pages/Outpatient/Outpatient';
import Laboratory from './Pages/Laboratory/Laboratory';
import Department from './Pages/Department/Department';
import Emergency from './Pages/Emergency/Emergency';
import Surgical from './Pages/Surgical/Surgical';
import MedicalDepartment from './Pages/Medical/Medical';
import Pharmacy from "./Pages/Pharmacy/Pharmacy";
import HealthCamp from './Pages/Healthcamp/Healthcamp';
import Diagnostic from './Pages/Daignostic/Daignostic';
import FamilyPlanning from './Pages/Familyplanning/Familyplanning';
import './App.css'
const App = () => {

  return (
   <BrowserRouter>
       <div className="app-container">
         <Navbar /> 
        <main className="main-content">
          {/* <AdvertisementBanner/> */}
          <Routes>
            <Route path="/" element={<Home />} /> 
             <Route path="/home" element={<Home />} />
             <Route path="/services" element={<Services />} />
             <Route path="/department" element={<Department />} />
             <Route path="/doctors" element={<Doctors />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
            <Route path="/Inpatient" element={<Inpatient />} />
            <Route path="/Outpatient" element={<Outpatient />} />
            <Route path="/Emergency" element={<Emergency />} />
            <Route path="/Surgical" element={<Surgical />} />
          <Route path="/Medical" element={<MedicalDepartment />} />
         <Route path="/Laboratory" element={<Laboratory/>} />
         <Route path="/pharmacy" element={<Pharmacy/>} />
         <Route path="/Diagnostic" element={<Diagnostic/>} />
         <Route path="/healthcamp" element={<HealthCamp/>} />
         <Route path="/familyplanning" element={<FamilyPlanning/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
