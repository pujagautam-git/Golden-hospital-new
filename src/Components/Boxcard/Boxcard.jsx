import React from "react";
 import "./Boxcard.css"; 
 
 const Boxcard = ({ title, departments }) => { 
  return (
     <section className="box-section">
       <div className="box-header"> 
        <h1 className="box-title">
          {title}</h1> </div> 
          <div className="box-grid">
             {departments.map((dept, index) => (
               <div className="box-card" key={index}>
                 <dept.icon className="box-icon" />
                  <h2 className="box-card-title">{dept.name}</h2> 
                  <ul className="box-card-list"> 
                    {dept.features.map((feature, idx) => (
                       <li key={idx}>{feature}</li> ))} </ul> 
                       {/* <p className="box-card-link"><a href={dept.link}>Learn More</a></p> */}
                        </div> 
                        ))}
                         </div> 
                         </section>
                          ); 
                        }; 
                        export default Boxcard;