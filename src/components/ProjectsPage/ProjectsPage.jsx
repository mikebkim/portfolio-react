import React, { useEffect } from 'react'
import Styled_ProjectsPage from "./Styled_ProjectsPage";
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjectsPage = ({
    iconBlackjack,
    iconMarble,
    iconSessions,
    iconGameit
}) => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <Styled_ProjectsPage>
            <div className="ProjectsPage">
                <div className="header">
                    <h1>PROJECTS</h1>
                    <hr />
                    <p className="description">
                        Below are my projects and technologies I used to create them.
                    </p>
                </div>

                <div className="projects-flex">
                    <a className="project-link" href="https://marblejerky.herokuapp.com/" target="_blank">
                        <img className="project-laptop" src={iconMarble} alt="marblejerky" />
                    </a>
                    <div className="project">
                        <h2>Marble</h2>
                        <p className="project-description">An eCommerce site that sells beef jerky. Check out the products!</p>
                        <div>Technologies Used</div>
                        <div className="tech-list">
                            <p className="tech-name">HTML</p>
                            <p className="tech-name">CSS - Bootstrap</p>
                            <p className="tech-name">MERN Stack</p>
                            <p className="tech-name">MLab</p>
                        </div>
                    </div>
                </div>

                <div className="projects-flex">
                    <a className="project-link" href="https://game-it.herokuapp.com/" target="_blank">
                        <img className="project-laptop" src={iconGameit} alt="gameit" />
                    </a>
                    <div className="project">
                        <h2>game.it</h2>
                        <p className="project-description">An app that allows users to compile, share, and chat about video games.
                        </p>
                        <div>Technologies Used</div>
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
                </div>

                <div className="projects-flex">
                    <a className="project-link" href="https://sessionsmusic.herokuapp.com/" target="_blank">
                        <img className="project-laptop" src={iconSessions} alt="sessionsmusic" />
                    </a>
                    <div className="project">
                        <h2>Sessions</h2>
                        <p className="project-description">A music tutor app that allows musicians to book sessions together.</p>
                        <div>Technologies Used</div>
                        <div className="tech-list">
                            <p className="tech-name">HTML</p>
                            <p className="tech-name">CSS</p>
                            <p className="tech-name">Ruby on Rails</p>
                            <p className="tech-name">PostgreSQL</p>
                        </div>
                    </div>
                </div>

                <div className="projects-flex">
                    <a className="project-link" href="https://mikebkim.github.io/blackjack/" target="_blank">
                        <img className="project-laptop" src={iconBlackjack} alt="blackjack" />
                    </a>
                    <div className="project">
                        <h2>Blackjack</h2>
                        <p className="project-description">A simple Blackjack game. You start off with $1,000. How much will you
                            win?</p>
                        <div>Technologies Used</div>
                        <div className="tech-list">
                            <p className="tech-name">HTML</p>
                            <p className="tech-name">CSS</p>
                            <p className="tech-name">JavaScript</p>
                        </div>
                    </div>
                </div>

            </div>
        </Styled_ProjectsPage>
    )
}

export default ProjectsPage