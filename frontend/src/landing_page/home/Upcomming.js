import React from 'react';
import './Upcomming.css';

function Tours() {
    return (
        <div className="tours-section">
            <div className="tours-text">
                <h2>Upcoming Tours<br />& Destination</h2>
                <div className="underline"></div>
                <p>
                    Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris.
                    Sinistra possedit litora ut nabataeque. Setucant coeperunt pervenient animal!
                    Concordi aurea nabataeque seductaque constaque cepit sublime flexi nullus.
                </p>
                <button className="btn-learn">LEARN MORE</button>
            </div>

            <div className="tours-images">
                <div className="image-row">
                    <img src="/media/images/cool.png" alt="Skiing" />
                    <img src="/media/images/cycle.png" alt="Skiing Woman" />
                </div>
                <div className="image-row">
                    <img src="/media/images/greesm.png" alt="Biking" />
                    <img src="/media/images/taj.png" alt="Hiking" />
                </div>
            </div>
        </div>
    );
}

export default Tours;
