import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <img src="/media/images/homehero.png" alt="Hero" className="hero-img" />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <p className="subtitle">Explore the Colourful World</p>
                <h1 className="title">A Wonderful Gift</h1>
                <button className="btn-learn">LEARN MORE</button>
            </div>
        </div>
    );
}

export default Hero;
