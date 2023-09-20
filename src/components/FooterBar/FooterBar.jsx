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

  return (
    <FooterWrap hoveredSocial={hoveredSocial}>
      <div className="Footer">
        <div className="social-flex"></div>
        <div class="social-links">
          <div className="social-icon">
            <a
              href="https://github.com/mikebkim"
              className="git"
              target="_blank"
              rel="noreferrer"
              title="git"
              onMouseEnter={() => setHoveredSocial("git")}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              {hoveredSocial === "git" ? (
                <div className="social-hover">GitHub</div>
              ) : (
                ""
              )}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="social-icon">
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
          </div>
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;
