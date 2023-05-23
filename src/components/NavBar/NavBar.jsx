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

const NavBar = ({}) => {
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
        <div
          className={
            selectedTab.includes("home") ? "nav-box selected-box" : "nav-box"
          }
        >
          <Link
            to="/home"
            className={selectedTab.includes("home") ? "selected" : "nav-link"}
            title="Home"
          >
            <FontAwesomeIcon icon={faHome} />
            <div className="nav-line-selected-home"></div>
            <div className="nav-line-selected">
              {selectedTab.includes("home") ? (
                <div className="nav-title">HOME</div>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
        <div
          className={
            selectedTab.includes("technologies")
              ? "nav-box selected-box"
              : "nav-box"
          }
        >
          <Link
            to="/technologies"
            className={
              selectedTab.includes("technologies") ? "selected" : "nav-link"
            }
            title="Technologies"
          >
            <FontAwesomeIcon icon={faCode} />
            <div className="nav-line-selected-technologies"></div>
            <div className="nav-line-selected">
              {selectedTab.includes("technologies") ? (
                <div className="nav-title">TECHNOLOGIES</div>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
        <div
          className={
            selectedTab.includes("projects")
              ? "nav-box selected-box"
              : "nav-box"
          }
        >
          <Link
            to="/projects"
            className={
              selectedTab.includes("projects") ? "selected" : "nav-link"
            }
            title="Projects"
          >
            <FontAwesomeIcon icon={faLayerGroup} />
            <div className="nav-line-selected-projects"></div>
            <div className="nav-line-selected">
              {selectedTab.includes("projects") ? (
                <div className="nav-title">PROJECTS</div>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
        <div
          className={
            selectedTab.includes("contact") ? "nav-box selected-box" : "nav-box"
          }
        >
          <Link
            to="/contact"
            className={
              selectedTab.includes("contact") ? "selected" : "nav-link"
            }
            title="Contact"
          >
            <FontAwesomeIcon icon={faPhone} />
            <div className="nav-line-selected-contact"></div>
            <div className="nav-line-selected">
              {selectedTab.includes("contact") ? (
                <div className="nav-title">CONTACT</div>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      </div>
    </NavBarWrap>
  );
};

export default NavBar;
