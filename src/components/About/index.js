import React from "react";
import LinkedInPic from "../../assets/images/linkedin pic 11.jpg";
import "../../assets/css/main.css";

function About() {
  return (
    <div className="bgp-chicago" id="about">
      <section>
        <img src={LinkedInPic} alt="tyler in a suit" height="400" width="300"></img>
      </section>
      <section>
        <h2>About</h2>
        <h3>A recent student of full-stack coding!</h3>
        <p>I am a graduate of Loyola University Chicago, with a degree in Entrepreneurship and Marketing. I was also recently hired at Hubs Manufacturing as a Supply Developement Representative.</p>
        <p>My goal is to grow my skill set through learning coding in order to expand my opportunities, grow my critical thinking skills, and improve my work!</p>
      </section>
    </div>
  );
}

export default About;
