import React, { useEffect } from "react";
import Styled_HomePage from "./Styled_HomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = ({ resume }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Styled_HomePage>
      <div className="HomePage" data-aos="fade-up">
        <div className="header">
          <h1>HI,</h1>
          <h2>
            I'M <span className="home-name">MIKE KIM</span>,
          </h2>
          <h3>web developer</h3>
        </div>
        <h5>Los Angeles, CA</h5>
        <hr />

        <div className="home">
          <p className="home-about">
            I am a Full-Stack Developer with a focus on Front-End development.
            <br />
            <br />
            Throughout my life, I’ve traveled the world, met incredible people,
            performed live music in front of large crowds, and enjoyed foods
            from many different cultures. All of these experiences share one
            constant in my life that never falters: I'm motivated by sharing
            meaningful experiences with everyone in the world. I want to develop
            applications that can help people within their daily lives.
          </p>
          <div className="resume">
            <form method="get" action={resume} target="_blank">
              <button className="resume-button" type="submit">
                DOWNLOAD RESUME <FontAwesomeIcon icon={faDownload} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Styled_HomePage>
  );
};

export default HomePage;
