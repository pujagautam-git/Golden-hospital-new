 import React, { useEffect } from 'react';
import { Stethoscope, Ambulance, FlaskConical, Hospital } from 'lucide-react'; 
import './FacebookPage.css';

const FacebookPage = () => {
    useEffect(() => {
        // Dynamically load the Facebook SDK
         if (!window.FB) {
        const script = document.createElement('script');
        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
            script.onload = () => {
                window.FB.init({
                    xfbml: true,
                    version: 'v10.0'
                });
            };
        document.body.appendChild(script);
         } else {
            // If SDK already loaded, just re-parse the page
            window.FB.XFBML.parse();
               }
    }, []);

    // Also trigger FB.XFBML.parse() every time the component mounts
    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    });
        
        // Cleanup script when the component unmounts
        // return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    // Services with icons
    const services = [
        {
          title: "Best Medical Treatment",
          description: "Best  Medical health care facility.",
          icon: <Stethoscope className="staticon" />
        },
        {
          title: "Emergency Treatment",
          description: "Our medical team is available 24/7 for your service.",
          icon: <Ambulance  className="staticon" />
        },
        {
          title: "Modern Medical Lab",
          description:"Various kinds of laboratory and radiology services are available.",
          icon: <FlaskConical  className="staticon"/>
        },
        {
          title: "Hospital Departments",
          description: "Treatment for almost every disease is available.",
          icon: <Hospital  className="staticon"/>
        },
    ];

    return (
        <div className="facebook-page">
            <div className="content-container">
                {/* Why Choose Us Section */}
                <div className="why-choose-us">
                    <h1>Why  <span>CHOOSE </span>Us </h1>
                
                    
                    <section className="fab-stats-section">
                        <div className="fab-fb-wrapper">
                    <div className="fab-container">
                        {services.map((service, index) => (
                            <div key={index} className="fab-box">
                                <div className="fab-icon">{service.icon}</div>
                                <div className="fab-box-content">
                                <h2 className="fab-title">
                                   {service.title}
                                </h2>
                                <p className="fab-description">{service.description}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                
            
                

                {/* Facebook Page Plugin */}
                <div className="facebook-plugin">
                    <div className="feed">
                        {/* <h2>Facebook Page Feed</h2> */}
                    </div>
                    <div 
                        className="fb-page" 
                        data-href="https://www.facebook.com/goldenhospital.brt/" 
                        data-tabs="timeline" 
                        data-small-header="false" 
                        data-adapt-container-width="true" 
                        data-hide-cover="false" 
                        data-show-facepile="true">
                            </div>
                    </div>
                </div>
                </section>
            </div>
        </div>
        </div>
    );
};

export default FacebookPage;
