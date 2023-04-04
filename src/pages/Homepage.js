import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ProjectList from "../components/ProjectList";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import projects from "../ProjectList";

function Homepage() {
  return (
    <div>
      <Navbar />
      <About />
      <h1>My Projects</h1>
      <ProjectList projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
