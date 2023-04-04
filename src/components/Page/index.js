import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import ProjectsList from "../ProjectsList";
import Contact from "../Contact";
import Resume from "../Resume";
import Projects from "../../ProjectList";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about me":
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
