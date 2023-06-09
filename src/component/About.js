import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-image">
                            <img src={aboutimage} alt="" height="450px" width="100%"/>
                        </div>    
                    </div>
                    <div className="col-md-6">
                        <div className="about-text">
                            <h1>LEARN MORE ABOUT US</h1>
                            <p>
                                Voluptate Lorem velit labore occaecat ad. Mollit deserunt fugiat aute incididunt amet dolor irure aliquip in officia.
                                Amet nulla aliquip commodo ut velit do et sunt.
                            </p>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;