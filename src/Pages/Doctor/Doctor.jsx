import React, { useState } from 'react';
import './Doctor.css';
import DoctorDetails from "../../Components/DoctorDetails/DoctorDetails";
import dep from "../../assets/doctor/departments.png";
import loc from "../../assets/doctor/location.png";
// import ach from  "../../assets/doctor/achivement.png";
import Shyam from "../../assets/doctor/shyam.png";
import Ramesh from "../../assets/doctor/ramesh.png";
import manish from "../../assets/doctor/manish.png";
import ajaydhakal from "../../assets/doctor/ajayd.png";
import bibek from "../../assets/doctor/Bivek.png";
import saroj from "../../assets/doctor/saroj.png";
import Sanjiv from "../../assets/doctor/sanjib.png";
import Ashish from "../../assets/doctor/ashish.png";
import Ajaymahato from "../../assets/doctor/ajay.png";
import Shrijana from "../../assets/doctor/shrijana.png";
import Santosh from "../../assets/doctor/santosh.png";
import Prakriti from "../../assets/doctor/prakriti.png";
// import icon from "../../assets/human_icon.webp"


const Doctors = () => {
    const cartItems = [
         { 
            id: 1, 
            image: Shyam, 
            heading1: "Dr. Shyam Kumar Rouniyar", 
            heading2: "Senior Consultant Physician ", 
            department:"Physician Department ", 
            heading3: "MBBS, MD BPKIHS Dharan", 
            heading4: "NMC No. 4562", 
            // Experience:"Long Working Experience in Abroad",
            location: "Biratnagar, Nepal",
            shiftTimings: {
                Sunday: "8:00 am - 5:00 pm",
                Monday: "8:00 am - 5:00 pm",
                Tuesday: "8:00 am - 5:00 pm",
                Wednesday: "8:00 am - 5:00 pm",
                Thursday: "8:00 am - 5:00 pm",
                Friday: "8:00 am - 5:00 pm",
                Saturday: "Closed",
            }
        },
        { 
            id: 2, 
            image: Ramesh, 
            heading1: "Dr. Ramesh Kumar Chaurasia", 
            heading2: "Consultant Physician & Nephrologist", 
            department:"Nephrologist Department ", 
            heading3: "MBBS, MD Medicine(BPKIHS), DM Nephrology(NAMS), Ex.Assistant Professor (BPKIHS), Dharan", 
            heading4: "NMC No. 4830", 
            // Experience:"8+ years",
            location: "Biratnagar, Nepal",
            shiftTimings: {
                Sunday: "8:00 am - 5:00 pm",
                Monday: "8:00 am - 5:00 pm",
                Tuesday: "8:00 am - 5:00 pm",
                Wednesday: "8:00 am - 5:00 pm",
                Thursday: "8:00 am - 5:00 pm",
                Friday: "8:00 am - 5:00 pm",
                Saturday: "Closed",
            }
        },
        { 
            id: 3, 
            image: Sanjiv, 
            heading1: "Dr. Sanjiv Kumar Thakur", 
            heading2: "Consultant ENT Surgeon", 
            department: "ENT Department", 
            heading3: "MBBS, MS (ENT)", 
            heading4: "NMC No. 3102",
            // Experience:"10+ years",
            location: "Biratnagar, Nepal",
            shiftTimings: {
             Sunday: "8:00 am - 5:00 pm",
                Monday: "8:00 am - 5:00 pm",
                Tuesday: "8:00 am - 5:00 pm",
                Wednesday: "8:00 am - 5:00 pm",
                Thursday: "8:00 am - 5:00 pm",
                Friday: "8:00 am - 5:00 pm",
                Saturday: "Closed",
            }
        },
        { 
            id: 4, 
            image:bibek, 
            heading1: "Dr. Bibek Vaidya", 
            heading2: "Consultant Neuro Surgeon", 
            department: "Neurology Department", 
            heading3: "MBBS,MS, M.Ch (Neuro Surgery)", 
            heading4: "NMC No. 5373", 
            // Experience: "9+ years",
            location: "Biratnagar, Nepal",
            shiftTimings: {
                Sunday: "8:00 am - 5:00 pm",
                Monday: "8:00 am - 5:00 pm",
                Tuesday: "8:00 am - 5:00 pm",
                Wednesday: "8:00 am - 5:00 pm",
                Thursday: "8:00 am - 5:00 pm",
                Friday: "8:00 am - 5:00 pm",
                Saturday: "Closed",
            }
        },
        { 
            id: 5, 
            image:Ashish, 
            heading1: "Dr.Ashish Yadav ", 
            heading2: "Anesthesiology & Critical Care Medicine", 
            department: "Anesthesiology Department", 
            heading3: "MBBS, MD (BPKIHS)", 
            heading4: "NMC No. 8660", 
            // Experience: "3 years",
            location: "Biratnagar, Nepal",
            shiftTimings: {
                Sunday: "8:00 am - 5:00 pm",
                Monday: "8:00 am - 5:00 pm",
                Tuesday: "8:00 am - 5:00 pm",
                Wednesday: "8:00 am - 5:00 pm",
                Thursday: "8:00 am - 5:00 pm",
                Friday: "8:00 am - 5:00 pm",
                Saturday: "Closed",
            }
        },
       
         { 
            id: 6, 
            image: Ajaymahato, 
            heading1: "Dr. Ajay Mahato", 
            heading2: "Consultant Orthopedic Trauma, Arthroscopy & Arthroplasty", 
            heading3: "MBBS, MS (Ortho), AIIMS New Delhi, Fellowship in Arthroscopy & Arthroplasty(AIIMS, New Delhi)", 
             department: "Orthopedic Department", 
            heading4: "NMC No. 10259", 
            // Experience: "2 years",
            location: "Biratnagar, Nepal",
            shiftTimings: {
                Sunday: "8:00 am - 5:00 pm",
                Monday: "8:00 am - 5:00 pm",
                Tuesday: "8:00 am - 5:00 pm",
                Wednesday: "8:00 am - 5:00 pm",
                Thursday: "8:00 am - 5:00 pm",
                Friday: "8:00 am - 5:00 pm",
                Saturday: "Closed",
               
            }
        },
         { 
            id: 7, 
            image:saroj, 
            heading1: "Dr. Saroj Rajbanshi", 
            heading2: "Senior Laparoscopy & GI Surgeon", 
            department: "Laparoscopy Department", 
            heading3: "MBBS,MS(BPKIHS) Dharan", 
            heading4: "NMC No.3757", 
            // Experience: "3 years",
            location: "Biratnagar, Nepal",
            shiftTimings: {
                Sunday: "8:00 am - 5:00 pm",
                Monday: "8:00 am - 5:00 pm",
                Tuesday: "8:00 am - 5:00 pm",
                Wednesday: "8:00 am - 5:00 pm",
                Thursday: "8:00 am - 5:00 pm",
                Friday: "8:00 am - 5:00 pm",
                Saturday: "Closed",
            }
        },
       
         { 
            id: 8, 
            image: manish, 
            heading1: "Dr. Manish Agrawal", 
            heading2: "Consultant Oral & Maxillofacial Surgeon", 
            heading3: "BDS (D.U. Bangladesh), MS (BSMMU, Bangladesh) Gold Medalist", 
             department: "Department of Oral & Maxillofacial Surgery", 
            heading4: "NMC No. 7184", 
            // Experience: "2 years",
            location: "Biratnagar, Nepal",
            shiftTimings: {
                Sunday: "8:00 am - 5:00 pm",
                Monday: "8:00 am - 5:00 pm",
                Tuesday: "8:00 am - 5:00 pm",
                Wednesday: "8:00 am - 5:00 pm",
                Thursday: "8:00 am - 5:00 pm",
                Friday: "8:00 am - 5:00 pm",
                Saturday: "Closed",
               
            }
        },
         { 
            id: 9, 
            image:Prakriti, 
            heading1: "Dr. Prakriti Acharya", 
            heading2: "Consultant OBS & Gynaecologist", 
            department: "Gynaecologist Department", 
            heading3: "MBBS, MS (BPKIHS)", 
            heading4: "NMC No.19586", 
            // Experience: "3 years",
            location: "Biratnagar, Nepal",
            shiftTimings: {
                Sunday: "8:00 am - 5:00 pm",
                Monday: "8:00 am - 5:00 pm",
                Tuesday: "8:00 am - 5:00 pm",
                Wednesday: "8:00 am - 5:00 pm",
                Thursday: "8:00 am - 5:00 pm",
                Friday: "8:00 am - 5:00 pm",
                Saturday: "Closed",
            }
        },
       
         { 
            id: 10, 
            image: Santosh, 
            heading1: "Dr. Santosh Kumar Yadav", 
            heading2: "Consultant Paediatric & Neonetologist", 
            heading3: "MBBS, MD Paediatric (NAMS), Kanti Bal Aspatal, Kathmandu", 
             department: "Neonetologist Department", 
            heading4: "NMC No. 13818", 
            // Experience: "2 years",
            location: "Biratnagar, Nepal",
            shiftTimings: {
                Sunday: "8:00 am - 5:00 pm",
                Monday: "8:00 am - 5:00 pm",
                Tuesday: "8:00 am - 5:00 pm",
                Wednesday: "8:00 am - 5:00 pm",
                Thursday: "8:00 am - 5:00 pm",
                Friday: "8:00 am - 5:00 pm",
                Saturday: "Closed",
               
            }
        },
         { 
            id: 11, 
            image:Shrijana, 
            heading1: "Dr.Shrijana Yadav ", 
            heading2: "Consultant Pathologist", 
            department: "Pathology Department", 
            heading3: "MD (NAMS)", 
            heading4: "NMC No. 15503", 
            // Experience: "3 years",
            location: "Biratnagar, Nepal",
            shiftTimings: {
                Sunday: "8:00 am - 5:00 pm",
                Monday: "8:00 am - 5:00 pm",
                Tuesday: "8:00 am - 5:00 pm",
                Wednesday: "8:00 am - 5:00 pm",
                Thursday: "8:00 am - 5:00 pm",
                Friday: "8:00 am - 5:00 pm",
                Saturday: "Closed",
            }
        },
       
         { 
            id: 12, 
            image: ajaydhakal, 
            heading1: "Dr. Ajay Dhakal", 
            heading2: "Senior Plastic, Burn & Reconstruction Surgeon", 
            heading3: "MBBS, COMS(Chitwan),MS, NGMC,Mch(NAMS)", 
             department: "Plastic and Burn Department", 
            heading4: "NMC No.12786", 
            // Experience: "2 years",
            location: "Biratnagar, Nepal",
            shiftTimings: {
                Sunday: "8:00 am - 5:00 pm",
                Monday: "8:00 am - 5:00 pm",
                Tuesday: "8:00 am - 5:00 pm",
                Wednesday: "8:00 am - 5:00 pm",
                Thursday: "8:00 am - 5:00 pm",
                Friday: "8:00 am - 5:00 pm",
                Saturday: "Closed",
               
            }
        },
    ];
    
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filterDoctors = (department) => {
    setSelectedDepartment(department);
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const filteredCart = selectedDepartment === "All"
    ? cartItems
    : cartItems.filter((item) => item.department === selectedDepartment);

  
// const filteredTeam = selectedDepartment === "All"
//     ? teamItems
//     : teamItems.filter((item) => item.department === selectedDepartment);

  

  if (selectedDoctor) {
    return <DoctorDetails doctor={selectedDoctor} onBack={() => setSelectedDoctor(null)} />;
  }
  return (
    <div>
      <h1 className="doc-team">Our  <span>Doctor's </span>Team</h1>
    
    {/* <h2 className="section-title">Eye Specialists</h2> */}
      <div className="cart-container">
        {filteredCart.map((item) => (
          <div className="cart-row" key={item.id}>
            <div className="cart-headerr">
              <h3>{item.heading1}</h3>
              <h5 className="dividerr"></h5> 
              <h4>{item.department}</h4>
              <button className="more-info-button" onClick={() => handleDoctorClick(item)}>
              View Profile
            </button>
            </div>


              <div className="cart-contents">
    <div className="cart-image">
        <img src={item.image} alt={`Cart  ${item.id}`} />
    </div>
    <div className="cart-infoo">

          
            <p className="area">Area of Focus</p>
              <h5 className="divideerr"></h5> 
             <div className="dep">
              <img src={dep} alt="Department Icon" />
        <h4>{item.heading2}</h4>
          </div>

        {/* <p className="experience">Experience</p>
         <h5 className="divideerr"></h5> 
         <div className="ach">
         <img src={ach} alt="Experience Icon"/>
         <h4>{item.Experience}</h4>
</div> */}
        <p className="location">Location</p>
        <h5 className="divideerr"></h5> 
        <div className="loc">
            <img src={loc} alt="Location Icon" />
            <h4>{item.location}</h4>
            </div>
        </div>
    </div>
</div>
        ))}
        </div>
        
         
    </div>
    
  );
};



export default Doctors;
