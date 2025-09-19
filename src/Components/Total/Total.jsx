 import React, {useEffect, useRef} from 'react'
import "./Total.css";

const totaldata = [
   {
    // label:"142k",
    value: 100000, suffix: "+",
    description: "Happy patients served with care and compassion",
  },
  {
     value: 30, suffix: "+",
    // label:"99%",
    description: "Qualified doctors providing expert medical care",
  },
  {
     value: 150, suffix: "+",
  //  label:"24/7",
    description: "Beds available for patient comfort and recovery",
  }
  
];



const Total = () => {
     const countersRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const options = { threshold: 0.3 };

    // Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = +el.getAttribute("data-target");
          const suffix = el.getAttribute("data-suffix") || "";
          let current = 0;
          const increment = Math.ceil(target / 100);

          const updateCounter = () => {
            current += increment;
            if (current >= target) {
              el.textContent = target.toLocaleString() + suffix;
            } else {
              el.textContent = current.toLocaleString() + suffix;
              requestAnimationFrame(updateCounter);
            }
          };

          updateCounter();
          counterObserver.unobserve(el);
        }
      });
    }, options);

    countersRef.current.forEach((counter) => {
      if (counter) counterObserver.observe(counter);
    });

    // Observer for animations
    const animateObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, options);

    if (sectionRef.current) {
      const boxes = sectionRef.current.querySelectorAll(".animate-on-scroll");
      boxes.forEach((box) => animateObserver.observe(box));
    }
  }, []);

  return (
   <section className="total-section" ref={sectionRef}>
      <div className="total-container">
        <div className="total-row">
          {totaldata.map((item,index) => (
            <div className={`total-box animate-on-scroll animate-up`} key={index}>
              <h1 
              ref={(el) => (countersRef.current[index] = el)}
              className="total-label counter" 
              data-target={item.value}
              data-suffix={item.suffix}>
                0{item.suffix}</h1>
              <p className="total-description"> {item.description}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Total