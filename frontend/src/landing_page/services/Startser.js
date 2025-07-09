import React from 'react';
import './Startser.css'; // optional if using pure CSS

function Startser() {
    return (
        <div className="adventure-container">
            <div className="heading">
                <h2>It's Time to Start Your Adventures</h2>
                <div className="underline"></div>
                <p>
                    Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut elit tellus, luctus ullamcorper pulvinar.
                </p>
            </div>

            <div className="cards">
                <div className="card">
                    <img src="media/images/adventure1.png" alt="Backpacking" />
                    <h3>Backpacking Trips</h3>
                    <p>
                        Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.
                    </p>
                </div>

                <div className="card">
                    <img src="media/images/adventure2.png" alt="Hiking" />
                    <h3>Family Hiking Trips</h3>
                    <p>
                        Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.
                    </p>
                </div>

                <div className="card">
                    <img src="media/images/adventure3.png" alt="Backpacking" />
                    <h3>Water Sports</h3>
                    <p>
                        Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.
                    </p>
                </div>

                <div className="card">
                    <img src="media/images/adventure4.png" alt="Hiking" />
                    <h3>Winter Sports</h3>
                    <p>
                        Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Startser;
