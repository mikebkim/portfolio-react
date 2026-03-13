import React, { useEffect } from "react";
import { HomePageWrap } from "./Home.Page";
import AOS from "aos";
import "aos/dist/aos.css";
import Patagonia4 from "../../files/Patagonia4.jpg";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <HomePageWrap>
      <img className="patagonia" src={Patagonia4} alt="Patagonia" />
      <div className="HomePage" data-aos="fade-up">
        <div className="header">
          <h1>HI, I'M</h1>
          <h2>
            <span className="home-name">MIKE KIM</span>
          </h2>
          <h3>Web Developer | Music Producer | Project Coordinator</h3>
          <h5>Los Angeles, CA</h5>
        </div>

        <div className="home">
          <p className="home-about">
            I enjoy solving problems and turning complexity into simple
            solutions.
            <br />
            <br />
            I'm a versatile professional with experience spanning web
            development, entertainment, music, recruiting, and consumer
            internet, combining big-picture thinking with agile, high-quality
            execution. I'm a strong communicator and self-starter who thrives in
            fast-paced environments, driven to build products that improve
            everyday life and create meaningful impact.
          </p>
        </div>
      </div>
    </HomePageWrap>
  );
};

export default HomePage;
