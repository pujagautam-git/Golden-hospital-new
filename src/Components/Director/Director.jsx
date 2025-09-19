 import './Director.css';
import React from 'react';

// import skr from "../../assets/sk.jpeg"

// import axios from 'axios';

// axios.get(async(req,res) =>{
//   const response = await axios.get('http://localhost:8001/api/director');
// })
const Director = () => {
  return (
    
    
    <div className="direct">
      
      <div className="chairperson">
        <img
          src={""}
          alt="Chairperson"
          className="image"
        />
        <div className="text">    
          <h1>Chair Person</h1>
          <h2>Dr. Balkumar K.C.</h2>
          <p className="opinion">
            “At Birat Eye Hospital, we are committed to providing the highest
            standard of healthcare services to our community. Our mission is to ensure that every patient receives compassionate and personalized care, supported by advanced medical technology and a team of dedicated professionals.
            We strive to create a healing environment that fosters health
            and well-being for all.”
          </p>
        </div>
      </div>
      

      <div className="directors">
        <div className="pic">
          <img
            src={""}
            alt="Director 2"
            className="image"
          />
          <div className="text">
            <h1> Executive Director</h1>
            <h2> Raj Kumar Mandal</h2>
           
            <p className="opinion">
               "We're focused on the hospital's strategic growth and financial health. This includes exploring new opportunities, optimizing resource allocation, and ensuring long-term sustainability to support our mission of providing excellent care."
            </p>
          </div>
        </div>
        
        <div className="pic">
          <img
            src={""}
            alt="managingdr"
            className="image"
          />
          <div className="text">
            <h1>Managing Director</h1>
            <h2>Md. Jeyaur Rehman</h2>
            <p className="opinion">
              "Patient care is our outmost priority. We're constantly striving to enhance the patient experience, empower our dedicated staff, and ensure efficient operations for the benefit of our community."  
            </p>
          </div>
        </div>
        
        <div className="pic">
          <img
            src={""}
            alt="managing Dr"
            className="image"
          />
          <div className="text">
            <h1> Medical Director</h1>
            <h2>Dr. Anadi Khatri</h2>
            <p className="opinion">
              "At our Eye Hospital, our mission has always been to preserve and restore vision with compassion, innovation, and clinical excellence. Every patient we serve is a reminder of the importance of accessible, quality eye care. I am proud of our dedicated team of ophthalmologists, nurses, and staff who work tirelessly to bring light back into people’s lives. 
            </p>
          </div>
        </div>
        <div className="pic">
          <img
            src={""}
            alt="managing Dr"
            className="image"
          />
          <div className="text">
            <h1> Board of Director</h1>
            <h2>Prof Dr. Badri Pd.Badhu</h2>
            <p className="opinion">
              "It is an honor to serve on the Board of such a compassionate and visionary institution. At our Eye Hospital, we believe that restoring sight is more than a medical mission—it is a human commitment to dignity, independence, and hope. The dedication of our medical team and staff has made a life-changing difference for thousands, especially in underserved communities.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Director;