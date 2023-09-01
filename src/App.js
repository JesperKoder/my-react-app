import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Layout from "./reactStuff/layout";
import ProjectCard from "./reactStuff/projectCard.js";
import projects from "./reactStuff/projects.js";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>best page</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Layout>
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </Layout>
      </div>
    </>
  );
}

export default App;
