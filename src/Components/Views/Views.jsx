import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Views.css';

const Views = () => {
    const navigate = useNavigate();

    // Function to handle button click
    const handleButtonClick = () => {
        navigate('/news'); // Navigate to the /news path
    };

    // Video data for the first three videos
    const videoData = [
        {
            id: 'UG_Ki1UTJ3s',
            start: 11, // Start at 2 minutes
        },
        {
            id: 'zJcFhapRrew',
            start: 17, // Start at 1 minute
        },
     
        {
            id: '8sw9eofrH8U',
            start: 80, // Start at 3 minutes
        },
    ];

    return (
        <div className="views-wrapper">
            <h1 className="news-header">News & Views</h1>
            <div className="views-container">
                {videoData.map((video, index) => (
                    <React.Fragment key={video.id}>
                        <div className="views">
                            
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${video.id}?start=${video.start}`}
                                    title={`YouTube video player ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                {index === videoData.length - 1 && (
                                <div className="view">
                                    
                                </div> 
                                )}
                            </div>
                        
                        {index < videoData.length - 1 && <div className="divide"></div>} {/* Divider between views */}
                    </React.Fragment>
                ))}
            </div>
             <button className="column-button" onClick={handleButtonClick}>
                                        Go to More
                                    </button>
        </div>
    );
};

export default Views;