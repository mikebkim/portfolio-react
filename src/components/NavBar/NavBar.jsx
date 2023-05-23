import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarWrap } from "./Nav.Bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faLayerGroup,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSelectedTab(JSON.stringify(location));
  }, [location]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <NavBarWrap>
      <div className="NavBar">
        <Link
          to="/home"
          className={
            selectedTab.includes("home") ? "nav-box selected-box" : "nav-box"
          }
          title="Home"
        >
          <div
            className={selectedTab.includes("home") ? "selected" : "nav-link"}
          >
            <FontAwesomeIcon icon={faHome} />
          </div>
          {selectedTab.includes("home") ? (
            <div className="nav-title">HOME</div>
          ) : (
            ""
          )}
        </Link>
        <Link
          to="/technologies"
          className={
            selectedTab.includes("technologies") ? "nav-box selected-box" : "nav-box"
          }
          title="Technologies"
        >
          <div
            className={selectedTab.includes("technologies") ? "selected" : "nav-link"}
          >
            <FontAwesomeIcon icon={faCode} />
          </div>
          {selectedTab.includes("technologies") ? (
            <div className="nav-title">TECHNOLOGIES</div>
          ) : (
            ""
          )}
        </Link>
        <Link
          to="/projects"
          className={
            selectedTab.includes("projects") ? "nav-box selected-box" : "nav-box"
          }
          title="Projects"
        >
          <div
            className={selectedTab.includes("projects") ? "selected" : "nav-link"}
          >
            <FontAwesomeIcon icon={faLayerGroup} />
          </div>
          {selectedTab.includes("projects") ? (
            <div className="nav-title">PROJECTS</div>
          ) : (
            ""
          )}
        </Link>
        <Link
          to="/contact"
          className={
            selectedTab.includes("contact") ? "nav-box selected-box" : "nav-box"
          }
          title="Contact"
        >
          <div
            className={selectedTab.includes("contact") ? "selected" : "nav-link"}
          >
            <FontAwesomeIcon icon={faPhone} />
          </div>
          {selectedTab.includes("contact") ? (
            <div className="nav-title">CONTACT</div>
          ) : (
            ""
          )}
        </Link>
      </div>
    </NavBarWrap>
  );
};

export default NavBar;
