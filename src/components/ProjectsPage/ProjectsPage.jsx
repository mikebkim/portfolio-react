import React, { useEffect, useState } from "react";
import { ProjectsPageWrap } from "./Projects.Page";
import AOS from "aos";
import "aos/dist/aos.css";
// import blackjackicon from "../../icons/blackjackicon.png";
// import gameiticon from "../../icons/gameiticon.png";
// import marbleicon from "../../icons/marbleicon.png";
// import sessionsicon from "../../icons/sessionsicon.png";
import blackjackapp from "../../icons/blackjackapp.png";
import seannakimapp from "../../icons/seannakimapp.png";
import Greenland5 from "../../files/Greenland5.jpg";
// import Seoul from "../../files/Seoul.jpg";

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [fontSize, setFontSize] = useState(20);

  useEffect(() => {
    function handleResizeHeader() {
      const width = window.innerWidth;
      const newFontSize = width / 20;

      setFontSize(newFontSize);
    }

    window.addEventListener("resize", handleResizeHeader);
    handleResizeHeader();

    return () => window.removeEventListener("resize", handleResizeHeader);
  }, []);

  return (
    <ProjectsPageWrap>
      <img className="seoul" src={Greenland5} alt="seoul" />

      <div className="ProjectsPage" data-aos="fade-up">
        <div className="header">
          <h1 style={{ fontSize: `${fontSize}px` }}>PROJECTS</h1>
          <p className="description">
            below are my projects and technologies i used to create them.
          </p>
        </div>
        <h2>Seanna Kim Photography</h2>
        <p className="project-description">
          a photography site showcasing icredible images from around the world!
        </p>
        <div className="projects-flex">
          <a
            className="project-link"
            href="https://seannakimphotography.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-laptop"
              src={seannakimapp}
              alt="skphotography"
            />
          </a>
          <div className="project">
            <h3>Technologies Used</h3>
            <div className="tech-list">
              <p className="tech-name">React</p>
              <p className="tech-name">React Router</p>
              <p className="tech-name">Styled-Components</p>
              <p className="tech-name">Node + npm</p>
              <p className="tech-name">JSX / HTML</p>
              <p className="tech-name">JavaScript</p>
              <p className="tech-name">GitHub Pages</p>
            </div>
          </div>
        </div>
        {/* <div className="projects-flex">
            <a
              className="project-link"
              href="https://game-it.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="project-laptop" src={iconGameit} alt="gameit" />
            </a>
            <div className="project">
              <h2>game.it</h2>
              <p className="project-description">
                An app that allows users to compile, share, and chat about video
                games.
              </p>
              <h3>Technologies Used</h3>
              <div className="tech-list">
                <p className="tech-name">HTML</p>
                <p className="tech-name">CSS - Bulma</p>
                <p className="tech-name">JavaScript</p>
                <p className="tech-name">Node</p>
                <p className="tech-name">Express</p>
                <p className="tech-name">MongoDB</p>
                <p className="tech-name">Socket.io</p>
                <p className="tech-name">OAuth</p>
                <p className="tech-name">IGDB API</p>
              </div>
            </div>
          </div> */}
        {/* <div className="projects-flex">
            <a
              className="project-link"
              href="https://sessionsmusic.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-laptop"
                src={iconSessions}
                alt="sessionsmusic"
              />
            </a>
            <div className="project">
              <h2>Sessions</h2>
              <p className="project-description">
                A music tutor app that allows musicians to book sessions
                together.
              </p>
              <h3>Technologies Used</h3>
              <div className="tech-list">
                <p className="tech-name">HTML</p>
                <p className="tech-name">CSS</p>
                <p className="tech-name">Ruby on Rails</p>
                <p className="tech-name">PostgreSQL</p>
              </div>
            </div>
          </div> */}
        <h2>Blackjack</h2>
        <p className="project-description">
          it's blackjack...you start off with $1,000. how much will you
          win?
        </p>
        <div className="projects-flex">
          <a
            className="project-link"
            href="https://mikebkim.github.io/blackjack/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-laptop"
              src={blackjackapp}
              alt="blackjack"
            />
          </a>
          <div className="project">
            <h3>Technologies Used</h3>
            <div className="tech-list">
              <p className="tech-name">HTML</p>
              <p className="tech-name">CSS</p>
              <p className="tech-name">JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </ProjectsPageWrap>
  );
};

export default ProjectsPage;
