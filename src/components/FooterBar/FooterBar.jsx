import React from "react";
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
  return (
    <FooterWrap>
      <div className="Footer">
        <div class="social-links">
          <div className="social-icon">
            <a
              href="https://github.com/mikebkim"
              className="git"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/mikebkim/"
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.instagram.com/mikebkim/"
              className="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://soundcloud.com/mikekim-1"
              className="soundcloud"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faSoundcloud} />
            </a>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;
