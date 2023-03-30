import React, { useEffect } from 'react'
import Styled_ContactPage from "./Styled_ContactPage";
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactPage = ({ }) => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <Styled_ContactPage>
            <div className="ContactPage">
                <div className="header">
                    <h1>CONTACT</h1>
                    <hr />
                    <p className="description">
                        Feel free to contact me!
                    </p>
                </div>
                <form action="https://formspree.io/mikebkim@gmail.com" method="POST" target="_blank">
                    <div className="contact-form">
                        <span className="form-inputs" data-aos="fade-left">NAME</span>
                        <input className="contact-name" placeholder="" type="text" name="name" />
                        <span className="form-inputs" data-aos="fade-left">EMAIL</span>
                        <input className="contact-email" placeholder="" type="text" name="subject" required />
                        <span className="form-inputs" data-aos="fade-left">SUBJECT</span>
                        <input className="contact-email" placeholder="" type="email" name="_replyto" required />
                        <span className="form-inputs" data-aos="fade-left">MESSAGE</span>
                        <textarea
                            className="contact-message"
                            placeholder=""
                            type="text"
                            name="message"
                        >
                        </textarea>
                        <input className="contact-button" type="submit" value="SEND MESSAGE" />
                    </div>
                </form>
            </div>
        </Styled_ContactPage>
    )
}

export default ContactPage