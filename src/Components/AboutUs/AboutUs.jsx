import React from "react";
import './AboutUs.css';

function AboutUs () {
    return (
        <div className="aboutContainer">
            <h1>About Plant Watering Log</h1>
            <div className="aboutChild">
                
                <div>
                    <h3>Inspiration</h3>
                    <p>
                       Its pretty hard making sure to water your plants consistently,
                       specially when each one has a different watering schedule and requirements. 
                       This log was made to fix this issue. 
                    </p>
                </div>
                <div>
                    <h3>Purpose</h3>
                    <p>
                        This log was made to solve the problem of keeping track of the 
                        watering schedule of the different plants around your home by creating profiles for each one
                        and manually adding important and helpful information for each one. 
                    </p>
                </div>
                <div>
                    <h3>Use</h3>
                    <p>
                        After you've created a profile for each plant, you'll be able to
                         keep track of the last watering time, have a small description and even add
                         a reminder of the sunlight requirement for each. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;