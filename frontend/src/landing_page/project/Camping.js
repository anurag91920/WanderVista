import React, { useState } from 'react';
import './Camping.css';

const imageSets = [
    [
        "/media/images/camping1.png",
        "/media/images/camping2.png",
        "/media/images/camping3.png",
    ],
    [
        "/media/images/camping5.png",
        "/media/images/camping4.png",
        "/media/images/camping6.png",
    ],
    [
        "/media/images/camping3.png",
        "/media/images/camping1.png",
        "/media/images/camping2.png",
    ],
    [
        "/media/images/camping5.png",
        "/media/images/camping6.png",
        "/media/images/camping4.png",
    ]
];

function Camping() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="adventure-section">
            <h5 className="adventure-subheading">Forest Tours</h5>
            <h2 className="adventure-title">Camping</h2>
            <p className="adventure-description">
                Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.
            </p>

            <div className="adventure-gallery">
                {imageSets[activeIndex].map((src, idx) => (
                    <img key={idx} src={src} alt={`Water sport ${idx}`} />
                ))}
            </div>

            <div className="dots">
                {imageSets.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${idx === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Camping;
