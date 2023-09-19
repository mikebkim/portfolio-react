import React, { useEffect } from "react";
import { HomePageWrap } from "./Home.Page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = ({ resume, toggleHeader }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <HomePageWrap>
      <div className="HomePage" data-aos="fade-up">
        {toggleHeader ? (
          <div className="header-rebel">
            <h1>OH NO... </h1>
            <h2 className="rebel-name">YOU'RE A REBEL!</h2>
            <h3>habitual line stepper</h3>
            <h5>Risk Taker, USA</h5>
          </div>
        ) : (
          <div className="header">
            <h1>HI, I'M</h1>
            <h2>
              <span className="home-name">MIKE KIM</span>
            </h2>
            <h3>web developer</h3>
            <h5>Los Angeles, CA</h5>
          </div>
        )}

        <div className="home">
          {toggleHeader ? (
            <p className="home-about">
              You're safe. I promise.
              <br />
              <br />
              However, what if I had done something terribly wrong when you
              unreluctantly smashed the button you were NOT supposed to press?!
            </p>
          ) : (
            <p className="home-about">
              I am a Full-Stack Developer with a focus on Front-End development.
              <br />
              <br />
              Throughout my life, I’ve traveled the world, met incredible
              people, performed live music in front of large crowds, and enjoyed
              foods from many different cultures. All of these experiences share
              one constant in my life that never falters: I'm motivated by
              sharing meaningful experiences with everyone in the world. I want
              to develop applications that can help people within their daily
              lives.
            </p>
          )}
          {toggleHeader ? (
            <div className="resume-rebel">
              <form method="get" action={resume} target="_blank">
                <button className="resume-button" type="submit">
                  DOWNLOAD RESUME <FontAwesomeIcon icon={faDownload} />
                </button>
              </form>
            </div>
          ) : (
            <div className="resume">
              <form method="get" action={resume} target="_blank">
                <button className="resume-button" type="submit">
                  DOWNLOAD RESUME <FontAwesomeIcon icon={faDownload} />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </HomePageWrap>
  );
};

export default HomePage;
