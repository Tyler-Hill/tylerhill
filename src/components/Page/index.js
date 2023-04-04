import React from "react";
import PageContent from "../PageContent";
import Home from "../Home";
import About from "../About";
import ProjectsList from "../ProjectsList";
import Contact from "../Contact";
import Resume from "../Resume";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "Home":
        return <Home />;
      case "about":
        return <About />;
      case "portfolio":
        return <ProjectsList />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
