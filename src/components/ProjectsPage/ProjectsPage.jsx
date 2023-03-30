import React from 'react'
import Styled_ProjectsPage from "./Styled_ProjectsPage";

const ProjectsPage = ({ }) => {
    return (
        <Styled_ProjectsPage>
            <div className="ProjectsPage">
                <div className="header">
                    <h1>PROJECTS</h1>
                    <p className="description">
                        Below are my projects and technologies I used to create them.
                    </p>
                    <div id="projects"></div>
                    <div className="about-me-content">
                        <h1>Projects</h1>
                        <div className="projects-flex">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <h5>Marble</h5>
                                <a className="project-link" href="https://marblejerky.herokuapp.com/" target="_blank">
                                    <img
                                        className="img-responsive3" src="https://i.imgur.com/y9Qv7P4.png" alt="marblejerky" />
                                </a>
                                <br />
                                <p className="project-description">An eCommerce site that sells beef jerky. Check out the products!</p>
                                <h2>Technologies Used</h2>
                                <p className="pfoot">HTML | CSS - Bootstrap | MERN Stack | MLab</p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <h5>game.it</h5>
                                <a className="project-link" href="https://game-it.herokuapp.com/" target="_blank">
                                    <img className="img-responsive2" src="https://i.imgur.com/HYAOWEm.png" alt="gameit" />
                                </a>
                                <br />
                                <p className="project-description">An app that allows users to compile, share, and chat about video games.
                                </p>
                                <h2>Technologies Used</h2>
                                <p className="pfoot">HTML | CSS - Bulma | JavaScript | Node | Express | MongoDB | Socket.io | OAuth | IGDB
                                    API</p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <h5>Sessions</h5>
                                <a className="project-link" href="https://sessionsmusic.herokuapp.com/" target="_blank"><img
                                    className="img-responsive3" src="https://i.imgur.com/zq5BFK2.png" alt="sessionsmusic" />
                                </a>
                                <br />
                                <p className="project-description">A music tutor app that allows musicians to book sessions together.</p>
                                <h2>Technologies Used</h2>
                                <p className="pfoot">HTML | CSS | Ruby on Rails | PostgreSQL</p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <h5>Blackjack</h5>
                                <a className="project-link" href="https://mikebkim.github.io/blackjack/" target="_blank"><img
                                    className="img-responsive2" src="https://i.imgur.com/vPL9pko.png" alt="blackjack" />
                                </a>
                                <br />
                                <p className="project-description">A simple Blackjack game. You start off with $1,000. How much will you
                                    win?</p>
                                <h2>Technologies Used</h2>
                                <p className="pfoot">HTML | CSS | JavaScript</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled_ProjectsPage>
    )
}

export default ProjectsPage