import React, { useEffect, useState } from "react";
import { ProjectsPageWrap } from "./Projects.Page";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsPage = ({
  iconBlackjack,
  iconMarble,
  iconSessions,
  iconGameit,
  iconSkphotography,
  toggleHeader,
}) => {
  useEffect(() => {
    AOS.init();
  }, [toggleHeader]);

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
      <div className="ProjectsPage" data-aos="fade-up">
        <div className="header">
          <h1 style={{ fontSize: `${fontSize}px` }}>PROJECTS</h1>
          <p className="description">
            Below are my projects and technologies I used to create them.
          </p>
        </div>

        <div className="projects-flex">
          <a
            className="project-link"
            href="https://seannakimphotography.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-laptop"
              src={iconSkphotography}
              alt="skphotography"
            />
          </a>
          <div className="project">
            <h2>SK-Photography</h2>
            <p className="project-description">
              A photography site showcasing icredible images from around the
              world!
            </p>
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

        <div className="projects-flex">
          <a
            className="project-link"
            href="https://mikebkim.github.io/blackjack/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-laptop"
              src={iconBlackjack}
              alt="blackjack"
            />
          </a>
          <div className="project">
            <h2>Blackjack</h2>
            <p className="project-description">
              A simple Blackjack game. You start off with $1,000. How much will
              you win?
            </p>
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
