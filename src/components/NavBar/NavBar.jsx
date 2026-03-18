import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarWrap } from "./Nav.Bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCode,
  faLayerGroup,
  faBars,
  faEnvelope,
  // faDownload,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = ({ screenWidth, resume }) => {
  const [selectedTab, setSelectedTab] = useState("");
  const location = useLocation();

  const breakpoints = {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
  };

  useEffect(() => {
    setSelectedTab(JSON.stringify(location));
  }, [location]);

  useEffect(() => {
    AOS.init();
  }, []);

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <NavBarWrap>
      {screenWidth >= breakpoints.tablet ? (
        <div className="nav-flex"></div>
      ) : null}
      {screenWidth >= breakpoints.tablet ? (
        <div className="NavBar">
          <div className="nav-box-name">MIKE KIM</div>
          {/* HOME */}
          <Link
            to="/home"
            className={
              selectedTab.includes("home") ? "nav-box selected-box" : "nav-box"
            }
            title="Home"
            onMouseEnter={() => setHoveredLink("home")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <div
              className={
                selectedTab.includes("home")
                  ? "selected"
                  : hoveredLink === "home"
                    ? "nav-link-hover"
                    : "nav-link"
              }
            ></div>
            {/* {(selectedTab.includes("home") || hoveredLink === "home") && (
              <div className="nav-title">HOME</div>
            )} */}
            <div className="nav-title">
              {" "}
              <FontAwesomeIcon icon={faHouse} />
              <div className="nav-header">HOME</div>
            </div>
          </Link>

          {/* TECHNOLOGIES */}
          <Link
            to="/technologies"
            className={
              selectedTab.includes("technologies")
                ? "nav-box selected-box"
                : "nav-box"
            }
            title="Technologies"
            onMouseEnter={() => setHoveredLink("technologies")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <div
              className={
                selectedTab.includes("technologies")
                  ? "selected"
                  : hoveredLink === "technologies"
                    ? "nav-link-hover"
                    : "nav-link"
              }
            ></div>
            {/* {(selectedTab.includes("technologies") ||
              hoveredLink === "technologies") && (
              <div className="nav-title">TECHNOLOGIES</div>
            )} */}
            <div className="nav-title">
              {" "}
              <FontAwesomeIcon icon={faCode} />
              <div className="nav-header">TECHNOLOGIES</div>
            </div>
          </Link>

          {/* PROJECTS */}
          <Link
            to="/projects"
            className={
              selectedTab.includes("projects")
                ? "nav-box selected-box"
                : "nav-box"
            }
            title="Projects"
            onMouseEnter={() => setHoveredLink("projects")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <div
              className={
                selectedTab.includes("projects")
                  ? "selected"
                  : hoveredLink === "projects"
                    ? "nav-link-hover"
                    : "nav-link"
              }
            ></div>
            {/* {(selectedTab.includes("projects") ||
              hoveredLink === "projects") && (
              <div className="nav-title">PROJECTS</div>
            )} */}
            <div className="nav-title">
              {" "}
              <FontAwesomeIcon icon={faLayerGroup} />
              <div className="nav-header">PROJECTS</div>
            </div>
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            className={
              selectedTab.includes("contact")
                ? "nav-box selected-box"
                : "nav-box"
            }
            title="Contact"
            onMouseEnter={() => setHoveredLink("contact")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <div
              className={
                selectedTab.includes("contact")
                  ? "selected"
                  : hoveredLink === "contact"
                    ? "nav-link-hover"
                    : "nav-link"
              }
            ></div>
            {/* {(selectedTab.includes("contact") || hoveredLink === "contact") && (
              <div className="nav-title">CONTACT</div>
            )} */}
            <div className="nav-title">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="nav-header">CONTACT</div>
            </div>
          </Link>
          <div className="resume">
            <form method="get" action={resume} target="_blank">
              <button className="resume-button">
                <span className="resume-text">DOWNLOAD RESUME</span>
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="nav-burger">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            className={isBurgerOpen ? "burger-open" : "burger-close"}
          />

          {isBurgerOpen && (
            <div className="nav-burger-menu">
              <Link
                to="/home"
                className={
                  selectedTab.includes("home")
                    ? "nav-box selected-box"
                    : "nav-box"
                }
              >
                <div
                  className={
                    selectedTab.includes("home") ? "selected" : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faHouse} />
                </div>
                {selectedTab.includes("home") && (
                  <div className="nav-title">HOME</div>
                )}
              </Link>

              <Link
                to="/technologies"
                className={
                  selectedTab.includes("technologies")
                    ? "nav-box selected-box"
                    : "nav-box"
                }
              >
                <div
                  className={
                    selectedTab.includes("technologies")
                      ? "selected"
                      : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faCode} />
                </div>
                {selectedTab.includes("technologies") && (
                  <div className="nav-title">TECHNOLOGIES</div>
                )}
              </Link>

              <Link
                to="/projects"
                className={
                  selectedTab.includes("projects")
                    ? "nav-box selected-box"
                    : "nav-box"
                }
              >
                <div
                  className={
                    selectedTab.includes("projects") ? "selected" : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faLayerGroup} />
                </div>
                {selectedTab.includes("projects") && (
                  <div className="nav-title">PROJECTS</div>
                )}
              </Link>

              <Link
                to="/contact"
                className={
                  selectedTab.includes("contact")
                    ? "nav-box selected-box"
                    : "nav-box"
                }
              >
                <div
                  className={
                    selectedTab.includes("contact") ? "selected" : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                {selectedTab.includes("contact") && (
                  <div className="nav-title">CONTACT</div>
                )}
              </Link>
            </div>
          )}
          <div className="resume">
            <form method="get" action={resume} target="_blank">
              <button className="resume-button">
                <span className="resume-text">DOWNLOAD RESUME</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </NavBarWrap>
  );
};

export default NavBar;
