import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import opd1 from "../../assets/opd/opd1.png";
import 'swiper/css';
import 'swiper/css/navigation';
import './Outpatient.css';
import { FaFileMedical, FaIdCard, FaShieldAlt } from 'react-icons/fa';
import { FaClipboardList, FaHandHoldingMedical, FaHandsHelping } from 'react-icons/fa';
import { MdOutlineHealthAndSafety } from 'react-icons/md';


const outbenefitsData = [
  {
    icon: <FaClipboardList size={48} />,
    title: 'Reduced health risks through early detection',
  },
  {
    icon: <FaHandHoldingMedical size={48} />,
    title: 'Efficient use of medical resources and staff time',
  },
  {
    icon: <MdOutlineHealthAndSafety size={48} />,
    title: 'Minimal disruption to daily life and routines',
  },
  {
    icon: <FaHandsHelping size={48} />,
    title: 'Faster access to specialist consultations and daignostic tests',
  },
  {
    icon: <FaClipboardList size={48} />,
    title: 'Suitable for routine check-ups and follow-up visits',
  },
  {
    icon: <FaHandHoldingMedical size={48} />,
    title: 'Convenient same-day care without overnight stay',
  },
];

const outfaqData = [
  { question: "Experienced Specialists", answer: "Consult with renowned doctors across various specialties." },
  { question: "Affordable Care", answer: "Quality services accessible at reasonable prices." },
  { question: "Efficient Appointment System", answer: "Minimize wait times with easy appointment booking." },
  { question: "Modern Diagnostic Facilities", answer: "On-site lab tests,X-rays, ultrasound, and more." },
];

const Outpatient = () => {
      const [openIndex, setOpenIndex] = useState(null);
      const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <>
    <section className="over-patient-section">
         <div className="over-patient-container">
           <div className="over-patient-text">
             <h2>OVERVIEW</h2>
             <p>
              At Golden Hospital, our Outpatient Department (OPD) is designed to provide patients with easy access to high-quality healthcare without the need for hospital admission. We offer consultations with experienced doctors across a wide range of specialties, supported by modern diagnostic facilities and compassionate care. Our OPD services ensure timely check-ups,
               accurate diagnosis, and effective treatment plans, making healthcare convenient, efficient, and patient-focused.
             </p>
             {/* <p>
               Whether it’s a single room or an entire building, we approach each
               project with the same level of precision and commitment. We use
               trusted materials, skilled techniques, and never cut corners. With
               honest pricing and friendly service, we make sure you feel confident
               from start to finish.
             </p> */}
           </div>
           <div className="over-patient-image">
             <img src={opd1} alt="Painting service" />
           </div>
         </div>
       </section>
   
       <div className="benefits-container">
         <h2 className="benefits-title">Benefits</h2>
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
           className="benefits-swiper"
         >
           {outbenefitsData.map((item, index) => (
             <SwiperSlide key={index}>
               <div className="benefit-card">
                 <div className="benefit-icon">{item.icon}</div>
                 <div className="benefit-title">{item.title}</div>
               </div>
             </SwiperSlide>
           ))}
         </Swiper>
       </div>
     <section className="outpatient-section">
         {/* Left Side */}
         <div className="outpatient-left">
           <h4 className="outpatient-subtitle">OUTPATIENT SERVICES (OPD)</h4>
           <h2 className="outpatient-title">
             Key <span>Features</span>
           </h2>
         </div>
   
         {/* Right Side */}
         <div className="outpatient-right">
           {outfaqData.map((item, index) => (
             <div
               key={index}
               className={`out-faq-item ${openIndex === index ? "active" : ""}`}
               onClick={() => toggleFAQ(index)}
             >
               <div className="out-faq-question">
                 <span>{item.question}</span>
                 <span className="out-faq-icon">{openIndex === index ? "−" : "›"}</span>
               </div>
               {openIndex === index && <div className="out-faq-answer">{item.answer}</div>}
             </div>
           ))}
         </div>
       </section>
        <section className="opd-section">
      <div className="opd-container">
        <h2 className="opd-title">What to Bring for Your OPD Visit</h2>
        <p className="opd-subtext">
          To make your consultation smooth and hassle-free, kindly bring the following
          documents during your visit to Golden Hospital.
        </p>
        <div className="opd-list">
          <div className="opd-item">
            <FaFileMedical className="opd-icon" />
            <span>Previous medical records or prescriptions (if applicable)</span>
          </div>
          <div className="opd-item">
            <FaIdCard className="opd-icon" />
            <span>Government-issued ID</span>
          </div>
          <div className="opd-item">
            <FaShieldAlt className="opd-icon" />
            <span>Health insurance documents (if available)</span>
          </div>
        </div>
      </div>
    </section>
    <section className="right-section">
            <div className="right-container">
                <h1 className="right-header">NEED IPD DETAILS?</h1>
                <p className="right-description"> Golden Hospital’s Inpatient Department (IPD) offers advanced medical care with modern facilities, comfortable rooms, and round-the-clock monitoring. Our dedicated team ensures personalized
                     treatment and compassionate support during your stay.</p>
                    < Link to="/inpatient" className='right-btn'>IPD Services </Link>
                     </div>
        </section>
       </>
  )
}

export default Outpatient