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
            <h3>Web Developer | Music Producer | Project Coordinator</h3>
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
              I enjoy solving problems and turning complexity into simple
              solutions.
              <br />
              <br />
              I'm a versatile professional with experience spanning web development,
              entertainment, music, recruiting, and consumer internet, combining
              big-picture thinking with agile, high-quality execution. I'm a strong
              communicator and self-starter who thrives in fast-paced
              environments, driven to build products that improve everyday life
              and create meaningful impact.
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
