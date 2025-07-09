import React, { useState } from 'react';
import './Wintersport.css';

const imageSets = [
    [
        "/media/images/winter1.png",
        "/media/images/winter2.png",
        "/media/images/winter3.png",
    ],
    [
        "/media/images/winter4.png",
        "/media/images/winter5.png",
        "/media/images/winter6.png",
    ],
    [
        "/media/images/winter7.png",
        "/media/images/winter8.png",
        "/media/images/winter9.png",
    ],
    [
        "/media/images/winter1.png",
        "/media/images/winter5.png",
        "/media/images/winter9.png",
    ]
];

function Wintersport() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="adventure-section">
            <h5 className="adventure-subheading">Snow Adventure</h5>
            <h2 className="adventure-title">Winter Sports</h2>
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

export default Wintersport;
