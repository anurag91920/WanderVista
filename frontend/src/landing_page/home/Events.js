import React from 'react';
import './Events.css';

function UpcomingEvents() {
    return (
        <div className="events-section">
            <h2 className="events-title">Upcoming Events</h2>
            <div className="underline"></div>
            <div className="events-grid">
                <div className="event-card">
                    <img src="/media/images/Mountain.png" alt="Everest Camp Trek" className="event-img" />
                    <h3>Everest Camp Trek</h3>
                    <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                    <button className="learn-more">LEARN MORE ➞</button>
                </div>
                <div className="event-card">
                    <img src="/media/images/waking.png" alt="Walking Holidays" className="event-img" />
                    <h3>Walking Holidays</h3>
                    <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                    <button className="learn-more">LEARN MORE ➞</button>
                </div>
            </div>
        </div>
    );
}

export default UpcomingEvents;
