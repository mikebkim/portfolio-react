import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarWrap } from "./Nav.Bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faLayerGroup,
  faPhone,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = ({ toggleHeader }) => {
  const [selectedTab, setSelectedTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSelectedTab(JSON.stringify(location));
  }, [location]);

  useEffect(() => {
    AOS.init();
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <NavBarWrap>
      {windowWidth >= 768 ? (
        <div className="NavBar">
          <Link
            to="/home"
            className={
              selectedTab.includes("home")
                ? toggleHeader
                  ? `${"nav-box-rebel selected-box"}`
                  : `${"nav-box selected-box"}`
                : toggleHeader
                ? `${"nav-box-rebel"}`
                : `${"nav-box"}`
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
            >
              <FontAwesomeIcon icon={faHome} />
            </div>
            {selectedTab.includes("home") ? (
              <div className="nav-title">HOME</div>
            ) : hoveredLink === "home" ? (
              <div className="nav-title-hover">HOME</div>
            ) : (
              ""
            )}
          </Link>
          <div className={toggleHeader ? "nav-line-rebel" : "nav-line"}></div>
          <Link
            to="/technologies"
            className={
              selectedTab.includes("technologies")
                ? toggleHeader
                  ? `${"nav-box-rebel selected-box"}`
                  : `${"nav-box selected-box"}`
                : toggleHeader
                ? `${"nav-box-rebel"}`
                : `${"nav-box"}`
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
            >
              <FontAwesomeIcon icon={faCode} />
            </div>
            {selectedTab.includes("technologies") ? (
              <div className="nav-title">TECHNOLOGIES</div>
            ) : hoveredLink === "technologies" ? (
              <div className="nav-title">TECHNOLOGIES</div>
            ) : (
              ""
            )}
          </Link>
          <div className={toggleHeader ? "nav-line-rebel" : "nav-line"}></div>
          <Link
            to="/projects"
            className={
              selectedTab.includes("projects")
                ? toggleHeader
                  ? `${"nav-box-rebel selected-box"}`
                  : `${"nav-box selected-box"}`
                : toggleHeader
                ? `${"nav-box-rebel"}`
                : `${"nav-box"}`
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
            >
              <FontAwesomeIcon icon={faLayerGroup} />
            </div>
            {selectedTab.includes("projects") ? (
              <div className="nav-title">PROJECTS</div>
            ) : hoveredLink === "projects" ? (
              <div className="nav-title">PROJECTS</div>
            ) : (
              ""
            )}
          </Link>
          <div className={toggleHeader ? "nav-line-rebel" : "nav-line"}></div>
          <Link
            to="/contact"
            className={
              selectedTab.includes("contact")
                ? toggleHeader
                  ? `${"nav-box-rebel selected-box"}`
                  : `${"nav-box selected-box"}`
                : toggleHeader
                ? `${"nav-box-rebel"}`
                : `${"nav-box"}`
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
            >
              <FontAwesomeIcon icon={faPhone} />
            </div>
            {selectedTab.includes("contact") ? (
              <div className="nav-title">CONTACT</div>
            ) : hoveredLink === "contact" ? (
              <div className="nav-title">CONTACT</div>
            ) : (
              ""
            )}
          </Link>
        </div>
      ) : (
        <div className="nav-burger">
          {isBurgerOpen ? (
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setIsBurgerOpen(!isBurgerOpen)}
              className={toggleHeader ? "burger-open-rebel" : "burger-open"}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setIsBurgerOpen(!isBurgerOpen)}
              className={toggleHeader ? "burger-close-rebel" : "burger-close"}
            />
          )}
          {isBurgerOpen ? (
            <div className="nav-burger-menu">
              <Link
                to="/home"
                className={
                  selectedTab.includes("home")
                    ? toggleHeader
                      ? `${"nav-box-rebel selected-box"}`
                      : `${"nav-box selected-box"}`
                    : toggleHeader
                    ? `${"nav-box-rebel"}`
                    : `${"nav-box"}`
                }
                title="Home"
              >
                <div
                  className={
                    selectedTab.includes("home") ? "selected" : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faHome} />
                </div>
                {selectedTab.includes("home") ? (
                  <div className="nav-title">HOME</div>
                ) : (
                  ""
                )}
              </Link>
              <div
                className={toggleHeader ? "nav-line-rebel" : "nav-line"}
              ></div>
              <Link
                to="/technologies"
                className={
                  selectedTab.includes("technologies")
                    ? toggleHeader
                      ? `${"nav-box-rebel selected-box"}`
                      : `${"nav-box selected-box"}`
                    : toggleHeader
                    ? `${"nav-box-rebel"}`
                    : `${"nav-box"}`
                }
                title="Technologies"
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
                {selectedTab.includes("technologies") ? (
                  <div className="nav-title">TECHNOLOGIES</div>
                ) : (
                  ""
                )}
              </Link>
              <div
                className={toggleHeader ? "nav-line-rebel" : "nav-line"}
              ></div>
              <Link
                to="/projects"
                className={
                  selectedTab.includes("projects")
                    ? toggleHeader
                      ? `${"nav-box-rebel selected-box"}`
                      : `${"nav-box selected-box"}`
                    : toggleHeader
                    ? `${"nav-box-rebel"}`
                    : `${"nav-box"}`
                }
                title="Projects"
              >
                <div
                  className={
                    selectedTab.includes("projects") ? "selected" : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faLayerGroup} />
                </div>
                {selectedTab.includes("projects") ? (
                  <div className="nav-title">PROJECTS</div>
                ) : (
                  ""
                )}
              </Link>
              <div
                className={toggleHeader ? "nav-line-rebel" : "nav-line"}
              ></div>
              <Link
                to="/contact"
                className={
                  selectedTab.includes("contact")
                    ? toggleHeader
                      ? `${"nav-box-rebel selected-box"}`
                      : `${"nav-box selected-box"}`
                    : toggleHeader
                    ? `${"nav-box-rebel"}`
                    : `${"nav-box"}`
                }
                title="Contact"
              >
                <div
                  className={
                    selectedTab.includes("contact") ? "selected" : "nav-link"
                  }
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
          ) : null}
        </div>
      )}
    </NavBarWrap>
  );
};

export default NavBar;
