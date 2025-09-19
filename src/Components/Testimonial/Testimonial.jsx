import React, { useEffect, useState } from "react";
import "./Testimonial.css"; 
// import pic2 from "../../assets/rename.png";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const comments = [
    {
      text: "I had to undergo surgery at Birat Eye Hospital, and the entire experience was outstanding. The medical team was skilled and made sure I was well-informed and comfortable before, during, and after the procedure. I'm grateful for this",
      author: "Amit Rai",
    },
    {
      text: "Birat Eye Hospital truly cares for its patients. the nurses were kind and supportive and the doctors took the time to explain everything to me. I felt completely at ease during my stay. I highly recommend their services.",
      author: "Sita Tamang",
    },
    {
      text: "From the moment I walked in for my regular check-up, I was impressed by the professionalism and care at Birat Eye Hospital. The staff was friendly and the facilities were clean and modern. I feel confident in their care and will continue coming here for my health needs. ",
      author: "Neha Sharma",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, [comments.length]);

  return (
    <div className="testimonial-section">
      <h1 className="newheading">Our Patients & Their Stories</h1>
      <div className="content">
        <div className="slider">
          {comments.map((comment, index) => (
            <div
              key={index}
              className={`comment ${index === currentIndex ? "active" : ""}`}
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <p>"{comment.text}"</p>
              <h4>- {comment.author}</h4>
            </div>
          ))}
        </div>
        <div className="image-container">
          <img src={""} alt="Patient Care" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
