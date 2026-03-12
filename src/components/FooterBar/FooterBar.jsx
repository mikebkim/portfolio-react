import React, { useState } from "react";
import { FooterWrap } from "./Footer.Bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  // faInstagram,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import "aos/dist/aos.css";

const Footer = ({ screenWidth }) => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    {
      name: "GitHub",
      id: "git",
      url: "https://github.com/mikebkim",
      fontId: faGithub,
      backgroundColor:
        "linear-gradient(to right, transparent 0%, darkgrey 50%)",
      color: "transparent",
      marginLeft: "4.5rem",
    },
    {
      name: "LinkedIn",
      id: "linkedin",
      url: "https://www.linkedin.com/in/mikebkim/",
      fontId: faLinkedin,
      backgroundColor:
        "linear-gradient(to right, transparent 0%, rgb(8, 91, 187) 50%)",
      color: "transparent",
      marginLeft: "5rem",
    },
    // {
    //   name: "Instagram",
    //   id: "instagram",
    //   url: "https://www.instagram.com/mikebkim/",
    //   fontId: faInstagram,
    //   backgroundColor:
    //     "linear-gradient(to right, transparent 0%, rgb(255, 0, 95) 50%)",
    //   color: "transparent",
    //   marginLeft: "5.5rem",
    // },
    {
      name: "Soundcloud",
      id: "soundcloud",
      url: "https://soundcloud.com/mikekim-1",
      fontId: faSoundcloud,
      backgroundColor:
        "linear-gradient(to right, transparent 0%, rgb(255, 101, 0) 50%)",
      color: "transparent",
      marginLeft: "7rem",
    },
  ];

  return (
    <FooterWrap hoveredSocial={hoveredSocial}>
      <div className="Footer">
        <div className="social-flex"></div>
        {socialLinks.map((link) => (
          <div className="social-links" key={link.id}>
            <div className="social-icon">
              <a
                href={link.url}
                className={link.id}
                target="_blank"
                rel="noreferrer"
                title={link.id}
                onMouseEnter={() => setHoveredSocial(link.id)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <div
                  className="social-hover"
                  style={{
                    opacity: hoveredSocial === link.id ? 1 : 0,
                    transform:
                      hoveredSocial === link.id
                        ? "translateX(0)"
                        : "translateX(-4rem)",
                    background:
                      hoveredSocial === link.id && screenWidth >= 768
                        ? link.backgroundColor
                        : "transparent",
                    color: link.color,
                    marginLeft: link.marginLeft || "0px",
                  }}
                >
                  {screenWidth >= 768 ? link.name : ""}
                </div>
                <FontAwesomeIcon icon={link.fontId} />
              </a>
            </div>
            {/* <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/mikebkim/"
                className="linkedin"
                target="_blank"
                rel="noreferrer"
                title="linkedin"
                onMouseEnter={() => setHoveredSocial("linkedin")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                {hoveredSocial === "linkedin" ? (
                  <div className="social-hover">Linkedin</div>
                ) : (
                  ""
                )}
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://www.instagram.com/mikebkim/"
                className="instagram"
                target="_blank"
                rel="noreferrer"
                title="instagram"
                onMouseEnter={() => setHoveredSocial("instagram")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                {hoveredSocial === "instagram" ? (
                  <div className="social-hover">Instagram</div>
                ) : (
                  ""
                )}
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://soundcloud.com/mikekim-1"
                className="soundcloud"
                target="_blank"
                rel="noreferrer"
                title="soundcloud"
                onMouseEnter={() => setHoveredSocial("soundcloud")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                {hoveredSocial === "soundcloud" ? (
                  <div className="social-hover">Soundcloud</div>
                ) : (
                  ""
                )}
                <FontAwesomeIcon icon={faSoundcloud} />
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </FooterWrap>
  );
};

export default Footer;
