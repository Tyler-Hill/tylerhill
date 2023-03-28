import React from "react";
import HoriseonImage from "../assets/Horiseon Website.PNG";

function Projects() {
  return (
    <section>
      <h2>Completed Projects</h2>
      <div>
        <div>
          <h3>Challenge 1</h3>
          <a href="https://tyler-hill.github.io/Challenge-1/">
            <img src={HoriseonImage} alt="horiseon website" height="200" width="300" />
          </a>
          <p>The Horiseon website</p>
        </div>
        <div>
          <h3>Homework 2</h3>
          <p>Will be added shortly!</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
