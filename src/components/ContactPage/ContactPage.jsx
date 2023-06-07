import React, { useEffect, useState } from "react";
import { ContactPageWrap } from "./Contact.Page";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = ({ toggleHeader }) => {
  useEffect(() => {
    AOS.init();
  }, [toggleHeader]);

  const [fontSize, setFontSize] = useState(20);

  useEffect(() => {
    function handleResizeHeader() {
      const width = window.innerWidth;
      const newFontSize = width / 20;

      setFontSize(newFontSize);
    }

    window.addEventListener("resize", handleResizeHeader);
    handleResizeHeader();

    return () => window.removeEventListener("resize", handleResizeHeader);
  }, []);

  return (
    <ContactPageWrap>
      {toggleHeader ? (
        <div className="ContactPage-rebel" data-aos="fade-up">
          <div className="header">
            <h1 style={{ fontSize: `${fontSize}px` }}>CONTACT</h1>
            <h6>you're still a rebel...</h6>
            <p className="description">Feel free to contact me!</p>
          </div>
          <form
            action="https://formspree.io/mikebkim@gmail.com"
            method="POST"
            target="_blank"
          >
            <div className="contact-form">
              <span className="form-inputs">NAME</span>
              <input
                className="contact-name"
                placeholder=""
                type="text"
                name="name"
              />
              <span className="form-inputs">EMAIL</span>
              <input
                className="contact-email"
                placeholder=""
                type="email"
                name="email"
                required
              />
              <span className="form-inputs">SUBJECT</span>
              <input
                className="contact-subject"
                placeholder=""
                type="text"
                name="subject"
                required
              />
              <span className="form-inputs">MESSAGE</span>
              <textarea
                className="contact-message"
                placeholder=""
                type="text"
                name="message"
              ></textarea>
              <input
                className="contact-button"
                type="submit"
                value="SEND MESSAGE"
              />
            </div>
          </form>
        </div>
      ) : (
        <div className="ContactPage" data-aos="fade-up">
          <div className="header">
            <h1 style={{ fontSize: `${fontSize}px` }}>CONTACT</h1>
            <p className="description">Feel free to contact me!</p>
          </div>
          <form
            action="https://formspree.io/mikebkim@gmail.com"
            method="POST"
            target="_blank"
          >
            <div className="contact-form">
              <span className="form-inputs">NAME</span>
              <input
                className="contact-name"
                placeholder=""
                type="text"
                name="name"
              />
              <span className="form-inputs">EMAIL</span>
              <input
                className="contact-email"
                placeholder=""
                type="email"
                name="email"
                required
              />
              <span className="form-inputs">SUBJECT</span>
              <input
                className="contact-subject"
                placeholder=""
                type="text"
                name="subject"
                required
              />
              <span className="form-inputs">MESSAGE</span>
              <textarea
                className="contact-message"
                placeholder=""
                type="text"
                name="message"
              ></textarea>
              <input
                className="contact-button"
                type="submit"
                value="SEND MESSAGE"
              />
            </div>
          </form>
        </div>
      )}
    </ContactPageWrap>
  );
};

export default ContactPage;
