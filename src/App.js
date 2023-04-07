import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";
import PageContent from "./components/PageContent";
import Home from "./components/Home";
import About from "./components/About";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <PageContent>
          <Home />
        </PageContent>
        <About />
        <ProjectsList />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
