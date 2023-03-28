import React from 'react'
import Styled_HomePage from "./Styled_HomePage";

const HomePage = ({ }) => {
    return (
        <Styled_HomePage>
            <div className="HomePage">
                <h1>Mike Kim</h1>
                <span>Web Developer</span>
                <span>Los Angeles, CA</span>
            </div>

            <div className="aboutflex">
                <p className="aboutme-p">I am a Full-Stack Developer with a focus on Front-End development.
                    <br />
                    <br />
                    Throughout my life, I’ve traveled the world, met incredible people, performed live
                    music
                    in front of large crowds, and enjoyed foods from many different cultures.

                    {/* Throughout my life, I swam in the Dead Sea, met a Holocaust survivor, performed electronic DJ sets in
                    front of large crowds, ate live octopus in Korea, and lived in a five person apartment in Brooklyn, NY. */}
                    <br />
                    <br />
                    All of these experiences share one constant in my life that never falters:
                    I'm motivated by sharing meaningful experiences with everyone in the world. I want to develop
                    applications
                    that can help people within their daily lives.
                </p>
                <p><a href="#projects" className="btn btn-secondary">VIEW MY PROJECTS</a></p>
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
                    <form method="get" action="./images/MK_Resume.pdf" target="_blank">
                        <button className="btn btn-default res" type="submit">RESUME</button>
                    </form>
                </div>
            </div>
        </Styled_HomePage>
    )
}

export default HomePage