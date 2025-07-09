import React from "react";
import './Mission.css';

function Mission() {
    return (
        <div className="mission-section">
            <div className="mission-text">
                <h2>Our Mission</h2>
                <div className="underline"></div>
                <p>
                    Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit.<br />
                    Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>
            <div className="mission-img">
                <img src="media/images/mission.png" alt="Hiker at waterfall" className="mission-image" />
            </div>
        </div>
    );
}

export default Mission;
