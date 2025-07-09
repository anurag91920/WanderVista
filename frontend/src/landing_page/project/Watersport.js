import React, { useState } from 'react';
import './Watersport.css';

const imageSets = [
    [
        "/media/images/water1.png",
        "/media/images/water2.png",
        "/media/images/water3.png",
    ],
    [
        "/media/images/water4.png",
        "/media/images/water5.png",
        "/media/images/water6.png",
    ],
    [
        "/media/images/water3.png",
        "/media/images/water1.png",
        "/media/images/water2.png",
    ],
    [
        "/media/images/water5.png",
        "/media/images/water6.png",
        "/media/images/water2.png",
    ]
];

function Watersport() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="adventure-section">
            <h5 className="adventure-subheading">Adventure</h5>
            <h2 className="adventure-title">Water Sports</h2>
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

export default Watersport;
