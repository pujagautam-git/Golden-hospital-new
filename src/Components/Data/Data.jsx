import React from "react";
import "./Data.css";

const Data = () => {
    const serviceData = [
      {
    title: "Routine OPD",
    details: [
      { label: "Sunday - Friday", value: "8:00 AM - 5:00 PM" },
    //   { label: "General OPD", value: "Rs. 160" },
    //  { label: "Fast Track OPD", value: "Rs. 400" },
    //  { label: "Retina & Uvea ", value: "Rs. 640" },
    //  { label: "Oculoplasty & Glaucoma", value: "Rs. 640" },
    ],
  },
  {
    title: "Emergency Services",
    details: [
      { label: "Sunday - Saturday", value: "24 Hours" },
      // { label: "Registration Fee", value: "Rs. 240" },
    
    ],
  },
  // {
  //   title: "Extended Hospital Service",
  //   details: [
  //     { label: "Days", value: "Sunday - Friday" },
  //     { label: "Registration Fee", value: "-" },
  //     { label: "Note", value: "You can choose doctors in this service. Give the code." },
  //   ],
  // },
  {
    title: "Laboratory Services",
    details: [
      { label: "Days", value: "Sunday - Friday" },
      // { label: "Registration Fee", value: "Rs. 160" },
     
    ],
  },
  
      ];
      const orderedTitles = ["Routine OPD", "Emergency Services", "Laboratory Services"];
  
   // Sort services based on the defined order
  const orderedServiceData = orderedTitles.map(title =>
    serviceData.find((s) => s.title === title)
  );
  

    return (
  <div className="data-container">
    <div className="all-tables">
      {/* Routine OPD */}
      <table className="service-table">
        <thead>
          <tr>
            <th colSpan="2">{orderedServiceData[0].title}</th>
          </tr>
        </thead>
        <tbody>
          {orderedServiceData[0].details.map((d, i) => (
            <tr key={i}>
              <td className="cell">{d.label}</td>
              <td className="cell">{d.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Emergency */}
      <table className="service-table">
        <thead>
          <tr>
            <th colSpan="2">{orderedServiceData[1].title}</th>
          </tr>
        </thead>
        <tbody>
          {orderedServiceData[1].details.map((d, i) => (
            <tr key={i}>
              <td className="cell">{d.label}</td>
              <td className="cell">{d.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Laboratory */}
      <table className="service-table">
        <thead>
          <tr>
            <th colSpan="2">{orderedServiceData[2].title}</th>
          </tr>
        </thead>
        <tbody>
          {orderedServiceData[2].details.map((d, i) => (
            <tr key={i}>
              <td className="cell">{d.label}</td>
              <td className="cell">{d.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Bottom Section */}
    <div className="bottom-section">
      <h3>Call Us: 021-474102 (Emergency)</h3>
    </div>
  </div>

  );
};
export default Data;


