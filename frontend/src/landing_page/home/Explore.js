import React from 'react';
import './Explore.css';

function Hero() {
    return (
        <div className="hero-container">
            <img src="/media/images/ExploreWorld.png" alt="Hero" className="hero-img" />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">Explore The World</h1>
                <div className="hero-underline"></div>
                <p className="hero-description">
                    Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi.
                    Fert his. Recessit mentes praeceps locum caligine sui egens erat. Silvas caeli regna.
                </p>
                <button className="hero-button">LEARN MORE ➞</button>
            </div>
        </div>
    );
}

export default Hero;
