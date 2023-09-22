import React, { useState } from "react";
import { FooterWrap } from "./Footer.Bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import "aos/dist/aos.css";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    {
      name: "GitHub",
      id: "git",
      url: "https://github.com/mikebkim",
      fontId: faGithub,
      backgroundColor: "linear-gradient(to right, transparent 50%, darkgrey",
    },
    {
      name: "LinkedIn",
      id: "linkedin",
      url: "https://www.linkedin.com/in/mikebkim/",
      fontId: faLinkedin,
      backgroundColor:
        "linear-gradient(to right, transparent 50%, rgb(8, 91, 187) 100%)",
    },
    {
      name: "Instagram",
      id: "instagram",
      url: "https://www.instagram.com/mikebkim/",
      fontId: faInstagram,
      backgroundColor:
        "linear-gradient(to right, transparent 50%, rgb(255, 0, 95)",
    },
    {
      name: "Soundcloud",
      id: "soundcloud",
      url: "https://soundcloud.com/mikekim-1",
      fontId: faSoundcloud,
      backgroundColor:
        "linear-gradient(to right, transparent 50%, rgb(255, 101, 0)",
    },
  ];

  return (
    <FooterWrap hoveredSocial={hoveredSocial}>
      <div className="Footer">
        <div className="social-flex"></div>
        {socialLinks.map((link) => (
          <div class="social-links" linkId={link.id}>
            <div className="social-icon">
              <a
                href={link.url}
                className={link.id}
                target="_blank"
                rel="noreferrer"
                title={link.id}
                onMouseEnter={() => setHoveredSocial(link.id)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{
                  background:
                    hoveredSocial === link.id
                      ? `${link.backgroundColor}`
                      : "linear-gradient(to right, transparent 65%, rgb(40, 40, 40) 100%)",
                }}
              >
                {hoveredSocial === link.id ? (
                  <div className="social-hover">{link.name}</div>
                ) : (
                  ""
                )}
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
