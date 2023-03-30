import React from 'react'
import Styled_HomePage from "./Styled_HomePage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const HomePage = ({ resume, iconDownload }) => {
    return (
        <Styled_HomePage>
            <div className="HomePage">
                <div className="header">
                    <h1>MIKE KIM</h1>
                    <p>Los Angeles, CA</p>
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
                    <div className="resume">
                        <form method="get" action={resume} target="_blank">
                            <button className="resume-button" type="submit">DOWNLOAD RESUME <FontAwesomeIcon icon={faDownload} /></button>
                        </form>
                    </div>
                </div>
            </div>
        </Styled_HomePage>
    )
}

export default HomePage