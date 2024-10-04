import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';  // Add this line

function HomePage() {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "/images/bike1.png",
        "/images/bike2.jpg",
        "/images/bike3.png",
        "/images/bike4.jpg",
        // Add more image paths as needed
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="home-container">
            <header className="home-header">
                <h1 className="home-title">GerWeiss E-Bikes</h1>
                <p className="home-subtitle">Explore BGC in style and comfort</p>
            </header>
            <main className="home-main">
                <div className="bike-section">
                    <div className="image-slider">
                        <img src={images[currentImageIndex]} alt="Our E-Bike" className="bike-image" />
                        <div className="slider-dots">
                            {images.map((_, index) => (
                                <span 
                                    key={index} 
                                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                    <p className="bike-description">
                        Zip through BGC's streets and parks with our eco-friendly e-bikes. 
                        Convenient, modern, and perfect for exploring the city.
                    </p>
                    <button onClick={() => navigate('/booking')} className="book-button">
                        Book Now
                    </button>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
