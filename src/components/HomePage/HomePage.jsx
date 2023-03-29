import React from 'react'
import Styled_HomePage from "./Styled_HomePage";

const HomePage = ({ resume }) => {
    return (
        <Styled_HomePage>
            <div className="HomePage">
                <div className="main-title">
                    <h1>MIKE KIM</h1>
                    <h2>Los Angeles, CA</h2>
                </div>

                <div className="home">
                    <p className="home-about">I am a Full-Stack Developer with a focus on Front-End development.
                        <br />
                        <br />
                        Throughout my life, I’ve traveled the world, met incredible people, performed live
                        music in front of large crowds, and enjoyed foods from many different cultures.
                        All of these experiences share one constant in my life that never falters:
                        I'm motivated by sharing meaningful experiences with everyone in the world. I want to develop
                        applications
                        that can help people within their daily lives.
                    </p>
                    <p><a href="/projects" className="projects-button">VIEW MY PROJECTS</a></p>
                    <div className="resume">
                        <form method="get" action={resume} target="_blank">
                            <button className="resume-button" type="submit">RESUME</button>
                        </form>
                    </div>
                </div>
            </div>
        </Styled_HomePage>
    )
}

export default HomePage