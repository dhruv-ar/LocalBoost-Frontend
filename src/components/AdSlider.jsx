// AdSlider.js
import React, { useState, useEffect } from 'react';
import '../styles/AdSlider.css'; // CSS for the slider

const adData = [
    { id: 1, imageUrl: '/images/restaurant-flyer.jpg', link: 'https://linktoad1.com', alt: 'Ad 1 Description' },
    { id: 2, imageUrl: 'path/to/your/ad2.jpg', link: 'https://linktoad2.com', alt: 'Ad 2 Description' },
    { id: 3, imageUrl: 'path/to/your/ad3.jpg', link: 'https://linktoad3.com', alt: 'Ad 3 Description' }
];

function AdSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide) => (currentSlide + 1) % adData.length);
        }, 3000); // Changes slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            {adData.map((ad, index) => (
                <div
                    key={ad.id}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${ad.imageUrl})` }}
                >
                    <a href={ad.link}>
                        <img src={ad.imageUrl} alt={ad.alt} />
                    </a>
                </div>
            ))}
        </div>
    );
}

export default AdSlider;
