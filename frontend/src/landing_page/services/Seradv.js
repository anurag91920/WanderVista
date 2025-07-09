import React from 'react';
import './Seradv.css';

function Seradv() {
    return (
        <div className="experience-values-section">
            <div className="experience-column">
                <h3>Why Outdoor Adventure</h3>
                <div className="underline"></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <ul className="core-values-list">
                    <li><span className="dash">─</span> Experience: Locavit liberioris possedit</li>
                    <li><span className="dash">─</span> Reputation: Diremit mundi mare undae</li>
                    <li><span className="dash">─</span> Guide Experience: Spectent tonitrua mutastis</li>
                </ul>
            </div>

            <div className="values-column">
                <h3>What You Get</h3>
                <div className="underline"></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <ul className="core-values-list">
                    <li><span className="dash">─</span> Private Hike: Locavit liberioris possedit</li>
                    <li><span className="dash">─</span> Transportation: Diremit mundi mare undae</li>
                    <li><span className="dash">─</span> Great Facilities: Spectent tonitrua mutastis</li>
                </ul>
            </div>
        </div>
    );
}

export default Seradv;
