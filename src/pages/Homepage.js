import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ProjectList from "../components/ProjectList";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import attak from "../assets/images/AttakTracker-logos.jpeg";
import takez from "../assets/images/hot_takez_page.JPG";
import codingQuiz from "../assets/images/coding_quiz.PNG";
import employeeTracker from "../assets/images/SQL_EMPLOYEE_TRACKER.JPG";

const projects = [
  {
    title: "attak-tracker",
    link: "https://attak-tracker.herokuapp.com/login",
    image: attak,
    alt: "AttakTracker-Logo",
    height: "200",
    width: "300",
    description: "A full-stack application that allows users to track their workouts and view their progress over time.",
  },
  {
    title: "Hot Takez Takeaway",
    link: "https://team-takez.github.io/project-one/",
    image: takez,
    alt: "Home Page of Hot Takez Takeaway",
    description: "a full-stack application that allows users to search for resturaunts in cities across the world.",
  },
  {
    title: "Coding Quiz",
    link: "https://tyler-hill.github.io/Coding-Quiz-Challenge-4/",
    image: codingQuiz,
    alt: "First page of the coding quiz",
    description: "A coding quiz designed to test your knowledge of JavaScript, HTML, and CSS.",
  },
  {
    title: "SQL Employee Tracker",
    link: "https://github.com/Tyler-Hill/SQL-Employee-Tracker-12.git",
    image: employeeTracker,
    alt: "SQL Employee Tracker terminal",
    description: " A command-line application that allows users to view and manage the departments, roles, and employees in their company.",
  },
];
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
