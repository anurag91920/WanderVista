import React from 'react';
import './Extra.css';

function Extra() {
    return (
        <div className="experience-values-section">
            <div className="experience-column">
                <h3>Extraordinary Experiences</h3>
                <div className="underline"></div>
                <p>
                    Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                    Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>

            <div className="values-column">
                <h3>Our Core Values</h3>
                <div className="underline"></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <ul className="core-values-list">
                    <li><span className="dash">─</span> Locavit liberioris possedit</li>
                    <li><span className="dash">─</span> Diremit mundi mare undae</li>
                    <li><span className="dash">─</span> Spectent tonitrua mutastis</li>
                </ul>
            </div>
        </div>
    );
}

export default Extra;
